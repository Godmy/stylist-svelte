// Heatmap cell type
export type IHeatmapCell = {
  row: number;
  column: number;
  value: number;
  label?: string;
};

/** Matrix/grid representation of heatmap cells in raw data form. */
export type HeatmapCellGrid = IHeatmapCell[][];
