import { ClassNamesManager } from '$stylist/layout/class/manager/class-names';
import { derived, writable } from 'svelte/store';
import type { RecipeChatStatusIndicator } from '$stylist/chat/interface/recipe/chat-status-indicator';

export function createChatStatusIndicatorState(props: RecipeChatStatusIndicator) {
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
		indicator: ClassNamesManager.join(
			'c-chat-status__dot',
			`c-chat-status__dot--${size}`,
			`c-chat-status__dot--${status}`
		),
		label: 'c-chat-status__label'
	};

	// Merge classes with custom classes
	const containerClasses = derived(
		[writable(String(props.class ?? '')), writable(styles.container)],
		([$class, $container]) => ClassNamesManager.join($container, $class)
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
