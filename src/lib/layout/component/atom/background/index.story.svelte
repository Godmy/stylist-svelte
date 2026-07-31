<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Background from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
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

<Story
	{controls}
	component={Background}
	title="Background Component"
	description="Компонент для управления фоном с поддержкой цветов, изображений и градиентов"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Background {...values} class="_c2">
				{#snippet children()}
					<div class="_c3">
						<p class="_c4">
							Background type: <strong>{values.background || 'default'}</strong>
						</p>
						{#if values.gradient}
							<p class="text-muted _c5">Gradient: {values.gradient.substring(0, 50)}...</p>
						{/if}
						{#if values.backgroundImage}
							<p class="text-muted _c5">
								Image: {values.backgroundImage.substring(0, 50)}...
							</p>
						{/if}
					</div>
				{/snippet}
			</Background>
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
		border-radius: 0.5rem;
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
</style>
