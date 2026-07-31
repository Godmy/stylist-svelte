import type { RecipeDeviceFrame } from '$stylist/domain/interface/recipe/device-frame';
import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export function createDeviceFrameState(props: RecipeDeviceFrame) {
	const device = $derived(props.device ?? 'desktop');
	const children = $derived(props.children);

	const deviceSpecs: Record<
		DeviceFrameViewport,
		{ width: number; height: number; name: string; color: string }
	> = {
		mobile: { width: 375, height: 667, name: 'iPhone SE', color: 'pdf-color--mobile' },
		tablet: { width: 768, height: 1024, name: 'iPad', color: 'pdf-color--tablet' },
		desktop: { width: 1440, height: 900, name: 'Desktop', color: 'pdf-color--desktop' },
		fullscreen: { width: 0, height: 0, name: 'Fullscreen', color: '' }
	};

	const spec = $derived(deviceSpecs[device]);
	const showFrame = $derived(device !== 'fullscreen');

	return {
		get device() {
			return device;
		},
		get children() {
			return children;
		},
		get spec() {
			return spec;
		},
		get showFrame() {
			return showFrame;
		}
	};
}

