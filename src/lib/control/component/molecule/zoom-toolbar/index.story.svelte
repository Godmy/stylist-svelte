<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ZoomToolbar from './index.svelte';
	import type { TokenControllerType } from '$stylist/domain/type/alias/controller-type';

	const controls = [
		{
			name: 'zoomLevel',
			type: 'number' as TokenControllerType,
			defaultValue: 100,
			description: 'Current zoom level percentage'
		},
		{
			name: 'minZoom',
			type: 'number' as TokenControllerType,
			defaultValue: 50,
			description: 'Minimum zoom level'
		},
		{
			name: 'maxZoom',
			type: 'number' as TokenControllerType,
			defaultValue: 200,
			description: 'Maximum zoom level'
		},
		{
			name: 'showReset',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show the reset button'
		},
		{
			name: 'showPercentage',
			type: 'boolean' as TokenControllerType,
			defaultValue: true,
			description: 'Whether to show the percentage display'
		}
	];

	let step = 10;
	let log: string[] = [];

	function handleZoomChange(value: number) {
		log = [`${new Date().toLocaleTimeString()} — масштаб ${value}%`, ...log].slice(0, 5);
	}
</script>

<Story
	{controls}
	title="ZoomToolbar Component"
	description="Interactive zoom toolbar with customizable options"
>
	{#snippet children(controlValues: any)}
		<div class="_c1">
			<div class="_c2">
				<ZoomToolbar
					zoomLevel={controlValues.zoomLevel}
					minZoom={controlValues.minZoom}
					maxZoom={controlValues.maxZoom}
					{step}
					showReset={controlValues.showReset}
					showPercentage={controlValues.showPercentage}
					onZoomChange={handleZoomChange}
				/>
			</div>

			<div class="_c3">
				<h3 class="_c4">История</h3>
				{#if log.length > 0}
					<ul class="_c5">
						{#each log as entry}
							<li class="_c6">
								{entry}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="_c7">История появится после взаимодействия с панелью.</p>
				{/if}
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		margin-top: 1rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c4 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c5 > * + * {
		margin-top: 0.25rem;
	}
	._c6 {
		border-radius: 0.375rem;
		background-color: var(--color-background-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
