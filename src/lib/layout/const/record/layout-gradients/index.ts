import { GRADIENT_CUSTOM } from '$stylist/layout/const/map/gradient-custom';
import { GRADIENT_LINEAR } from '$stylist/layout/const/map/gradient-linear';
import { GRADIENT_RADIAL } from '$stylist/layout/const/map/gradient-radial';

export const LAYOUT_GRADIENTS = {
	types: GRADIENT_CUSTOM,
	directional: GRADIENT_LINEAR,
	radial: GRADIENT_RADIAL
} as const;
