import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { DebugConsoleLogLevel } from '$stylist/development/type/struct/debug-console-log-level';
import type { DebugConsoleLogEntry } from '$stylist/development/type/struct/debug-console-log-entry';

export type DebugConsoleProps = {
  logs?: DebugConsoleLogEntry[];
  title?: string;
  showTimestamps?: boolean;
  showLogLevel?: boolean;
  maxHeight?: string;
  allowClear?: boolean;
  allowFilter?: boolean;
  initialLogLevelFilter?: DebugConsoleLogLevel[];
  onClear?: () => void;
  onLog?: (entry: DebugConsoleLogEntry) => void;
  class?: string;
  headerClass?: string;
  consoleClass?: string;
  entryClass?: string;
  footerClass?: string;
} & InteractionHTMLAttributes<HTMLDivElement>;
