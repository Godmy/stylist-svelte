import type { RecipeAiPanel } from '$stylist/ai/interface/recipe/ai-panel';
import type { AiPanelAIProvider } from '$stylist/ai/type/struct/ai-panel-ai-provider';
export function createAiPanelState(props: RecipeAiPanel) {
	const ChevronRight = 'chevron-right';
	const ChevronDown = 'chevron-down';

	const aiProviders: AiPanelAIProvider[] = [
		{
			id: 'claude',
			name: 'CLAUDE',
			options: [
				{ id: 'new-chat', label: 'Новый чат' },
				{ id: 'version', label: 'Версия' },
				{ id: 'settings', label: 'Настройки' }
			]
		},
		{
			id: 'codex',
			name: 'CODEX',
			options: [
				{ id: 'new-chat', label: 'Новый чат' },
				{ id: 'version', label: 'Версия' },
				{ id: 'settings', label: 'Настройки' }
			]
		},
		{
			id: 'gemini',
			name: 'GEMINI',
			options: [
				{ id: 'new-chat', label: 'Новый чат' },
				{ id: 'version', label: 'Версия' },
				{ id: 'settings', label: 'Настройки' }
			]
		},
		{
			id: 'qwen',
			name: 'QWEN',
			options: [
				{ id: 'new-chat', label: 'Новый чат' },
				{ id: 'version', label: 'Версия' },
				{ id: 'settings', label: 'Настройки' }
			]
		}
	];

	let expandedProviders = $state<Set<string>>(new Set(['claude']));

	const selectedProviderId = $derived(props.selectedProviderId ?? null);
	const onOptionSelect = $derived(props.onOptionSelect);
	const onStartChat = $derived(props.onStartChat);
	const containerClass = $derived(props.class == null ? undefined : String(props.class));
	const headerClass = $derived('ai-panel__header');
	const providerHeaderClass = $derived('ai-panel__provider-header');
	const optionItemClass = $derived('ai-panel__option');
	const selectedOptionItemClass = $derived('ai-panel__option--selected');

	function toggleProvider(providerId: string) {
		const newExpanded = new Set(expandedProviders);
		if (newExpanded.has(providerId)) {
			newExpanded.delete(providerId);
		} else {
			newExpanded.add(providerId);
		}
		expandedProviders = newExpanded;
	}

	function handleOptionClick(providerId: string, optionId: string) {
		onOptionSelect?.(providerId, optionId);

		// Special handling for new-chat option
		if (optionId === 'new-chat') {
			onStartChat?.(providerId as 'gemini' | 'qwen' | 'claude' | 'codex');
		}
	}

	function isExpanded(providerId: string): boolean {
		return expandedProviders.has(providerId);
	}

	function isSelected(providerId: string, optionId: string): boolean {
		return selectedProviderId === `${providerId}-${optionId}`;
	}

	return {
		get ChevronRight() {
			return ChevronRight;
		},
		get ChevronDown() {
			return ChevronDown;
		},
		get aiProviders() {
			return aiProviders;
		},
		get expandedProviders() {
			return expandedProviders;
		},
		get selectedProviderId() {
			return selectedProviderId;
		},
		get onOptionSelect() {
			return onOptionSelect;
		},
		get onStartChat() {
			return onStartChat;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get providerHeaderClass() {
			return providerHeaderClass;
		},
		get optionItemClass() {
			return optionItemClass;
		},
		get selectedOptionItemClass() {
			return selectedOptionItemClass;
		},
		toggleProvider,
		handleOptionClick,
		isExpanded,
		isSelected
	};
}
