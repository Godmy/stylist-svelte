import { MediaStyleManager } from '$stylist/media/class/style-manager/media';
import type { CountryFlagRecipe as CountryFlagProps } from '$stylist/geo/interface/recipe/country-flag';


export function createCountryFlagState(props: CountryFlagProps) {
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const emoji = $derived(MediaStyleManager.resolveCountryFlagEmoji(countryCode));
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const classes = $derived(
		MediaStyleManager.getCountryFlagClasses(typeof props.class === "string" ? props.class : undefined)
	);
	const style = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackStyle = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackClasses = $derived(MediaStyleManager.getCountryFlagFallbackClasses());

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			countryCode: _countryCode,
			size: _size,
			content: _content,
			...rest
		} = props;
		return rest;
	});

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
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createCountryFlagState;
