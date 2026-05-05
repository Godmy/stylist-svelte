<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ConnectionLine from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'startX', type: 'number', defaultValue: 90, step: 10 },
		{ name: 'startY', type: 'number', defaultValue: 120, step: 10 },
		{ name: 'endX', type: 'number', defaultValue: 420, step: 10 },
		{ name: 'endY', type: 'number', defaultValue: 260, step: 10 },
		{ name: 'type', type: 'select', defaultValue: 'bezier', options: ['straight', 'bezier', 'step'] },
		{ name: 'width', type: 'number', defaultValue: 3, min: 1, max: 10, step: 1 },
		{ name: 'color', type: 'color', defaultValue: '#64748b' },
		{ name: 'activeColor', type: 'color', defaultValue: '#2563eb' },
		{ name: 'active', type: 'boolean', defaultValue: false },
		{ name: 'animated', type: 'boolean', defaultValue: false },
		{ name: 'showArrow', type: 'boolean', defaultValue: true },
		{ name: 'label', type: 'text', defaultValue: 'payload' }
	];
</script>

<Story
	component={ConnectionLine}
	title="ConnectionLine"
	description="SVG connector for editor surfaces. Use the controls to compare route types and label placement."
	{controls}
>
	{#snippet children(values: any)}
		<div class="connection-shell">
			<div class="chip-row">
				<span>type: {values.type}</span>
				<span>active: {values.active ? 'yes' : 'no'}</span>
				<span>animated: {values.animated ? 'yes' : 'no'}</span>
			</div>

			<svg width="520" height="360" class="connection-stage">
				<rect x="52" y="88" width="76" height="64" rx="18" fill="#0f766e"></rect>
				<text x="90" y="126" text-anchor="middle" fill="white" font-size="12" font-weight="700">A</text>
				<rect x="388" y="226" width="84" height="68" rx="18" fill="#1d4ed8"></rect>
				<text x="430" y="266" text-anchor="middle" fill="white" font-size="12" font-weight="700">B</text>

				<ConnectionLine
					id="connection-1"
					startX={values.startX}
					startY={values.startY}
					endX={values.endX}
					endY={values.endY}
					type={values.type}
					width={values.width}
					color={values.color}
					activeColor={values.activeColor}
					active={values.active}
					animated={values.animated}
					showArrow={values.showArrow}
					label={values.label || undefined}
				/>
			</svg>
		</div>
	{/snippet}
</Story>

<style>
	.connection-shell {
		display: grid;
		gap: 0.75rem;
		padding: 1rem;
		border-radius: 1rem;
		background: linear-gradient(180deg, #f8fafc, #eef2f7);
		border: 1px solid rgba(148, 163, 184, 0.24);
	}

	.chip-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.78rem;
		color: #475569;
	}

	.chip-row span {
		padding: 0.35rem 0.6rem;
		border-radius: 999px;
		background: white;
		border: 1px solid rgba(148, 163, 184, 0.3);
	}

	.connection-stage {
		border-radius: 1rem;
		background:
			radial-gradient(circle at top left, rgba(29, 78, 216, 0.08), transparent 14rem),
			linear-gradient(180deg, #ffffff, #f8fafc);
		border: 1px solid rgba(148, 163, 184, 0.24);
	}
</style>
