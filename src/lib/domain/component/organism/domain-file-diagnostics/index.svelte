<script lang="ts">
	import DomainClusterBalance from '$stylist/domain/component/organism/domain-cluster-balance/index.svelte';
	import DomainComponentImportDiagnostics from '$stylist/domain/component/organism/domain-component-import-diagnostics/index.svelte';
	import DomainFileDomainGrid from '$stylist/domain/component/organism/domain-file-domain-grid/index.svelte';
	import DomainFileOverview from '$stylist/domain/component/organism/domain-file-overview/index.svelte';
	import componentImportDiagnosticsManifest from '$stylist/domain/data/json/domain-component-import-diagnostics/index.json';
	import domainComponentIntervalsManifest from '$stylist/domain/data/json/domain-component-intervals/index.json';
	import domainFilesManifest from '$stylist/domain/data/json/domain-files/index.json';

	interface DomainFileDiagnosticsProps {
		class?: string;
	}

	let { class: className = '' }: DomainFileDiagnosticsProps = $props();
</script>

<section class="c-domain-file-diagnostics {className}" aria-label="Domain file diagnostics">
	<DomainFileOverview
		manifest={domainFilesManifest}
		componentIntervalsManifest={domainComponentIntervalsManifest}
	/>
	<DomainClusterBalance domains={domainFilesManifest.domains} />
	<DomainComponentImportDiagnostics
		rows={componentImportDiagnosticsManifest.rows}
		summary={componentImportDiagnosticsManifest.summary}
	/>
	<DomainFileDomainGrid domains={domainFilesManifest.domains} />
</section>

<style>
	.c-domain-file-diagnostics {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		color: var(--color-text-primary, #0f172a);
	}
</style>
