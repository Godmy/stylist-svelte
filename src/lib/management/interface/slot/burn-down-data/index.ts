import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { SlotBurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';

export interface SlotBurnDownData {
  sprintStart: Date;
  sprintEnd: Date;
  points: SlotBurnDownPoint[];
}
