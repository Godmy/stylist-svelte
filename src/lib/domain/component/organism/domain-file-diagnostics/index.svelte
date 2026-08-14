<script lang="ts">
	import LegendBarDiagram from '$stylist/chart/component/organism/legend-bar-diagram/index.svelte';
	import LegendBandDiagram from '$stylist/chart/component/organism/legend-band-diagram/index.svelte';
	import MetricBar from '$stylist/chart/component/atom/metric-bar/index.svelte';
	import domainComponentIntervalsManifest from '$stylist/domain/data/json/domain-component-intervals/index.json';
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

	interface DomainComponentIntervalMetric {
		name: string;
		value: number;
		atom: number;
		molecule: number;
		organism: number;
		template: number;
		page: number;
		intervals: {
			name: string;
			value: number;
			start: number;
			end: number;
		}[];
	}

	interface DomainComponentIntervalsManifest {
		domains: DomainComponentIntervalMetric[];
		totals: {
			domains: number;
			components: number;
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

	type AnomalyMetricKey = 'components' | 'const' | 'type' | 'interface' | 'class' | 'function';
	type ComponentImportStatus = 'none' | 'missing-recipe' | 'valid';

	interface AnomalyRow {
		domain: string;
		components: number;
		const: number;
		type: number;
		interface: number;
		class: number;
		function: number;
	}

	interface ComponentImportRow {
		path: string;
		domain: string;
		joint: string;
		family: string;
		status: ComponentImportStatus;
		expectedRecipe: string;
		importCount: number;
		recipeImports: string[];
		otherImports: string[];
	}

	let { class: className = '' }: DomainFileDiagnosticsProps = $props();

	const manifest = domainFilesManifest as DomainFilesManifest;
	const componentIntervalsManifest =
		domainComponentIntervalsManifest as DomainComponentIntervalsManifest;
	const componentSources = import.meta.glob('/src/lib/**/component/**/index.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
	const domains = manifest.domains ?? [];
	const domainFileChartItems: [string, number][] = domains.map((domain) => [
		domain.name,
		domain.fileCount
	]);
	const domainComponentIntervalItems = componentIntervalsManifest.domains.map((domain) => ({
		text: domain.name,
		value: domain.value,
		atom: domain.atom,
		molecule: domain.molecule,
		organism: domain.organism,
		template: domain.template,
		page: domain.page
	}));
	const maxDomainFiles = Math.max(1, ...domains.map((domain) => domain.fileCount));
	const anomalyMetricLabels: Record<AnomalyMetricKey, string> = {
		components: 'Components',
		const: 'Const files',
		type: 'Type files',
		interface: 'Interface files',
		class: 'Class files',
		function: 'Function files'
	};
	const anomalyMetricKeys = Object.keys(anomalyMetricLabels) as AnomalyMetricKey[];
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

	function toPascalCase(value: string): string {
		return value
			.split(/[-_/]/)
			.filter(Boolean)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
	}

	function getPercentage(value: number, max: number): number {
		return max <= 0 ? 0 : Math.round((value / max) * 100);
	}

	function getClusterFileCount(domain: DomainFileMetric, clusterName: string): number {
		return domain.clusters.find((cluster) => cluster.name === clusterName)?.fileCount ?? 0;
	}

	function getComponentTotal(domain: DomainFileMetric): number {
		return componentKeys.reduce((total, key) => total + domain.components[key], 0);
	}

	function getMaxJointCount(domain: DomainFileMetric): number {
		return Math.max(
			1,
			...domain.clusters.flatMap((cluster) => cluster.joints.map((joint) => joint.entityCount))
		);
	}

	function getImportSources(source: string): string[] {
		const imports: string[] = [];
		const importPattern = /import\s+(?:type\s+)?[\s\S]*?\s+from\s+['"]([^'"]+)['"];?|import\s*['"]([^'"]+)['"];?/g;
		let match = importPattern.exec(source);

		while (match) {
			imports.push(match[1] ?? match[2] ?? '');
			match = importPattern.exec(source);
		}

		return imports.filter(Boolean);
	}

	function getImportStatements(source: string): string[] {
		return source.match(/import\s+(?:type\s+)?[\s\S]*?\s+from\s+['"][^'"]+['"];?|import\s*['"][^'"]+['"];?/g) ?? [];
	}

	function getExpectedRecipeName(family: string): string {
		return `Recipe${toPascalCase(family)}`;
	}

	function hasImportedName(source: string, importedName: string): boolean {
		const escapedName = importedName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const namePattern = new RegExp(`\\b${escapedName}\\b`);
		return getImportStatements(source).some((statement) => namePattern.test(statement));
	}

	function buildComponentImportRows(): ComponentImportRow[] {
		return Object.entries(componentSources)
			.map(([path, source]) => {
				const normalizedPath = path.replace(/\\/g, '/').replace('/src/lib/', '');
				const parts = normalizedPath.split('/');
				const domain = parts[0] ?? 'unknown';
				const joint = parts[2] ?? 'unknown';
				const family = parts[3] ?? 'unknown';
				const expectedRecipe = getExpectedRecipeName(family);
				const imports = getImportSources(source);
				const recipeImports = imports.filter((entry) => entry.includes('/interface/recipe/'));
				const otherImports = imports.filter((entry) => !entry.includes('/interface/recipe/'));
				const hasExpectedRecipe = hasImportedName(source, expectedRecipe);
				const status: ComponentImportStatus =
					imports.length === 0
						? 'none'
						: hasExpectedRecipe
							? 'valid'
							: 'missing-recipe';

				return {
					path: normalizedPath,
					domain,
					joint,
					family,
					status,
					expectedRecipe,
					importCount: imports.length,
					recipeImports,
					otherImports
				};
			})
			.filter((row) => row.status !== 'valid')
			.sort(
				(left, right) =>
					left.domain.localeCompare(right.domain) ||
					left.joint.localeCompare(right.joint) ||
					left.family.localeCompare(right.family)
			);
	}

	const anomalyRows: AnomalyRow[] = domains.map((domain) => ({
		domain: domain.name,
		components: getComponentTotal(domain),
		const: getClusterFileCount(domain, 'const'),
		type: getClusterFileCount(domain, 'type'),
		interface: getClusterFileCount(domain, 'interface'),
		class: getClusterFileCount(domain, 'class'),
		function: getClusterFileCount(domain, 'function')
	}));
	const anomalyMaxByMetric: Record<AnomalyMetricKey, number> = {
		components: Math.max(1, ...anomalyRows.map((row) => row.components)),
		const: Math.max(1, ...anomalyRows.map((row) => row.const)),
		type: Math.max(1, ...anomalyRows.map((row) => row.type)),
		interface: Math.max(1, ...anomalyRows.map((row) => row.interface)),
		class: Math.max(1, ...anomalyRows.map((row) => row.class)),
		function: Math.max(1, ...anomalyRows.map((row) => row.function))
	};
	const componentImportRows = buildComponentImportRows();
	const componentImportSummary = {
		total: componentImportRows.length,
		none: componentImportRows.filter((row) => row.status === 'none').length,
		missingRecipe: componentImportRows.filter((row) => row.status === 'missing-recipe').length,
		valid: componentImportRows.filter((row) => row.status === 'valid').length
	};
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

	<article class="overview-card">
		<header class="overview-card__header">
			<div>
				<p class="eyebrow">Files By Domain</p>
				<h3>All domains</h3>
			</div>
			<strong>{manifest.totals.domains} domains / {manifest.totals.files} files</strong>
		</header>

		<LegendBarDiagram
			items={domainFileChartItems}
			width={1180}
			plotHeight={230}
			labelAreaHeight={170}
			color="#2563eb"
			ariaLabel="Files by domain bar chart"
		/>

	</article>

	<article class="overview-card">
		<header class="overview-card__header">
			<div>
				<p class="eyebrow">Component Intervals</p>
				<h3>Component bands by domain</h3>
			</div>
			<strong>
				{componentIntervalsManifest.totals.atoms} atoms,
				{componentIntervalsManifest.totals.molecules} molecules,
				{componentIntervalsManifest.totals.organisms} organisms,
				{componentIntervalsManifest.totals.templates} templates,
				{componentIntervalsManifest.totals.pages} pages,
				{componentIntervalsManifest.totals.components} components
			</strong>
		</header>

		<LegendBandDiagram
			items={domainComponentIntervalItems}
			width={1180}
			plotHeight={230}
			labelAreaHeight={170}
			color="#2563eb"
			ariaLabel="Component intervals by domain band chart"
		/>
	</article>

	<article class="anomaly-card">
		<header class="anomaly-card__header">
			<div>
				<p class="eyebrow">Anomaly Scan</p>
				<h3>Domain cluster balance</h3>
			</div>
		</header>

		<div class="anomaly-table-shell">
			<table class="anomaly-table">
				<thead>
					<tr>
						<th>Domain</th>
						{#each anomalyMetricKeys as key}
							<th>{anomalyMetricLabels[key]}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each anomalyRows as row (row.domain)}
						<tr>
							<th scope="row">
								<span>{formatDomainName(row.domain)}</span>
								<code>{row.domain}</code>
							</th>
							{#each anomalyMetricKeys as key}
								<td>
									<div
										class="heat-cell"
										style={`--heat: ${getPercentage(row[key], anomalyMaxByMetric[key])}%;`}
										title={`${anomalyMetricLabels[key]}: ${row[key]}`}
									>
										<strong>{row[key]}</strong>
									</div>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</article>

	<article class="import-card">
		<header class="import-card__header">
			<div>
				<p class="eyebrow">Import Anomalies</p>
				<h3>Component recipe boundary</h3>
			</div>
			<div class="import-summary" aria-label="Component import anomaly totals">
				<div>
					<strong>{componentImportSummary.total}</strong>
					<span>flagged</span>
				</div>
				<div>
					<strong>{componentImportSummary.none}</strong>
					<span>no imports</span>
				</div>
				<div>
					<strong>{componentImportSummary.missingRecipe}</strong>
					<span>missing recipe</span>
				</div>
			</div>
		</header>

		<div class="import-table-shell">
			<table class="import-table">
				<thead>
					<tr>
						<th>Component</th>
						<th>Status</th>
						<th>Expected recipe</th>
						<th>Recipe imports</th>
						<th>Other imports</th>
						<th>Imports</th>
					</tr>
				</thead>
				<tbody>
					{#each componentImportRows as row (row.path)}
						<tr>
							<th scope="row">
								<span>{formatDomainName(row.domain)} / {row.joint} / {row.family}</span>
								<code>{row.path}</code>
							</th>
							<td>
								<span class={`status-badge status-badge--${row.status}`}>
									{row.status === 'none'
										? 'No imports'
										: 'Missing recipe'}
								</span>
							</td>
							<td><code>{row.expectedRecipe}</code></td>
							<td>
								{#if row.recipeImports.length > 0}
									<div class="import-list">
										{#each row.recipeImports as entry}
											<code>{entry}</code>
										{/each}
									</div>
								{:else}
									<span class="muted-copy">-</span>
								{/if}
							</td>
							<td>
								{#if row.otherImports.length > 0}
									<div class="import-list">
										{#each row.otherImports as entry}
											<code>{entry}</code>
										{/each}
									</div>
								{:else}
									<span class="muted-copy">-</span>
								{/if}
							</td>
							<td>{row.importCount}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</article>

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
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
		align-items: end;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.summary > :first-child {
		min-width: 0;
	}

	.overview-card {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.anomaly-card {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.import-card {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 8px;
		background: var(--color-background-primary, #ffffff);
	}

	.overview-card__header,
	.anomaly-card__header,
	.import-card__header {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 1rem;
	}

	.overview-card__header strong {
		font-size: 1.5rem;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.import-summary {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.75rem;
	}

	.import-summary div {
		display: grid;
		gap: 0.2rem;
		min-width: 5.75rem;
	}

	.import-summary strong {
		font-size: 1.25rem;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.import-summary span {
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.anomaly-table-shell {
		overflow: auto;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 72%, transparent);
		border-radius: 8px;
	}

	.anomaly-table {
		width: 100%;
		min-width: 780px;
		border-collapse: collapse;
	}

	.anomaly-table th,
	.anomaly-table td {
		padding: 0.55rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 58%, transparent);
		text-align: left;
	}

	.anomaly-table thead th {
		position: sticky;
		top: 0;
		z-index: 1;
		background: var(--color-background-secondary, #f8fafc);
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.anomaly-table tbody th {
		position: sticky;
		left: 0;
		z-index: 1;
		min-width: 11rem;
		background: var(--color-background-primary, #ffffff);
	}

	.anomaly-table tbody th span,
	.anomaly-table tbody th code {
		display: block;
	}

	.anomaly-table tbody th span {
		font-size: 0.85rem;
	}

	.anomaly-table tbody th code {
		margin-top: 0.15rem;
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 500;
	}

	.heat-cell {
		min-width: 5.75rem;
		padding: 0.48rem 0.6rem;
		border-radius: 6px;
		background:
			linear-gradient(
				90deg,
				color-mix(in srgb, #2563eb 22%, transparent) var(--heat),
				transparent var(--heat)
			),
			var(--color-background-secondary, #f8fafc);
		font-variant-numeric: tabular-nums;
	}

	.heat-cell strong {
		font-size: 0.9rem;
	}

	.import-table-shell {
		overflow: auto;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 72%, transparent);
		border-radius: 8px;
	}

	.import-table {
		width: 100%;
		min-width: 980px;
		border-collapse: collapse;
	}

	.import-table th,
	.import-table td {
		padding: 0.65rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 58%, transparent);
		text-align: left;
		vertical-align: top;
	}

	.import-table thead th {
		position: sticky;
		top: 0;
		z-index: 1;
		background: var(--color-background-secondary, #f8fafc);
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.import-table tbody th {
		min-width: 18rem;
	}

	.import-table tbody th span,
	.import-table tbody th code {
		display: block;
	}

	.import-table tbody th span {
		font-size: 0.85rem;
	}

	.import-table tbody th code,
	.import-list code {
		color: var(--color-text-secondary, #64748b);
		font-size: 0.72rem;
		font-weight: 500;
		overflow-wrap: anywhere;
	}

	.import-list {
		display: grid;
		gap: 0.35rem;
		max-width: 32rem;
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 6.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		font-size: 0.72rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.status-badge--none {
		background: color-mix(in srgb, #dc2626 12%, transparent);
		color: #991b1b;
	}

	.status-badge--missing-recipe {
		background: color-mix(in srgb, #d97706 14%, transparent);
		color: #92400e;
	}

	.muted-copy {
		color: var(--color-text-secondary, #64748b);
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
		grid-column: 2;
		justify-content: center;
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
			grid-template-columns: 1fr;
		}

		.totals {
			grid-column: 1;
			justify-content: start;
			width: 100%;
		}

		.import-card__header {
			flex-direction: column;
		}

		.import-summary {
			justify-content: start;
		}

		.component-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
