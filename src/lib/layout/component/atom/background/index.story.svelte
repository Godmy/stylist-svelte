<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Background from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'background',
			type: 'select',
			options: ['default', 'gradient', 'image', 'particles'],
			defaultValue: 'default'
		},
		{
			name: 'backgroundColor',
			type: 'text',
			defaultValue: '',
			description: 'CSS color (e.g., #ff0000)'
		},
		{
			name: 'backgroundImage',
			type: 'text',
			defaultValue: '',
			description: 'URL (e.g., https://example.com/image.jpg)'
		},
		{
			name: 'gradient',
			type: 'text',
			defaultValue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			description: 'CSS gradient'
		},
		{
			name: 'opacity',
			type: 'range',
			min: 0,
			max: 1,
			step: 0.1,
			defaultValue: 1
		},
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'error', 'info'],
			defaultValue: 'default'
		}
	];
</script>

<Story {controls} component={Background} title="Background Component" description="Компонент для управления фоном с поддержкой цветов, изображений и градиентов">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg py-4">
			<Background {...values} class="p-6 rounded-lg">
				{#snippet children()}
					<div class="text-center">
						<p class="font-medium">Background type: <strong>{values.background || 'default'}</strong></p>
						{#if values.gradient}
							<p class="text-sm text-muted mt-1">Gradient: {values.gradient.substring(0, 50)}...</p>
						{/if}
						{#if values.backgroundImage}
							<p class="text-sm text-muted mt-1">Image: {values.backgroundImage.substring(0, 50)}...</p>
						{/if}
					</div>
				{/snippet}
			</Background>
		</div>
	{/snippet}
</Story>

