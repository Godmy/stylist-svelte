<script lang="ts">
	import type { RecipePlaygroundTreeNode } from '$stylist/playground/interface/recipe/playground-tree-node';

	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import { createPlaygroundTreeNodeState } from '$stylist/playground/function/state/playground-tree-node/index.svelte';

	import Self from './index.svelte';

	const ChevronRight = 'chevron-right';

	const Folder = 'folder';

	const FolderOpen = 'folder-open';

	const FileCode = 'file-code';

	let props: RecipePlaygroundTreeNode = $props();

	const state = createPlaygroundTreeNodeState(props);
</script>

ï»¿{#if state.node.type === 'category'}
	<div class="ptn-cat">
		<button
			onclick={state.handleToggle}
			class="_c1 _c1"
			class:focused={state.isFocused}
			style="padding-left: 0px"
		>
			<div class="ptn-chevron {state.isExpanded ? 'rotate-90' : ''} _c2">
				<BaseIcon
					name={ChevronRight}
					style="width:0.875rem;height:0.875rem;color:var(--color-text-tertiary)"
				/>
			</div>

			{#if state.config?.icon}
				<div class="ptn-icon">
					<BaseIcon
						name={state.config.icon}
						style="width:0.875rem;height:0.875rem"
						class={state.config.color}
					/>
				</div>
			{/if}

			<span class="ptn-cat-name">{state.node.name}</span>

			<span class="ptn-count">{state.node.count || 0}</span>
		</button>

		{#if state.isExpanded && state.hasChildren}
			<div class="ptn-children">
				<div
					class="ptn-vline {state.config.border}"
					style="position:absolute;top:0;bottom:0;left:14px;width:0.125rem;background:currentColor"
				></div>

				<div class="ptn-children-list">
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
	<div class="ptn-folder">
		<button
			onclick={state.handleClick}
			style={state.leftPadding}
			class="folder-node _c2 _c3"
			class:auto-selectable={state.isAutoSelectable}
			class:auto-selected={state.isAutoSelectable &&
				state.node.autoStory?.id === state.selectedStoryId}
			class:focused={state.isFocused}
			aria-current={state.isAutoSelectable && state.node.autoStory?.id === state.selectedStoryId
				? 'true'
				: undefined}
		>
			{#if !state.isAutoSelectable}
				<div class="ptn-chevron {state.isExpanded ? 'rotate-90' : ''} _c2">
					<BaseIcon
						name={ChevronRight}
						style="width:0.875rem;height:0.875rem;color:var(--color-text-tertiary)"
					/>
				</div>
			{:else}
				<div class="ptn-icon">
					<span class="ptn-dot"></span>
				</div>
			{/if}

			<div class="ptn-icon">
				{#if state.isAutoSelectable}
					<BaseIcon
						name={Folder}
						style="width:0.875rem;height:0.875rem;color:var(--playground-accent,var(--color-warning-500))"
					/>
				{:else if state.isExpanded}
					<BaseIcon
						name={FolderOpen}
						style="width:0.875rem;height:0.875rem;opacity:0.7"
						class={state.config.color}
					/>
				{:else}
					<BaseIcon
						name={Folder}
						style="width:0.875rem;height:0.875rem;color:var(--color-text-secondary)"
					/>
				{/if}
			</div>

			<span class="ptn-folder-name">{state.node.name}</span>

			<span class="ptn-count">{state.node.count || 0}</span>
		</button>

		{#if !state.isAutoSelectable && state.isExpanded && state.hasChildren}
			<div class="ptn-children-sub">
				<div
					class="ptn-vline-folder"
					style="position:absolute;top:0;bottom:0;width:1px;background:color-mix(in srgb,var(--color-border-primary) 82%,transparent);left:{state.level *
						12 +
						14}px"
				></div>

				<div class="ptn-children-list">
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
	<button
		onclick={state.handleComponentClick}
		style={state.leftPadding}
		class="component-node _c3"
		class:selected={state.isSelected}
		class:focused={state.isFocused}
		aria-current={state.isSelected ? 'true' : undefined}
	>
		<span class="component-indicator" aria-hidden="true"></span>

		<div class="ptn-comp-inner">
			<div class="ptn-icon">
				<BaseIcon name={FileCode} class="_c4" style="width:0.875rem;height:0.875rem" />
			</div>

			<span class="ptn-comp-name">{state.node.name}</span>
		</div>
	</button>
{/if}

<style>
	.ptn-cat {
		display: flex;

		flex-direction: column;

		gap: 0.125rem;
	}

	.ptn-folder {
		display: flex;

		flex-direction: column;

		gap: 0.125rem;
	}

	.ptn-chevron {
		width: 0.875rem;

		flex-shrink: 0;
	}

	.ptn-icon {
		width: 0.875rem;

		flex-shrink: 0;
	}

	.ptn-dot {
		display: inline-flex;

		height: 0.5rem;

		width: 0.5rem;

		border-radius: 9999px;

		background: var(--playground-accent, var(--color-warning-500));
	}

	.ptn-cat-name {
		min-width: 0;

		flex: 1;

		text-align: left;

		font-size: 0.75rem;

		font-weight: 600;

		color: var(--color-text-primary);
	}

	.ptn-folder-name {
		min-width: 0;

		flex: 1;

		text-align: left;

		font-size: 0.75rem;

		font-weight: 500;

		color: var(--color-text-secondary);
	}

	.ptn-count {
		width: 2rem;

		flex-shrink: 0;

		text-align: right;

		font-size: 0.75rem;

		font-weight: 500;

		color: var(--color-text-tertiary);

		font-variant-numeric: tabular-nums;
	}

	.ptn-children {
		position: relative;

		margin-top: 0.25rem;
	}

	.ptn-children-sub {
		position: relative;

		margin-top: 0.125rem;
	}

	.ptn-children-list {
		display: flex;

		flex-direction: column;

		gap: 0.125rem;
	}

	.ptn-comp-inner {
		display: flex;

		min-width: 0;

		flex: 1;

		align-items: center;

		gap: 0.5rem;
	}

	.ptn-comp-name {
		min-width: 0;

		flex: 1;

		overflow: hidden;

		text-overflow: ellipsis;

		white-space: nowrap;

		text-align: left;

		font-weight: 500;
	}

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

	._c1 {
		display: flex;

		width: 100%;

		align-items: center;

		gap: 0.5rem;

		border-radius: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-right: 0.5rem;

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	._c2 {
		display: flex;

		width: 100%;

		align-items: center;

		gap: 0.5rem;

		border-radius: 0.75rem;

		padding-top: 0.375rem;

		padding-bottom: 0.375rem;

		padding-right: 0.5rem;

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	._c3 {
		display: flex;

		width: 100%;

		align-items: center;

		gap: 0.5rem;

		border-radius: 0.75rem;

		border-width: 1px;

		border-style: solid;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-right: 0.5rem;

		padding-left: 0.375rem;

		font-size: 0.75rem;

		line-height: 1rem;

		color: var(--color-text-secondary);

		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	._c4 {
		transition-property: opacity;

		transition-duration: 150ms;
	}

	._c1:hover {
		background-color: color-mix(in srgb, var(--color-background-secondary) 78%, transparent);
	}

	._c2 {
		transition-property: transform;

		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

		transition-duration: 150ms;
	}

	._c3:hover {
		background-color: color-mix(in srgb, var(--color-background-secondary) 72%, transparent);
	}

	._c1 {
		transition-duration: var(--duration-200);
	}

	._c2 {
		transition-duration: var(--duration-200);
	}

	._c2 {
		transition-duration: var(--duration-200);
	}

	._c2 {
		transition-duration: var(--duration-200);
	}

	._c3 {
		transition-duration: var(--duration-150);
	}

	._c4 {
		opacity: var(--opacity-40);
	}

	.component-node:hover ._c4 {
		opacity: var(--opacity-100, 1);
	}
</style>
