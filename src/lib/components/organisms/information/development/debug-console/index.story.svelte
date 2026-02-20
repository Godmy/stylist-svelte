<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import DebugConsole from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showTimestamps', type: 'boolean', defaultValue: true },
      { name: 'showLogLevel', type: 'boolean', defaultValue: true },
      { name: 'allowFilter', type: 'boolean', defaultValue: true },
      { name: 'allowClear', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type LogEntry = {
    id: string;
    timestamp: Date;
    level: 'log' | 'info' | 'warn' | 'error' | 'debug';
    message: string;
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
</script>

<Story
  {id}
  {title}
  {description}
  component={DebugConsole}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-debug-console grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Debug Console Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive debug console with customizable options.</p>

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

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Debug Console Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different debug console configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Minimal</p>
            <div>
              <DebugConsole
                logs={consoleLogs.slice(0, 2)}
                showTimestamps={false}
                allowFilter={false}
                onLog={handleLog}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Errors Only</p>
            <div>
              <DebugConsole
                logs={consoleLogs.filter(log => log.level === 'error')}
                showLogLevel={true}
                allowClear={true}
                onClear={handleClear}
                onLog={handleLog}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

