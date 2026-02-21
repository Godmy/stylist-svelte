import { derived, writable } from 'svelte/store';
import { createChatStatusIndicatorStyles } from '../../styles/information/chat-status-indicator';
import type { ChatStatusIndicatorProps } from '../../props/interaction/chat-status-indicator';
import { mergeClasses } from '$stylist/utils/classes';

export function createChatStatusIndicatorState(props: ChatStatusIndicatorProps) {
  // Initialize props with defaults
  const status = props.status ?? 'offline';
  const size = props.size ?? 'sm';
  const showLabel = props.showLabel ?? false;

  // Derive the status text
  const statusText = derived([writable(status)], ([$status]) => {
    switch ($status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'typing': return 'Typing...';
      case 'offline': return 'Offline';
      default: return '';
    }
  });

  // Generate styles
  const styles = createChatStatusIndicatorStyles({ 
    size, 
    status, 
    showLabel 
  });

  // Merge classes with custom classes
  const containerClasses = derived(
    [writable(props.class), writable(styles.container)],
    ([$class, $container]) => mergeClasses($container, $class)
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