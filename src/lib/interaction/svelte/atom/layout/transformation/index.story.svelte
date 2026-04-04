<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import Transformation from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';

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
			options: ['center', 'top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'],
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

<Story {controls} component={Transformation} title="Transformation Component" description="РђС‚РѕРј РґР»СЏ CSS-С‚СЂР°РЅСЃС„РѕСЂРјР°С†РёР№: scale, rotate, translate, skew">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg py-4">
			<div class="flex justify-center items-center h-64 bg-[var(--color-background-tertiary)] rounded-lg overflow-hidden">
				<Transformation {...values} class="p-6 bg-[var(--color-background-primary)] rounded-lg shadow-lg">
					{#snippet children()}
						<div class="text-center">
							<p class="font-medium">рџЋЇ Transform</p>
							<p class="text-xs text-muted mt-1">
								scale: {values.scale || 1} | rotate: {values.rotate || 0}В°
							</p>
							<p class="text-xs text-muted">
								translate: ({values.translateX || 0}, {values.translateY || 0})
							</p>
						</div>
					{/snippet}
				</Transformation>
			</div>

			<!-- Transform values -->
			<div class="mt-4 grid grid-cols-3 gap-2 text-xs">
				<div class="p-2 bg-[var(--color-background-secondary)] rounded">
					<span class="text-muted">Origin:</span> {values.transformOrigin || 'center'}
				</div>
				<div class="p-2 bg-[var(--color-background-secondary)] rounded">
					<span class="text-muted">Duration:</span> {values.duration || 300}ms
				</div>
				<div class="p-2 bg-[var(--color-background-secondary)] rounded">
					<span class="text-muted">Easing:</span> {values.easing || 'ease'}
				</div>
			</div>
		</div>
	{/snippet}
</Story>

