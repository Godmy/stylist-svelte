<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import { ZipViewerStyleManager } from '$stylist/file/class/style-manager/zip-viewer';
	import createZipViewerState from '$stylist/file/function/state/zip-viewer/index.svelte';
	import type { Props } from '$stylist/file/type/struct/zip-viewer/props/-props';
	import { getEntryIcon } from '$stylist/file/function/script/zip-viewer-get-entry-icon';
	import { formatFileSize } from '$stylist/file/function/script/zip-viewer-format-file-size';

	let props: Props = $props();
	const state = createZipViewerState(props);
</script>

<div class={ZipViewerStyleManager.getBaseClasses(state.classes)} {...state.restProps}>
	<div class={ZipViewerStyleManager.getHeaderClasses(props.headerClass ?? '')}>
		<div class="zv-header-row">
			<BaseIcon
				name="archive"
				style="margin-right:0.75rem;width:1.5rem;height:1.5rem;color:var(--color-primary-500)"
			/>
			<div>
				<h3 class="zv-archive-name">{state.archiveName}</h3>
				<p class="zv-archive-count">{state.filteredEntries.length} items</p>
			</div>
		</div>

		{#if state.searchable}
			<div class="zv-search-wrap">
				<div class="zv-search-icon">
					<BaseIcon
						name="search"
						style="width:1.25rem;height:1.25rem;color:var(--color-text-tertiary)"
					/>
				</div>
				<input
					type="text"
					class={ZipViewerStyleManager.getSearchClasses()}
					placeholder="Search in archive..."
					value={state.searchQuery}
					oninput={state.handleSearchInput}
					disabled={state.disabled}
				/>
			</div>
		{/if}
	</div>

	<div class="zv-body">
		{#if state.zipTree.length === 0}
			<div class="zv-empty">
				{state.searchQuery ? 'No matching items found' : 'Archive is empty'}
			</div>
		{:else}
			<div class="zv-entries">
				{#each state.zipTree as entry}
					{@const entryIcon = getEntryIcon(entry)}
					<div
						class={ZipViewerStyleManager.getEntryClasses(
							entry.type === 'directory',
							props.entryClass ?? ''
						)}
					>
						<button
							type="button"
							class="zv-expand-btn"
							aria-label={state.expandedFolders.has(entry.path)
								? `Collapse ${entry.name}`
								: `Expand ${entry.name}`}
							onclick={() => state.toggleFolder(entry)}
							disabled={entry.type === 'file' || state.disabled}
						>
							{#if entry.type === 'directory'}
								{#if state.expandedFolders.has(entry.path)}
									<BaseIcon
										name="chevron-down"
										style="width:1rem;height:1rem;color:var(--color-text-secondary)"
									/>
								{:else}
									<BaseIcon
										name="chevron-right"
										style="width:1rem;height:1rem;color:var(--color-text-secondary)"
									/>
								{/if}
							{/if}
						</button>

						<BaseIcon name={entryIcon} class={ZipViewerStyleManager.getIconClasses(entry.type)} />

						<div class="zv-entry-info">
							<div class="zv-entry-name-row">
								<span class="zv-entry-name">{entry.name}</span>
								{#if entry.type === 'directory'}
									<span class="zv-dir-badge">Directory</span>
								{/if}
							</div>
							<div class="zv-entry-meta">
								{#if entry.size !== undefined}
									<span>{formatFileSize(entry.size)}</span>
								{/if}
								{#if entry.modified}
									<span class="zv-sep">•</span>
									<span>{entry.modified.toLocaleDateString()}</span>
								{/if}
							</div>
						</div>

						<div class="zv-entry-actions">
							{#if entry.isText}
								<Button
									variant="ghost"
									size="sm"
									onclick={() => state.handlePreview(entry)}
									disabled={state.disabled}
									title="Preview"
								>
									<BaseIcon
										name="eye"
										style="width:1rem;height:1rem;color:var(--color-text-secondary)"
									/>
								</Button>
							{/if}
							<Button
								variant="ghost"
								size="sm"
								onclick={() => state.handleDownload(entry)}
								disabled={state.disabled}
								title="Download"
							>
								<BaseIcon
									name="download"
									style="width:1rem;height:1rem;color:var(--color-text-secondary)"
								/>
							</Button>
							<Button
								variant="ghost"
								size="sm"
								onclick={() => state.handleExtract(entry)}
								disabled={state.disabled}
								title="Extract"
							>
								<BaseIcon
									name="external-link"
									style="width:1rem;height:1rem;color:var(--color-text-secondary)"
								/>
							</Button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.zv-header-row {
		display: flex;
		align-items: center;
	}
	.zv-archive-name {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.zv-archive-count {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.zv-search-wrap {
		position: relative;
		margin-top: 0.75rem;
	}

	.zv-search-icon {
		pointer-events: none;
		position: absolute;
		inset-y: 0;
		left: 0;
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
	}

	.zv-body {
		max-height: 500px;
		overflow-y: auto;
	}

	.zv-empty {
		padding: 2rem 0;
		text-align: center;
		color: var(--color-text-secondary);
	}

	.zv-entries {
		border-top: 1px solid #e5e7eb;
	}

	.zv-expand-btn {
		margin-right: 0.5rem;
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		flex-shrink: 0;
	}

	.zv-expand-btn:hover {
		background-color: var(--color-background-tertiary);
	}
	.zv-expand-btn:focus {
		outline: none;
	}

	.zv-entry-info {
		min-width: 0;
		flex: 1;
	}
	.zv-entry-name-row {
		display: flex;
		align-items: center;
	}

	.zv-entry-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.zv-dir-badge {
		margin-left: 0.5rem;
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-primary-800);
	}

	.zv-entry-meta {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.zv-sep {
		margin: 0 0.5rem;
	}

	.zv-entry-actions {
		margin-left: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
