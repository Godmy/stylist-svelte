<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createPlaygroundTreeNodeState from '$stylist/playground/function/state/playground-tree-node/index.svelte';

	import Self from './index.svelte';
	import type { PlaygroundTreeNodeProps } from '$stylist/playground/type/struct/playground-tree-node-props';
	const ChevronRight = 'chevron-right';
	const Folder = 'folder';
	const FolderOpen = 'folder-open';
	const FileCode = 'file-code';

	let props: PlaygroundTreeNodeProps = $props();
	const state = createPlaygroundTreeNodeState(props);
</script>

{#if state.node.type === 'category'}
	<!-- Category Node -->
	<div class="space-y-0.5">
		<button
			onclick={state.handleToggle}
			class="group flex w-full items-center gap-2 rounded-xl py-2 pr-2 transition-all duration-[var(--duration-200)] hover:bg-[color-mix(in_srgb,var(--color-background-secondary)_78%,transparent)]"
			class:focused={state.isFocused}
			style="padding-left: 0px"
		>
			<!-- Chevron -->
			<div
				class="w-3.5 flex-shrink-0 transition-transform duration-[var(--duration-200)] {state.isExpanded
					? 'rotate-90'
					: ''}"
			>
				<BaseIcon name={ChevronRight} class="h-3.5 w-3.5 text-[var(--color-text-tertiary)]" />
			</div>

			<!-- Icon -->
			{#if state.config?.icon}
				<div class="w-3.5 flex-shrink-0">
					<BaseIcon name={state.config.icon} class="h-3.5 w-3.5 {state.config.color}" />
				</div>
			{/if}

			<!-- Name -->
			<span class="min-w-0 flex-1 text-left text-xs font-semibold text-[var(--color-text-primary)]">
				{state.node.name}
			</span>

			<!-- Count -->
			<span
				class="w-8 flex-shrink-0 text-right text-xs font-bold text-[var(--color-text-tertiary)] tabular-nums"
			>
				{state.node.count || 0}
			</span>
		</button>

		<!-- Category Children with border -->
		{#if state.isExpanded && state.hasChildren}
			<div class="relative mt-1">
				<!-- Vertical border line -->
				<div
					class="absolute top-0 bottom-0 left-[14px] w-0.5 {state.config.border} bg-current"
				></div>

				<!-- Children -->
				<div class="space-y-0.5">
					{#each state.node.children || [] as child}
						<Self
							node={child}
							level={state.level + 1}
							expandedNodes={state.expandedNodes}
							categoryConfig={state.categoryConfig}
							onToggle={state.onToggle}
							onComponentClick={state.onComponentClick}
							selectedStoryId={state.selectedStoryId}
							focusedPath={state.focusedPath}
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{:else if state.node.type === 'folder'}
	<!-- Folder Node -->
	<div class="space-y-0.5">
		<button
			onclick={state.handleClick}
			style={state.leftPadding}
			class="folder-node group flex w-full items-center gap-2 rounded-xl py-1.5 pr-2 transition-all duration-[var(--duration-200)] hover:bg-[color-mix(in_srgb,var(--color-background-secondary)_72%,transparent)]"
			class:auto-selectable={state.isAutoSelectable}
			class:auto-selected={state.isAutoSelectable &&
				state.node.autoStory?.id === state.selectedStoryId}
			class:focused={state.isFocused}
			aria-current={state.isAutoSelectable && state.node.autoStory?.id === state.selectedStoryId
				? 'true'
				: undefined}
		>
			<!-- Chevron -->
			{#if !state.isAutoSelectable}
				<div
					class="w-3.5 flex-shrink-0 transition-transform duration-[var(--duration-200)] {state.isExpanded
						? 'rotate-90'
						: ''}"
				>
					<BaseIcon name={ChevronRight} class="h-3.5 w-3.5 text-[var(--color-text-tertiary)]" />
				</div>
			{:else}
				<div class="w-3.5 flex-shrink-0">
					<span
						class="inline-flex h-2 w-2 rounded-full bg-[var(--playground-accent,var(--color-warning-500))]"
					></span>
				</div>
			{/if}

			<!-- Folder Icon -->
			<div class="w-3.5 flex-shrink-0">
				{#if state.isAutoSelectable}
					<BaseIcon
						name={Folder}
						class="h-3.5 w-3.5 text-[var(--playground-accent,var(--color-warning-500))]"
					/>
				{:else if state.isExpanded}
					<BaseIcon
						name={FolderOpen}
						class="h-3.5 w-3.5 {state.config.color} opacity-[var(--opacity-70)]"
					/>
				{:else}
					<BaseIcon name={Folder} class="h-3.5 w-3.5 text-[var(--color-text-secondary)]" />
				{/if}
			</div>

			<!-- Name -->
			<span class="min-w-0 flex-1 text-left text-xs font-medium text-[var(--color-text-secondary)]">
				{state.node.name}
			</span>

			<!-- Count -->
			<span
				class="w-8 flex-shrink-0 text-right text-xs font-medium text-[var(--color-text-tertiary)] tabular-nums"
			>
				{state.node.count || 0}
			</span>
		</button>

		<!-- Folder Children with border -->
		{#if !state.isAutoSelectable && state.isExpanded && state.hasChildren}
			<div class="relative mt-0.5">
				<!-- Vertical border line -->
				<div
					class="absolute top-0 bottom-0 w-px bg-[color-mix(in_srgb,var(--color-border-primary)_82%,transparent)]"
					style="left: {state.level * 12 + 14}px"
				></div>

				<!-- Children -->
				<div class="space-y-0.5">
					{#each state.node.children || [] as child}
						<Self
							node={child}
							level={state.level + 1}
							expandedNodes={state.expandedNodes}
							categoryConfig={state.categoryConfig}
							onToggle={state.onToggle}
							onComponentClick={state.onComponentClick}
							selectedStoryId={state.selectedStoryId}
							focusedPath={state.focusedPath}
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{:else if state.node.type === 'component' && state.node.story}
	<!-- Component Node -->
	<button
		onclick={state.handleComponentClick}
		style={state.leftPadding}
		class="component-node group flex w-full items-center gap-2 rounded-xl border border-transparent py-2 pr-2 pl-1.5 text-xs text-[var(--color-text-secondary)] transition-all duration-[var(--duration-150)]"
		class:selected={state.isSelected}
		class:focused={state.isFocused}
		aria-current={state.isSelected ? 'true' : undefined}
	>
		<span class="component-indicator" aria-hidden="true"></span>
		<div class="flex min-w-0 flex-1 items-center gap-2">
			<div class="w-3.5 flex-shrink-0">
				<BaseIcon
					name={FileCode}
					class="h-3.5 w-3.5 opacity-[var(--opacity-40)] transition-opacity group-hover:opacity-[var(--opacity-100)]"
				/>
			</div>
			<span class="min-w-0 flex-1 truncate text-left font-medium">
				{state.node.name}
			</span>
		</div>
	</button>
{/if}

<style>
	.component-node {
		position: relative;
	}

	.component-node:hover {
		background: color-mix(in srgb, var(--color-background-secondary) 76%, transparent);
		transform: translateX(2px);
	}

	.component-node.selected {
		color: var(--playground-accent, var(--color-warning-500));
		background-color: var(
			--playground-accent-surface,
			color-mix(in srgb, var(--color-warning-500) 12%, transparent)
		);
		border-color: color-mix(
			in srgb,
			var(--playground-accent, var(--color-warning-500)) 45%,
			transparent
		);
		box-shadow: 0 10px 24px
			color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 18%, transparent);
	}

	.component-indicator {
		width: var(--size-0_35rem);
		height: var(--spacing-5);
		border-radius: var(--border-radius-full);
		background-color: transparent;
		transition: background-color var(--duration-120) var(--animation-ease);
		flex-shrink: 0;
	}

	.component-node.selected .component-indicator {
		background-color: var(--playground-accent, var(--color-warning-500));
	}

	.folder-node.auto-selectable {
		border: 1px solid transparent;
	}

	.folder-node.auto-selected {
		background-color: var(
			--playground-accent-surface,
			color-mix(in srgb, var(--color-warning-500) 12%, transparent)
		);
		border-color: color-mix(
			in srgb,
			var(--playground-accent, var(--color-warning-500)) 30%,
			transparent
		);
		color: var(--playground-accent, var(--color-warning-500));
		box-shadow: 0 10px 20px
			color-mix(in srgb, var(--playground-accent, var(--color-warning-500)) 14%, transparent);
	}

	.folder-node.auto-selectable:hover {
		border-color: color-mix(
			in srgb,
			var(--playground-accent, var(--color-warning-500)) 25%,
			transparent
		);
	}

	/* Keyboard navigation focus styles */
	button.focused {
		background-color: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
		outline: 2px solid color-mix(in srgb, var(--color-primary-500) 50%, transparent);
		outline-offset: -2px;
	}

	:global(.dark) button.focused {
		background-color: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
		outline-color: color-mix(in srgb, var(--color-primary-500) 60%, transparent);
	}
</style>
