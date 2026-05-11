<script lang="ts">
	import { TreeControlsStyleManager } from '$stylist/control/class/style-manager/tree-controls';
	import type { FolderTreeProps } from '$stylist/control/type/struct/folder-tree-props';
	import { createTreeExpansionState } from '$stylist/control/function/state/tree-expansion';
	let { nodes = [], class: className = '', ...restProps }: FolderTreeProps = $props();
	const state = createTreeExpansionState();
</script>

<div class={TreeControlsStyleManager.root('c-folder-tree', className)} {...restProps}>
	<ul class="space-y-1">
		{#each nodes as node}
			<li>
				<button
					type="button"
					class="w-full rounded px-2 py-1 text-left hover:bg-[var(--color-background-secondary)]"
					onclick={() => state.toggle(node.id)}
					>{node.children?.length ? (state.isOpen(node) ? '-' : '+') : ''} {node.label}</button
				>
				{#if node.children?.length && state.isOpen(node)}
					<ul class="mt-1 ml-5 space-y-1">
						{#each node.children as child}
							<li class="rounded bg-[var(--color-background-secondary)] px-2 py-1">
								{child.label}
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</div>
