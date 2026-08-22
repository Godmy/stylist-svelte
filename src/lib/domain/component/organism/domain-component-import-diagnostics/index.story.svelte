<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import componentImportDiagnosticsManifest from '$stylist/domain/data/json/domain-component-import-diagnostics/index.json';
	import DomainComponentImportDiagnostics from './index.svelte';
</script>

<Story
	id="organisms-domain-component-import-diagnostics"
	title="DomainComponentImportDiagnostics"
	component={DomainComponentImportDiagnostics}
	category="Organisms"
	description="Component import boundary diagnostics generated at build time."
	tags={['domain', 'diagnostics', 'imports']}
>
	{#snippet children()}
		<DomainComponentImportDiagnostics
			rows={componentImportDiagnosticsManifest.rows}
			summary={componentImportDiagnosticsManifest.summary}
		/>
	{/snippet}
</Story>
