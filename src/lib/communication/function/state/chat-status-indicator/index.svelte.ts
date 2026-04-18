import { derived, writable } from 'svelte/store';
import type { SlotChatStatusIndicator as ChatStatusIndicatorProps } from '$stylist/communication/interface/slot/chat-status-indicator';
import type { SlotChatStatusIndicator as ChatStatusIndicatorContract } from '$stylist/communication/interface/slot/chat-status-indicator';
import { joinClassNames } from '$stylist/layout/function/script/join-class-names';

export function createChatStatusIndicatorState(props: ChatStatusIndicatorProps | ChatStatusIndicatorContract) {
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

  const indicatorSizes: Record<string, string> = {
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3'
  };

  const indicatorStatuses: Record<string, string> = {
    online: 'bg-[--color-success-500]',
    away: 'bg-[--color-warning-500]',
    typing: 'bg-[--color-primary-500]',
    offline: 'bg-[--color-text-tertiary]'
  };

  const styles = {
    container: 'inline-flex items-center gap-2',
    indicator: joinClassNames(
      'inline-flex rounded-full',
      indicatorSizes[size] ?? indicatorSizes.sm,
      indicatorStatuses[status] ?? indicatorStatuses.offline
    ),
    label: 'text-xs text-[--color-text-secondary]'
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




