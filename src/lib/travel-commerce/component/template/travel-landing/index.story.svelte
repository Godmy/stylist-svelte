<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TravelLanding from './index.svelte';
</script>

<Story
	title="TravelLanding"
	description="Homepage body: media slider with the running-line ticker, overlaid with the catalogue filters and topic tiles."
	preview="fullscreen"
>
	{#snippet children()}
		<TravelLanding />
	{/snippet}
</Story>
