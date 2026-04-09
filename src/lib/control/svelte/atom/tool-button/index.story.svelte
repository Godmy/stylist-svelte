<script lang="ts">
	import ToolButton from './index.svelte';

	let activeTool = $state('select');

	const tools = [
		{ id: 'select', icon: '↖', label: 'Select' },
		{ id: 'pan', icon: '✋', label: 'Pan' },
		{ id: 'frame', icon: '□', label: 'Frame' },
		{ id: 'connect', icon: '⌇', label: 'Connect' },
		{ id: 'text', icon: 'T', label: 'Text' }
	];

	const handleClick = (tool: string) => {
		activeTool = tool;
	};
</script>

<div style="display: flex; gap: 20px; padding: 40px; background: #f5f5f5;">
	<div style="display: flex; gap: 4px;">
		{#each tools as tool}
			<ToolButton
				tool={tool.id}
				icon={tool.icon}
				label={tool.label}
				active={activeTool === tool.id}
				{onClick: handleClick}
			/>
		{/each}
	</div>
</div>

<div style="padding: 20px; font-family: monospace; font-size: 12px;">
	<p>Tool Button — кнопка инструмента</p>
	<p>Активный инструмент: {activeTool}</p>
</div>
