<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Link from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'href', type: 'text', defaultValue: '#' },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'underline'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'underline', type: 'boolean', defaultValue: true },
		{ name: 'target', type: 'select', defaultValue: '_self', options: ['_self', '_blank', '_parent', '_top'] },
		{ name: 'text', type: 'text', defaultValue: 'Open link' }
	];
</script>

<Story
	id="atoms-link"
	title="Link"
	category="Atoms"
	component={Link}
	description="Link component with style and behavior variants"
	tags={['navigation', 'link', 'anchor']}
	{controls}
>
	{#snippet children(values: any)}
		<Link
			href={values.href}
			variant={values.variant}
			size={values.size}
			disabled={values.disabled}
			underline={values.underline}
			target={values.target}
			text={values.text}
		/>
	{/snippet}
</Story>
