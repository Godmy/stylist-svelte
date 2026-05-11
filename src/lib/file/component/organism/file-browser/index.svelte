<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createFileBrowserState } from '$stylist/file/function/state/file-browser';
	import { getItemCount } from '$stylist/file/function/script/file-browser-get-item-count';
	import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';
	import type { Props } from '$stylist/file/type/struct/file-browser/props';

	let props: Props = $props();
	const state = createFileBrowserState(props);
</script>

<div class={`folder-tree ${state.classes}`} {...state.restProps}>
	<ul role="tree" class="space-y-1">
		{#each state.items as item}
			{@render TreeNode(item)}
		{/each}
	</ul>
</div>

{#snippet TreeNode(item: SlotFolderItem)}
	<li
		role="treeitem"
		aria-expanded={item.children?.length ? state.isExpanded(item.id) : undefined}
		aria-selected={state.selectedItem?.id === item.id}
		class="select-none"
	>
		<div
			class={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm ${
				state.selectedItem?.id === item.id
					? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]'
					: 'hover:bg-[var(--color-background-secondary)]'
			} ${state.disabled ? 'opacity-[var(--opacity-50)]' : ''} ${props.itemClass ?? ''}`}
			role="button"
			tabindex={state.disabled ? -1 : 0}
			onclick={() => {
				state.handleSelect(item);
				if (item.type !== 'file') {
					state.toggleItem(item);
				}
			}}
			onkeydown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					state.handleSelect(item);
					if (item.type !== 'file') {
						state.toggleItem(item);
					}
				} else if (
					event.key === 'ArrowRight' &&
					item.children?.length &&
					!state.isExpanded(item.id)
				) {
					state.toggleItem(item);
				} else if (
					event.key === 'ArrowLeft' &&
					item.children?.length &&
					state.isExpanded(item.id)
				) {
					state.toggleItem(item);
				}
			}}
		>
			{#if item.children}
				<button
					type="button"
					class="mr-1 flex h-5 w-5 items-center justify-center rounded hover:bg-[var(--color-background-tertiary)] focus:outline-none"
					aria-label={state.isExpanded(item.id) ? `Collapse ${item.name}` : `Expand ${item.name}`}
					onclick={(event) => {
						event.stopPropagation();
						state.toggleItem(item);
					}}
					disabled={state.disabled}
				>
					{#if state.isExpanded(item.id)}
						<BaseIcon name="chevron-down" class="h-4 w-4 text-[var(--color-text-secondary)]" />
					{:else}
						<BaseIcon name="chevron-right" class="h-4 w-4 text-[var(--color-text-secondary)]" />
					{/if}
				</button>
			{:else}
				<span class="mr-1 h-5 w-5"></span>
			{/if}

			<div class="flex min-w-0 flex-1 items-center">
				{#if item.type === 'folder'}
					{#if state.isExpanded(item.id)}
						<BaseIcon
							name="folder-open"
							class="mr-2 h-5 w-5 flex-shrink-0 text-[var(--color-primary-600)]"
						/>
					{:else}
						<BaseIcon
							name="folder"
							class="mr-2 h-5 w-5 flex-shrink-0 text-[var(--color-primary-600)]"
						/>
					{/if}
				{:else}
					<BaseIcon
						name="file"
						class="mr-2 h-5 w-5 flex-shrink-0 text-[var(--color-text-secondary)]"
					/>
				{/if}

				<span class="truncate">{item.name}</span>
			</div>

			{#if state.showItemCount && item.children}
				<span class="ml-2 rounded-full bg-[var(--color-background-tertiary)] px-2 py-0.5 text-xs">
					{getItemCount(item)}
				</span>
			{/if}
		</div>

		{#if item.children && state.isExpanded(item.id)}
			<ul role="group" class="mt-1 ml-6 space-y-1">
				{#each item.children as child}
					{@render TreeNode(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}
