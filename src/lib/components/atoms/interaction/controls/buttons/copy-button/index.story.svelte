<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CopyButton from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'text', type: 'text', defaultValue: 'npm install stylist-svelte' },
		{ name: 'label', type: 'text', defaultValue: 'Copy command' },
		{ name: 'showIcon', type: 'boolean', defaultValue: true },
		{ name: 'variant', type: 'select', defaultValue: 'outline', options: ['primary','secondary','success','warning','danger','outline','ghost','link'] },
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
		<div class="space-y-3">
			<pre class="overflow-auto rounded border bg-slate-50 p-3 text-sm">{values.text as string}</pre>
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
