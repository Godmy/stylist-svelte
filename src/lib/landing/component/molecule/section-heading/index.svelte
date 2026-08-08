<script lang="ts">
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';

	let {
		eyebrow,
		title,
		class: className = ''
	}: {
		eyebrow: string;
		title: string;
		class?: string;
	} = $props();
</script>

<div class="section-heading {className}">
	<Text
		text={eyebrow}
		class="section-heading__eyebrow"
		fontSize="3"
		fontWeight="extrabold"
		textTransform="uppercase"
		block
	/>
	<Heading level={2} text={title} class="section-heading__title" />
</div>

<style>
	.section-heading {
		max-width: var(--section-heading-max-width, 42rem);
	}

	:global(.section-heading__eyebrow) {
		margin: 0 0 0.75rem;
		--typography-color: var(--section-heading-eyebrow-color, currentColor);
	}

	:global(.section-heading__title) {
		margin: 0 0 1rem;
		--typography-font-size: var(--section-heading-title-size, clamp(2rem, 4cqw, 3.5rem));
		--typography-line-height: 1.02;
		--typography-color: var(--section-heading-title-color, currentColor);
	}
</style>
