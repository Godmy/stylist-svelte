<script lang="ts">
	import diagnosticsIcon from '$stylist/domain/data/svg/diagnostics.svg?raw';
	import DomainDiagnostics from '$stylist/domain/component/organism/domain-diagnostics/index.svelte';
	import ChatWorkbench from '$stylist/chat/component/organism/chat-workbench/index.svelte';
	import { DrawingSurface } from '$stylist/canvas/component/molecule/drawing-surface';
	import { CanvasToolbar } from '$stylist/canvas/component/molecule/canvas-toolbar';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import ThemeSettings from '$stylist/theme/component/organism/theme-settings/index.svelte';

	interface DomainPropertyProps {
		class?: string;
		isDomainVisible?: boolean;
		onDomainToggle?: () => void;
	}

	let { class: className = '', isDomainVisible = true, onDomainToggle }: DomainPropertyProps =
		$props();

	type DomainPropertyPanel = 'settings' | 'diagnostics' | 'chat' | 'canvas' | null;

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

	type DrawingTool = 'pen' | 'eraser';
	let selectedTool = $state<DrawingTool>('pen');
	let lineWidth = $state(3);
	let strokeColor = $state('#0f766e');
	let drawingSurfaceRef: { clear: () => void } | null = null;

	function handleToolChange(event: CustomEvent) {
		const { tool, options } = event.detail;
		selectedTool = tool;
		if (options) {
			lineWidth = options.lineWidth ?? lineWidth;
			strokeColor = options.strokeColor ?? strokeColor;
		}
	}

	function handleExposeMethods(event: CustomEvent) {
		drawingSurfaceRef = event.detail;
	}
</script>

{#if activePanel}
	<div
		class="fullscreen-overlay"
		role="dialog"
		aria-modal="true"
		aria-label={activePanel === 'settings'
			? 'Appearance settings'
			: activePanel === 'diagnostics'
				? 'Diagnostics'
				: activePanel === 'chat'
					? 'Chat'
					: 'Canvas'}
	>
		<header class="fullscreen-header">
			<span class="fullscreen-title">{activePanel === 'settings'
				? 'Appearance'
				: activePanel === 'diagnostics'
					? 'Diagnostics'
					: activePanel === 'chat'
						? 'Chat'
						: 'Canvas'}</span>
			<button
				type="button"
				class="close-btn"
				onclick={() => (activePanel = null)}
				aria-label="Close"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					aria-hidden="true"
				>
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
		</header>

		<div class="fullscreen-body">
			{#if activePanel === 'settings'}
				<div class="settings-shell">
					<ThemeSettings contract={themeSettingsContract} />
				</div>
			{:else if activePanel === 'diagnostics'}
				<DomainDiagnostics />
			{:else if activePanel === 'chat'}
				<ChatWorkbench mode="panel" />
			{:else if activePanel === 'canvas'}
				<div class="canvas-layout">
					<div class="canvas-toolbar-wrap">
						<CanvasToolbar
							selectedTool={selectedTool}
							drawingOptions={{
								lineWidth,
								strokeColor,
								tool: selectedTool,
								mode: selectedTool === 'eraser' ? 'erase' : 'draw'
							}}
							on:tool-change={handleToolChange}
							on:clear-canvas={() => drawingSurfaceRef?.clear()}
						/>
					</div>
					<div class="canvas-surface-wrap">
						<DrawingSurface
							width={800}
							height={520}
							tool={selectedTool}
							strokeWidth={lineWidth}
							{strokeColor}
							backgroundColor="#f8fafc"
							drawingEnabled={true}
							on:expose-methods={handleExposeMethods}
							on:canvas-cleared={() => {}}
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<aside class="c-domain-property {className}">
	<div class="property-strip">
		<ThemeModeToggle />

		<button
			type="button"
			class="gear-btn"
			class:active={!isDomainVisible}
			onclick={onDomainToggle}
			title={isDomainVisible ? 'Hide domain content' : 'Show domain content'}
			aria-label={isDomainVisible ? 'Hide domain content' : 'Show domain content'}
			aria-pressed={!isDomainVisible}
		>
			{#if isDomainVisible}
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
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
					<circle cx="12" cy="12" r="3" />
				</svg>
			{:else}
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
					<path
						d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
					/>
					<line x1="1" y1="1" x2="23" y2="23" />
				</svg>
			{/if}
		</button>

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
				<path
					d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
				/>
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

		<button
			type="button"
			class="gear-btn"
			class:active={activePanel === 'chat'}
			onclick={() => togglePanel('chat')}
			title="Chat"
			aria-label="Chat"
			aria-pressed={activePanel === 'chat'}
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
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			</svg>
		</button>

		<button
			type="button"
			class="gear-btn"
			class:active={activePanel === 'canvas'}
			onclick={() => togglePanel('canvas')}
			title="Canvas"
			aria-label="Canvas"
			aria-pressed={activePanel === 'canvas'}
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
				<path d="M12 19l7-7 3 3-7 7-3-3z" />
				<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
				<path d="M2 2l7.586 7.586" />
				<circle cx="11" cy="11" r="2" />
			</svg>
		</button>
	</div>
</aside>

<style>
	.c-domain-property {
		display: flex;
		flex-direction: row;
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

	/* Fullscreen overlay */

	.fullscreen-overlay {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: grid;
		grid-template-rows: auto 1fr;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		overflow: hidden;
	}

	.fullscreen-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1.25rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
		flex-shrink: 0;
	}

	.fullscreen-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
		letter-spacing: 0.01em;
	}

	.close-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 6px;
		background: var(--color-background-primary);
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: color 120ms ease, border-color 120ms ease;
	}

	.close-btn:hover {
		color: var(--color-text-primary);
		border-color: var(--color-primary-500);
	}

	.fullscreen-body {
		overflow: auto;
		min-height: 0;
	}

	/* Settings fullscreen */

	.settings-shell {
		max-width: 56rem;
		margin: 0 auto;
		padding: 2rem;
	}

	.settings-shell :global(.c-theme-settings) {
		padding: 0;
	}

	.settings-shell :global(.c-theme-settings__surface) {
		box-shadow: none;
	}

	/* Canvas fullscreen layout */

	.canvas-layout {
		display: flex;
		gap: 1.5rem;
		padding: 1.5rem;
		align-items: flex-start;
		min-height: 100%;
	}

	.canvas-toolbar-wrap {
		flex-shrink: 0;
	}

	.canvas-surface-wrap {
		border: 1px solid var(--color-border-primary);
		border-radius: 12px;
		overflow: hidden;
		flex-shrink: 0;
	}

	.canvas-surface-wrap :global(canvas) {
		display: block;
		max-width: 100%;
	}

	@media (max-width: 840px) {
		.c-domain-property {
			flex-direction: column-reverse;
		}

		.property-strip {
			flex-direction: row;
			width: 100%;
			border-left: none;
			border-top: 1px solid var(--color-border-primary);
			justify-content: flex-end;
		}

		.canvas-layout {
			flex-direction: column;
		}
	}
</style>
