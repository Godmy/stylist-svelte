import type { RecipePlaygroundDeviceFrame } from '$stylist/playground/interface/recipe/playground-device-frame';
import type { PlaygroundCanvasShellViewportSize } from '$stylist/playground/type/struct/playground-canvas-shell-viewport-size';
export function createPlaygroundDeviceFrameState(props: RecipePlaygroundDeviceFrame) {
	const device = props.device ?? 'desktop';
	const children = $derived(props.children);

	const deviceSpecs: Record<
		PlaygroundCanvasShellViewportSize,
		{ width: number; height: number; name: string; color: string }
	> = {
		mobile: { width: 375, height: 667, name: 'iPhone SE', color: 'from-gray-800 to-gray-900' },
		tablet: { width: 768, height: 1024, name: 'iPad', color: 'from-gray-700 to-gray-800' },
		desktop: { width: 1440, height: 900, name: 'Desktop', color: 'from-gray-600 to-gray-700' },
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
