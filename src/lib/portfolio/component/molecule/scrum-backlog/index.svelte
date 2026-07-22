<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import InputField from '$stylist/input/component/molecule/input-field/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import TextArea from '$stylist/input/component/molecule/text-area/index.svelte';
	import { createScrumBacklogState } from '$stylist/portfolio/function/state/scrum-backlog/index.svelte';
	import type { SlotBacklogItem as BacklogItem } from '$stylist/portfolio/interface/slot/backlog-item';
	import type { SlotBacklogData as BacklogData } from '$stylist/portfolio/interface/slot/backlog-data';

	const Plus = 'plus';
	const Calendar = 'calendar';
	const User = 'user';
	const Clock = 'clock';

	let {
		data,
		showFilters = true,
		onItemAdd,
		onItemUpdate,
		onItemDelete
	}: {
		data: BacklogData;
		showFilters?: boolean;
		onItemAdd?: (item: BacklogItem) => void;
		onItemUpdate?: (item: BacklogItem) => void;
		onItemDelete?: (id: string) => void;
	} = $props();

	const state = createScrumBacklogState({
		data,
		showFilters,
		onItemAdd,
		onItemUpdate,
		onItemDelete
	});
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<div class="scrum-backlog__header-flex">
			<h2 class={state.headerTitleClass}>Backlog</h2>
			<Button
				variant="primary"
				size="md"
				onclick={() => {
					if (state.showAddForm) {
						state.cancelForm();
						return;
					}
					state.showAddForm = true;
				}}
				class={state.addButtonClass}
			>
				<Icon name={Plus} class={state.iconClass} />
				{state.editingItemId ? 'Edit task' : 'Add task'}
			</Button>
		</div>

		{#if state.showAddForm}
			<div class={state.addFormContainerClass}>
				<div class={state.formGridClass}>
					<div class={state.formColSpanClass}>
						<InputField
							id="new-item-title"
							label="Task title *"
							value={state.newItemTitle}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.newItemTitle = target.value;
							}}
							placeholder="Enter task title"
							class={state.formInputClass}
						/>
					</div>

					<div class={state.formColSpanClass}>
						<TextArea
							id="new-item-description"
							label="Description"
							value={state.newItemDescription}
							oninput={(e: Event) => {
								const target = e.target as HTMLTextAreaElement;
								state.newItemDescription = target.value;
							}}
							placeholder="Enter task description"
							class={state.formTextareaClass}
						/>
					</div>

					<div>
						<label for="new-item-priority" class={state.formLabelClass}>Priority</label>
						<select
							id="new-item-priority"
							class={state.formSelectClass}
							bind:value={state.newItemPriority}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>

					<div>
						<label for="new-item-status" class={state.formLabelClass}>Status</label>
						<select
							id="new-item-status"
							class={state.formSelectClass}
							bind:value={state.newItemStatus}
						>
							<option value="todo">To do</option>
							<option value="in-progress">In progress</option>
							<option value="done">Done</option>
						</select>
					</div>

					<div>
						<InputField
							id="new-item-hours"
							label="Estimate (hours)"
							type="number"
							value={state.newItemEstimatedHoursStr}
							onchange={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleHoursInput(target.value);
							}}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleHoursInput(target.value);
							}}
							placeholder="Hours"
							class={state.formInputClass}
						/>
					</div>

					<div class={state.formColSpanClass}>
						<InputField
							id="new-item-assignee"
							label="Assignee"
							value={state.newItemAssignee}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.newItemAssignee = target.value;
							}}
							placeholder="Assignee name"
							class={state.formInputClass}
						/>
					</div>
				</div>

				<div class={state.formButtonsContainerClass}>
					<Button variant="secondary" size="sm" onclick={state.cancelForm}>Cancel</Button>
					<Button variant="primary" size="sm" onclick={state.handleSubmitItem}
						>{state.editingItemId ? 'Save' : 'Add'}</Button
					>
				</div>
			</div>
		{/if}

		{#if state.showFilters}
			<div class={state.filtersContainerClass}>
				<div class={state.filtersGridClass}>
					<div>
						<InputField
							id="search-query"
							label="Search"
							value={state.searchQuery}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.searchQuery = target.value;
							}}
							placeholder="Search tasks..."
							class={state.formInputClass}
						/>
					</div>

					<div>
						<label for="status-filter" class={state.filterLabelClass}>Status</label>
						<select
							id="status-filter"
							class={state.formSelectClass}
							bind:value={state.statusFilter}
						>
							<option value="all">All statuses</option>
							<option value="todo">To do</option>
							<option value="in-progress">In progress</option>
							<option value="done">Done</option>
						</select>
					</div>

					<div>
						<label for="priority-filter" class={state.filterLabelClass}>Priority</label>
						<select
							id="priority-filter"
							class={state.formSelectClass}
							bind:value={state.priorityFilter}
						>
							<option value="all">All priorities</option>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class={state.itemsContainerClass}>
		{#if state.filteredItems.length === 0}
			<div class={state.emptyStateContainerClass}>
				<p class={state.emptyStateTextClass}>Backlog is empty</p>
				<p class="scrum-backlog__empty-state-subtext">
					Add the first task or change the active filters
				</p>
			</div>
		{:else}
			<div class={state.itemsGridClass}>
				{#each state.filteredItems as item}
					<div class={state.itemCardClass}>
						<div class={state.itemHeaderClass}>
							<h3 class={state.itemTitleClass}>{item.title}</h3>
							{#if item.priority}
								<Badge
									variant={item.priority === 'high'
										? 'danger'
										: item.priority === 'medium'
											? 'warning'
											: 'success'}
									size="sm"
									class={state.itemBadgeClass}
								>
									{item.priority === 'high' ? 'HIGH' : item.priority === 'medium' ? 'MED' : 'LOW'}
								</Badge>
							{/if}
						</div>

						{#if item.description}
							<p class={state.itemDescriptionClass}>{item.description}</p>
						{/if}

						<div class={state.itemBadgesContainerClass}>
							{#if item.estimatedHours}
								<Badge variant="default" size="sm" class={state.itemBadgeClass}>
									<Icon name={Clock} class={state.iconClass} />
									{item.estimatedHours} h
								</Badge>
							{/if}

							{#if item.assignee}
								<Badge variant="default" size="sm" class={state.itemBadgeClass}>
									<Icon name={User} class={state.iconClass} />
									{item.assignee}
								</Badge>
							{/if}

							<Badge variant="default" size="sm" class={state.itemBadgeClass}>
								{item.status === 'todo'
									? 'To do'
									: item.status === 'in-progress'
										? 'In progress'
										: 'Done'}
							</Badge>

							<Badge variant="default" size="sm" class={state.itemBadgeClass}>
								<Icon name={Calendar} class={state.iconClass} />
								{state.formatDate(item.createdAt)}
							</Badge>
						</div>

						<div class={state.itemActionsContainerClass}>
							<Button
								variant="secondary"
								size="sm"
								onclick={() => state.startItemEdit(item)}
								class={state.itemActionButtonClass}
							>
								Edit
							</Button>
							<Button
								variant="danger"
								size="sm"
								onclick={() => {
									if (onItemDelete) onItemDelete(item.id);
								}}
								class={state.itemActionButtonClass}
							>
								Delete
							</Button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.scrum-backlog__header {
		margin-bottom: 1.5rem;
	}

	.scrum-backlog__header-flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.scrum-backlog__header-title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.scrum-backlog__add-form-container {
		margin-bottom: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	.scrum-backlog__form-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.scrum-backlog__form-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.scrum-backlog__form-col-span {
		grid-column: span 2 / span 2;
	}

	.scrum-backlog__form-label {
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.scrum-backlog__form-input {
		width: 100%;
	}

	.scrum-backlog__form-textarea {
		width: 100%;
	}

	.scrum-backlog__form-select {
		width: 100%;
		border-radius: 0.375rem;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.scrum-backlog__form-select:focus {
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.scrum-backlog__form-select {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.scrum-backlog__form-buttons-container {
		margin-top: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	.scrum-backlog__form-buttons-container > * + * {
		margin-left: 0.5rem;
	}

	.scrum-backlog__filters-container {
		margin-bottom: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	.scrum-backlog__filters-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.scrum-backlog__filters-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.scrum-backlog__filter-label {
		margin-bottom: 0.25rem;
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.scrum-backlog__empty-state-container {
		text-align: center;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}

	.scrum-backlog__empty-state-text {
		font-size: 1.125rem;
		line-height: 1.75rem;
		color: var(--color-text-secondary);
	}

	.scrum-backlog__empty-state-subtext {
		margin-top: 0.5rem;
		color: var(--color-text-tertiary);
	}

	.scrum-backlog__items-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.scrum-backlog__items-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.scrum-backlog__items-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.scrum-backlog__item-card {
		position: relative;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	.scrum-backlog__item-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
	}

	.scrum-backlog__item-title {
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.scrum-backlog__item-description {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.scrum-backlog__item-badges-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.scrum-backlog__item-actions-container {
		display: flex;
		justify-content: flex-end;
	}
	.scrum-backlog__item-actions-container > * + * {
		margin-left: 0.5rem;
	}

	.scrum-backlog__icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
		display: inline;
	}
</style>
