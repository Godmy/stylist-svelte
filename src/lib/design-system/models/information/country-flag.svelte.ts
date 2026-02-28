import { MediaStyleManager } from '$stylist/design-system/styles/information/media';

interface CountryFlagProps {
	countryCode?: string;
	size?: number;
	class?: string;
}

export function createCountryFlagState(props: CountryFlagProps) {
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const emoji = $derived(MediaStyleManager.resolveCountryFlagEmoji(countryCode));
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const classes = $derived(MediaStyleManager.getCountryFlagClasses(props.class));
	const style = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackStyle = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackClasses = $derived(MediaStyleManager.getCountryFlagFallbackClasses());

	return {
		get countryCode() {
			return countryCode;
		},
		get size() {
			return size;
		},
		get emoji() {
			return emoji;
		},
		get isValid() {
			return isValid;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get fallbackStyle() {
			return fallbackStyle;
		},
		get fallbackClasses() {
			return fallbackClasses;
		}
	};
}

export default createCountryFlagState;












