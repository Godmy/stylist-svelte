<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import { createPlaygroundComponentCatalogState } from '$stylist/playground/function/state/playground-component-catalog';
	import type { PlaygroundComponentCatalogViewMode } from '$stylist/playground/type/struct/playground-component-catalog-view-mode';
	import type { PlaygroundComponentCatalogSortBy } from '$stylist/playground/type/struct/playground-component-catalog-sort-by';
	import type { PlaygroundComponentCatalogComponentCatalogStory } from '$stylist/playground/type/struct/playground-component-catalog-component-catalog-story';
	import type { PlaygroundComponentCatalogComponentCatalogStats } from '$stylist/playground/type/struct/playground-component-catalog-component-catalog-stats';
	import type { PlaygroundComponentCatalogProps } from '$stylist/playground/type/struct/playground-component-catalog-props';
	const Search = 'search';
	const Filter = 'filter';
	const Grid = 'grid';
	const List = 'list';
	const SortAsc = 'sort-asc';
	const X = 'x';
	const Tag = 'tag';
	const Code = 'code';
	const Layers = 'layers';
	const Package = 'package';
	const ArrowRight = 'arrow-right';
	const Sparkles = 'sparkles';

	let props: PlaygroundComponentCatalogProps = $props();
	const state = createPlaygroundComponentCatalogState(props);
</script>

<div
	class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
>
	<div class="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
		<div class="mb-6 space-y-4">
			<div class="flex items-center gap-4">
				<div class="relative flex-1">
					<BaseIcon
						name={Search}
						class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-orange-400"
					/>
					<input
						type="text"
						value={state.searchQuery}
						oninput={(event) =>
							state.onSearchQueryChange((event.currentTarget as HTMLInputElement).value)}
						placeholder="Search components... (try 'button', 'input', 'card')"
						class="w-full rounded-lg border-2 border-gray-200 bg-white py-3 pr-4 pl-12 text-gray-900 placeholder-gray-400 shadow-sm transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-orange-400 dark:focus:ring-orange-900/50"
					/>
					{#if state.searchQuery}
						<button
							onclick={() => state.onSearchQueryChange('')}
							class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-1.5 text-gray-400 transition-all hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400"
						>
							<BaseIcon name={X} class="h-4 w-4" />
						</button>
					{/if}
				</div>

				<div
					class="flex items-center gap-1 rounded-lg border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 p-1.5 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
				>
					<button
						onclick={() => state.onViewModeChange('grid')}
						class="rounded-md px-3 py-2 transition-all duration-[var(--duration-200)] {state.viewMode ===
						'grid'
							? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
							: 'text-gray-400 hover:bg-white/50 hover:text-orange-600 dark:text-gray-500 dark:hover:bg-gray-700/50 dark:hover:text-orange-400'}"
						title="Grid view"
					>
						<BaseIcon name={Grid} class="h-5 w-5" />
					</button>
					<button
						onclick={() => state.onViewModeChange('list')}
						class="rounded-md px-3 py-2 transition-all duration-[var(--duration-200)] {state.viewMode ===
						'list'
							? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
							: 'text-gray-400 hover:bg-white/50 hover:text-orange-600 dark:text-gray-500 dark:hover:bg-gray-700/50 dark:hover:text-orange-400'}"
						title="List view"
					>
						<BaseIcon name={List} class="h-5 w-5" />
					</button>
				</div>

				<div class="relative">
					<select
						value={state.sortBy}
						onchange={(event) =>
							state.onSortByChange(
								(event.currentTarget as HTMLSelectElement).value as PlaygroundComponentCatalogSortBy
							)}
						class="min-w-[180px] cursor-pointer appearance-none rounded-lg border-2 border-gray-200 bg-white py-3 pr-12 pl-4 text-gray-900 shadow-sm transition-colors hover:border-orange-400 focus:border-orange-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-orange-500 dark:focus:border-orange-400"
						style="color-scheme: light dark;"
					>
						<option value="name" class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
							>Sort by Name</option
						>
						<option value="category" class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
							>Sort by Category</option
						>
						<option value="recent" class="bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
							>Recently Updated</option
						>
					</select>
					<div class="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
						<BaseIcon name={SortAsc} class="h-4 w-4 text-gray-400" />
					</div>
				</div>

				<button
					onclick={state.onToggleFilters}
					class="rounded-lg border-2 px-4 py-3 shadow-sm transition-all {state.showFilters
						? 'border-orange-500 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
						: 'border-gray-200 bg-white text-gray-500 hover:border-orange-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-orange-500'}"
					title={state.showFilters ? 'Hide filters' : 'Show filters'}
				>
					<BaseIcon name={Filter} class="h-5 w-5" />
				</button>
			</div>

			{#if state.showFilters}
				<div
					class="space-y-6 rounded-xl border-2 border-orange-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
				>
					<div>
						<h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Categories</h3>
						<div class="flex flex-wrap gap-3">
							{#each state.categories as category}
								{@const colors = state.getCategoryColor(category)}
								{@const isSelected = state.selectedCategories.has(category)}
								<button
									onclick={() => state.onToggleCategory(category)}
									class="rounded-xl border-2 px-5 py-2.5 text-sm font-bold shadow-sm transition-all hover:scale-105 {isSelected
										? 'border-orange-500 bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg ring-4 ring-orange-200 dark:ring-orange-900/50'
										: colors.bg +
											' ' +
											colors.text +
											' ' +
											colors.border +
											' hover:border-orange-400 hover:shadow-md dark:hover:border-orange-500'}"
								>
									{category}
									<span
										class="ml-2 {isSelected
											? 'opacity-[var(--opacity-90)]'
											: 'opacity-[var(--opacity-70)]'} text-xs"
									>
										({state.categoryCounts[category] ?? 0})
									</span>
								</button>
							{/each}
						</div>
					</div>

					<div>
						<h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">Tags</h3>
						<div class="flex flex-wrap gap-2">
							{#each state.tags.slice(0, 20) as tag}
								{@const isSelected = state.selectedTags.has(tag)}
								<button
									onclick={() => state.onToggleTag(tag)}
									class="flex items-center gap-1.5 rounded-lg border-2 px-3 py-2 text-sm font-bold shadow-sm transition-all {isSelected
										? 'border-purple-500 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg ring-4 ring-purple-200 dark:ring-purple-900/50'
										: 'border-gray-300 bg-gray-100 text-gray-700 hover:scale-105 hover:border-purple-400 hover:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-purple-500'}"
								>
									<BaseIcon name={Tag} class="h-3.5 w-3.5" />
									{tag}
								</button>
							{/each}
						</div>
					</div>

					{#if state.hasActiveFilters}
						<div class="border-t border-gray-200 pt-4 dark:border-gray-700">
							<button
								onclick={state.onClearFilters}
								class="flex items-center gap-2 rounded-xl border-2 border-red-400 bg-gradient-to-r from-red-500 to-pink-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
							>
								<BaseIcon name={X} class="h-4 w-4" />
								Clear all filters
							</button>
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<div
			class="mb-6 rounded-lg border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 text-sm text-gray-700 shadow-sm dark:from-gray-800 dark:to-gray-900 dark:text-gray-300"
		>
			Showing <span class="font-bold text-orange-600 dark:text-orange-400"
				>{state.stats.filtered}</span
			>
			of <span class="font-bold text-orange-600 dark:text-orange-400">{state.stats.total}</span> components
		</div>

		{#if state.viewMode === 'grid'}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each state.stories as story}
					{@const colors = state.getCategoryColor(story.category)}
					<button
						onclick={() => state.onOpenStory(story.id)}
						class="group relative rounded-2xl border-2 border-gray-200 bg-white p-6 text-left shadow-md transition-all hover:-translate-y-2 hover:scale-105 hover:border-orange-400 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500"
					>
						<div
							class="mb-6 h-32 w-full rounded-xl bg-gradient-to-br {colors.bg} border-2 {colors.border} relative flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105"
						>
							<div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
							<BaseIcon
								name={state.getCategoryIcon(story.category)}
								class="h-16 w-16 {colors.text} opacity-[var(--opacity-30)] transition-opacity group-hover:opacity-[var(--opacity-50)]"
							/>
							<div
								class="absolute right-2 bottom-2 rounded bg-white/90 px-2 py-1 text-xs font-semibold dark:bg-gray-900/90 {colors.text}"
							>
								Preview
							</div>
						</div>

						<div class="mb-3 flex items-start justify-between">
							<div
								class="h-10 w-10 rounded-lg {colors.bg} border-2 {colors.border} flex items-center justify-center shadow-sm"
							>
								<BaseIcon
									name={state.getCategoryIcon(story.category)}
									class="h-5 w-5 {colors.text}"
								/>
							</div>
							<span
								class="rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-white capitalize shadow-sm"
							>
								{story.category}
							</span>
						</div>

						<h3
							class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400"
						>
							{story.componentName}
						</h3>

						<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
							{state.getComponentDescription(story)}
						</p>

						<div class="mb-4 flex flex-wrap items-center gap-2">
							{#if story.subcategory}
								<div
									class="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
								>
									<BaseIcon name={Tag} class="h-3 w-3" />
									<span class="capitalize">{story.subcategory}</span>
								</div>
							{/if}
							<div
								class="flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400"
							>
								<BaseIcon name={Sparkles} class="h-3 w-3" />
								AI-Generated
							</div>
						</div>

						<div
							class="flex items-center justify-between border-t-2 border-gray-100 pt-3 dark:border-gray-700"
						>
							<span class="text-xs text-gray-400">Svelte 5</span>
							<div
								class="flex items-center gap-1 text-sm font-semibold text-orange-600 opacity-[var(--opacity-0)] transition-opacity group-hover:opacity-[var(--opacity-100)] dark:text-orange-400"
							>
								<span>Open</span>
								<BaseIcon
									name={ArrowRight}
									class="h-4 w-4 transition-transform group-hover:translate-x-1"
								/>
							</div>
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<div class="space-y-4">
				{#each state.stories as story}
					{@const colors = state.getCategoryColor(story.category)}
					<button
						onclick={() => state.onOpenStory(story.id)}
						class="group flex w-full items-center gap-6 rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:scale-[1.02] hover:border-orange-400 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-500"
					>
						<div
							class="h-20 w-20 rounded-xl bg-gradient-to-br {colors.bg} border-2 {colors.border} flex flex-shrink-0 items-center justify-center shadow-md transition-all group-hover:scale-110 group-hover:shadow-lg"
						>
							<BaseIcon
								name={state.getCategoryIcon(story.category)}
								class="h-10 w-10 {colors.text}"
							/>
						</div>

						<div class="flex-1 text-left">
							<h3
								class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400"
							>
								{story.componentName}
							</h3>
							<p class="mb-3 text-sm text-gray-600 dark:text-gray-400">
								{state.getComponentDescription(story)}
							</p>
							<div class="flex flex-wrap items-center gap-2">
								<span
									class="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white capitalize shadow-sm"
								>
									{story.category}
								</span>
								{#if story.subcategory}
									<div
										class="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
									>
										<BaseIcon name={Tag} class="h-3 w-3" />
										<span class="capitalize">{story.subcategory}</span>
									</div>
								{/if}
								<div
									class="flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400"
								>
									<BaseIcon name={Sparkles} class="h-3 w-3" />
									AI-Generated
								</div>
								<span class="ml-auto text-xs text-gray-400">Svelte 5</span>
							</div>
						</div>

						<div
							class="flex-shrink-0 text-gray-300 transition-all group-hover:translate-x-3 group-hover:text-orange-600 dark:text-gray-600 dark:group-hover:text-orange-400"
						>
							<BaseIcon name={ArrowRight} class="h-8 w-8" />
						</div>
					</button>
				{/each}
			</div>
		{/if}

		{#if state.stories.length === 0}
			<div
				class="rounded-3xl border-2 border-dashed border-orange-300 bg-gradient-to-br from-orange-50 to-red-50 py-24 text-center shadow-inner dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
			>
				<div
					class="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-red-100 shadow-lg dark:bg-gray-700"
				>
					<BaseIcon name={Search} class="h-12 w-12 text-orange-500 dark:text-orange-400" />
				</div>
				<h3 class="mb-3 text-3xl font-black text-gray-900 dark:text-white">No components found</h3>
				<p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
					Try adjusting your search or filters
				</p>
				<button
					onclick={state.onClearFilters}
					class="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
				>
					Clear all filters
				</button>
			</div>
		{/if}
	</div>
</div>
