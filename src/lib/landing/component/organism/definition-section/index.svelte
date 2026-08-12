<script lang="ts">
	import DividerHeadingImageText from '$stylist/image/component/molecule/divider-heading-image-text/index.svelte';

	let {
		id,
		ariaLabel,
		eyebrow,
		text,
		body,
		imageSrc,
		imageAlt,
		class: className = ''
	}: {
		id?: string;
		ariaLabel: string;
		eyebrow: string;
		text: string;
		body: string;
		imageSrc: string;
		imageAlt: string;
		class?: string;
	} = $props();
</script>

<DividerHeadingImageText
	{id}
	{ariaLabel}
	dividerLabel={eyebrow}
	{text}
	{body}
	{imageSrc}
	{imageAlt}
	class="definition-section {className}"
/>

<style>
	:global(.definition-section) {
		padding: 0 0 5rem;
		--divider-heading-image-text-heading: var(--definition-section-heading, currentColor);
		--divider-heading-image-text-border: var(--definition-section-border, currentColor);
		--divider-heading-image-text-media-bg: var(--definition-section-media-bg, transparent);
		--divider-heading-image-text-media-shadow: var(--definition-section-media-shadow, none);
		--divider-heading-image-text-text: var(--definition-section-text, currentColor);
	}
</style>
