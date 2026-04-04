<script lang="ts">
	import { createInputAddonState } from '$stylist/input/function/script/create-input-addon-state';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
	import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

	type InputAddonProps = {
		position?: 'left' | 'right';
		variant?: TokenAppearance;
		size?: TokenSize;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let {
		position = 'left',
		variant = 'default',
		size = 'md',
		class: className = '',
		children,
		...restProps
	}: InputAddonProps & InteractionHTMLAttributes<HTMLDivElement> = $props();

	const inputAddonState = $derived(
		createInputAddonState({
			variant: variant satisfies TokenAppearance,
			size,
			class: className
		})
	);

	let classes = $derived(
		[
			inputAddonState.classes,
			position === 'left'
				? 'rounded-l-md border-r border-r-transparent'
				: 'rounded-r-md border-l border-l-transparent'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...restProps}>
	{@render children?.()}
</div>






