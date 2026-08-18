<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Border from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'borderStyle',
			type: 'select',
			options: ['solid', 'dashed', 'dotted', 'double', 'none', 'bold'],
			defaultValue: 'solid'
		},
		{
			name: 'borderWidth',
			type: 'select',
			options: ['1px', '2px', '4px', 'sm', 'md', 'lg'],
			defaultValue: '1px'
		},
		{
			name: 'borderColor',
			type: 'text',
			defaultValue: '',
			description: 'CSS color (e.g., #ff0000)'
		},
		{
			name: 'borderRadius',
			type: 'select',
			options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
			defaultValue: 'none'
		},
		{
			name: 'borderTop',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'borderBottom',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'borderLeft',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'borderRight',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'animated',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Border}
	title="Border Component"
	description="Компонент для управления границами с поддержкой различных стилей и анимации"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Border {...values} class="_c2">
				{#snippet children()}
					<div class="_c3">
						<p class="_c4">
							Border style: <strong>{values.borderStyle || 'solid'}</strong>
						</p>
						{#if values.borderColor}
							<p class="_c5 _c5-muted">Color: {values.borderColor}</p>
						{/if}
						{#if values.borderRadius && values.borderRadius !== 'none'}
							<p class="_c5 _c5-muted">Radius: {values.borderRadius}</p>
						{/if}
					</div>
				{/snippet}
			</Border>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		width: 100%;
		border-radius: 0.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c2 {
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c3 {
		text-align: center;
	}
	._c4 {
		font-weight: 500;
	}
	._c5 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c5-muted {
		color: var(--color-text-secondary);
	}
</style>
