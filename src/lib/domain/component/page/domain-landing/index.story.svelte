<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainLanding from './index.svelte';
</script>

<Story
	component={DomainLanding}
	title="DomainLanding"
	description="Landing page for the domain workspace with calls to open the component playground."
>
	{#snippet children()}
		<DomainLanding rootDomainCount={12} storyModuleCount={84} />
	{/snippet}
</Story>
