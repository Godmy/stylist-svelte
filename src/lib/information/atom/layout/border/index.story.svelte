<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import Border from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';

	const controls: InterfaceControllerSettings[] = [
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

<Story {controls} component={Border} title="Border Component" description="Компонент для управления границами с поддержкой различных стилей и анимации">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg py-4">
			<Border {...values} class="p-6 bg-[var(--color-background-secondary)]">
				{#snippet children()}
					<div class="text-center">
						<p class="font-medium">Border style: <strong>{values.borderStyle || 'solid'}</strong></p>
						{#if values.borderColor}
							<p class="text-sm text-muted mt-1">Color: {values.borderColor}</p>
						{/if}
						{#if values.borderRadius && values.borderRadius !== 'none'}
							<p class="text-sm text-muted mt-1">Radius: {values.borderRadius}</p>
						{/if}
					</div>
				{/snippet}
			</Border>
		</div>
	{/snippet}
</Story>

