<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import PrismaticOrbitL6 from './index.svelte';
</script>

<Story
	component={PrismaticOrbitL6}
	title="PrismaticOrbitL6"
	description="Interactive L6 shell combining movable seed, orbit layers, and expandable control card."
>
	{#snippet children()}
		<div class="token-story-stage">
			<PrismaticOrbitL6 />
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		min-height: 20rem;
		overflow: visible;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2rem;
	}
</style>
