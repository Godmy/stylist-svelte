<script lang="ts">
	import diagnosticsIcon from '$stylist/domain/data/svg/diagnostics.svg?raw';
	import DomainDiagnostics from '$stylist/domain/component/organism/domain-diagnostics/index.svelte';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import ThemeSettings from '$stylist/theme/component/organism/theme-settings/index.svelte';

	interface DomainPropertyProps {
		class?: string;
	}

	let { class: className = '' }: DomainPropertyProps = $props();

	type DomainPropertyPanel = 'settings' | 'diagnostics' | null;

	const themeContext = ManagerThemeContext.getOptional();
	const themeSettingsContract = $derived(
		ObjectManagerThemeSettings.createContract({
			themeMode: themeContext?.themeMode,
			themeScheme: themeContext?.themeScheme,
			onThemeModeChange: (theme) => themeContext?.setMode?.(theme),
			onThemeSchemeChange: (theme) => themeContext?.setScheme?.(theme)
		})
	);

	let activePanel = $state<DomainPropertyPanel>(null);

	function togglePanel(panel: Exclude<DomainPropertyPanel, null>) {
		activePanel = activePanel === panel ? null : panel;
	}
</script>

<aside class="c-domain-property {className}">
	{#if activePanel}
		<div class="property-panel">
			{#if activePanel === 'settings'}
				<ThemeSettings contract={themeSettingsContract} />
			{:else if activePanel === 'diagnostics'}
				<DomainDiagnostics compact />
			{/if}
		</div>
	{/if}

	<div class="property-strip">
		<ThemeModeToggle />
		<button
			type="button"
			class="gear-btn"
			class:active={activePanel === 'settings'}
			onclick={() => togglePanel('settings')}
			title="Appearance settings"
			aria-label="Appearance settings"
			aria-pressed={activePanel === 'settings'}
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="3" />
				<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
			</svg>
		</button>
		<button
			type="button"
			class="gear-btn"
			class:active={activePanel === 'diagnostics'}
			onclick={() => togglePanel('diagnostics')}
			title="Diagnostics"
			aria-label="Diagnostics"
			aria-pressed={activePanel === 'diagnostics'}
		>
			<span class="icon-shell" aria-hidden="true">{@html diagnosticsIcon}</span>
		</button>
	</div>
</aside>

<style>
	.c-domain-property {
		display: flex;
		flex-direction: row;
	}

	.property-panel {
		width: min(44rem, calc(100vw - 5rem));
		overflow-y: auto;
		border-left: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}

	.property-strip {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 0.4rem;
		border-left: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		flex-shrink: 0;
		width: 54px;
	}

	.property-strip :global(.c-theme-mode-toggle) {
		border-radius: 8px;
		min-width: 2.2rem;
		min-height: 2.2rem;
		width: 2.2rem;
		height: 2.2rem;
		padding: 0;
	}

	.gear-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.2rem;
		height: 2.2rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-secondary);
		color: var(--color-text-secondary);
		cursor: pointer;
		flex-shrink: 0;
		transition: color 120ms ease, background-color 120ms ease, border-color 120ms ease;
	}

	.gear-btn:hover {
		color: var(--color-text-primary);
		background: var(--color-background-primary);
		border-color: var(--color-primary-500);
	}

	.gear-btn.active {
		color: var(--color-primary-500);
		border-color: var(--color-primary-500);
		background: color-mix(in srgb, var(--color-primary-500) 8%, var(--color-background-primary));
	}

	.icon-shell {
		display: inline-grid;
		place-items: center;
		width: 16px;
		height: 16px;
	}

	.icon-shell :global(svg) {
		width: 16px;
		height: 16px;
	}

	.property-panel :global(.c-theme-settings) {
		padding: 0.9rem;
	}

	.property-panel :global(.c-theme-settings__surface) {
		box-shadow: none;
	}

	.property-panel :global(.c-theme-settings__item) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 840px) {
		.c-domain-property {
			flex-direction: column-reverse;
		}

		.property-panel {
			width: 100%;
			border-left: none;
			border-top: 1px solid var(--color-border-primary);
		}

		.property-strip {
			flex-direction: row;
			width: 100%;
			border-left: none;
			border-top: 1px solid var(--color-border-primary);
			justify-content: flex-end;
		}
	}
</style>
