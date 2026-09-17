<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TravelLanding from './index.svelte';
</script>

<Story
	title="TravelLanding"
	description="Full homepage assembly: hero media slider, sticky booking bridge, and the store page."
	preview="fullscreen"
>
	{#snippet children()}
		<TravelLanding />
	{/snippet}
</Story>
