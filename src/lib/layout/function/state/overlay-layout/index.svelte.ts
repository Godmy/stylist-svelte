import type { OverlayLayoutAlign } from '$stylist/layout/type/alias/overlay-layout-align';
import type { OverlayLayoutProps } from '$stylist/layout/type/struct/layout-extended/overlay-layout-props/overlaylayout-props';

export function createOverlayLayoutState(props: OverlayLayoutProps) {
	const overlayAlign = $derived<OverlayLayoutAlign>(props.overlayAlign ?? 'fill');
	const overlayZIndex = $derived(props.overlayZIndex ?? 10);
	const overlayPointerEvents = $derived(props.overlayPointerEvents ?? false);

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
		get overlayAlign() {
			return overlayAlign;
		},
		get overlayZIndex() {
			return overlayZIndex;
		},
		get overlayPointerEvents() {
			return overlayPointerEvents;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createOverlayLayoutState;
