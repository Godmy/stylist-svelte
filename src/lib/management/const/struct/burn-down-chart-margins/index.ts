import type { BurnDownPoint } from '$stylist/management/interface/struct/burn-down-point';

export interface BurnDownChartMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const BURN_DOWN_CHART_DEFAULT_MARGINS: BurnDownChartMargins = {
  top: 20,
  right: 30,
  bottom: 50,
  left: 60
};

export default BURN_DOWN_CHART_DEFAULT_MARGINS;
