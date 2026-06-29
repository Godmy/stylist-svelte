import type { DebugConsoleLogLevel } from '$stylist/development/type/alias/debug-console-log-level';

export type DebugConsoleLogEntry = {
	id: string;
	timestamp: Date;
	level: DebugConsoleLogLevel;
	message: string;
	data?: any;
};

