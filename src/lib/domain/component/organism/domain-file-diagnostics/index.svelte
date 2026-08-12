<script lang="ts">
	import MetricBar from '$stylist/chart/component/atom/metric-bar/index.svelte';
	import domainFilesManifest from '$stylist/domain/data/json/domain-files/index.json';

	interface DomainFileJointMetric {
		name: string;
		entityCount: number;
		fileCount: number;
	}

	interface DomainFileClusterMetric {
		name: string;
		fileCount: number;
		joints: DomainFileJointMetric[];
	}

	interface DomainFileComponentMetric {
		atoms: number;
		molecules: number;
		organisms: number;
		templates: number;
		pages: number;
	}

	interface DomainFileMetric {
		name: string;
		fileCount: number;
		components: DomainFileComponentMetric;
		clusters: DomainFileClusterMetric[];
	}

	interface DomainFilesManifest {
		domains: DomainFileMetric[];
		totals: {
			domains: number;
			files: number;
			atoms: number;
			molecules: number;
			organisms: number;
			templates: number;
			pages: number;
		};
	}

	interface DomainFileDiagnosticsProps {
		class?: string;
	}

	let { class: className = '' }: DomainFileDiagnosticsProps = $props();

	const manifest = domainFilesManifest as DomainFilesManifest;
	const domains = manifest.domains ?? [];
	const maxDomainFiles = Math.max(1, ...domains.map((domain) => domain.fileCount));
	const componentLabels: Record<keyof DomainFileComponentMetric, string> = {
		atoms: 'Atoms',
		molecules: 'Molecules',
		organisms: 'Organisms',
		templates: 'Templates',
		pages: 'Pages'
	};
	const componentKeys = Object.keys(componentLabels) as (keyof DomainFileComponentMetric)[];

	function formatDomainName(value: string): string {
		return value
			.split('-')
			.filter(Boolean)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join(' ');
	}

	function getPercentage(value: number, max: number): number {
		return max <= 0 ? 0 : Math.round((value / max) * 100);
	}

	function getMaxJointCount(domain: DomainFileMetric): number {
		return Math.max(
			1,
			...domain.clusters.flatMap((cluster) => cluster.joints.map((joint) => joint.entityCount))
		);
	}
</script>

<section class="c-domain-file-diagnostics {className}" aria-label="Domain file diagnostics">
	<header class="summary">
		<div>
			<p class="eyebrow">Domain Files</p>
			<h2>Domain file inventory</h2>
		</div>

		<div class="totals" aria-label="Library totals">
			<div>
				<strong>{manifest.totals.domains}</strong>
				<span>domains</span>
			</div>
			<div>
				<strong>{manifest.totals.files}</strong>
				<span>files</span>
			</div>
			<div>
				<strong>{manifest.totals.atoms + manifest.totals.molecules + manifest.totals.organisms + manifest.totals.templates + manifest.totals.pages}</strong>
				<span>components</span>
			</div>
		</div>
	</header>

	<div class="domain-grid">
		{#each domains as domain (domain.name)}
			<article class="domain-card">
				<header class="domain-card__header">
					<div>
						<h3>{formatDomainName(domain.name)}</h3>
						<p>{domain.name}</p>
					</div>
					<strong>{domain.fileCount}</strong>
				</header>

				<MetricBar
					text="Total files"
					percentage={getPercentage(domain.fileCount, maxDomainFiles)}
					valueLabel={domain.fileCount}
					color="#2563eb"
					trackColor="color-mix(in srgb, var(--color-border-primary, #cbd5e1) 60%, transparent)"
				/>

				<div class="component-grid" aria-label={`${domain.name} component counts`}>
					{#each componentKeys as key}
						<div>
							<span>{componentLabels[key]}</span>
							<strong>{domain.components[key]}</strong>
						</div>
					{/each}
				</div>

				<div class="cluster-list">
					{#each domain.clusters as cluster (`${domain.name}-${cluster.name}`)}
						<section class="cluster-group">
							<header>
								<span>{cluster.name}</span>
								<strong>{cluster.fileCount}</strong>
							</header>
							<div class="joint-list">
								{#each cluster.joints as joint (`${domain.name}-${cluster.name}-${joint.name}`)}
									<MetricBar
										text={joint.name}
										percentage={getPercentage(joint.entityCount, getMaxJointCount(domain))}
										valueLabel={`${joint.entityCount} / ${joint.fileCount} files`}
										color="#0f766e"
										trackColor="color-mix(in srgb, var(--color-border-primary, #cbd5e1) 60%, transparent)"
									/>
								{/each}
							</div>
						</section>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.c-domain-file-diagnostics {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		color: var(--color-text-primary, #0f172a);
	}

	.summary {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.eyebrow,
	.totals span,
	.component-grid span,
	.cluster-group header span,
	.domain-card__header p {
		margin: 0;
		color: var(--color-text-secondary, #64748b);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.eyebrow,
	.totals span {
		letter-spacing: 0.08em;
	}

	h2,
	h3,
	p {
		margin: 0;
	}

	h2 {
		font-size: 1.35rem;
		line-height: 1.15;
	}

	h3 {
		font-size: 1rem;
		line-height: 1.2;
	}

	.totals {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.75rem;
	}

	.totals div,
	.component-grid div {
		display: grid;
		gap: 0.2rem;
		min-width: 5.5rem;
	}

	.totals strong,
	.domain-card__header strong {
		font-size: 1.5rem;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.domain-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
		gap: 1rem;
	}

	.domain-card {
		display: grid;
		align-content: start;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.domain-card__header {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	.domain-card__header p {
		margin-top: 0.2rem;
		text-transform: none;
		letter-spacing: 0;
		overflow-wrap: anywhere;
	}

	.component-grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 0.5rem;
	}

	.component-grid div {
		min-width: 0;
		padding: 0.65rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 72%, transparent);
		border-radius: 8px;
		background: var(--color-background-secondary, #f8fafc);
	}

	.component-grid strong {
		font-size: 1.15rem;
		font-variant-numeric: tabular-nums;
	}

	.cluster-list,
	.joint-list {
		display: grid;
		gap: 0.75rem;
	}

	.cluster-group {
		display: grid;
		gap: 0.65rem;
		padding-top: 0.75rem;
		border-top: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 70%, transparent);
	}

	.cluster-group header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.cluster-group header strong {
		font-size: 0.85rem;
		color: var(--color-text-secondary, #64748b);
		font-variant-numeric: tabular-nums;
	}

	@media (max-width: 720px) {
		.summary {
			align-items: start;
			flex-direction: column;
		}

		.totals {
			justify-content: start;
			width: 100%;
		}

		.component-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
