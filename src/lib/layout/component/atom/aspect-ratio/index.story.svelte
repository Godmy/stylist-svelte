<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AspectRatio from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'ratio',
			type: 'text',
			defaultValue: '1'
		}
	];
</script>

<Story
	{controls}
	component={AspectRatio}
	title="AspectRatio Component"
	description="Maintains a consistent aspect ratio for content containers"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<AspectRatio ratio={Number(values.ratio) || 1}>
				{#snippet children()}
					<div class="_c2 [background-image:var(--gradient-ocean)]">
						ratio: {values.ratio}
					</div>
				{/snippet}
			</AspectRatio>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 32rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.75rem;
	}
	._c2 {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
</style>
