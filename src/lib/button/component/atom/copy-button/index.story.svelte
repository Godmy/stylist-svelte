<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CopyButton from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'npm install stylist-svelte' },
		{ name: 'label', type: 'text', defaultValue: 'Copy command' },
		{ name: 'showIcon', type: 'boolean', defaultValue: true },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'outline',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'outline', 'ghost', 'link']
		},
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={CopyButton}
	title="CopyButton"
	category="Atoms/Interaction/Controls/Buttons"
	description="Copies text to clipboard"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<pre class="_c2">{values.text as string}</pre>
			<CopyButton
				text={values.text as string}
				label={values.label as string}
				showIcon={values.showIcon as boolean}
				variant={values.variant as any}
				size={values.size as 'sm' | 'md' | 'lg'}
				disabled={values.disabled as boolean}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		overflow: auto;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		background-color: var(--color-background-secondary);
		padding: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
