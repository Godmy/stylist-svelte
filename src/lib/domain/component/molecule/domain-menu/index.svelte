<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';

	interface DomainMenuProps {
		landingVisible?: boolean;
		domainVisible?: boolean;
		builderOpen?: boolean;
		backlogOpen?: boolean;
		dashboardOpen?: boolean;
		settingsOpen?: boolean;
		onLandingToggle?: () => void;
		onDomainToggle?: () => void;
		onBuilderToggle?: () => void;
		onBacklogToggle?: () => void;
		onDashboardToggle?: () => void;
		onSettingsToggle?: () => void;
		class?: string;
	}

	let {
		landingVisible = false,
		domainVisible = true,
		builderOpen = false,
		backlogOpen = false,
		dashboardOpen = false,
		settingsOpen = false,
		onLandingToggle,
		onDomainToggle,
		onBuilderToggle,
		onBacklogToggle,
		onDashboardToggle,
		onSettingsToggle,
		class: className = ''
	}: DomainMenuProps = $props();
</script>

<nav class="c-domain-menu {className}" aria-label="Domain menu">
	<button
		type="button"
		class:active={landingVisible}
		class="menu-button menu-button--icon"
		onclick={onLandingToggle}
		aria-pressed={landingVisible}
		aria-label="Show landing"
		title="Show landing"
	>
		<Icon name="landing" size={18} />
	</button>

	<button
		type="button"
		class:active={domainVisible}
		class="menu-button menu-button--icon"
		onclick={onDomainToggle}
		aria-pressed={domainVisible}
		aria-label="Show domain"
		title="Show domain"
	>
		<Icon name="domain" size={18} />
	</button>

	<button
		type="button"
		class:active={builderOpen}
		class="menu-button menu-button--icon"
		onclick={onBuilderToggle}
		aria-pressed={builderOpen}
		aria-label="Constructor"
		title="Constructor"
	>
		<Icon name="page-builder" size={18} />
	</button>

	<button
		type="button"
		class:active={backlogOpen}
		class="menu-button menu-button--icon"
		onclick={onBacklogToggle}
		aria-pressed={backlogOpen}
		aria-label="Backlog"
		title="Backlog"
	>
		<Icon name="backlog" size={18} />
	</button>

	<button
		type="button"
		class:active={dashboardOpen}
		class="menu-button menu-button--icon"
		onclick={onDashboardToggle}
		aria-pressed={dashboardOpen}
		aria-label="Dashboard"
		title="Dashboard"
	>
		<Icon name="diagnostics" size={18} />
	</button>

	<button
		type="button"
		class:active={settingsOpen}
		class="menu-button menu-button--icon"
		onclick={onSettingsToggle}
		aria-pressed={settingsOpen}
		aria-label="Settings"
		title="Settings"
	>
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="3" />
			<path
				d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
			/>
		</svg>
	</button>

	<ThemeModeToggle class="menu-button menu-button--theme" />
</nav>

<style>
	.c-domain-menu {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 18px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow:
			0 16px 38px rgba(15, 23, 42, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.55);
		backdrop-filter: blur(14px);
	}

	.menu-button {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 999px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 97%, white 3%) 0%,
			color-mix(in srgb, var(--color-background-primary) 92%, var(--color-background-secondary) 8%)
				100%
		);
		color: var(--color-text-primary);
		cursor: pointer;
		box-shadow:
			0 8px 20px rgba(15, 23, 42, 0.06),
			inset 0 1px 0 rgba(255, 255, 255, 0.55);
		transition:
			transform 120ms ease,
			background-color 120ms ease,
			border-color 120ms ease,
			color 120ms ease;
	}

	.menu-button--text {
		padding: 0.72rem 1rem;
		font: inherit;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.01em;
	}

	.menu-button--theme {
		padding: 0;
	}

	.menu-button--icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.85rem;
		height: 2.85rem;
		padding: 0;
	}

	.menu-button:hover {
		transform: translateY(-1px);
		border-color: color-mix(in srgb, var(--color-primary-500) 44%, var(--color-border-primary) 56%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 86%, var(--color-primary-500) 14%) 0%,
			color-mix(in srgb, var(--color-background-primary) 82%, var(--color-primary-500) 18%) 100%
		);
	}

	.menu-button.active {
		border-color: color-mix(in srgb, var(--color-primary-500) 48%, var(--color-border-primary) 52%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 78%, var(--color-primary-500) 22%) 0%,
			color-mix(in srgb, var(--color-background-primary) 72%, var(--color-primary-600) 28%) 100%
		);
		color: var(--color-text-primary);
		box-shadow:
			0 10px 24px rgba(15, 23, 42, 0.16),
			inset 0 1px 0 rgba(255, 255, 255, 0.22);
	}

	.menu-button.active:hover {
		border-color: color-mix(in srgb, var(--color-primary-500) 56%, var(--color-border-primary) 44%);
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 70%, var(--color-primary-500) 30%) 0%,
			color-mix(in srgb, var(--color-background-primary) 66%, var(--color-primary-600) 34%) 100%
		);
	}

	@media (max-width: 840px) {
		.c-domain-menu {
			flex-wrap: wrap;
			justify-content: flex-end;
			width: 100%;
		}
	}
</style>
