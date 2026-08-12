<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainFileDiagnostics from './index.svelte';
</script>

<Story
	id="organisms-domain-file-diagnostics"
	title="DomainFileDiagnostics"
	component={DomainFileDiagnostics}
	category="Organisms"
	description="Domain-level file inventory generated from domain-files manifest."
	tags={['domain', 'diagnostics', 'files']}
>
	{#snippet children()}
		<DomainFileDiagnostics />
	{/snippet}
</Story>
