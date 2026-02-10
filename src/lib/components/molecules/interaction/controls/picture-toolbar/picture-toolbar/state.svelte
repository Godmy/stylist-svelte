<script lang="ts">
	import { cn } from '$stylist/utils/classes';
	import type { PictureToolbarProps } from '$stylist/design-system/attributes';

	// Определение состояния для PictureToolbar
	export function createPictureToolbarState(props: PictureToolbarProps) {
		const classes = $derived(cn('picture-toolbar', props.class));

		return {
			get classes() {
				return classes;
			},
			get tools() {
				return props.tools;
			},
			get activeTool() {
				return props.activeTool;
			},
			get onToolSelect() {
				return props.onToolSelect;
			}
		};
	}
</script>
