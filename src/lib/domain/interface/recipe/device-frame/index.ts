import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export interface RecipeDeviceFrame
	extends ComputeIntersectAll<[SlotThemeBorder, SlotTypography, SlotChildren]> {
	device?: DeviceFrameViewport;
	orientation?: 'portrait' | 'landscape';
	class?: string;
}

