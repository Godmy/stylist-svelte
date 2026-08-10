import { derived, writable } from 'svelte/store';
import type { SlotChatStatusIndicator as ChatStatusIndicatorProps } from '$stylist/chat/interface/slot/chat-status-indicator';
import type { SlotChatStatusIndicator as ChatStatusIndicatorContract } from '$stylist/chat/interface/slot/chat-status-indicator';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createChatStatusIndicatorState(
	props: ChatStatusIndicatorProps | ChatStatusIndicatorContract
) {
	// Initialize props with defaults
	const status = props.status ?? 'offline';
	const size = props.size ?? 'sm';
	const showLabel = props.showLabel ?? false;

	// Derive the status text
	const statusText = derived([writable(status)], ([$status]) => {
		switch ($status) {
			case 'online':
				return 'Online';
			case 'away':
				return 'Away';
			case 'typing':
				return 'Typing...';
			case 'offline':
				return 'Offline';
			default:
				return '';
		}
	});

	const styles = {
		container: 'c-chat-status',
		indicator: joinClassNames(
			'c-chat-status__dot',
			`c-chat-status__dot--${size}`,
			`c-chat-status__dot--${status}`
		),
		label: 'c-chat-status__label'
	};

	// Merge classes with custom classes
	const containerClasses = derived(
		[writable(String(props.class ?? '')), writable(styles.container)],
		([$class, $container]) => joinClassNames($container, $class)
	);

	return {
		status,
		size,
		showLabel,
		statusText: statusText,
		containerClasses,
		indicatorClasses: styles.indicator,
		labelClasses: styles.label
	};
}

export default createChatStatusIndicatorState;
