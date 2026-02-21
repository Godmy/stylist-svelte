import { writable } from 'svelte/store';
import { createMessageTimestampStyles } from '../../styles/information/message-timestamp';
import type { MessageTimestampProps } from '../../props/interaction/message-timestamp';
import { mergeClasses } from '$stylist/utils/classes';

export function createMessageTimestampState(props: MessageTimestampProps) {
  // Initialize props with defaults
  const parsedTimestamp = (() => {
    if (props.timestamp instanceof Date) {
      return props.timestamp;
    }
    const candidate = new Date(props.timestamp as unknown as string | number | Date);
    return Number.isNaN(candidate.getTime()) ? new Date(0) : candidate;
  })();
  const timestamp = parsedTimestamp;
  const formatStyle = props.formatStyle ?? 'datetime';
  const showRelative = props.showRelative ?? false;

  // Format time value
  function formatTimeValue(): string {
    if (showRelative) {
      const diff = Date.now() - timestamp.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);

      if (minutes < 1) return 'Just now';
      if (minutes < 60) return `${minutes} m ago`;
      if (hours < 24) return `${hours} h ago`;
      if (days < 7) return `${days} d ago`;
    }

    switch (formatStyle) {
      case 'time':
        return timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      case 'date':
        return timestamp.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
      case 'datetime':
      default:
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const isToday = timestamp.getDate() === today.getDate() &&
          timestamp.getMonth() === today.getMonth() &&
          timestamp.getFullYear() === today.getFullYear();

        const isYesterday = timestamp.getDate() === yesterday.getDate() &&
          timestamp.getMonth() === yesterday.getMonth() &&
          timestamp.getFullYear() === yesterday.getFullYear();

        if (isToday) {
          return timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        } else if (isYesterday) {
          return `Yesterday, ${timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
        } else {
          const dateStr = timestamp.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
          const timeStr = timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
          return `${dateStr}, ${timeStr}`;
        }
    }
  }

  const formattedTime = $derived(formatTimeValue());

  // Generate formatted datetime for the datetime attribute
  const formattedDateTime = $derived(timestamp.toISOString());

  // Generate styles
  const styles = createMessageTimestampStyles({});

  // Merge classes with custom classes
  const classes = $derived(mergeClasses(props.class ?? '', styles.container));

  return {
    get timestamp() {
      return timestamp;
    },
    get formatStyle() {
      return formatStyle;
    },
    get showRelative() {
      return showRelative;
    },
    get formattedTime() {
      return formattedTime;
    },
    get formattedDateTime() {
      return formattedDateTime;
    },
    get classes() {
      return classes;
    }
  };
}

export default createMessageTimestampState;
