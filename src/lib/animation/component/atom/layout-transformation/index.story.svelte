<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Transformation from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'scale',
			type: 'range',
			min: 0.5,
			max: 2,
			step: 0.1,
			defaultValue: 1
		},
		{
			name: 'rotate',
			type: 'range',
			min: 0,
			max: 360,
			step: 15,
			defaultValue: 0
		},
		{
			name: 'translateX',
			type: 'range',
			min: -100,
			max: 100,
			step: 10,
			defaultValue: 0
		},
		{
			name: 'translateY',
			type: 'range',
			min: -100,
			max: 100,
			step: 10,
			defaultValue: 0
		},
		{
			name: 'transformOrigin',
			type: 'select',
			options: [
				'center',
				'top',
				'bottom',
				'left',
				'right',
				'top left',
				'top right',
				'bottom left',
				'bottom right'
			],
			defaultValue: 'center'
		},
		{
			name: 'duration',
			type: 'range',
			min: 0,
			max: 2000,
			step: 100,
			defaultValue: 300
		},
		{
			name: 'animateOnHover',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'animateOnClick',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	{controls}
	component={Transformation}
	title="Transformation Component"
	description="Атом для CSS-трансформаций: scale, rotate, translate, skew"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<Transformation {...values} class="_c3">
					{#snippet children()}
						<div class="_c4">
							<p class="_c5">🎯 Transform</p>
							<p class="text-muted _c6">
								scale: {values.scale || 1} | rotate: {values.rotate || 0}°
							</p>
							<p class="text-muted _c7">
								translate: ({values.translateX || 0}, {values.translateY || 0})
							</p>
						</div>
					{/snippet}
				</Transformation>
			</div>

			<!-- Transform values -->
			<div class="_c8">
				<div class="_c9">
					<span class="text-muted">Origin:</span>
					{values.transformOrigin || 'center'}
				</div>
				<div class="_c9">
					<span class="text-muted">Duration:</span>
					{values.duration || 300}ms
				</div>
				<div class="_c9">
					<span class="text-muted">Easing:</span>
					{values.easing || 'ease'}
				</div>
			</div>
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
		display: flex;
		height: 16rem;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 0.5rem;
		background-color: var(--color-background-tertiary);
	}
	._c3 {
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	._c4 {
		text-align: center;
	}
	._c5 {
		font-weight: 500;
	}
	._c6 {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c7 {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c8 {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c9 {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
</style>
