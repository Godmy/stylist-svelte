import type { RecipeDeviceFrame } from '$stylist/playground/interface/recipe/device-frame';
import type { PlaygroundCanvasShellViewportSize as ShellCanvasViewportSize } from '$stylist/playground/type/alias/playground-canvas-shell-viewport-size';
export function createDeviceFrameState(props: RecipeDeviceFrame) {
	const device = props.device ?? 'desktop';
	const children = $derived(props.children);

	const deviceSpecs: Record<
		ShellCanvasViewportSize,
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

