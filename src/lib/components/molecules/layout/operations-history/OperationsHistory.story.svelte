<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OperationsHistory from './OperationsHistory.svelte';

  type Props = {};

  const controls: ControlConfig[] = [];
</script>

<Story
  id="molecules-operations-history"
  title="OperationsHistory"
  component={OperationsHistory}
  category="Molecules"
  description="A component to display a history of operations or actions."
  tags={['history', 'operations', 'log']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-2xl mx-auto">
      <h2 class="text-xl font-semibold mb-6">Operations History</h2>
      <OperationsHistory
        operations={[
          {
            id: '1',
            name: 'Data Query',
            query: 'SELECT * FROM users WHERE active = true',
            timestamp: new Date(),
            status: 'success',
            executionTime: 150
          },
          {
            id: '2',
            name: 'Update Operation',
            query: 'UPDATE users SET last_login = NOW() WHERE id = 123',
            timestamp: new Date(Date.now() - 300000),
            status: 'error',
            executionTime: 200
          },
          {
            id: '3',
            name: 'Insert Operation',
            query: 'INSERT INTO logs (action, user_id) VALUES ("login", 123)',
            timestamp: new Date(Date.now() - 600000),
            status: 'pending'
          }
        ]}
      />
    </div>
  {/snippet}
</Story>