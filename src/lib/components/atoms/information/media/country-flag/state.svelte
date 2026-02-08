<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { CountryFlagProps } from '$stylist/design-system/attributes';

	// Определение состояния для CountryFlag
	export function createCountryFlagState(props: CountryFlagProps) {
		const classes = $derived(cn('country-flag', props.class));

		return {
			classes,
			countryCode: props.countryCode,
			size: props.size ?? 24
		};
	}
</script>
