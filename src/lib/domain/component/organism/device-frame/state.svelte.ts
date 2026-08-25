import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeDeviceFrame } from '$stylist/domain/interface/recipe/device-frame';
import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export function createDeviceFrameState(props: RecipeDeviceFrame & HTMLAttributes<HTMLDivElement>) {
	const device = $derived(props.device ?? 'desktop');
	const orientation = $derived(
		props.orientation ?? (device === 'desktop' ? TOKEN_ORIENTATION[0] : TOKEN_ORIENTATION[1])
	);
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

	const spec = $derived.by(() => {
		const baseSpec = deviceSpecs[device];
		const isHorizontal = orientation === TOKEN_ORIENTATION[0];
		const width = isHorizontal
			? Math.max(baseSpec.width, baseSpec.height)
			: Math.min(baseSpec.width, baseSpec.height);
		const height = isHorizontal
			? Math.min(baseSpec.width, baseSpec.height)
			: Math.max(baseSpec.width, baseSpec.height);

		return {
			...baseSpec,
			width,
			height
		};
	});
	const showFrame = $derived(device !== 'fullscreen');

	return {
		get device() {
			return device;
		},
		get orientation() {
			return orientation;
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
