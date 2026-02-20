import type { ZoomControlsProps } from '../props/zoom-controls';

export const zoomControlsPresets: Record<string, Partial<ZoomControlsProps>> = {
  default: {
    initialValue: 100,
    minZoom: 50,
    maxZoom: 200,
    step: 10,
    showPercentage: true
  },
  smallStep: {
    initialValue: 100,
    minZoom: 50,
    maxZoom: 200,
    step: 5,
    showPercentage: true
  },
  wideRange: {
    initialValue: 100,
    minZoom: 25,
    maxZoom: 400,
    step: 25,
    showPercentage: true
  }
};