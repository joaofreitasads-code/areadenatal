import React, { useEffect, useRef, useState } from 'react';

interface ThreeModelViewerProps {
  modelTitle: string;
  category: string;
  initialColor?: string;
}

const FILAMENT_COLORS = [
  { name: 'Dourado Silk', hex: '#D4AF37', ambient: '#5A4610' },
  { name: 'Branco Pérola', hex: '#EAEAEA', ambient: '#3A3A3A' },
  { name: 'Vermelho Rubi', hex: '#C41E3A', ambient: '#4A0812' },
  { name: 'Bronze Envelhecido', hex: '#CD7F32', ambient: '#3A200B' },
  { name: 'Verde Esmeralda', hex: '#10B981', ambient: '#04281B' },
];

export const ThreeModelViewer: React.FC<ThreeModelViewerProps> = ({
  category,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState(FILAMENT_COLORS[0]);
  const [zoom, setZoom] = useState<number>(1.0);

  // Rotation angles in radians
  const rotXRef = useRef<number>(0.3);
  const rotYRef = useRef<number>(0.4);
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Generate 3D vertices and triangular faces based on model category
    const geometry = createProceduralGeometry(category);

    const render = () => {
      if (autoRotate && !isDraggingRef.current) {
        rotYRef.current += 0.012;
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Gradient background in dark emerald theme
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 20,
        width / 2, height / 2, width / 2
      );
      bgGrad.addColorStop(0, '#062B1D');
      bgGrad.addColorStop(1, '#020E09');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle bed grid
      drawGrid(ctx, width, height, rotXRef.current, rotYRef.current, zoom);

      // Light direction vector (normalized)
      const lightDir = normalize([0.5, 0.8, -0.6]);

      // Project vertices to 2D
      const rx = rotXRef.current;
      const ry = rotYRef.current;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      const transformedVertices = geometry.vertices.map((v) => {
        // Rotate Y
        let x = v[0] * cosY + v[2] * sinY;
        let y = v[1];
        let z = -v[0] * sinY + v[2] * cosY;

        // Rotate X
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        x *= zoom;
        y = y2 * zoom;
        z = z2 * zoom;

        // Perspective projection
        const fov = 350;
        const cameraZ = 280;
        const pz = cameraZ + z;
        const scale = pz > 0 ? fov / pz : 1;

        return {
          sx: width / 2 + x * scale,
          sy: height / 2 - y * scale,
          z,
          x,
          y,
        };
      });

      // Sort faces back to front (Painter's algorithm)
      const sortedFaces = geometry.faces.map((f) => {
        const v1 = transformedVertices[f[0]];
        const v2 = transformedVertices[f[1]];
        const v3 = transformedVertices[f[2]];
        const avgZ = (v1.z + v2.z + v3.z) / 3;

        // Face normal for shading
        const ax = v2.x - v1.x;
        const ay = v2.y - v1.y;
        const az = v2.z - v1.z;
        const bx = v3.x - v1.x;
        const by = v3.y - v1.y;
        const bz = v3.z - v1.z;

        const nx = ay * bz - az * by;
        const ny = az * bx - ax * bz;
        const nz = ax * by - ay * bx;
        const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        const norm = [nx / len, ny / len, nz / len];

        return { face: f, avgZ, norm, v1, v2, v3 };
      });

      sortedFaces.sort((a, b) => a.avgZ - b.avgZ);

      // Render faces
      for (const item of sortedFaces) {
        const { v1, v2, v3, norm } = item;

        // Compute diffuse light dot product
        const dot = Math.max(0.15, norm[0] * lightDir[0] + norm[1] * lightDir[1] + norm[2] * lightDir[2]);

        ctx.beginPath();
        ctx.moveTo(v1.sx, v1.sy);
        ctx.lineTo(v2.sx, v2.sy);
        ctx.lineTo(v3.sx, v3.sy);
        ctx.closePath();

        if (wireframe) {
          ctx.strokeStyle = selectedColor.hex;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          // Shaded color with specular highlight
          ctx.fillStyle = shadeColor(selectedColor.hex, dot);
          ctx.fill();
          ctx.strokeStyle = 'rgba(0,0,0,0.15)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [category, wireframe, autoRotate, selectedColor, zoom]);

  // Handle drag rotate
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    rotYRef.current += dx * 0.01;
    rotXRef.current += dy * 0.01;
    rotXRef.current = Math.max(-1.4, Math.min(1.4, rotXRef.current));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMousePosRef.current.x;
    const dy = e.touches[0].clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    rotYRef.current += dx * 0.012;
    rotXRef.current += dy * 0.012;
    rotXRef.current = Math.max(-1.4, Math.min(1.4, rotXRef.current));
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-[#020B07] rounded-2xl overflow-hidden border border-emerald-900/60 shadow-inner">
      {/* Top Floating Controls */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex items-center gap-1.5 bg-[#03150E]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30 text-xs text-white pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-emerald-300">Visualizador 3D Interativo</span>
        </div>

        <div className="flex items-center gap-1 bg-[#03150E]/85 backdrop-blur-md p-1 rounded-xl border border-emerald-500/30 pointer-events-auto">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
              autoRotate ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
            }`}
            title="Pausar / Retomar Rotação Automática"
          >
            {autoRotate ? 'Girando' : 'Pausado'}
          </button>
          <button
            type="button"
            onClick={() => setWireframe(!wireframe)}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
              wireframe ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
            }`}
            title="Alternar Modo Sólido / Wireframe (Malha)"
          >
            {wireframe ? 'Malha' : 'Sólido'}
          </button>
        </div>
      </div>

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        width={480}
        height={340}
        className="w-full h-64 sm:h-80 cursor-grab active:cursor-grabbing block"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Bottom Filament Color & Zoom Bar */}
      <div className="p-3 bg-[#03150E] border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-[11px] font-medium">Cor do Filamento:</span>
          <div className="flex items-center gap-1.5">
            {FILAMENT_COLORS.map((col) => (
              <button
                key={col.name}
                type="button"
                onClick={() => setSelectedColor(col)}
                title={col.name}
                className={`w-5 h-5 rounded-full border transition-transform cursor-pointer ${
                  selectedColor.name === col.name
                    ? 'scale-125 border-amber-300 ring-2 ring-amber-400/40'
                    : 'border-slate-600 hover:scale-110'
                }`}
                style={{ backgroundColor: col.hex }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.15))}
            className="w-7 h-7 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/30 text-white font-bold flex items-center justify-center cursor-pointer"
            title="Diminuir Zoom"
          >
            -
          </button>
          <span className="text-[11px] text-slate-300 font-mono tabular-nums">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.8, z + 0.15))}
            className="w-7 h-7 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/30 text-white font-bold flex items-center justify-center cursor-pointer"
            title="Aumentar Zoom"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              rotXRef.current = 0.3;
              rotYRef.current = 0.4;
              setZoom(1.0);
            }}
            className="ml-2 px-2 py-1 text-[11px] bg-[#051C15] hover:bg-[#08291F] text-slate-300 hover:text-white rounded-lg border border-emerald-900/60 transition-colors"
          >
            Resetar Ângulo
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- Helpers & Geometry Generators --- */

function normalize(v: [number, number, number]): [number, number, number] {
  const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) || 1;
  return [v[0] / len, v[1] / len, v[2] / len];
}

function shadeColor(hex: string, intensity: number): string {
  // Convert hex to rgb
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const factor = Math.min(1.3, Math.max(0.2, intensity));
  const nr = Math.min(255, Math.floor(r * factor));
  const ng = Math.min(255, Math.floor(g * factor));
  const nb = Math.min(255, Math.floor(b * factor));

  return `rgb(${nr}, ${ng}, ${nb})`;
}

function drawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  rx: number,
  ry: number,
  zoom: number
) {
  ctx.save();
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
  ctx.lineWidth = 1;

  const size = 110 * zoom;
  const step = 22 * zoom;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);

  const project = (x: number, y: number, z: number) => {
    let px = x * cosY + z * sinY;
    let py = y;
    let pz = -x * sinY + z * cosY;

    const py2 = py * cosX - pz * sinX;
    const pz2 = py * sinX + pz * cosX;
    const fov = 350;
    const cz = 280 + pz2;
    const scale = cz > 0 ? fov / cz : 1;
    return {
      sx: width / 2 + px * scale,
      sy: height / 2 - py2 * scale,
    };
  };

  const baseY = -60;
  for (let i = -size; i <= size; i += step) {
    const p1 = project(i, baseY, -size);
    const p2 = project(i, baseY, size);
    ctx.beginPath();
    ctx.moveTo(p1.sx, p1.sy);
    ctx.lineTo(p2.sx, p2.sy);
    ctx.stroke();

    const p3 = project(-size, baseY, i);
    const p4 = project(size, baseY, i);
    ctx.beginPath();
    ctx.moveTo(p3.sx, p3.sy);
    ctx.lineTo(p4.sx, p4.sy);
    ctx.stroke();
  }
  ctx.restore();
}

interface ProceduralGeom {
  vertices: [number, number, number][];
  faces: [number, number, number][];
}

function createProceduralGeometry(category: string): ProceduralGeom {
  if (category.includes('Presépio') || category.includes('Sacro')) {
    return createNativityArch();
  }
  if (category.includes('Luminária') || category.includes('Cubo')) {
    return createLanternCube();
  }
  if (category.includes('Árvore') || category.includes('Enfeite')) {
    return createStarOrnament();
  }
  // Default: tiered geometric Christmas Tree
  return createChristmasTree();
}

function createChristmasTree(): ProceduralGeom {
  const vertices: [number, number, number][] = [];
  const faces: [number, number, number][] = [];

  const segments = 10;
  const tiers = [
    { baseR: 50, topR: 28, y0: -50, y1: -15 },
    { baseR: 38, topR: 16, y0: -20, y1: 20 },
    { baseR: 24, topR: 0, y0: 15, y1: 60 },
  ];

  for (const tier of tiers) {
    const startIdx = vertices.length;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * tier.baseR;
      const z = Math.sin(angle) * tier.baseR;
      vertices.push([x, tier.y0, z]);
    }

    if (tier.topR > 0) {
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * tier.topR;
        const z = Math.sin(angle) * tier.topR;
        vertices.push([x, tier.y1, z]);
      }
      for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const b1 = startIdx + i;
        const b2 = startIdx + next;
        const t1 = startIdx + segments + i;
        const t2 = startIdx + segments + next;
        faces.push([b1, b2, t1]);
        faces.push([b2, t2, t1]);
      }
    } else {
      const apexIdx = vertices.length;
      vertices.push([0, tier.y1, 0]);
      for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        faces.push([startIdx + i, startIdx + next, apexIdx]);
      }
    }
  }

  // Star on top
  const starApex = vertices.length;
  vertices.push([0, 75, 0]);
  vertices.push([-12, 60, 0]);
  vertices.push([12, 60, 0]);
  faces.push([starApex, starApex + 1, starApex + 2]);

  return { vertices, faces };
}

function createStarOrnament(): ProceduralGeom {
  const vertices: [number, number, number][] = [];
  const faces: [number, number, number][] = [];

  const points = 5;
  const outerR = 55;
  const innerR = 25;
  const depth = 16;

  // Front center apex
  const fCenter = 0;
  vertices.push([0, 0, depth]);
  // Back center apex
  const bCenter = 1;
  vertices.push([0, 0, -depth]);

  const starRingStart = 2;
  for (let i = 0; i < points * 2; i++) {
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    vertices.push([Math.cos(angle) * r, Math.sin(angle) * r, 0]);
  }

  const ringCount = points * 2;
  for (let i = 0; i < ringCount; i++) {
    const next = (i + 1) % ringCount;
    faces.push([fCenter, starRingStart + i, starRingStart + next]);
    faces.push([bCenter, starRingStart + next, starRingStart + i]);
  }

  return { vertices, faces };
}

function createNativityArch(): ProceduralGeom {
  const vertices: [number, number, number][] = [];
  const faces: [number, number, number][] = [];

  // Pedestal base
  const bw = 55;
  const bh = 15;
  const bd = 30;

  const baseStart = vertices.length;
  vertices.push([-bw, -50, -bd]);
  vertices.push([bw, -50, -bd]);
  vertices.push([bw, -50, bd]);
  vertices.push([-bw, -50, bd]);
  vertices.push([-bw, -50 + bh, -bd]);
  vertices.push([bw, -50 + bh, -bd]);
  vertices.push([bw, -50 + bh, bd]);
  vertices.push([-bw, -50 + bh, bd]);

  // Base faces
  faces.push([baseStart + 4, baseStart + 5, baseStart + 6]);
  faces.push([baseStart + 4, baseStart + 6, baseStart + 7]);
  faces.push([baseStart + 0, baseStart + 4, baseStart + 7]);
  faces.push([baseStart + 0, baseStart + 7, baseStart + 3]);
  faces.push([baseStart + 1, baseStart + 2, baseStart + 6]);
  faces.push([baseStart + 1, baseStart + 6, baseStart + 5]);

  // Holy Family stylized figures in the center
  const archSteps = 10;
  const archStart = vertices.length;
  for (let i = 0; i <= archSteps; i++) {
    const theta = (i / archSteps) * Math.PI;
    const x = Math.cos(theta) * 45;
    const y = -35 + Math.sin(theta) * 75;
    vertices.push([x, y, -8]);
    vertices.push([x, y, 8]);
  }

  for (let i = 0; i < archSteps; i++) {
    const p1 = archStart + i * 2;
    const p2 = archStart + i * 2 + 1;
    const p3 = archStart + (i + 1) * 2;
    const p4 = archStart + (i + 1) * 2 + 1;
    faces.push([p1, p3, p4]);
    faces.push([p1, p4, p2]);
  }

  // Bethlehem star on top
  const starStart = vertices.length;
  vertices.push([0, 50, 0]);
  vertices.push([0, 68, 0]);
  vertices.push([-10, 48, 0]);
  vertices.push([10, 48, 0]);
  faces.push([starStart, starStart + 1, starStart + 2]);
  faces.push([starStart, starStart + 3, starStart + 1]);

  return { vertices, faces };
}

function createLanternCube(): ProceduralGeom {
  const vertices: [number, number, number][] = [];
  const faces: [number, number, number][] = [];

  const s = 40;
  const h = 55;

  // 8 cube corners
  vertices.push([-s, -h / 2, -s]);
  vertices.push([s, -h / 2, -s]);
  vertices.push([s, -h / 2, s]);
  vertices.push([-s, -h / 2, s]);

  vertices.push([-s, h / 2, -s]);
  vertices.push([s, h / 2, -s]);
  vertices.push([s, h / 2, s]);
  vertices.push([-s, h / 2, s]);

  // Cube faces
  faces.push([0, 1, 2]); faces.push([0, 2, 3]); // Bottom
  faces.push([4, 6, 5]); faces.push([4, 7, 6]); // Top
  faces.push([0, 4, 5]); faces.push([0, 5, 1]); // Front
  faces.push([1, 5, 6]); faces.push([1, 6, 2]); // Right
  faces.push([2, 6, 7]); faces.push([2, 7, 3]); // Back
  faces.push([3, 7, 4]); faces.push([3, 4, 0]); // Left

  // Pyramid roof
  const apex = vertices.length;
  vertices.push([0, h / 2 + 25, 0]);
  faces.push([4, 5, apex]);
  faces.push([5, 6, apex]);
  faces.push([6, 7, apex]);
  faces.push([7, 4, apex]);

  return { vertices, faces };
}
