<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { FaviconProps } from '$stylist/design-system/attributes';

	// Определение состояния для Favicon
	export function createFaviconState(props: FaviconProps) {
		const classes = $derived(cn('favicon', props.class));

		return {
			get classes() {
				return classes;
			},
			get size() {
				return props.size ?? 16;
			},
			get url() {
				return props.url;
			}
		};
	}
</script>
