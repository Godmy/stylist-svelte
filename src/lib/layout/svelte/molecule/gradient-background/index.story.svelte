<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import GradientBackground from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'variant', type: 'select', defaultValue: 'dynamic', options: ['dynamic', 'static', 'particles'] },
		{ name: 'direction', type: 'select', defaultValue: 'diagonal', options: ['diagonal', 'horizontal', 'vertical', 'radial'] },
		{ name: 'speed', type: 'number', defaultValue: 20, min: 5, max: 60, step: 1 },
		{ name: 'intensity', type: 'number', defaultValue: 50, min: 10, max: 100, step: 1 }
	];
</script>

<Story component={GradientBackground} title="GradientBackground" description="Decorative animated background container." {controls}>
	{#snippet children(values: any)}
		<GradientBackground
			variant={values.variant}
			direction={values.direction}
			speed={values.speed}
			intensity={values.intensity}
			class="min-h-52 rounded-2xl"
		>
			{#snippet children()}
				<div class="p-6 text-[var(--color-text-inverse)]">
					<h3 class="text-xl font-semibold">Background Preview</h3>
					<p class="text-sm opacity-[var(--opacity-90)]">Use this for hero sections or feature callouts.</p>
				</div>
			{/snippet}
		</GradientBackground>
	{/snippet}
</Story>




