<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DebugConsole from './DebugConsole.svelte';

  type LogEntry = {
    id: string;
    timestamp: Date;
    level: 'log' | 'info' | 'warn' | 'error' | 'debug';
    message: string;
  };

  type Props = {
    showTimestamps: boolean;
    showLogLevel: boolean;
    allowFilter: boolean;
    allowClear: boolean;
  };

  const initialLogs: LogEntry[] = [
    { id: '1', timestamp: new Date(), level: 'info', message: 'Server ping responded in 142ms' },
    { id: '2', timestamp: new Date(), level: 'warn', message: 'API quota at 83%' },
    { id: '3', timestamp: new Date(), level: 'error', message: 'Billing webhook returned 502' },
    { id: '4', timestamp: new Date(), level: 'debug', message: 'Feature flag "betaDashboard" enabled' },
    { id: '5', timestamp: new Date(), level: 'log', message: 'User session upgraded to premium' }
  ];

  let consoleLogs = $state<LogEntry[]>([...initialLogs]);

  function handleClear() {
    consoleLogs = [];
  }

  function handleLog(entry: LogEntry) {
    consoleLogs = [...consoleLogs, entry];
  }

  const controls: ControlConfig[] = [
    { name: 'showTimestamps', type: 'boolean', defaultValue: true },
    { name: 'showLogLevel', type: 'boolean', defaultValue: true },
    { name: 'allowFilter', type: 'boolean', defaultValue: true },
    { name: 'allowClear', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-debug-console"
  title="DebugConsole"
  component={DebugConsole}
  category="Molecules"
  description="Streaming console widget used for observability panes and embedded devtools."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live console</p>
            <p class="text-lg text-[--color-text-primary]">
              Toggle extra chrome (timestamps, log levels, filters) via the controls.
            </p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.allowFilter ? 'Filters enabled' : 'Filters hidden'}
          </span>
        </header>

        <div class="mt-6">
          <DebugConsole
            logs={consoleLogs}
            showTimestamps={props.showTimestamps}
            showLogLevel={props.showLogLevel}
            allowFilter={props.allowFilter}
            allowClear={props.allowClear}
            onClear={handleClear}
            onLog={handleLog}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Log level palette</h3>
        <p class="text-sm text-[--color-text-secondary]">Give your support teams a consistent legend for what each color means.</p>
        <ul class="mt-5 space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-red-50 px-4 py-3">
            <strong>Error</strong> — fatal issues, circuit breakers, or alert-worthy signals.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-yellow-50 px-4 py-3">
            <strong>Warn</strong> — recoverable issues, pending retries, or rate limit warnings.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-blue-50 px-4 py-3">
            <strong>Info</strong> — lifecycle events: deploys, state changes, user actions.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-purple-50 px-4 py-3">
            <strong>Debug</strong> — verbose traces for engineers toggled via feature flags.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
