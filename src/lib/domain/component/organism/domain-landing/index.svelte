<script lang="ts">
	import DomainMenu from '$stylist/domain/component/molecule/domain-menu/index.svelte';
	import DomainDiagnostics from '$stylist/domain/component/organism/domain-diagnostics/index.svelte';
	import DomainExplorer from '$stylist/domain/component/organism/domain-explorer/index.svelte';
	import DomainBacklog from '$stylist/domain/component/organism/domain-backlog/index.svelte';
	import DomainSettings from '$stylist/domain/component/organism/domain-settings/index.svelte';
	import { createDomainPageState } from '$stylist/domain/function/state/domain-page/index.svelte';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';

	type StoryModule = { default: unknown };

	interface DomainFile {
		name: string;
		path: string;
	}

	interface DomainEntity {
		name: string;
		path: string;
		files: DomainFile[];
	}

	interface DomainJoint {
		name: string;
		entities: DomainEntity[];
	}

	interface DomainCluster {
		name: string;
		joints: DomainJoint[];
	}

	interface DomainTreeNode {
		name: string;
		clusters: DomainCluster[];
	}

	interface DomainLandingProps {
		tree?: DomainTreeNode[];
		storyModules?: Record<string, () => Promise<StoryModule>>;
		class?: string;
	}

	type DomainScreen = 'landing' | 'domain' | 'backlog' | 'diagnostics';

	let { tree = [], storyModules = {}, class: className = '' }: DomainLandingProps = $props();

	const s = createDomainPageState({ tree, storyModules });
	let currentScreen = $state<DomainScreen>('landing');
	let isSettingsOpen = $state(false);
	let backlogContent = $state('');
	let backlogLoading = $state(false);
	let backlogError = $state('');

	function handleDomainToggle() {
		currentScreen = 'domain';
	}

	function handleLandingToggle() {
		currentScreen = 'landing';
	}

	async function handleBacklogToggle() {
		currentScreen = 'backlog';
		backlogContent = '';
		backlogError = '';

		if (!s.backlogPath) {
			return;
		}

		backlogLoading = true;
		try {
			const response = await fetch(`/content?path=${encodeURIComponent(s.backlogPath)}`);
			const payload = await response.json();
			if (!response.ok) {
				throw new Error(payload.error ?? 'Backlog preview failed');
			}
			backlogContent = payload.content ?? '';
		} catch (error) {
			backlogError = error instanceof Error ? error.message : String(error);
		} finally {
			backlogLoading = false;
		}
	}

	function handleDiagnosticsToggle() {
		currentScreen = 'diagnostics';
	}

	function handleSettingsToggle() {
		isSettingsOpen = !isSettingsOpen;
	}
</script>

<div class="c-domain-landing-shell {className}">
	{#if currentScreen === 'domain'}
		<DomainExplorer state={s} />
	{:else if currentScreen === 'backlog'}
		<DomainBacklog
			title="Domain backlog"
			path={s.backlogPath}
			content={backlogContent}
			loading={backlogLoading}
			error={backlogError}
		/>
	{:else if currentScreen === 'diagnostics'}
		<DomainDiagnostics />
	{:else}
		<section class="c-domain-landing" aria-label="Domain landing">
			<div class="landing-surface">
				<div class="hero-grid">
					<div class="hero-copy">
						<div class="eyebrow-row">
							<span class="eyebrow">Domain workspace</span>
							<span class="eyebrow eyebrow--muted">Explorer hidden</span>
						</div>

						<h1>Keep the whole design system readable, navigable and reviewable.</h1>
						<p class="lead">
							Move through the library as a structured product map instead of a raw filesystem.
							Domains, previews, diagnostics and implementation context stay connected in one
							workspace.
						</p>

						<div class="hero-points">
							<div class="hero-point">
								<strong>Structure before chaos</strong>
								<span>Browse the system through domains, clusters, joints and families.</span>
							</div>
							<div class="hero-point">
								<strong>Faster engineering review</strong>
								<span>Inspect code, stories, markdown and JSON without switching tools.</span>
							</div>
						</div>
					</div>

					<aside class="hero-aside">
						<div class="hero-panel hero-panel--primary">
							<p class="hero-panel-label">Why it matters</p>
							<ul class="hero-list">
								<li>Reduce navigation overhead in large component libraries</li>
								<li>Keep architecture visible while reviewing real implementation files</li>
								<li>Connect diagnostics and backlog context to the active family</li>
							</ul>
						</div>

						<div class="hero-metrics">
							<div class="metric-card">
								<strong>{tree.length}</strong>
								<span>root domains</span>
							</div>
							<div class="metric-card">
								<strong>{Object.keys(storyModules).length}</strong>
								<span>story modules</span>
							</div>
						</div>
					</aside>
				</div>

				<div class="feature-grid">
					<article class="feature-card feature-card--domain">
						<div class="feature-icon">
							<Icon name="domain" size={20} />
						</div>
						<div>
							<h2>Domain explorer</h2>
							<p>
								Open the full taxonomy tree, switch files and inspect implementation in context.
							</p>
						</div>
					</article>

					<article class="feature-card feature-card--diagnostics">
						<div class="feature-icon">
							<Icon name="diagnostics" size={20} />
						</div>
						<div>
							<h2>Diagnostics</h2>
							<p>Run story diagnostics across the library and surface breakages before release.</p>
						</div>
					</article>

					<article class="feature-card feature-card--backlog">
						<div class="feature-icon">
							<Icon name="backlog" size={20} />
						</div>
						<div>
							<h2>Backlog</h2>
							<p>
								Review the active family backlog without disconnecting decisions from structure.
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/if}

	<div class="menu-shell">
		<DomainMenu
			landingVisible={currentScreen === 'landing'}
			domainVisible={currentScreen === 'domain'}
			backlogOpen={currentScreen === 'backlog'}
			dashboardOpen={currentScreen === 'diagnostics'}
			settingsOpen={isSettingsOpen}
			onLandingToggle={handleLandingToggle}
			onDomainToggle={handleDomainToggle}
			onBacklogToggle={handleBacklogToggle}
			onDashboardToggle={handleDiagnosticsToggle}
			onSettingsToggle={handleSettingsToggle}
		/>
	</div>
</div>

<DomainSettings open={isSettingsOpen} onClose={() => (isSettingsOpen = false)} />

<style>
	.c-domain-landing-shell {
		position: relative;
		min-height: 100vh;
	}

	.c-domain-landing {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: clamp(1.5rem, 3vw, 3rem);
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--color-primary-500) 18%, transparent),
				transparent 34%
			),
			radial-gradient(circle at 78% 16%, rgba(249, 115, 22, 0.16), transparent 20%),
			radial-gradient(
				circle at bottom right,
				color-mix(in srgb, var(--color-primary-400) 12%, transparent),
				transparent 30%
			),
			linear-gradient(
				160deg,
				color-mix(in srgb, var(--color-background-primary) 97%, white 3%),
				color-mix(
					in srgb,
					var(--color-background-primary) 84%,
					var(--color-background-secondary) 16%
				)
			);
	}

	.landing-surface {
		width: min(64rem, 100%);
		display: grid;
		gap: 1.75rem;
		padding: clamp(1.5rem, 2.3vw, 2.6rem);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 32px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 95%, white 5%),
			color-mix(in srgb, var(--color-background-primary) 88%, var(--color-background-secondary) 12%)
		);
		box-shadow:
			0 28px 80px rgba(15, 23, 42, 0.12),
			inset 0 1px 0 rgba(255, 255, 255, 0.5);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(18rem, 0.85fr);
		gap: 1.25rem;
		align-items: start;
	}

	.hero-copy {
		display: grid;
		gap: 1rem;
	}

	.eyebrow-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		padding: 0.38rem 0.7rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-secondary) 84%, transparent);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.eyebrow--muted {
		background: color-mix(in srgb, var(--color-background-secondary) 56%, transparent);
	}

	h1 {
		margin: 0;
		max-width: 12ch;
		font-size: clamp(2.8rem, 5vw, 5rem);
		line-height: 0.9;
		letter-spacing: -0.04em;
	}

	.lead {
		max-width: 42rem;
		margin: 0;
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.hero-points {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
	}

	.hero-point,
	.hero-panel,
	.metric-card,
	.feature-card {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		background: color-mix(in srgb, var(--color-background-primary) 90%, white 10%);
		box-shadow: 0 16px 42px rgba(15, 23, 42, 0.05);
	}

	.hero-point {
		display: grid;
		gap: 0.35rem;
		padding: 0.95rem 1rem;
		border-radius: 20px;
	}

	.hero-point strong {
		font-size: 0.95rem;
	}

	.hero-point span {
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--color-text-secondary);
	}

	.hero-aside {
		display: grid;
		gap: 0.9rem;
	}

	.hero-panel {
		display: grid;
		gap: 0.8rem;
		padding: 1rem;
		border-radius: 24px;
	}

	.hero-panel--primary {
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary)) 0%,
			color-mix(in srgb, var(--color-background-primary) 92%, white 8%) 100%
		);
	}

	.hero-panel-label {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.hero-list {
		margin: 0;
		padding-left: 1rem;
		display: grid;
		gap: 0.6rem;
		color: var(--color-text-secondary);
		line-height: 1.55;
	}

	.hero-metrics {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.85rem;
	}

	.metric-card {
		display: grid;
		gap: 0.25rem;
		padding: 0.95rem 1rem;
		border-radius: 20px;
	}

	.metric-card strong {
		font-size: 2rem;
		line-height: 1;
	}

	.metric-card span {
		font-size: 0.76rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.feature-card {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 0.9rem;
		padding: 1.05rem;
		border-radius: 22px;
		position: relative;
		overflow: hidden;
	}

	.feature-card::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 3px;
		opacity: 0.9;
	}

	.feature-card--domain::after {
		background: linear-gradient(90deg, #2563eb, #0ea5e9);
	}

	.feature-card--diagnostics::after {
		background: linear-gradient(90deg, #f97316, #f59e0b);
	}

	.feature-card--backlog::after {
		background: linear-gradient(90deg, #16a34a, #22c55e);
	}

	.feature-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 14px;
		background: color-mix(in srgb, var(--color-primary-500) 12%, var(--color-background-primary));
		color: var(--color-primary-600);
	}

	h2 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
	}

	.feature-card p {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--color-text-secondary);
	}

	.menu-shell {
		position: fixed;
		top: 0.75rem;
		right: 0.75rem;
		z-index: 20;
	}

	@media (max-width: 900px) {
		.hero-grid,
		.hero-points,
		.hero-metrics,
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 840px) {
		.c-domain-landing-shell {
			padding-top: calc(env(safe-area-inset-top, 0px) + 6rem);
		}

		.c-domain-landing {
			min-height: auto;
			padding-top: 1rem;
		}

		.menu-shell {
			top: calc(env(safe-area-inset-top, 0px) + 0.75rem);
			left: 0.75rem;
			right: 0.75rem;
		}
	}
</style>
