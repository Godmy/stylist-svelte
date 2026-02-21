<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Toggle from './index.svelte';

	const sizeOptions = ['sm', 'md', 'lg'] as const;

	type ToggleStoryProps = {
		size: (typeof sizeOptions)[number];
		disabled: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'size',
			type: 'select',
			defaultValue: 'md',
			options: [...sizeOptions]
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="atoms-toggle"
	title="Toggle"
	component={Toggle}
	category="Atoms"
	description="Toggle switch for enabling/disabling a state."
	tags={['form', 'input', 'toggle', 'switch']}
	{controls}
>
	{#snippet children(values: any)}
		{@const size = typeof values.size === 'string' ? (values.size as ToggleStoryProps['size']) : 'md'}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		<div class="flex flex-col gap-4">
			<div class="flex items-center gap-4">
				<Toggle {size} {disabled} />
				<span>Toggle switch</span>
			</div>
		</div>
	{/snippet}
</Story>




