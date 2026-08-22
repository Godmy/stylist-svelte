<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import domainFilesManifest from '$stylist/domain/data/json/domain-files/index.json';
	import DomainClusterBalance from './index.svelte';
</script>

<Story
	id="organisms-domain-cluster-balance"
	title="DomainClusterBalance"
	component={DomainClusterBalance}
	category="Organisms"
	description="Heat table for domain cluster balance."
	tags={['domain', 'diagnostics', 'clusters']}
>
	{#snippet children()}
		<DomainClusterBalance domains={domainFilesManifest.domains} />
	{/snippet}
</Story>
