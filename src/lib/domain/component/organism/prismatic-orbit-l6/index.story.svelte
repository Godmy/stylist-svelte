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
		<div class="rounded-3xl bg-[linear-gradient(180deg,#dbeafe,#f8fafc)] p-8">
			<PrismaticOrbitL6 />
		</div>
	{/snippet}
</Story>
