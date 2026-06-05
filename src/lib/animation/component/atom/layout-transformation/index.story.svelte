<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import Transformation from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
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
		<div class="w-full rounded-lg py-4">
			<div
				class="flex h-64 items-center justify-center overflow-hidden rounded-lg bg-[var(--color-background-tertiary)]"
			>
				<Transformation
					{...values}
					class="rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg"
				>
					{#snippet children()}
						<div class="text-center">
							<p class="font-medium">🎯 Transform</p>
							<p class="text-muted mt-1 text-xs">
								scale: {values.scale || 1} | rotate: {values.rotate || 0}°
							</p>
							<p class="text-muted text-xs">
								translate: ({values.translateX || 0}, {values.translateY || 0})
							</p>
						</div>
					{/snippet}
				</Transformation>
			</div>

			<!-- Transform values -->
			<div class="mt-4 grid grid-cols-3 gap-2 text-xs">
				<div class="rounded bg-[var(--color-background-secondary)] p-2">
					<span class="text-muted">Origin:</span>
					{values.transformOrigin || 'center'}
				</div>
				<div class="rounded bg-[var(--color-background-secondary)] p-2">
					<span class="text-muted">Duration:</span>
					{values.duration || 300}ms
				</div>
				<div class="rounded bg-[var(--color-background-secondary)] p-2">
					<span class="text-muted">Easing:</span>
					{values.easing || 'ease'}
				</div>
			</div>
		</div>
	{/snippet}
</Story>
