<script lang="ts">
	import type { RecipeNumberedStep } from '$stylist/layout/interface/recipe/numbered-step';

	let props: RecipeNumberedStep = $props();

	const label = $derived(String(props.index).padStart(2, '0'));
</script>

<li class={['layout-numbered-step', props.class].filter(Boolean).join(' ')}>
	<span class="layout-numbered-step__index">{label}</span>
	<h3 class="layout-numbered-step__title">{props.title}</h3>
	<p class="layout-numbered-step__text">{props.text}</p>
</li>

<style>
	.layout-numbered-step {
		border-top: var(--numbered-step-rule-width, 2px) solid var(--numbered-step-rule-color, currentColor);
		padding-top: 1.2rem;
		list-style: none;
	}

	.layout-numbered-step__index {
		display: block;
		font-family: var(--numbered-step-index-font, inherit);
		font-size: var(--numbered-step-index-size, 1.5rem);
		color: var(--numbered-step-index-color, currentColor);
	}

	.layout-numbered-step__title {
		margin: 0.5rem 0 0.4rem;
		font-size: var(--numbered-step-title-size, 1.05rem);
		color: var(--numbered-step-title-color, currentColor);
	}

	.layout-numbered-step__text {
		margin: 0;
		color: var(--numbered-step-text-color, currentColor);
	}
</style>
