<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import Tick from './index.svelte';
</script>

<Story
	component={Tick}
	title="Tick"
	category="Atoms/Control/Sliders/Tick"
	description="Slider tick mark component"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Tick
				value={values.value ?? 50}
				position={values.position ?? 50}
				active={values.active ?? true}
				label={values.label ?? '50%'}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		position: relative;
		height: 2.5rem;
		width: 100%;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-secondary);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
</style>
