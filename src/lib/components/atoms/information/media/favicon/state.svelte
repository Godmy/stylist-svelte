<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { FaviconProps } from '$stylist/design-system/attributes';

	// Определение состояния для Favicon
	export function createFaviconState(props: FaviconProps) {
		const classes = $derived(cn('favicon', props.class));

		return {
			classes,
			size: props.size ?? 16,
			url: props.url
		};
	}
</script>
