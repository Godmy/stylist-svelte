<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TurtleHeroMorphSlide from './index.svelte';
</script>

<Story
	id="travel-commerce-organisms-turtle-hero-morph-slide"
	title="Travel Commerce / TurtleHeroMorphSlide"
	category="Travel Commerce/Organisms"
	component={TurtleHeroMorphSlide}
	description="Autoplaying turtle morph slide for use inside the media slider. Plays on its own on a fixed clock; wheel or tap inside the preview skips straight to the end."
	tags={['hero', 'autoplay', 'morph', 'slider']}
>
	<div class="_preview">
		<TurtleHeroMorphSlide />
	</div>
</Story>

<style>
	._preview {
		position: relative;
		width: min(100%, 60rem);
		height: 34rem;
		overflow: hidden;
		border: 1px solid var(--color-border-primary, #d1d5db);
		border-radius: 0.5rem;
	}
</style>
