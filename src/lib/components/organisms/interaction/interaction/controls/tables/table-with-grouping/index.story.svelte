<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TableWithGrouping from './index.svelte';

  type Props = {
    groupBy: string;
    showGroupCounts: boolean;
    collapsible: boolean;
    striped: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'groupBy', type: 'select', options: ['team', 'role', 'status'], defaultValue: 'team' },
    { name: 'showGroupCounts', type: 'boolean', defaultValue: true },
    { name: 'collapsible', type: 'boolean', defaultValue: true },
    { name: 'striped', type: 'boolean', defaultValue: true }
  ];

  const data = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', team: 'Engineering', role: 'Developer', status: 'active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', team: 'Design', role: 'Designer', status: 'active' },
    { id: 3, name: 'Chris Brown', email: 'chris@example.com', team: 'Engineering', role: 'Developer', status: 'inactive' },
    { id: 4, name: 'Diana Lee', email: 'diana@example.com', team: 'Marketing', role: 'Manager', status: 'active' },
    { id: 5, name: 'Eve Wilson', email: 'eve@example.com', team: 'Engineering', role: 'Lead', status: 'active' },
    { id: 6, name: 'Frank Miller', email: 'frank@example.com', team: 'Design', role: 'Designer', status: 'pending' },
    { id: 7, name: 'Grace Taylor', email: 'grace@example.com', team: 'Marketing', role: 'Specialist', status: 'active' }
  ];

  function handleGroupToggle(group: string) {
    console.log('Group toggled:', group);
  }

  function handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }
</script>

<Story
  id="organisms-table-with-grouping"
  title="Organisms / Interaction / Controls / Tables / Table With Grouping"
  component={TableWithGrouping}
  category="Organisms/Interaction/Controls/Tables"
  description="A table component with grouping capabilities for organizing data by categories."
  tags={['table', 'grouping', 'categories']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-table-with-grouping p-4">
      <h1 class="text-lg font-semibold mb-4">TableWithGrouping Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive TableWithGrouping</h2>
        <div class="max-w-4xl">
          <TableWithGrouping 
            {data} 
            groupBy={props.groupBy}
            showGroupCounts={props.showGroupCounts}
            collapsible={props.collapsible}
            striped={props.striped}
            onGroupToggle={handleGroupToggle}
            onRowClick={handleRowClick}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

