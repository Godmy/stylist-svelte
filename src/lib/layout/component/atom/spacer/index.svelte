<script lang="ts">
	import type { RecipeSpacer } from '$stylist/layout/interface/recipe/spacer';

	let props: RecipeSpacer = $props();
	const axis = $derived(props.axis ?? 'vertical');
	const size = $derived(props.size ?? '1rem');
	const inline = $derived(props.inline ?? false);
	const restProps = $derived.by(() => {
		const { class: _class, axis: _axis, size: _size, inline: _inline, ...rest } = props;
		return rest;
	});
</script>

<div
	class={[
		'layout-spacer',
		`layout-spacer--${axis}`,
		inline && 'layout-spacer--inline',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	style:--spacer-size={size}
	aria-hidden="true"
	{...restProps}
></div>

<style>
	.layout-spacer {
		display: inline-block;
		flex-shrink: 0;
	}

	.layout-spacer--horizontal {
		width: var(--spacer-size, 1rem);
		height: auto;
	}

	.layout-spacer--vertical {
		width: auto;
		height: var(--spacer-size, 1rem);
		display: block;
	}

	.layout-spacer--both {
		width: var(--spacer-size, 1rem);
		height: var(--spacer-size, 1rem);
	}

	.layout-spacer--vertical.layout-spacer--inline {
		display: inline-block;
	}
</style>
