import { OverlayLayoutStyleManager } from '$stylist/layout/class/style-manager/overlay-layout';
import type { OverlayLayoutAlign } from '$stylist/layout/class/style-manager/overlay-layout';
import type { OverlayLayoutProps } from '$stylist/layout/type/struct/layout-extended/overlay-layout-props';

export type { OverlayLayoutProps, OverlayLayerProps } from '$stylist/layout/type/struct/layout-extended/overlay-layout-props';

export function createOverlayLayoutState(props: OverlayLayoutProps) {
	const overlayAlign = $derived<OverlayLayoutAlign>(props.overlayAlign ?? 'fill');
	const overlayZIndex = $derived(props.overlayZIndex ?? 10);
	const overlayPointerEvents = $derived(props.overlayPointerEvents ?? false);

	const baseClass = $derived(OverlayLayoutStyleManager.getBaseClass(props.class));
	const overlayClass = $derived(
		OverlayLayoutStyleManager.getOverlayClass(overlayAlign, overlayZIndex, overlayPointerEvents)
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			base: _base,
			overlay: _overlay,
			overlays: _overlays,
			overlayAlign: _overlayAlign,
			overlayZIndex: _overlayZIndex,
			overlayPointerEvents: _overlayPointerEvents,
			...rest
		} = props;
		return rest;
	});

	return {
		get overlayAlign() { return overlayAlign; },
		get overlayZIndex() { return overlayZIndex; },
		get overlayPointerEvents() { return overlayPointerEvents; },
		get baseClass() { return baseClass; },
		get overlayClass() { return overlayClass; },
		get restProps() { return restProps; }
	};
}

export default createOverlayLayoutState;
