<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Terminal, Bug, Play, Square, Trash2, Search, Filter } from 'lucide-svelte';

  type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug';

  type LogEntry = {
    id: string;
    timestamp: Date;
    level: LogLevel;
    message: string;
    data?: any;
  };

  type Props = {
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
  } & HTMLAttributes<HTMLDivElement>;

  let {
    logs = [],
    title = 'Debug Console',
    showTimestamps = true,
    showLogLevel = true,
    maxHeight = '300px',
    allowClear = true,
    allowFilter = true,
    initialLogLevelFilter = [],
    onClear,
    onLog,
    class: className = '',
    headerClass = '',
    consoleClass = '',
    entryClass = '',
    footerClass = ''
  } = $props();

  let filteredLogs = $state<LogEntry[]>(logs);
  let logLevelFilter = $state<LogLevel[]>(initialLogLevelFilter);
  let searchQuery = $state('');
  let isRunning = $state(false);

  // Initialize logs
  $effect(() => {
    updateFilteredLogs();
  });

  function updateFilteredLogs() {
    filteredLogs = logs.filter(log => {
      // Filter by log level if filter is applied
      if (logLevelFilter.length > 0 && !logLevelFilter.includes(log.level)) {
        return false;
      }
      
      // Filter by search query
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
    if (onClear) {
      onClear();
    }
  }

  function clearSearch() {
    searchQuery = '';
    updateFilteredLogs();
  }

  function startSimulator() {
    isRunning = true;
    
    // Simulate adding random logs
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
      
      if (onLog) {
        onLog(log);
      }
    }, 2000);
  }

  function stopSimulator() {
    isRunning = false;
  }

  function getLevelColor(level: LogLevel) {
    switch(level) {
      case 'error': return 'text-red-500';
      case 'warn': return 'text-yellow-500';
      case 'info': return 'text-blue-500';
      case 'debug': return 'text-purple-500';
      default: return 'text-gray-700';
    }
  }

  function getLevelBgColor(level: LogLevel) {
    switch(level) {
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
</script>

<div class={`border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
  <div class={`border-b px-4 py-3 flex items-center justify-between ${headerClass}`}>
    <div class="flex items-center">
      <Terminal class="h-5 w-5 text-gray-500 mr-2" />
      <h3 class="text-sm font-medium text-gray-900">{title}</h3>
      <span class="ml-2 text-xs text-gray-500">({filteredLogs.length} entries)</span>
    </div>
    
    <div class="flex items-center space-x-2">
      {#if allowClear}
        <button
          type="button"
          class="p-1.5 rounded text-gray-500 hover:text-red-500 hover:bg-gray-100"
          onclick={clearLogs}
          title="Clear logs"
        >
          <Trash2 class="h-4 w-4" />
        </button>
      {/if}
      
      <button
        type="button"
        class={`p-1.5 rounded ${
          isRunning 
            ? 'text-red-500 hover:text-red-700 hover:bg-red-100' 
            : 'text-green-500 hover:text-green-700 hover:bg-green-100'
        }`}
        onclick={isRunning ? stopSimulator : startSimulator}
        title={isRunning ? "Stop simulator" : "Start simulator"}
      >
        {#if isRunning}
          <Square class="h-4 w-4" />
        {:else}
          <Play class="h-4 w-4" />
        {/if}
      </button>
    </div>
  </div>

  <div class="p-2 border-b bg-gray-50">
    <div class="flex items-center space-x-4">
      {#if allowFilter}
        {#each ['log', 'info', 'warn', 'error', 'debug'] as level}
          <button
            type="button"
            class={`text-xs px-2 py-1 rounded-full ${
              logLevelFilter.includes(level as LogLevel)
                ? getLevelBgColor(level as LogLevel) + ' ' + getLevelColor(level as LogLevel)
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onclick={() => toggleLogLevel(level as LogLevel)}
          >
            {level.toUpperCase()}
          </button>
        {/each}
      {/if}
      
      <div class="flex-1 relative">
        <input
          type="text"
          class="block w-full pl-8 pr-4 py-1 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search logs..."
          bind:value={searchQuery}
          oninput={updateFilteredLogs}
        />
        <Search class="absolute left-2.5 top-1.5 h-3 w-3 text-gray-400" />
      </div>
    </div>
  </div>

  <div 
    class={`font-mono text-xs ${consoleClass}`}
    style={`max-height: ${maxHeight}; overflow-y: auto;`}
  >
    {#if filteredLogs.length === 0}
      <div class="p-4 text-center text-gray-500 italic">
        No logs to display. {isRunning ? 'Generating logs...' : 'Start the simulator or add logs.'}
      </div>
    {:else}
      {#each filteredLogs as log}
        <div class={`p-2 border-b ${getLevelColor(log.level)} ${entryClass}`}>
          <div class="flex">
            {#if showTimestamps}
              <span class="text-gray-500 mr-3 w-20 flex-shrink-0">{formatTimestamp(log.timestamp)}</span>
            {/if}
            
            {#if showLogLevel}
              <span class={`mr-2 px-1.5 py-0.5 rounded text-xs font-medium ${getLevelBgColor(log.level)} flex-shrink-0`}>
                {log.level.toUpperCase()}
              </span>
            {/if}
            
            <span class="break-words flex-1">{log.message}</span>
            
            {#if log.data}
              <details class="ml-2">
                <summary class="cursor-pointer text-gray-500 hover:text-gray-700">
                  [Data]
                </summary>
                <pre class="mt-1 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                  {JSON.stringify(log.data, null, 2)}
                </pre>
              </details>
            {/if}
          </div>
        </div>
      {/each}
    {/if}
  </div>

  <div class={`border-t px-4 py-2 text-xs text-gray-500 flex justify-between items-center ${footerClass}`}>
    <div>
      <span class="inline-flex items-center">
        <Bug class="h-3 w-3 mr-1" />
        Debug Console
      </span>
    </div>
    <div>
      {isRunning ? 'Live logging' : 'Ready'}
    </div>
  </div>
</div>