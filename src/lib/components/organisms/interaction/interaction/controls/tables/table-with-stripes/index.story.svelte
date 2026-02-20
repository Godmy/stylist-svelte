<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TableWithStripes from './index.svelte';

  type Props = {
    striped: boolean;
    hoverable: boolean;
    compact: boolean;
    showHeader: boolean;
    stripeColor: string;
  };

  const controls: ControlConfig[] = [
    { name: 'striped', type: 'boolean', defaultValue: true },
    { name: 'hoverable', type: 'boolean', defaultValue: true },
    { name: 'compact', type: 'boolean', defaultValue: false },
    { name: 'showHeader', type: 'boolean', defaultValue: true },
    { name: 'stripeColor', type: 'select', options: ['gray', 'blue', 'green'], defaultValue: 'gray' }
  ];

  const columns = ['id', 'name', 'email', 'status'];
  
  const data = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', status: 'active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'inactive' },
    { id: 3, name: 'Chris Brown', email: 'chris@example.com', status: 'active' },
    { id: 4, name: 'Diana Lee', email: 'diana@example.com', status: 'pending' },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', status: 'active' },
    { id: 6, name: 'Frank Miller', email: 'frank@example.com', status: 'active' },
    { id: 7, name: 'Grace Taylor', email: 'grace@example.com', status: 'inactive' }
  ];

  function handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
</script>

<Story
  id="organisms-table-with-stripes"
  title="Organisms / Interaction / Controls / Tables / Table With Stripes"
  component={TableWithStripes}
  category="Organisms/Interaction/Controls/Tables"
  description="A table component with striped rows for improved readability."
  tags={['table', 'stripes', 'zebra']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-table-with-stripes p-4">
      <h1 class="text-lg font-semibold mb-4">TableWithStripes Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive TableWithStripes</h2>
        <div class="max-w-4xl">
          <TableWithStripes 
            {data} 
            {columns}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

