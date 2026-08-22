<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import domainFilesManifest from '$stylist/domain/data/json/domain-files/index.json';
	import DomainFileDomainGrid from './index.svelte';
</script>

<Story
	id="organisms-domain-file-domain-grid"
	title="DomainFileDomainGrid"
	component={DomainFileDomainGrid}
	category="Organisms"
	description="Per-domain file and component inventory cards."
	tags={['domain', 'diagnostics', 'files']}
>
	{#snippet children()}
		<DomainFileDomainGrid domains={domainFilesManifest.domains} />
	{/snippet}
</Story>
