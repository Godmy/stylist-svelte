<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import Tick from './index.svelte';
</script>

<Story component={Tick} title="Tick" category="Atoms/Control/Sliders/Tick" description="Slider tick mark component">
	{#snippet children(values: any)}
		<div class="relative h-10 w-full border border-dashed border-[--color-border-secondary] px-2">
			<Tick value={values.value ?? 50} position={values.position ?? 50} active={values.active ?? true} label={values.label ?? '50%'} />
		</div>
	{/snippet}
</Story>
