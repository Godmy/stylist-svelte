<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import GraphPort from './index.svelte';

	type Props = {
		direction: 'input' | 'output';
		dataType: 'number' | 'string' | 'boolean' | 'object' | 'array' | 'any' | 'event' | 'action';
		size: 'xs' | 'sm' | 'md' | 'lg';
		label: string;
		connected: boolean;
		active: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'direction', type: 'select', defaultValue: 'input', options: ['input', 'output'] },
		{ name: 'dataType', type: 'select', defaultValue: 'number', options: ['number', 'string', 'boolean', 'object', 'array', 'any', 'event', 'action'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg'] },
		{ name: 'label', type: 'text', defaultValue: 'Value' },
		{ name: 'connected', type: 'boolean', defaultValue: false },
		{ name: 'active', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={GraphPort}
	title="Graph Port"
	category="Atoms/Architecture/Canvas"
	description="РџРѕСЂС‚ РіСЂР°С„Р° РґР»СЏ РІС…РѕРґРѕРІ Рё РІС‹С…РѕРґРѕРІ СѓР·Р»Р°."
	tags={['graph', 'port', 'canvas']}
>
	{#snippet children(values: any)}
		{@const typed = values as Props}
		<div style="position: relative; height: 120px; background: #1e1e1e; border-radius: var(--border-radius-lg);">
			<div style="position: absolute; top: 50%; inset-inline: 0;">
				<GraphPort
					id="story-port"
					direction={typed.direction}
					dataType={typed.dataType}
					size={typed.size}
					label={typed.label}
					connected={typed.connected}
					active={typed.active}
				/>
			</div>
		</div>
	{/snippet}

	{#snippet variants()}
		<div style="display: flex; flex-direction: column; gap: var(--spacing-5); background: #1e1e1e; padding: var(--spacing-5); border-radius: var(--border-radius-lg);">
			<div style="position: relative; height: 140px;">
				<div style="position: absolute; top: 12px; inset-inline: 0;"><GraphPort id="port-xs" size="xs" label="XS" direction="output" /></div>
				<div style="position: absolute; top: 42px; inset-inline: 0;"><GraphPort id="port-sm" size="sm" label="SM" direction="output" /></div>
				<div style="position: absolute; top: 74px; inset-inline: 0;"><GraphPort id="port-md" size="md" label="MD" direction="output" /></div>
				<div style="position: absolute; top: 108px; inset-inline: 0;"><GraphPort id="port-lg" size="lg" label="LG" direction="output" /></div>
			</div>
			<div style="position: relative; height: 280px;">
				<div style="position: absolute; top: 18px; inset-inline: 0;"><GraphPort id="type-number" direction="input" dataType="number" label="Number" /></div>
				<div style="position: absolute; top: 50px; inset-inline: 0;"><GraphPort id="type-string" direction="input" dataType="string" label="String" /></div>
				<div style="position: absolute; top: 82px; inset-inline: 0;"><GraphPort id="type-boolean" direction="input" dataType="boolean" label="Boolean" /></div>
				<div style="position: absolute; top: 114px; inset-inline: 0;"><GraphPort id="type-object" direction="input" dataType="object" label="Object" /></div>
				<div style="position: absolute; top: 146px; inset-inline: 0;"><GraphPort id="type-array" direction="input" dataType="array" label="Array" /></div>
				<div style="position: absolute; top: 178px; inset-inline: 0;"><GraphPort id="type-any" direction="input" dataType="any" label="Any" /></div>
				<div style="position: absolute; top: 210px; inset-inline: 0;"><GraphPort id="type-event" direction="input" dataType="event" label="Event" /></div>
				<div style="position: absolute; top: 242px; inset-inline: 0;"><GraphPort id="type-action" direction="input" dataType="action" label="Action" /></div>
			</div>
		</div>
	{/snippet}
</Story>


