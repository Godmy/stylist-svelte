<script lang="ts">
	import type { MockDataSelectorProps } from '$stylist/development/type/struct/mock-data-selector-props';
	import createMockDataSelectorState from '$stylist/development/function/state/mock-data-selector/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: MockDataSelectorProps = $props();
	const state = createMockDataSelectorState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerComputedClass}>
		<div class="flex items-center">
			<BaseIcon name={state.Database} class="mr-2 h-6 w-6 text-gray-500" />
			<h3 class="text-lg font-medium text-gray-900">{state.title}</h3>
		</div>
		<p class="mt-1 text-sm text-gray-500">{state.description}</p>
	</div>

	<div class="p-6">
		<!-- Search and filter controls -->
		<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
			{#if state.showSearch}
				<div>
					<label for="search" class="mb-1 block text-sm font-medium text-gray-700"
						>Search Schemas</label
					>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<BaseIcon name={state.Search} class="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="text"
							id="search"
							class="block w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
							bind:value={state.searchQuery}
							placeholder="Search schemas..."
						/>
					</div>
				</div>
			{/if}

			{#if state.showTagsFilter}
				<fieldset class="m-0 border-0 p-0">
					<legend class="mb-1 block text-sm font-medium text-gray-700">Filter by Tags</legend>
					<div class="flex flex-wrap gap-2">
						{#each state.availableTags as tag}
							<button
								type="button"
								class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
									state.selectedTags.includes(tag)
										? 'bg-blue-100 text-blue-800'
										: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
								}`}
								onclick={() => state.toggleTag(tag)}
							>
								{tag}
							</button>
						{/each}
					</div>
				</fieldset>
			{/if}

			<fieldset class="m-0 border-0 p-0">
				<legend class="mb-1 block text-sm font-medium text-gray-700">Actions</legend>
				<div class="flex space-x-2">
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
						onclick={state.loadMockData}
					>
						<BaseIcon name={state.Download} class="mr-1 h-4 w-4" />
						Load Data
					</button>
				</div>
			</fieldset>
		</div>

		<!-- Available schemas -->
		<div class="mb-8">
			<h4 class="mb-4 text-sm font-medium text-gray-900">Available Schemas</h4>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each state.getFilteredSchemas() as schema}
					<div
						class={`rounded-lg border p-4 transition-shadow hover:shadow-md ${state.selectorClass}`}
					>
						<div class="flex items-start justify-between">
							<div>
								<h5 class="font-medium text-gray-900">{schema.name}</h5>
								<p class="mt-1 text-sm text-gray-500">{schema.description}</p>
							</div>
							<button
								type="button"
								class="rounded-full p-1.5 text-gray-500 hover:bg-gray-100"
								onclick={() => state.addSelection(schema.id)}
								title="Add to selection"
							>
								<BaseIcon name={state.Shuffle} class="h-5 w-5" />
							</button>
						</div>

						<div class="mt-3">
							<div class="flex flex-wrap gap-1">
								{#each schema.tags as tag}
									<span
										class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>

						<div class="mt-3 text-xs text-gray-500">
							<span>{schema.fields.length} fields</span>
							<span class="mx-2">•</span>
							<span>{schema.sampleData.length} samples</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Selected schemas -->
		{#if state.selections.length > 0}
			<div>
				<h4 class="mb-4 text-sm font-medium text-gray-900">Selected Schemas</h4>
				<div class="space-y-4">
					{#each state.selections as selection, index}
						{@const schema = state.schemas.find((s) => s.id === selection.schemaId)}
						{#if schema}
							<div class={`rounded-lg border p-4 ${state.previewClass}`}>
								<div class="flex items-start justify-between">
									<div>
										<div class="flex items-center">
											<h5 class="font-medium text-gray-900">{schema.name}</h5>
											<span
												class="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
											>
												{selection.count} records
											</span>
										</div>
										<p class="mt-1 text-sm text-gray-500">{schema.description}</p>
									</div>

									<button
										type="button"
										class="rounded-full p-1.5 text-red-500 hover:bg-red-100"
										onclick={() => state.removeSelection(index)}
										title="Remove selection"
									>
										<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>

								<div class="mt-4">
									<div class="flex items-center justify-between">
										<label for="count-{index}" class="block text-sm font-medium text-gray-700">
											Number of records
										</label>
										{#if state.allowCustomCount}
											<input
												type="number"
												id="count-{index}"
												min="1"
												max="1000"
												class="h-8 w-24 rounded-md border border-gray-300 px-3 py-1 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
												bind:value={state.selections[index].count}
												oninput={(e) =>
													state.updateCount(index, parseInt((e.target as HTMLInputElement).value))}
											/>
										{/if}
									</div>
								</div>

								{#if state.allowFieldSelection}
									<div class="mt-4">
										<h6 class="mb-2 text-sm font-medium text-gray-900">Select Fields</h6>
										<div class="flex flex-wrap gap-2">
											{#each schema.fields as field}
												<label
													class={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
														state.selections[index].selectedFields?.includes(field.name)
															? 'bg-blue-100 text-blue-800'
															: 'bg-gray-100 text-gray-800'
													}`}
												>
													<input
														type="checkbox"
														class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
														checked={state.selections[index].selectedFields?.includes(field.name) ??
															true}
														onchange={() => state.toggleField(index, field.name)}
													/>
													<span class="ml-1">{field.name}</span>
												</label>
											{/each}
										</div>
									</div>
								{/if}

								<!-- Preview of generated data -->
								<div class="mt-4">
									<h6 class="mb-2 text-sm font-medium text-gray-900">Data Preview</h6>
									<div class="overflow-x-auto">
										<table class="min-w-full divide-y divide-gray-200">
											<thead>
												<tr>
													{#each schema.fields as field}
														{#if !state.selections[index].selectedFields || state.selections[index].selectedFields.includes(field.name)}
															<th
																class="px-3 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
																>{field.name}</th
															>
														{/if}
													{/each}
												</tr>
											</thead>
											<tbody class="divide-y divide-gray-200">
												{#each state.getSampleData(schema.id, Math.min(2, selection.count), state.selections[index].selectedFields) as item, i}
													<tr>
														{#each schema.fields as field}
															{#if !state.selections[index].selectedFields || state.selections[index].selectedFields.includes(field.name)}
																<td class="max-w-xs truncate px-3 py-2 text-sm text-gray-500"
																	>{item[field.name]?.toString()}</td
																>
															{/if}
														{/each}
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<div class={state.footerComputedClass}>
		<div class="flex items-center justify-between">
			<div class="text-sm text-gray-500">
				{state.selections.length} schema{state.selections.length !== 1 ? 's' : ''} selected
			</div>
			<button
				type="button"
				class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
				onclick={state.loadMockData}
			>
				<BaseIcon name={state.Download} class="mr-1 h-4 w-4" />
				Generate Mock Data
			</button>
		</div>
	</div>
</div>
