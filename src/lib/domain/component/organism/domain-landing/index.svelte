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

	let {
		tree = [],
		storyModules = {},
		class: className = ''
	}: DomainLandingProps = $props();

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
				<div class="eyebrow-row">
					<span class="eyebrow">Domain workspace</span>
					<span class="eyebrow eyebrow--muted">Explorer hidden</span>
				</div>

				<h1>Domain landing</h1>
				<p class="lead">
					Open the domain explorer from the top-right menu to browse domains, files and previews.
				</p>

				<div class="feature-grid">
					<article class="feature-card">
						<div class="feature-icon">
							<Icon name="domain" size={18} />
						</div>
						<div>
							<h2>Domain explorer</h2>
							<p>Switch to the full taxonomy tree, preview tabs and source viewer.</p>
						</div>
					</article>

					<article class="feature-card">
						<div class="feature-icon">
							<Icon name="diagnostics" size={18} />
						</div>
						<div>
							<h2>Diagnostics</h2>
							<p>Inspect the current structure and keep architectural issues visible.</p>
						</div>
					</article>

					<article class="feature-card">
						<div class="feature-icon">
							<Icon name="backlog" size={18} />
						</div>
						<div>
							<h2>Backlog</h2>
							<p>Store notes for the active family without leaving the workspace.</p>
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
			radial-gradient(circle at top left, color-mix(in srgb, var(--color-primary-500) 12%, transparent), transparent 36%),
			radial-gradient(circle at bottom right, color-mix(in srgb, var(--color-primary-400) 10%, transparent), transparent 30%),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
				color-mix(in srgb, var(--color-background-primary) 88%, var(--color-background-secondary) 12%)
			);
	}

	.landing-surface {
		width: min(64rem, 100%);
		display: grid;
		gap: 1.4rem;
		padding: clamp(1.5rem, 2.2vw, 2.4rem);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 32px;
		background: color-mix(in srgb, var(--color-background-primary) 92%, white 8%);
		box-shadow:
			0 28px 80px rgba(15, 23, 42, 0.12),
			inset 0 1px 0 rgba(255, 255, 255, 0.5);
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
		font-size: clamp(2.4rem, 4vw, 4.25rem);
		line-height: 0.96;
		letter-spacing: -0.04em;
	}

	.lead {
		max-width: 44rem;
		margin: 0;
		font-size: 1.02rem;
		line-height: 1.6;
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
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 22px;
		background: color-mix(in srgb, var(--color-background-secondary) 74%, transparent);
	}

	.feature-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.6rem;
		height: 2.6rem;
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
		.feature-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 840px) {
		.menu-shell {
			left: 0.75rem;
			right: 0.75rem;
		}
	}
</style>
