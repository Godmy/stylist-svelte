// RangeFilter type
export type RangeFilter = {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value?: number;
  unit?: string;
};
