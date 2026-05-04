<script lang="ts">
	import { onMount, tick } from 'svelte';

	interface DomainDiagnosticsProps {
		compact?: boolean;
		class?: string;
	}

	type StoryModule = {
		default: any;
	};

	type StoryEntry = {
		id: string;
		path: string;
		title: string;
		domain: string;
		level: string;
		section: string;
		family: string;
		load: () => Promise<StoryModule>;
	};

	type DiagnosticError = {
		source: 'import' | 'mount' | 'window.error' | 'unhandledrejection';
		message: string;
	};

	type DiagnosticResult = {
		id: string;
		path: string;
		title: string;
		domain: string;
		status: 'passed' | 'failed';
		errors: DiagnosticError[];
		importMs: number;
		mountMs: number;
		totalMs: number;
	};

	let { compact = false, class: className = '' }: DomainDiagnosticsProps = $props();

	const storyModules = import.meta.glob('/src/lib/**/component/**/*.story.svelte') as Record<
		string,
		() => Promise<StoryModule>
	>;

	function toWords(value: string): string {
		return value
			.split('-')
			.filter(Boolean)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join(' ');
	}

	function formatDuration(value: number): string {
		return `${Math.round(value)} ms`;
	}

	function getTimingTone(totalMs: number): 'fast' | 'medium' | 'slow' {
		if (totalMs >= 1000) {
			return 'slow';
		}

		if (totalMs >= 300) {
			return 'medium';
		}

		return 'fast';
	}

	const allStories: StoryEntry[] = Object.entries(storyModules)
		.map(([path, load]) => {
			const normalizedPath = path.replace(/\\/g, '/');
			const parts = normalizedPath.split('/');
			const libIndex = parts.findIndex((part) => part === 'lib');
			const componentIndex = parts.findIndex((part) => part === 'component');
			const domain = parts[libIndex + 1] ?? 'unknown';
			const level = parts[componentIndex + 1] ?? 'component';
			const section = parts[componentIndex + 2] ?? 'misc';
			const family = parts[parts.length - 2] ?? 'story';

			return {
				id: normalizedPath,
				path: normalizedPath.replace('/src/lib/', ''),
				title: toWords(family),
				domain,
				level,
				section,
				family,
				load
			};
		})
		.sort(
			(left, right) =>
				left.domain.localeCompare(right.domain) ||
				left.level.localeCompare(right.level) ||
				left.section.localeCompare(right.section) ||
				left.title.localeCompare(right.title)
		);

	const domainOptions = ['all', ...new Set(allStories.map((entry) => entry.domain))];

	let searchQuery = $state('');
	let selectedDomain = $state('all');
	let diagnosticsRunning = $state(false);
	let diagnosticsComponent = $state<any>(null);
	let diagnosticsResults = $state<DiagnosticResult[]>([]);
	let diagnosticsProgress = $state(0);
	let diagnosticsActiveEntryId = $state<string | null>(null);
	let diagnosticsActivePath = $state<string | null>(null);
	let failedOnly = $state(false);
	let pendingErrors: DiagnosticError[] = [];

	const filteredStories = $derived.by(() => {
		const normalizedQuery = searchQuery.trim().toLowerCase();

		return allStories.filter((entry) => {
			const matchesDomain = selectedDomain === 'all' || entry.domain === selectedDomain;
			const matchesQuery =
				normalizedQuery.length === 0 ||
				entry.title.toLowerCase().includes(normalizedQuery) ||
				entry.path.toLowerCase().includes(normalizedQuery) ||
				entry.family.toLowerCase().includes(normalizedQuery);

			return matchesDomain && matchesQuery;
		});
	});

	const summary = $derived.by(() => ({
		total: diagnosticsResults.length,
		passed: diagnosticsResults.filter((entry) => entry.status === 'passed').length,
		failed: diagnosticsResults.filter((entry) => entry.status === 'failed').length,
		slowest: diagnosticsResults.reduce((max, entry) => Math.max(max, entry.totalMs), 0)
	}));

	const visibleResults = $derived.by(() => {
		const entries = failedOnly
			? diagnosticsResults.filter((entry) => entry.status === 'failed')
			: diagnosticsResults;

		return [...entries].sort((left, right) => right.totalMs - left.totalMs);
	});

	function clearFilters(): void {
		searchQuery = '';
		selectedDomain = 'all';
		failedOnly = false;
	}

	function recordError(source: DiagnosticError['source'], value: unknown): void {
		const message = value instanceof Error ? value.message : String(value);
		pendingErrors = [...pendingErrors, { source, message }];
	}

	async function runDiagnostics(): Promise<void> {
		if (diagnosticsRunning) {
			return;
		}

		const entries = [...filteredStories];
		diagnosticsRunning = true;
		diagnosticsResults = [];
		diagnosticsProgress = 0;
		diagnosticsComponent = null;

		for (const entry of entries) {
			pendingErrors = [];
			diagnosticsActiveEntryId = entry.id;
			diagnosticsActivePath = entry.path;
			diagnosticsComponent = null;
			let importMs = 0;
			let mountMs = 0;
			await tick();

			try {
				const importStart = performance.now();
				const module = await entry.load();
				importMs = performance.now() - importStart;
				const component = module.default;

				if (!component) {
					recordError('import', 'Story module has no default export.');
				} else {
					try {
						const mountStart = performance.now();
						diagnosticsComponent = component;
						await tick();
						await new Promise((resolve) => setTimeout(resolve, 250));
						mountMs = performance.now() - mountStart;
					} catch (error) {
						recordError('mount', error);
					}
				}
			} catch (error) {
				recordError('import', error);
			}

			const result: DiagnosticResult = {
				id: entry.id,
				path: entry.path,
				title: entry.title,
				domain: entry.domain,
				status: pendingErrors.length === 0 ? 'passed' : 'failed',
				errors: [...pendingErrors],
				importMs,
				mountMs,
				totalMs: importMs + mountMs
			};

			diagnosticsResults = [...diagnosticsResults, result];
			console[result.status === 'failed' ? 'error' : 'log']('[library diagnostics]', result);

			diagnosticsComponent = null;
			diagnosticsProgress += 1;
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 20));
		}

		diagnosticsActiveEntryId = null;
		diagnosticsActivePath = null;
		diagnosticsRunning = false;
	}

	onMount(() => {
		const handleWindowError = (event: ErrorEvent) => {
			if (!diagnosticsRunning || !diagnosticsActiveEntryId) {
				return;
			}

			recordError('window.error', event.error ?? event.message);
		};

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			if (!diagnosticsRunning || !diagnosticsActiveEntryId) {
				return;
			}

			recordError('unhandledrejection', event.reason);
		};

		window.addEventListener('error', handleWindowError);
		window.addEventListener('unhandledrejection', handleUnhandledRejection);

		return () => {
			window.removeEventListener('error', handleWindowError);
			window.removeEventListener('unhandledrejection', handleUnhandledRejection);
		};
	});
</script>

<div class="c-domain-diagnostics {compact ? 'c-domain-diagnostics--compact' : ''} {className}">
	<header class="hero">
		<div class="hero-copy">
			<p class="eyebrow">Diagnostics</p>
			<h2>{compact ? 'Story Runner' : 'Library Story Runner'}</h2>
			<p class="lede">
				Run import and runtime diagnostics for every `*.story.svelte` component in the library.
				Results are rendered on the page and mirrored to the browser console.
			</p>
		</div>

		<div class="stats-grid">
			<div class="stat-card">
				<strong>{allStories.length}</strong>
				<span>stories</span>
			</div>
			<div class="stat-card">
				<strong>{new Set(allStories.map((entry) => entry.domain)).size}</strong>
				<span>domains</span>
			</div>
			<div class="stat-card">
				<strong>{summary.failed}</strong>
				<span>failed</span>
			</div>
			<div class="stat-card">
				<strong>{summary.passed}</strong>
				<span>passed</span>
			</div>
			<div class="stat-card">
				<strong>{formatDuration(summary.slowest)}</strong>
				<span>slowest</span>
			</div>
		</div>
	</header>

	<section class="controls">
		<label class="search-field">
			<span>Search</span>
			<input
				type="search"
				placeholder="typography, button, input..."
				value={searchQuery}
				oninput={(event) => (searchQuery = event.currentTarget.value)}
			/>
		</label>

		<label class="select-field">
			<span>Domain</span>
			<select bind:value={selectedDomain}>
				{#each domainOptions as option}
					<option value={option}>{option === 'all' ? 'All domains' : toWords(option)}</option>
				{/each}
			</select>
		</label>

		<label class="toggle-field">
			<span>Failed Only</span>
			<input type="checkbox" bind:checked={failedOnly} />
		</label>

		<button class="action-button" type="button" onclick={clearFilters}>Reset</button>
		<button
			class="action-button action-button--primary"
			type="button"
			onclick={runDiagnostics}
			disabled={diagnosticsRunning}
		>
			{diagnosticsRunning
				? `Running ${diagnosticsProgress + 1}/${filteredStories.length}`
				: `Run diagnostics for ${filteredStories.length} stories`}
		</button>
	</section>

	<section class="status-panel">
		<p class="status-copy">
			{#if diagnosticsRunning && diagnosticsActivePath}
				Checking {diagnosticsActivePath}
			{:else if diagnosticsResults.length > 0}
				Completed {summary.total} checks.
			{:else}
				Ready to run diagnostics.
			{/if}
		</p>
	</section>

	{#if diagnosticsResults.length > 0}
		<section class="results-table-shell">
			<table class="results-table">
				<thead>
					<tr>
						<th>Status</th>
						<th>Title</th>
						<th>Path</th>
						<th>Import</th>
						<th>Mount</th>
						<th>Total</th>
						<th>Error</th>
					</tr>
				</thead>
				<tbody>
					{#each visibleResults as result (result.id)}
						<tr class={`result-row result-row--${result.status} result-row--${getTimingTone(result.totalMs)}`}>
							<td>
								<span class={`status-pill status-pill--${result.status}`}>{result.status}</span>
							</td>
							<td>
								<div class="cell-title">
									<strong>{result.title}</strong>
									<span>{result.domain}</span>
								</div>
							</td>
							<td><code class="path-code">{result.path}</code></td>
							<td class="cell-timing">{formatDuration(result.importMs)}</td>
							<td class="cell-timing">{formatDuration(result.mountMs)}</td>
							<td class="cell-timing cell-timing--total">{formatDuration(result.totalMs)}</td>
							<td class="cell-error">
								{#if result.errors.length > 0}
									{#each result.errors as error, index (`${result.id}-${index}`)}
										<div><code>{error.source}</code> {error.message}</div>
									{/each}
								{:else}
									<span class="success-copy">OK</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	{/if}
</div>

<div class="diagnostics-runner" aria-hidden="true">
	{#if diagnosticsComponent}
		<diagnosticsComponent></diagnosticsComponent>
	{/if}
</div>

<style>
	.c-domain-diagnostics {
		display: grid;
		gap: 1.25rem;
		padding: 1rem;
		color: var(--color-foreground-primary, #0f172a);
		background:
			radial-gradient(circle at top, rgba(148, 163, 184, 0.18), transparent 34%),
			linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
	}

	.c-domain-diagnostics--compact {
		gap: 0.9rem;
		padding: 0.9rem;
		min-width: min(38rem, calc(100vw - 5rem));
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
		gap: 1.25rem;
		padding: clamp(1rem, 3vw, 1.6rem);
		border-radius: 24px;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 82%, transparent);
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(238, 242, 255, 0.94)),
			var(--color-background-primary, #ffffff);
		box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
	}

	.c-domain-diagnostics--compact .hero {
		grid-template-columns: 1fr;
		border-radius: 18px;
		padding: 1rem;
		box-shadow: 0 12px 36px rgba(15, 23, 42, 0.08);
	}

	.hero-copy,
	.controls,
	.status-panel,
	.results-table-shell {
		display: grid;
		gap: 0.75rem;
	}

	.eyebrow,
	.search-field span,
	.select-field span,
	.toggle-field span {
		margin: 0;
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-foreground-secondary, #64748b);
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		font-size: clamp(1.5rem, 3vw, 2.4rem);
		line-height: 0.96;
	}

	.lede,
	.status-copy {
		color: var(--color-foreground-secondary, #475569);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 0.75rem;
	}

	.stat-card,
	.controls,
	.status-panel,
	.results-table-shell {
		padding: 1rem;
		border-radius: 20px;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 78%, transparent);
		background: color-mix(in srgb, var(--color-background-primary, #ffffff) 94%, transparent);
	}

	.c-domain-diagnostics--compact .stat-card,
	.c-domain-diagnostics--compact .controls,
	.c-domain-diagnostics--compact .status-panel,
	.c-domain-diagnostics--compact .results-table-shell {
		border-radius: 16px;
		padding: 0.85rem;
	}

	.stat-card strong {
		font-size: 1.8rem;
		line-height: 1;
	}

	.stat-card span {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-foreground-secondary, #64748b);
	}

	.controls {
		grid-template-columns: minmax(240px, 1.4fr) minmax(200px, 0.8fr) auto auto auto;
		align-items: end;
	}

	.c-domain-diagnostics--compact .controls {
		grid-template-columns: 1fr;
		align-items: stretch;
	}

	.search-field,
	.select-field,
	.toggle-field {
		display: grid;
		gap: 0.45rem;
	}

	.toggle-field {
		justify-items: start;
	}

	.toggle-field input {
		width: 18px;
		height: 18px;
		min-height: 18px;
		padding: 0;
	}

	input,
	select,
	.action-button {
		min-height: 44px;
		padding: 0.75rem 0.9rem;
		border-radius: 14px;
		border: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 84%, transparent);
		background: rgba(255, 255, 255, 0.95);
		color: inherit;
		font: inherit;
	}

	.action-button {
		cursor: pointer;
		font-weight: 600;
	}

	.action-button--primary {
		background: linear-gradient(180deg, #1d4ed8, #1e40af);
		color: white;
		border-color: #1d4ed8;
	}

	.results-table-shell {
		overflow: auto;
		padding: 0;
	}

	.results-table {
		width: 100%;
		min-width: 1080px;
		border-collapse: collapse;
	}

	.results-table th,
	.results-table td {
		padding: 0.9rem 1rem;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary, #cbd5e1) 70%, transparent);
	}

	.results-table th {
		position: sticky;
		top: 0;
		z-index: 1;
		background: color-mix(in srgb, var(--color-background-primary, #ffffff) 98%, transparent);
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-foreground-secondary, #64748b);
	}

	.result-row--passed {
		background: color-mix(in srgb, #16a34a 4%, white);
	}

	.result-row--failed {
		background: color-mix(in srgb, #dc2626 6%, white);
	}

	.result-row--medium .cell-timing--total {
		color: #b45309;
		font-weight: 700;
	}

	.result-row--slow .cell-timing--total {
		color: #b91c1c;
		font-weight: 700;
	}

	.status-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 72px;
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.status-pill--passed {
		background: rgba(22, 163, 74, 0.12);
		color: #166534;
	}

	.status-pill--failed {
		background: rgba(220, 38, 38, 0.12);
		color: #991b1b;
	}

	.cell-title {
		display: grid;
		gap: 0.2rem;
	}

	.cell-title span,
	.success-copy {
		color: var(--color-foreground-secondary, #64748b);
	}

	.path-code,
	.cell-timing,
	.cell-error code {
		font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
		font-size: 0.85rem;
	}

	.cell-timing {
		white-space: nowrap;
	}

	.cell-error {
		min-width: 280px;
	}

	.diagnostics-runner {
		position: fixed;
		left: -200vw;
		top: 0;
		width: 640px;
		overflow: hidden;
		pointer-events: none;
		opacity: 0;
	}

	@media (max-width: 960px) {
		.hero,
		.controls {
			grid-template-columns: 1fr;
		}

		.c-domain-diagnostics--compact {
			min-width: 0;
		}
	}
</style>
