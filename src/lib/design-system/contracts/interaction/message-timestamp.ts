export type MessageTimestampFormatStyle = 'datetime' | 'time' | 'date';

export interface MessageTimestampProps {
  /**
   * The timestamp to display
   */
  timestamp: Date;
  
  /**
   * The format style for displaying the timestamp
   * @default 'datetime'
   */
  formatStyle?: MessageTimestampFormatStyle;
  
  /**
   * Whether to show relative time (e.g., "2 min ago")
   * @default false
   */
  showRelative?: boolean;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}

// Presets moved from presets\message-timestamp.ts

export const messageTimestampPresets: Record<string, Partial<MessageTimestampProps>> = {
  currentTime: {
    timestamp: new Date(),
    formatStyle: 'datetime',
    showRelative: false
  },
  relativeTime: {
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    formatStyle: 'datetime',
    showRelative: true
  },
  timeOnly: {
    timestamp: new Date(),
    formatStyle: 'time',
    showRelative: false
  },
  dateOnly: {
    timestamp: new Date(),
    formatStyle: 'date',
    showRelative: false
  }
};

