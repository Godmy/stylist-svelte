<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import domainComponentIntervalsManifest from '$stylist/domain/data/json/domain-component-intervals/index.json';
	import domainFilesManifest from '$stylist/domain/data/json/domain-files/index.json';
	import DomainFileOverview from './index.svelte';
</script>

<Story
	id="organisms-domain-file-overview"
	title="DomainFileOverview"
	component={DomainFileOverview}
	category="Organisms"
	description="Domain inventory totals and component interval charts."
	tags={['domain', 'diagnostics', 'files']}
>
	{#snippet children()}
		<DomainFileOverview
			manifest={domainFilesManifest}
			componentIntervalsManifest={domainComponentIntervalsManifest}
		/>
	{/snippet}
</Story>
