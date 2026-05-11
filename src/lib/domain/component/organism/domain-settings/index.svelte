<script lang="ts">
	import ThemeSettings from '$stylist/theme/component/organism/theme-settings/index.svelte';
	import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';

	interface DomainSettingsProps {
		open?: boolean;
		onClose?: () => void;
		class?: string;
	}

	let { open = false, onClose, class: className = '' }: DomainSettingsProps = $props();

	const settingsContract = ObjectManagerThemeSettings.createContract({
		modeSection: {
			show: true,
			title: '',
			description: 'Switch between default, light and dark.'
		},
		schemeSection: {
			show: true,
			title: '',
			description: 'Choose the palette used by the explorer.'
		}
	});
</script>

{#if open}
	<aside class="c-domain-settings {className}" aria-label="Domain settings">
		<header class="panel-head">
			<div>
				<p class="eyebrow">Settings</p>
				<h2>Domain settings</h2>
			</div>
			<button
				type="button"
				class="close-button"
				onclick={onClose}
				aria-label="Close settings panel"
			>
				Close
			</button>
		</header>

		<div class="panel-body">
			<div class="settings-offset">
				<ThemeSettings
					contract={settingsContract}
					class="domain-settings-panel"
					switcherProps={{ compact: false, showHeader: false, showLabels: false }}
				/>
			</div>
		</div>
	</aside>
{/if}

<style>
	.c-domain-settings {
		position: fixed;
		top: 5.25rem;
		right: 0.7rem;
		z-index: 30;
		width: min(calc(30rem + 4px), calc(100vw - 2rem));
		max-height: calc(100vh - 6.25rem);
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 24px;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
			color-mix(in srgb, var(--color-background-primary) 90%, var(--color-background-secondary) 10%)
		);
		box-shadow: 0 28px 80px rgba(15, 23, 42, 0.16);
		overflow: hidden;
	}

	.panel-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1rem 1rem 0.85rem;
		border-bottom: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
	}

	.eyebrow {
		margin: 0 0 0.25rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
	}

	h2 {
		margin: 0;
		font-size: 1.05rem;
	}

	.close-button {
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 80%, transparent);
		border-radius: 999px;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		padding: 0.65rem 0.9rem;
		font: inherit;
		font-size: 0.82rem;
		cursor: pointer;
	}

	.panel-body {
		min-height: 0;
		padding: 1rem;
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior: contain;
		scrollbar-gutter: stable;
	}

	.settings-offset {
		transform: translate(-12px, -6px);
		transform-origin: top left;
	}

	:global(.domain-settings-panel.c-theme-settings) {
		gap: 0.8rem;
		min-width: 0;
		width: 100%;
	}

	:global(.domain-settings-panel .c-theme-settings__surface) {
		gap: 0.85rem;
		padding: 0.9rem 1.15rem 0.9rem 0.9rem;
		border-radius: 18px;
		box-shadow: none;
		margin-right: 24px;
	}

	:global(.domain-settings-panel .c-theme-settings__surface-summary) {
		display: none;
	}

	:global(.domain-settings-panel .c-theme-settings__surface-heading) {
		gap: 0.3rem;
		padding-bottom: 0.1rem;
	}

	:global(.domain-settings-panel .c-theme-surface__content) {
		display: grid;
		gap: 0.8rem;
		padding-inline: 0 0.15rem;
	}

	:global(.domain-settings-panel .c-theme-settings__item) {
		padding: 0.75rem 0.9rem;
		margin-right: 0;
	}

	:global(.domain-settings-panel .c-theme-settings__meta) {
		gap: 0.22rem;
	}

	:global(.domain-settings-panel .c-theme-settings__title:empty),
	:global(.domain-settings-panel .c-theme-settings__help:empty) {
		display: none;
	}

	:global(.domain-settings-panel .c-theme-settings__help) {
		margin-top: -0.05rem;
	}

	:global(.domain-settings-panel .c-theme-settings__item--column) {
		padding-top: 0.7rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__list) {
		grid-template-columns: 1fr;
		gap: 0.65rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__item) {
		min-height: 7.1rem;
		padding: 0.75rem;
		gap: 0.45rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__badge) {
		display: none;
	}

	:global(.domain-settings-panel .c-theme-switcher__top) {
		grid-template-columns: minmax(0, 1fr);
		gap: 0.35rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__preview) {
		gap: 0.4rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__preview-surface) {
		height: 2.8rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__swatch-row) {
		gap: 0.4rem;
	}

	:global(.domain-settings-panel .c-theme-switcher__swatch) {
		width: 0.7rem;
		height: 0.7rem;
	}

	@media (max-width: 640px) {
		:global(.domain-settings-panel .c-theme-switcher__list) {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 840px) {
		.c-domain-settings {
			top: 6.5rem;
			right: 0.75rem;
			left: 0.75rem;
			width: auto;
		}

		.settings-offset {
			transform: translate(-8px, -4px);
		}
	}
</style>
