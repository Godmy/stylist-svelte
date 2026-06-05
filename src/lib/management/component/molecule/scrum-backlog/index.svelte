<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import InputField from '$stylist/input/component/atom/input-field/index.svelte';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import TextArea from '$stylist/input/component/atom/text-area/index.svelte';
	import createScrumBacklogState from '$stylist/management/function/state/scrum-backlog/index.svelte';
	import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';
	import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
	import { ScrumBacklogStyleManager } from '$stylist/management/class/style-manager/scrum-backlog';

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
		<div class={ScrumBacklogStyleManager.getHeaderFlexClass()}>
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
				<p class={ScrumBacklogStyleManager.getEmptyStateSubtextClass()}>
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
