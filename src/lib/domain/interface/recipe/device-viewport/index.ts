import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export interface RecipeDeviceViewport {
	value?: DeviceFrameViewport;
	onChange?: (value: DeviceFrameViewport) => void;
	class?: string;
}
