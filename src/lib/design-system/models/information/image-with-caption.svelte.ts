import type { ImageWithCaptionProps } from '$stylist/design-system/contracts';
import { MediaStyleManager } from '$stylist/design-system/styles/information/media';


export function createImageWithCaptionState(props: ImageWithCaptionProps) {
	const rounded = $derived(props.rounded ?? false);
	const bordered = $derived(props.bordered ?? false);
	const shadow = $derived(props.shadow ?? true);
	const hostClasses = $derived(
		MediaStyleManager.getImageWithCaptionHostClasses({
			className: props.class ?? '',
			rounded,
			bordered,
			shadow
		})
	);
	const imageClasses = $derived(
		MediaStyleManager.getImageWithCaptionImageClasses({
			className: props.imageClass ?? '',
			rounded,
			bordered,
			shadow
		})
	);
	const captionClasses = $derived(MediaStyleManager.getImageWithCaptionTextClasses(props.captionClass ?? ''));

	return {
		get hostClasses() {
			return hostClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}

export default createImageWithCaptionState;















