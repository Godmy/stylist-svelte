<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import OperationsHistory from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'count', type: 'number', defaultValue: 5, min: 0, max: 10 },
    { name: 'includePending', type: 'boolean', defaultValue: true }
  ];

  type Operation = {
    id: string;
    name: string;
    query: string;
    timestamp: Date;
    status: 'success' | 'error' | 'pending';
    executionTime: number;
  };

  function buildOperations(count: number, includePending: boolean) {
    const all: Operation[] = Array.from({ length: count }, (_, i) => ({
      id: `op-${i + 1}`,
      name: i % 2 === 0 ? 'SQL Query' : 'Mutation',
      query: i % 2 === 0 ? `SELECT * FROM users WHERE id = ${i + 1}` : `UPDATE users SET status='active' WHERE id = ${i + 1}`,
      timestamp: new Date(Date.now() - i * 120000),
      status: i % 3 === 0 ? 'success' : i % 3 === 1 ? 'error' : 'pending',
      executionTime: 100 + i * 20
    }));

    return includePending ? all : all.filter((op) => op.status !== 'pending');
  }
</script>

<Story
  id="molecules-operations-history"
  title="Molecules / Information / Management / OperationsHistory"
  component={OperationsHistory}
  category="Molecules/Information/Management"
  description="Queryable operation log with status badges and row actions."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-gray-50 space-y-3">
      <OperationsHistory
        operations={buildOperations(args.count, args.includePending)}
      />
      <p class="text-sm text-gray-600">Search/filter interactions are available in the component toolbar.</p>
    </div>
  {/snippet}
</Story>
