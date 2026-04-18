import type { PlaygroundAiPanelProps } from '$stylist/development/type/struct/playground-ai-panel-props';
import type { PlaygroundAiPanelAIProvider } from '$stylist/development/type/struct/playground-ai-panel-ai-provider';
import type { PlaygroundAiPanelAIOption } from '$stylist/development/type/struct/playground-ai-panel-ai-option';
import { PlaygroundAiPanelStyleManager } from '$stylist/development/class/style-manager/playground-ai-panel';

export function createPlaygroundAiPanelState(props: PlaygroundAiPanelProps) {
	const ChevronRight = 'chevron-right';
	const ChevronDown = 'chevron-down';

	const aiProviders: PlaygroundAiPanelAIProvider[] = [
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

	const containerClass = $derived(PlaygroundAiPanelStyleManager.getContainerClasses());
	const headerClass = $derived(PlaygroundAiPanelStyleManager.getHeaderClasses());
	const providerHeaderClass = $derived(PlaygroundAiPanelStyleManager.getProviderHeaderClasses());
	const optionItemClass = $derived(PlaygroundAiPanelStyleManager.getOptionItemClasses());
	const selectedOptionItemClass = $derived(PlaygroundAiPanelStyleManager.getSelectedOptionItemClasses());

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
		get ChevronRight() { return ChevronRight; },
		get ChevronDown() { return ChevronDown; },
		get aiProviders() { return aiProviders; },
		get expandedProviders() { return expandedProviders; },
		get selectedProviderId() { return selectedProviderId; },
		get onOptionSelect() { return onOptionSelect; },
		get onStartChat() { return onStartChat; },
		get containerClass() { return containerClass; },
		get headerClass() { return headerClass; },
		get providerHeaderClass() { return providerHeaderClass; },
		get optionItemClass() { return optionItemClass; },
		get selectedOptionItemClass() { return selectedOptionItemClass; },
		toggleProvider,
		handleOptionClick,
		isExpanded,
		isSelected
	};
}

export default createPlaygroundAiPanelState;
