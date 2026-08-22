<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';

	interface TabFile {
		name: string;
		path: string;
	}

	interface JointTabButtonsProps {
		files?: TabFile[];
		markdownFile?: TabFile | null;
		storyFile?: TabFile | null;
		selectedEntityName?: string;
		activeFilePath?: string;
		previewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
		previewKind?: 'svg' | 'json' | 'text';
		activeJoint?: string;
		hasDependencyPreview?: boolean;
		onFileSelect?: (path: string) => void;
		onMarkdownSelect?: () => void;
		onStorySelect?: () => void;
		onJsonTreeSelect?: () => void;
		onDependencySelect?: () => void;
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
		activeJoint = '',
		hasDependencyPreview = false,
		onFileSelect,
		onMarkdownSelect,
		onStorySelect,
		onJsonTreeSelect,
		onDependencySelect,
		class: className = ''
	}: JointTabButtonsProps = $props();

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

		if (activeJoint && hasRegisteredIcon(activeJoint)) {
			return activeJoint;
		}

		return NOT_FOUND_ICON_NAME;
	});

	const hasResolvedIcon = $derived(resolvedIconName !== NOT_FOUND_ICON_NAME);
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

		{#if hasDependencyPreview}
			<button
				type="button"
				class="tab tab--mode"
				class:active={previewMode === 'di'}
				onclick={() => onDependencySelect?.()}
			>
				DI
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
</style>
