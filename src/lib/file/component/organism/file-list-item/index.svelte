<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { Button } from '$lib';
	import { createFileListItemState } from '$stylist/file/function/state/file-list-item';
	import { formatFileSize } from '$stylist/file/function/script/file-list-item-format-file-size';
	import type { Props } from '$stylist/file/type/struct/file-list-item/props';

	let props: Props = $props();
	const state = createFileListItemState(props);
</script>

<div
	class={`file-list-item flex cursor-pointer items-center border-b border-[var(--color-border-primary)] p-3 ${
		state.isSelected
			? 'bg-[var(--color-primary-50)]'
			: 'hover:bg-[var(--color-background-secondary)]'
	} ${state.variant === 'compact' ? 'py-2' : ''} ${state.disabled ? 'cursor-not-allowed opacity-[var(--opacity-50)]' : ''} ${state.classes}`}
	onclick={state.handleSelect}
	ondblclick={state.handleDoubleClick}
	{...state.restProps}
>
	{#if state.enableSelection}
		<input
			type="checkbox"
			class="h-4 w-4 rounded text-[var(--color-primary-600)] focus:ring-blue-500"
			checked={state.isSelected}
			onclick={(event) => event.stopPropagation()}
			onchange={state.handleSelect}
			disabled={state.disabled}
		/>
	{/if}

	<div class="ml-3 flex-shrink-0">
		<BaseIcon name={state.iconName} class="h-5 w-5 text-[var(--color-text-secondary)]" />
	</div>

	{#if state.showThumbnail && state.item.thumbnail}
		<div
			class="ml-3 h-8 w-8 flex-shrink-0 overflow-hidden rounded border border-[var(--color-border-primary)]"
		>
			<img src={state.item.thumbnail} alt={state.item.name} class="h-full w-full object-cover" />
		</div>
	{/if}

	<div class="ml-3 min-w-0 flex-1">
		<div class={`truncate font-medium ${props.cellClass ?? ''}`}>
			{state.item.name}
			{#if state.item.type === 'folder'}
				<span
					class="ml-2 inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-800)]"
				>
					Folder
				</span>
			{/if}
		</div>

		{#if state.variant !== 'compact'}
			<div class="mt-1 flex items-center text-xs text-[var(--color-text-secondary)]">
				{#if state.showSize && state.item.size}
					<span>{formatFileSize(state.item.size)}</span>
				{/if}
				{#if state.showModified && state.item.modified}
					<span class="mx-2">•</span>
					<span>{state.item.modified.toLocaleDateString()}</span>
				{/if}
				{#if state.showOwner && state.item.owner}
					<span class="mx-2">•</span>
					<span>{state.item.owner}</span>
				{/if}
			</div>
		{/if}
	</div>

	<div class="ml-4 flex items-center space-x-1">
		<Button
			variant="ghost"
			size="sm"
			onclick={(event) => {
				event.stopPropagation();
				state.handleAction('preview');
			}}
			disabled={state.disabled}
		>
			<BaseIcon name="eye" class="h-4 w-4 text-[var(--color-text-secondary)]" />
		</Button>
		<Button
			variant="ghost"
			size="sm"
			onclick={(event) => {
				event.stopPropagation();
				state.handleAction('download');
			}}
			disabled={state.disabled}
		>
			<BaseIcon name="download" class="h-4 w-4 text-[var(--color-text-secondary)]" />
		</Button>
		<Button
			variant="ghost"
			size="sm"
			onclick={(event) => {
				event.stopPropagation();
				state.handleAction('more');
			}}
			disabled={state.disabled}
		>
			<BaseIcon name="more-horizontal" class="h-4 w-4 text-[var(--color-text-secondary)]" />
		</Button>
	</div>
</div>
