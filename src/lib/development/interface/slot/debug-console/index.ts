import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { DebugConsoleLogEntry } from '$stylist/development/type/struct/debug-console-log-entry';
import type { DebugConsoleLogLevel } from '$stylist/development/type/struct/debug-console-log-level';

export interface SlotDebugConsole extends InteractionHTMLAttributes<HTMLDivElement> {
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
}
