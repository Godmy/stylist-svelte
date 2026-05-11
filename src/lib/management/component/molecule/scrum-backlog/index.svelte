<script lang="ts">
	import { Button } from '$stylist/control';
	import { InputField } from '$stylist/input';
	import { Icon } from '$stylist/media';
	import { Badge } from '$stylist/typography';
	import TextArea from '$stylist/input/component/atom/text-area/index.svelte';
	import { createScrumBacklogState } from '$stylist/management/function/state/scrum-backlog';
	import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';
	import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
	import { ScrumBacklogStyleManager } from '$stylist/management/class/style-manager/scrum-backlog';

	const Plus = 'plus';
	const Calendar = 'calendar';
	const User = 'user';
	const Clock = 'clock';

	/**
	 * РљРѕРјРїРѕРЅРµРЅС‚ Р±СЌРєР»РѕРіР° Р·Р°РґР°С‡
	 *
	 * РљРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ, С„РёР»СЊС‚СЂР°С†РёРё Рё СѓРїСЂР°РІР»РµРЅРёСЏ Р·Р°РґР°С‡Р°РјРё РІ Р±СЌРєР»РѕРіРµ.
	 * РџРѕР·РІРѕР»СЏРµС‚ РґРѕР±Р°РІР»СЏС‚СЊ, РёР·РјРµРЅСЏС‚СЊ Рё СѓРґР°Р»СЏС‚СЊ Р·Р°РґР°С‡Рё, Р° С‚Р°РєР¶Рµ С„РёР»СЊС‚СЂРѕРІР°С‚СЊ РёС… РїРѕ СЂР°Р·Р»РёС‡РЅС‹Рј РєСЂРёС‚РµСЂРёСЏРј.
	 *
	 * @param {BacklogData} data - Р”Р°РЅРЅС‹Рµ Р±СЌРєР»РѕРіР°, СЃРѕРґРµСЂР¶Р°С‰РёРµ СЃРїРёСЃРѕРє Р·Р°РґР°С‡
	 * @param {boolean} [showFilters=true] - РџРѕРєР°Р·С‹РІР°С‚СЊ Р»Рё РїР°РЅРµР»СЊ С„РёР»СЊС‚СЂРѕРІ
	 * @param {(item: BacklogItem) => void} [onItemAdd] - РћР±СЂР°Р±РѕС‚С‡РёРє РґРѕР±Р°РІР»РµРЅРёСЏ РЅРѕРІРѕР№ Р·Р°РґР°С‡Рё
	 * @param {(item: BacklogItem) => void} [onItemUpdate] - РћР±СЂР°Р±РѕС‚С‡РёРє РѕР±РЅРѕРІР»РµРЅРёСЏ Р·Р°РґР°С‡Рё
	 * @param {(id: string) => void} [onItemDelete] - РћР±СЂР°Р±РѕС‚С‡РёРє СѓРґР°Р»РµРЅРёСЏ Р·Р°РґР°С‡Рё
	 */
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
			<h2 class={state.headerTitleClass}>Р‘СЌРєР»РѕРі</h2>
			<Button
				variant="primary"
				size="md"
				onclick={() => (state.showAddForm = !state.showAddForm)}
				class={state.addButtonClass}
			>
				<Icon name={Plus} class={state.iconClass} /> Р”РѕР±Р°РІРёС‚СЊ Р·Р°РґР°С‡Сѓ
			</Button>
		</div>

		{#if state.showAddForm}
			<div class={state.addFormContainerClass}>
				<div class={state.formGridClass}>
					<div class={state.formColSpanClass}>
						<InputField
							id="new-item-title"
							label="РќР°Р·РІР°РЅРёРµ Р·Р°РґР°С‡Рё *"
							value={state.newItemTitle}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.newItemTitle = target.value;
							}}
							placeholder="Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ Р·Р°РґР°С‡Рё"
							class={state.formInputClass}
						/>
					</div>

					<div class={state.formColSpanClass}>
						<TextArea
							id="new-item-description"
							label="РћРїРёСЃР°РЅРёРµ"
							value={state.newItemDescription}
							oninput={(e: Event) => {
								const target = e.target as HTMLTextAreaElement;
								state.newItemDescription = target.value;
							}}
							placeholder="Р’РІРµРґРёС‚Рµ РѕРїРёСЃР°РЅРёРµ Р·Р°РґР°С‡Рё"
							class={state.formTextareaClass}
						/>
					</div>

					<div>
						<label for="new-item-priority" class={state.formLabelClass}>РџСЂРёРѕСЂРёС‚РµС‚</label>
						<select
							id="new-item-priority"
							class={state.formSelectClass}
							bind:value={state.newItemPriority}
						>
							<option value="low">РќРёР·РєРёР№</option>
							<option value="medium">РЎСЂРµРґРЅРёР№</option>
							<option value="high">Р’С‹СЃРѕРєРёР№</option>
						</select>
					</div>

					<div>
						<InputField
							id="new-item-hours"
							label="РћС†РµРЅРєР° РІСЂРµРјРµРЅРё (С‡Р°СЃС‹)"
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
							placeholder="Р§Р°СЃС‹"
							class={state.formInputClass}
						/>
					</div>

					<div class={state.formColSpanClass}>
						<InputField
							id="new-item-assignee"
							label="РќР°Р·РЅР°С‡РµРЅР°"
							value={state.newItemAssignee}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.newItemAssignee = target.value;
							}}
							placeholder="РРјСЏ РёСЃРїРѕР»РЅРёС‚РµР»СЏ"
							class={state.formInputClass}
						/>
					</div>
				</div>

				<div class={state.formButtonsContainerClass}>
					<Button variant="secondary" size="sm" onclick={() => (state.showAddForm = false)}
						>РћС‚РјРµРЅР°</Button
					>
					<Button variant="primary" size="sm" onclick={state.handleAddNewItem}
						>Р”РѕР±Р°РІРёС‚СЊ</Button
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
							label="РџРѕРёСЃРє"
							value={state.searchQuery}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.searchQuery = target.value;
							}}
							placeholder="РџРѕРёСЃРє Р·Р°РґР°С‡..."
							class={state.formInputClass}
						/>
					</div>

					<div>
						<label for="status-filter" class={state.filterLabelClass}>РЎС‚Р°С‚СѓСЃ</label>
						<select
							id="status-filter"
							class={state.formSelectClass}
							bind:value={state.statusFilter}
						>
							<option value="all">Р’СЃРµ СЃС‚Р°С‚СѓСЃС‹</option>
							<option value="todo">Рљ РІС‹РїРѕР»РЅРµРЅРёСЋ</option>
							<option value="in-progress">Р’ СЂР°Р±РѕС‚Рµ</option>
							<option value="done">Р’С‹РїРѕР»РЅРµРЅРѕ</option>
						</select>
					</div>

					<div>
						<label for="priority-filter" class={state.filterLabelClass}>РџСЂРёРѕСЂРёС‚РµС‚</label>
						<select
							id="priority-filter"
							class={state.formSelectClass}
							bind:value={state.priorityFilter}
						>
							<option value="all">Р’СЃРµ РїСЂРёРѕСЂРёС‚РµС‚С‹</option>
							<option value="low">РќРёР·РєРёР№</option>
							<option value="medium">РЎСЂРµРґРЅРёР№</option>
							<option value="high">Р’С‹СЃРѕРєРёР№</option>
						</select>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class={state.itemsContainerClass}>
		{#if state.filteredItems.length === 0}
			<div class={state.emptyStateContainerClass}>
				<p class={state.emptyStateTextClass}>Р‘СЌРєР»РѕРі РїСѓСЃС‚</p>
				<p class={ScrumBacklogStyleManager.getEmptyStateSubtextClass()}>
					Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІСѓСЋ Р·Р°РґР°С‡Сѓ РёР»Рё РёР·РјРµРЅРёС‚Рµ С„РёР»СЊС‚СЂС‹
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
									{item.priority === 'high'
										? 'Р’РђР–РќРћ'
										: item.priority === 'medium'
											? 'РЎР .'
											: 'РќРћР Рњ.'}
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
									{item.estimatedHours} С‡.
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
									? 'Рљ РІС‹РїРѕР»РЅРµРЅРёСЋ'
									: item.status === 'in-progress'
										? 'Р’ СЂР°Р±РѕС‚Рµ'
										: 'Р’С‹РїРѕР»РЅРµРЅРѕ'}
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
								onclick={() => {
									if (onItemUpdate) onItemUpdate(item);
								}}
								class={state.itemActionButtonClass}
							>
								РР·РјРµРЅРёС‚СЊ
							</Button>
							<Button
								variant="danger"
								size="sm"
								onclick={() => {
									if (onItemDelete) onItemDelete(item.id);
								}}
								class={state.itemActionButtonClass}
							>
								РЈРґР°Р»РёС‚СЊ
							</Button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
