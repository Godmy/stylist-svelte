<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { CountryFlagProps } from '$stylist/design-system/attributes';

	// Определение состояния для CountryFlag
	export function createCountryFlagState(props: CountryFlagProps) {
		const classes = $derived(cn('country-flag', props.class));

		return {
			get classes() {
				return classes;
			},
			get countryCode() {
				return props.countryCode;
			},
			get size() {
				return props.size ?? 24;
			}
		};
	}
</script>
