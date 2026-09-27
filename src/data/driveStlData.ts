import { StlItem } from '../types';
import { CHRISTMAS_MODELS } from './christmasData';
import { DRIVE_CATHOLIC_COLLECTION } from './driveCatholicData';

export const DRIVE_COLLECTION_100: StlItem[] = [
  ...CHRISTMAS_MODELS,
  ...DRIVE_CATHOLIC_COLLECTION
];

export const christmasCatalog: StlItem[] = CHRISTMAS_MODELS;
export const catholicCatalog: StlItem[] = DRIVE_CATHOLIC_COLLECTION;

export default DRIVE_COLLECTION_100;
