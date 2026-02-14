<script lang="ts">
	import type { ControlConfig } from '../tokens/controls';

	export let controls: ControlConfig[] = [];
	export let component: any;
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let category: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let tags: string[] | undefined = undefined;
// Keep this intentionally broad to support heterogeneous story snippets.
export let children: any = undefined;
const controlValues: Record<string, unknown> = {};
	$: for (const control of controls) {
		if (!(control.name in controlValues)) {
			controlValues[control.name] = control.defaultValue;
		}
	}

	// Function to handle control changes
	function handleChange(controlName: string, value: unknown) {
		controlValues[controlName] = value;
	}
</script>

<div
	class="playground-container"
	data-story-id={id}
	data-story-title={title}
	data-story-category={category}
	data-story-description={description}
	data-story-tags={tags?.join(',')}
>
	<div class="component-preview">
		{#if children}
			{@render children(controlValues)}
		{:else if component}
			{component}
		{/if}
	</div>

	<div class="controls-panel">
		{#each controls as control}
			<div class="control-item">
				<label for="control-{control.name}">{control.name}</label>
				{#if control.type === 'text'}
					<input
						id="control-{control.name}"
						type="text"
						bind:value={controlValues[control.name]}
						on:input={(e: Event) => {
							const target = e.target as HTMLInputElement;
							handleChange(control.name, target ? target.value : '');
						}}
					/>
				{:else if control.type === 'boolean'}
					<input
						id="control-{control.name}"
						type="checkbox"
						bind:checked={controlValues[control.name] as boolean}
						on:change={(e: Event) => {
							const target = e.target as HTMLInputElement;
							handleChange(control.name, target ? target.checked : false);
						}}
					/>
				{:else if control.type === 'select'}
					<select
						id="control-{control.name}"
						bind:value={controlValues[control.name]}
						on:change={(e: Event) => {
							const target = e.target as HTMLSelectElement;
							handleChange(control.name, target ? target.value : '');
						}}
					>
						{#each control.options ?? [] as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				{/if}
			</div>
		{/each}
	</div>
</div>
