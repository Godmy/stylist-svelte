import type { BurnDownPoint } from '$stylist/management/interface/struct/burn-down-point';

export interface BurnDownData {
  sprintStart: Date;
  sprintEnd: Date;
  points: BurnDownPoint[];
}
