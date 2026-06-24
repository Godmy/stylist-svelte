<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';

	interface TabFile {
		name: string;
		path: string;
	}

	interface DebugMenuItem {
		id: string;
		label: string;
		disabled?: boolean;
		onSelect?: () => void;
	}

	interface JointTabButtonsProps {
		files?: TabFile[];
		markdownFile?: TabFile | null;
		storyFile?: TabFile | null;
		selectedEntityName?: string;
		activeFilePath?: string;
		previewMode?: 'file' | 'markdown' | 'story' | 'json-tree';
		previewKind?: 'svg' | 'json' | 'text';
		debugMenuItems?: DebugMenuItem[];
		onFileSelect?: (path: string) => void;
		onMarkdownSelect?: () => void;
		onStorySelect?: () => void;
		onJsonTreeSelect?: () => void;
		class?: string;
	}

	let {
		files = [],
		markdownFile = null,
		storyFile = null,
		selectedEntityName = '',
		activeFilePath = '',
		previewMode = 'file',
		previewKind = 'text',
		debugMenuItems = [],
		onFileSelect,
		onMarkdownSelect,
		onStorySelect,
		onJsonTreeSelect,
		class: className = ''
	}: JointTabButtonsProps = $props();

	let dropdownOpen = $state(false);

	const NOT_FOUND_ICON_NAME = 'alert-circle';

	function normalizeEntityName(value: string): string {
		return value
			.trim()
			.replace(/[_\s]+/g, '-')
			.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
			.toLowerCase();
	}

	function hasRegisteredIcon(value: string): boolean {
		return value in TOKEN_ICON_REGISTRY;
	}

	function buildIconCandidates(name: string): string[] {
		const normalized = normalizeEntityName(name);
		if (!normalized) {
			return [];
		}

		const parts = normalized.split('-').filter(Boolean);
		if (parts.length <= 1) {
			return [normalized];
		}

		if (parts.length === 2) {
			return [normalized, parts[0], parts[1]];
		}

		return [normalized, parts.slice(0, -1).join('-'), parts[0]];
	}

	const resolvedIconName = $derived.by(() => {
		for (const candidate of buildIconCandidates(selectedEntityName)) {
			if (hasRegisteredIcon(candidate)) {
				return candidate;
			}
		}

		return NOT_FOUND_ICON_NAME;
	});

	const hasResolvedIcon = $derived(resolvedIconName !== NOT_FOUND_ICON_NAME);

	function handleAction(action?: () => void) {
		dropdownOpen = false;
		action?.();
	}
</script>

<div class="c-joint-tab-buttons {className}" aria-label="Files">
	<div class="action-group">
		<div
			class="entity-icon-shell"
			class:entity-icon-shell--missing={!hasResolvedIcon}
			title={hasResolvedIcon
				? `Icon: ${resolvedIconName}`
				: `Icon not found for ${selectedEntityName || 'entity'}`}
			aria-label={hasResolvedIcon
				? `Resolved icon ${resolvedIconName}`
				: `Icon not found for ${selectedEntityName || 'entity'}`}
		>
			<Icon name={resolvedIconName} size="sm" />
		</div>

		<button
			type="button"
			class="tab tab--action"
			title="Debug actions"
			aria-label="Debug actions"
			aria-expanded={dropdownOpen}
			onclick={() => (dropdownOpen = !dropdownOpen)}
		>
			<span class="tab-icon" aria-hidden="true">{@html TOKEN_ICON_REGISTRY['debug']}</span>
			<span class="action-label">debug</span>
			<span class:chevron-open={dropdownOpen} class="chevron" aria-hidden="true">v</span>
		</button>

		{#if dropdownOpen}
			<div
				class="dropdown-overlay"
				role="presentation"
				onclick={() => (dropdownOpen = false)}
			></div>
			<div class="dropdown-menu" role="menu">
				{#each debugMenuItems as item (item.id)}
					<button
						type="button"
						class="dropdown-item"
						class:dropdown-item--disabled={!!item.disabled}
						role="menuitem"
						disabled={!!item.disabled}
						onclick={() => handleAction(item.onSelect)}
					>
						{item.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<div class="tabs-scroll">
		{#if markdownFile}
			<button
				type="button"
				class="tab tab--mode"
				class:active={previewMode === 'markdown'}
				onclick={() => onMarkdownSelect?.()}
			>
				index.md
			</button>
		{/if}

		{#if storyFile}
			<button
				type="button"
				class="tab tab--mode"
				class:active={previewMode === 'story'}
				onclick={() => onStorySelect?.()}
			>
				playground
			</button>
		{/if}

		{#if previewKind === 'json'}
			<button
				type="button"
				class="tab tab--mode"
				class:active={previewMode === 'json-tree'}
				onclick={() => onJsonTreeSelect?.()}
			>
				tree
			</button>
		{/if}

		{#each files as file (file.path)}
			<button
				type="button"
				class="tab"
				class:active={previewMode === 'file' && activeFilePath === file.path}
				onclick={() => onFileSelect?.(file.path)}
			>
				{file.name}
			</button>
		{/each}
	</div>
</div>

<style>
	.c-joint-tab-buttons {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.55rem 0.75rem 0.55rem 0.5rem;
		border-bottom: 1px solid var(--color-border-primary);
		background: var(--color-background-secondary);
	}

	.tabs-scroll {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem;
		flex: 1;
		min-width: 0;
	}

	.action-group {
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		flex-shrink: 0;
	}

	.entity-icon-shell {
		display: inline-grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border: 1px solid color-mix(in srgb, var(--color-primary-500) 35%, var(--color-border-primary));
		border-radius: 8px;
		background: color-mix(in srgb, var(--color-primary-500) 8%, var(--color-background-primary));
		color: var(--color-text-primary);
		flex-shrink: 0;
	}

	.entity-icon-shell--missing {
		border-color: color-mix(in srgb, var(--color-danger-500) 32%, var(--color-border-primary));
		background: color-mix(in srgb, var(--color-danger-500) 8%, var(--color-background-primary));
		color: var(--color-text-secondary);
	}

	.chevron {
		font-size: 10px;
		line-height: 1;
		transition: transform 140ms ease;
	}

	.chevron-open {
		transform: rotate(180deg);
	}

	.dropdown-overlay {
		position: fixed;
		inset: 0;
		z-index: 999;
	}

	.dropdown-menu {
		position: absolute;
		top: calc(100% + 4px);
		left: 0;
		z-index: 1000;
		min-width: 180px;
		display: flex;
		flex-direction: column;
		padding: 0.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 10px;
		background: var(--color-background-primary);
		box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
	}

	.dropdown-item {
		display: block;
		width: 100%;
		padding: 0.45rem 0.65rem;
		border: none;
		border-radius: 7px;
		background: transparent;
		color: var(--color-text-primary);
		font: inherit;
		font-size: 12px;
		text-align: left;
		cursor: pointer;
		white-space: nowrap;
	}

	.dropdown-item:hover {
		background: var(--color-background-secondary);
	}

	.dropdown-item--disabled {
		color: var(--color-text-secondary);
		cursor: not-allowed;
	}

	.dropdown-sep {
		margin: 0.25rem 0;
		border: none;
		border-top: 1px solid var(--color-border-primary);
	}

	.tab {
		flex: 0 0 auto;
		border: 1px solid var(--color-border-primary);
		border-radius: 8px;
		background: var(--color-background-primary);
		color: var(--color-text-secondary);
		padding: 0.35rem 0.55rem;
		font-family: var(--font-mono, monospace);
		font-size: 12px;
		cursor: pointer;
	}

	.tab.active {
		color: var(--color-text-primary);
		border-color: var(--color-primary-500);
	}

	.tab--mode {
		background: color-mix(in srgb, var(--color-primary-500) 10%, var(--color-background-primary));
	}

	.tab--icon {
		display: inline-grid;
		place-items: center;
		width: 36px;
		padding-inline: 0;
		padding-block: 0.42rem;
	}

	.tab--action {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		min-width: 0;
		padding-inline: 0.55rem 0.65rem;
	}

	.tab-icon {
		display: inline-grid;
		place-items: center;
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	.tab-icon :global(svg) {
		width: 16px;
		height: 16px;
	}

	.action-label {
		max-width: 11rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
