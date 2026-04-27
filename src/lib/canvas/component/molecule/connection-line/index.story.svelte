<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ConnectionLine from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'startX', type: 'number', defaultValue: 100, step: 10 },
		{ name: 'startY', type: 'number', defaultValue: 100, step: 10 },
		{ name: 'endX', type: 'number', defaultValue: 400, step: 10 },
		{ name: 'endY', type: 'number', defaultValue: 300, step: 10 },
		{ name: 'type', type: 'select', defaultValue: 'bezier', options: ['straight', 'bezier', 'step'] },
		{ name: 'strokeWidth', type: 'number', defaultValue: 2, min: 1, max: 10, step: 1 },
		{ name: 'color', type: 'color', defaultValue: '#64748b' },
		{ name: 'activeColor', type: 'color', defaultValue: '#3b82f6' },
		{ name: 'active', type: 'boolean', defaultValue: false },
		{ name: 'animated', type: 'boolean', defaultValue: false },
		{ name: 'showArrow', type: 'boolean', defaultValue: true },
		{ name: 'label', type: 'text', defaultValue: '' }
	];
</script>

<Story component={ConnectionLine} title="ConnectionLine" description="SVG connection line for graph/node editors with customizable path and styling." {controls}>
	{#snippet children(values: any)}
		<svg width="500" height="400" style="background: var(--color-background-secondary); border-radius: var(--border-radius-md);">
			<ConnectionLine
				id="connection-1"
				startX={values.startX}
				startY={values.startY}
				endX={values.endX}
				endY={values.endY}
				type={values.type}
				strokeWidth={values.strokeWidth}
				color={values.color}
				activeColor={values.activeColor}
				active={values.active}
				animated={values.animated}
				showArrow={values.showArrow}
				label={values.label || undefined}
			/>
		</svg>
	{/snippet}
</Story>

