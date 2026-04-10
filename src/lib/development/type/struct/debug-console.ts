import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug';

export type LogEntry = {
  id: string;
  timestamp: Date;
  level: LogLevel;
  message: string;
  data?: any;
};

export type Props = {
  logs?: LogEntry[];
  title?: string;
  showTimestamps?: boolean;
  showLogLevel?: boolean;
  maxHeight?: string;
  allowClear?: boolean;
  allowFilter?: boolean;
  initialLogLevelFilter?: LogLevel[];
  onClear?: () => void;
  onLog?: (entry: LogEntry) => void;
  class?: string;
  headerClass?: string;
  consoleClass?: string;
  entryClass?: string;
  footerClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;
