import type { Props, LogLevel, LogEntry } from '$stylist/development/type/struct/debug-console';
import { DebugConsoleStyleManager } from '$stylist/development/class/style-manager/debug-console';

export function createDebugConsoleState(props: Props) {
	const Terminal = 'terminal';
	const Bug = 'bug';
	const Play = 'play';
	const Square = 'square';
	const Trash2 = 'trash-2';
	const Search = 'search';
	const Filter = 'filter';

	let filteredLogs = $state<LogEntry[]>(props.logs ?? []);
	let logLevelFilter = $state<LogLevel[]>(props.initialLogLevelFilter ?? []);
	let searchQuery = $state('');
	let isRunning = $state(false);

	const title = $derived(props.title ?? 'Debug Console');
	const showTimestamps = $derived(props.showTimestamps ?? true);
	const showLogLevel = $derived(props.showLogLevel ?? true);
	const maxHeight = $derived(props.maxHeight ?? '300px');
	const allowClear = $derived(props.allowClear ?? true);
	const allowFilter = $derived(props.allowFilter ?? true);
	const className = $derived(props.class ?? '');
	const headerClass = $derived(props.headerClass ?? '');
	const consoleClass = $derived(props.consoleClass ?? '');
	const entryClass = $derived(props.entryClass ?? '');
	const footerClass = $derived(props.footerClass ?? '');

	const containerClass = $derived(DebugConsoleStyleManager.getContainerClasses(className));
	const headerComputedClass = $derived(DebugConsoleStyleManager.getHeaderClasses() + ' ' + headerClass);
	const footerComputedClass = $derived(DebugConsoleStyleManager.getInputContainerClasses() + ' ' + footerClass);

	$effect(() => {
		updateFilteredLogs();
	});

	function updateFilteredLogs() {
		const sourceLogs = props.logs ?? [];
		filteredLogs = sourceLogs.filter(log => {
			if (logLevelFilter.length > 0 && !logLevelFilter.includes(log.level)) {
				return false;
			}
			if (searchQuery && !log.message.toLowerCase().includes(searchQuery.toLowerCase())) {
				return false;
			}
			return true;
		});
	}

	function toggleLogLevel(level: LogLevel) {
		if (logLevelFilter.includes(level)) {
			logLevelFilter = logLevelFilter.filter(l => l !== level);
		} else {
			logLevelFilter = [...logLevelFilter, level];
		}
		updateFilteredLogs();
	}

	function clearLogs() {
		if (props.onClear) {
			props.onClear();
		}
	}

	function clearSearch() {
		searchQuery = '';
		updateFilteredLogs();
	}

	function startSimulator() {
		isRunning = true;

		const interval = setInterval(() => {
			if (!isRunning) {
				clearInterval(interval);
				return;
			}

			const levels: LogLevel[] = ['log', 'info', 'warn', 'error', 'debug'];
			const messages = [
				'Component mounted successfully',
				'State updated',
				'API call completed',
				'User interaction detected',
				'Data fetched from server',
				'Error occurred in component',
				'Memory usage increased',
				'Cache cleared',
				'Route changed',
				'New connection established'
			];

			const log: LogEntry = {
				id: `log-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
				timestamp: new Date(),
				level: levels[Math.floor(Math.random() * levels.length)],
				message: messages[Math.floor(Math.random() * messages.length)]
			};

			if (props.onLog) {
				props.onLog(log);
			}
		}, 2000);
	}

	function stopSimulator() {
		isRunning = false;
	}

	function getLevelColor(level: LogLevel) {
		switch (level) {
			case 'error': return 'text-red-500';
			case 'warn': return 'text-yellow-500';
			case 'info': return 'text-blue-500';
			case 'debug': return 'text-purple-500';
			default: return 'text-gray-700';
		}
	}

	function getLevelBgColor(level: LogLevel) {
		switch (level) {
			case 'error': return 'bg-red-100';
			case 'warn': return 'bg-yellow-100';
			case 'info': return 'bg-blue-100';
			case 'debug': return 'bg-purple-100';
			default: return 'bg-gray-100';
		}
	}

	function formatTimestamp(timestamp: Date) {
		return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
	}

	const restProps = $derived(() => {
		const {
			class: _className, headerClass: _headerClass, consoleClass: _consoleClass,
			entryClass: _entryClass, footerClass: _footerClass, logs: _logs, title: _title,
			showTimestamps: _showTimestamps, showLogLevel: _showLogLevel, maxHeight: _maxHeight,
			allowClear: _allowClear, allowFilter: _allowFilter, initialLogLevelFilter: _filter,
			onClear: _onClear, onLog: _onLog, ...rest
		} = props;
		return rest;
	});

	return {
		get Terminal() { return Terminal; },
		get Bug() { return Bug; },
		get Play() { return Play; },
		get Square() { return Square; },
		get Trash2() { return Trash2; },
		get Search() { return Search; },
		get Filter() { return Filter; },
		get filteredLogs() { return filteredLogs; },
		get logLevelFilter() { return logLevelFilter; },
		get searchQuery() { return searchQuery; },
		set searchQuery(v: string) { searchQuery = v; },
		get isRunning() { return isRunning; },
		get title() { return title; },
		get showTimestamps() { return showTimestamps; },
		get showLogLevel() { return showLogLevel; },
		get maxHeight() { return maxHeight; },
		get allowClear() { return allowClear; },
		get allowFilter() { return allowFilter; },
		get className() { return className; },
		get headerClass() { return headerClass; },
		get consoleClass() { return consoleClass; },
		get entryClass() { return entryClass; },
		get footerClass() { return footerClass; },
		get containerClass() { return containerClass; },
		get headerComputedClass() { return headerComputedClass; },
		get footerComputedClass() { return footerComputedClass; },
		updateFilteredLogs,
		toggleLogLevel,
		clearLogs,
		clearSearch,
		startSimulator,
		stopSimulator,
		getLevelColor,
		getLevelBgColor,
		formatTimestamp,
		get restProps() { return restProps(); }
	};
}

export default createDebugConsoleState;
