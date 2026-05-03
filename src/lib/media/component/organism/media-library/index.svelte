<script lang="ts">
	import {
		createMediaLibraryState
	} from '$stylist/media/function/state/media-library';
	import type { MediaLibraryProps } from '$stylist/media/type/struct/media-library';
	import { Icon as BaseIcon } from '$stylist/media';

	let props: MediaLibraryProps = $props();
	const state = createMediaLibraryState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<!-- Header with search and controls -->
	<div class={`border-b px-4 py-3 bg-[var(--color-background-primary)] ${state.headerClass}`}>
		<div class="flex items-center">
			<div class="flex-1">
				<div class="relative rounded-md shadow-sm">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<BaseIcon name={state.icons.SEARCH} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
					</div>
					<input
						type="text"
						class="focus:ring-blue-500 focus:border-[var(--color-primary-500)] block w-full pl-10 pr-12 py-2 border border-[var(--color-border-primary)] rounded-md text-sm"
						placeholder={state.searchPlaceholder}
						bind:value={state.searchQuery}
					/>
				</div>
			</div>

			<div class="ml-4 flex items-center space-x-3">
				{#if state.allowUpload}
					<button
						type="button"
						class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
						onclick={() => state.triggerFileInput()}
					>
						<BaseIcon name={state.icons.UPLOAD} class="h-4 w-4 mr-1" />
						Upload
					</button>
				{/if}

				<div class="flex border border-[var(--color-border-primary)] rounded-md">
					<button
						type="button"
						class={`p-2 rounded-l-md ${
							state.selectedViewMode === 'grid'
								? 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
								: 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)]'
						}`}
						onclick={() => (state.selectedViewMode = 'grid')}
						title="Grid view"
					>
						<BaseIcon name={state.icons.GRID_3X3} class="h-4 w-4" />
					</button>
					<button
						type="button"
						class={`p-2 rounded-r-md ${
							state.selectedViewMode === 'list'
								? 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
								: 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)]'
						}`}
						onclick={() => (state.selectedViewMode = 'list')}
						title="List view"
					>
						<BaseIcon name={state.icons.LIST} class="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>

		<!-- Hidden file input -->
		<input
			type="file"
			bind:this={state.fileInputRef}
			class="hidden"
			onchange={(e) => state.handleFileUpload(e)}
			multiple
			accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
		/>
	</div>

	<!-- Toolbar with selection actions -->
	{#if state.selectedItems.length > 0}
		<div
			class={`border-b px-4 py-2 bg-[var(--color-primary-50)] flex items-center justify-between ${state.toolbarClass}`}
		>
			<span class="text-sm font-medium text-[var(--color-primary-800)]">
				{state.selectedItems.length} item{state.selectedItems.length !== 1 ? 's' : ''} selected
			</span>
			<div class="flex space-x-2">
				{#if state.allowDownload}
					<button
						type="button"
						class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-[var(--color-primary-700)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)] focus:outline-none"
					>
						<BaseIcon name={state.icons.DOWNLOAD} class="h-4 w-4 mr-1" />
						Download
					</button>
				{/if}
				{#if state.allowDelete}
					<button
						type="button"
						class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-[var(--color-danger-700)] bg-[var(--color-danger-100)] hover:bg-[var(--color-danger-200)] focus:outline-none"
					>
						<BaseIcon name={state.icons.TRASH_2} class="h-4 w-4 mr-1" />
						Delete
					</button>
				{/if}
				<button
					type="button"
					class="inline-flex items-center px-3 py-1 border border-[var(--color-border-primary)] text-xs font-medium rounded text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none"
					onclick={() => (state.selectedItems = [])}
				>
					<BaseIcon name={state.icons.X} class="h-4 w-4 mr-1" />
					Clear
				</button>
			</div>
		</div>
	{/if}

	<!-- Media grid/list -->
	<div
		class={`p-4 ${state.selectedViewMode === 'grid' ? `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ${state.gridClass}` : 'space-y-2'}`}
	>
		{#each state.filteredItems as item}
			{#if state.selectedViewMode === 'grid'}
				<!-- Grid view item -->
				<div
					class={`border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
						state.selectedItems.includes(item.id)
							? 'ring-2 ring-blue-500'
							: 'border-[var(--color-border-primary)]'
					} ${state.itemClass}`}
					role="button"
					tabindex="0"
					onclick={(e) => {
						e.stopPropagation();
						state.handleItemSelect(item);
						state.toggleItemSelection(item.id);
					}}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							e.stopPropagation();
							state.handleItemSelect(item);
							state.toggleItemSelection(item.id);
						}
					}}
				>
					<div
						class="aspect-square bg-[var(--color-background-secondary)] flex items-center justify-center"
					>
						{#if item.thumbnail}
							<img src={item.thumbnail} alt={item.name} class="w-full h-full object-cover" />
						{:else}
							<BaseIcon
								name={state.getFileIcon(item.type)}
								class="h-10 w-10 text-[var(--color-text-tertiary)]"
							/>
						{/if}
					</div>
					<div class="p-2">
						<p class="text-xs font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
						<p class="text-xs text-[var(--color-text-secondary)]">
							{state.formatMediaFileSize(item.size)}
						</p>
					</div>
				</div>
			{:else}
				<!-- List view item -->
				<div
					class={`flex items-center p-3 border rounded-lg ${
						state.selectedItems.includes(item.id)
							? 'bg-[var(--color-primary-50)] border-[var(--color-primary-500)]'
							: 'border-[var(--color-border-primary)]'
					} ${state.itemClass}`}
					role="button"
					tabindex="0"
					onclick={(e) => {
						e.stopPropagation();
						state.handleItemSelect(item);
						state.toggleItemSelection(item.id);
					}}
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							e.stopPropagation();
							state.handleItemSelect(item);
							state.toggleItemSelection(item.id);
						}
					}}
				>
					<div
						class="flex-shrink-0 w-16 h-16 bg-[var(--color-background-secondary)] rounded flex items-center justify-center"
					>
						<BaseIcon
							name={state.getFileIcon(item.type)}
							class="h-8 w-8 text-[var(--color-text-tertiary)]"
						/>
					</div>
					<div class="ml-4 flex-1 min-w-0">
						<p class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</p>
						<p class="text-sm text-[var(--color-text-secondary)]">
							{state.formatMediaFileSize(item.size)} • {state.formatMediaDate(item.uploadDate)}
						</p>
					</div>
					<div class="ml-4 flex space-x-2">
						{#if state.allowDownload}
							<button
								type="button"
								class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
								onclick={(e) => {
									e.stopPropagation();
									state.handleItemDownload(item.id);
								}}
								title="Download"
							>
								<BaseIcon name={state.icons.DOWNLOAD} class="h-5 w-5" />
							</button>
						{/if}
						<button
							type="button"
							class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
							onclick={(e) => {
								e.stopPropagation();
								state.handleItemSelect(item);
							}}
							title="View"
						>
							<BaseIcon name={state.icons.EYE} class="h-5 w-5" />
						</button>
						{#if state.allowDelete}
							<button
								type="button"
								class="text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)]"
								onclick={(e) => {
									e.stopPropagation();
									state.handleItemDelete(item.id);
								}}
								title="Delete"
							>
								<BaseIcon name={state.icons.TRASH_2} class="h-5 w-5" />
							</button>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	</div>

	<!-- Empty state -->
	{#if state.filteredItems.length === 0}
		<div class="py-12 text-center">
			<BaseIcon
				name={state.icons.FOLDER}
				class="h-12 w-12 text-[var(--color-text-tertiary)] mx-auto mb-2"
			/>
			<h3 class="text-sm font-medium text-[var(--color-text-primary)] mb-1">No media files</h3>
			<p class="text-sm text-[var(--color-text-secondary)]">
				{state.searchQuery ? 'No files match your search' : 'Upload files to get started'}
			</p>
			{#if state.allowUpload && !state.searchQuery}
				<button
					type="button"
					class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none"
					onclick={() => state.triggerFileInput()}
				>
					<BaseIcon name={state.icons.UPLOAD} class="h-4 w-4 mr-1" />
					Upload files
				</button>
			{/if}
		</div>
	{/if}
</div>
