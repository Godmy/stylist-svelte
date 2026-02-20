<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FieldHighlighter from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  type GraphNode = {
    id: string;
    name: string;
    type: string;
    description?: string;
    position?: { x: number; y: number };
    width?: number;
    height?: number;
    fields?: Array<{ name: string; type: string; isRequired?: boolean }>;
  };

  type GraphEdge = {
    id: string;
    source: string;
    target: string;
    type: string;
    label?: string;
  };

  const graphData: { nodes: GraphNode[]; edges: GraphEdge[] } = {
    nodes: [
      {
        id: 'customer',
        name: 'Customer',
        type: 'table',
        description: 'Profile attributes',
        position: { x: 40, y: 60 },
        width: 220,
        height: 160,
        fields: [
          { name: 'id', type: 'uuid', isRequired: true },
          { name: 'email', type: 'string', isRequired: true },
          { name: 'first_name', type: 'string' },
          { name: 'lifecycle_stage', type: 'enum' }
        ]
      },
      {
        id: 'order',
        name: 'Order',
        type: 'table',
        position: { x: 320, y: 220 },
        width: 220,
        height: 140,
        fields: [
          { name: 'order_id', type: 'uuid', isRequired: true },
          { name: 'customer_id', type: 'uuid', isRequired: true },
          { name: 'total', type: 'number' },
          { name: 'status', type: 'enum' }
        ]
      },
      {
        id: 'engagement',
        name: 'Engagement',
        type: 'view',
        description: 'Product usage events',
        position: { x: 620, y: 80 },
        width: 240,
        height: 180,
        fields: [
          { name: 'session_id', type: 'uuid', isRequired: true },
          { name: 'customer_id', type: 'uuid' },
          { name: 'event', type: 'string' },
          { name: 'occurred_at', type: 'timestamp' }
        ]
      }
    ],
    edges: [
      {
        id: 'customer-order',
        source: 'customer',
        target: 'order',
        type: 'relation',
        label: '1 → n'
      },
      {
        id: 'customer-engagement',
        source: 'customer',
        target: 'engagement',
        type: 'relation',
        label: '1 → n'
      }
    ]
  };

  const controls = [
    {
      name: 'selectedNodeId',
      type: 'select' as ControlType,
      defaultValue: 'customer',
      options: graphData.nodes.map(n => n.id),
      description: 'Selected node ID'
    }
  ];

  let selectedNodeId = $state('customer');
  let selectedFieldName = $state('email');

  const selectedNode = $derived(graphData.nodes.find((node: GraphNode) => node.id === selectedNodeId) ?? graphData.nodes[0]);
  const selectedField = $derived(selectedNode?.fields?.find((field: { name: string }) => field.name === selectedFieldName) ?? null);

  function handleNodeSelection(node: GraphNode) {
    selectedNodeId = node.id;
    selectedFieldName = node.fields?.[0]?.name ?? '';
  }
</script>

<Story
  {controls}
  title="FieldHighlighter Component"
  description="Interactive field highlighter with graph visualization"
  let:controlValues
>
  <div class="p-4">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <div>
          <label for="node-select" class="text-sm font-medium text-[--color-text-secondary]">
            Активная сущность
          </label>
          <select
            id="node-select"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={selectedNodeId}
          >
            {#each graphData.nodes as node}
              <option value={node.id}>{node.name}</option>
            {/each}
          </select>
        </div>

        <div>
          <label for="field-select" class="text-sm font-medium text-[--color-text-secondary]">
            Выделить поле
          </label>
          <select
            id="field-select"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={selectedFieldName}
            disabled={!selectedNode?.fields?.length}
          >
            {#if selectedNode?.fields}
              {#each selectedNode.fields as field}
                <option value={field.name}>{field.name}</option>
              {/each}
            {/if}
          </select>
        </div>

        <div class="rounded-xl bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]">
          <p class="font-semibold text-[--color-text-primary]">{selectedNode?.name}</p>
          <p>{selectedNode?.description ?? 'Нет описания'}</p>
          {#if selectedField}
            <p class="mt-3 text-xs uppercase tracking-wide text-[--color-text-secondary]">
              Выбранное поле: <span class="font-semibold text-[--color-text-primary]">{selectedField.name}</span>
            </p>
          {/if}
        </div>
      </div>

      <div class="relative min-h-[360px] overflow-hidden rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <FieldHighlighter
          data={graphData}
          selectedNode={selectedNode}
          selectedField={selectedField}
          onNodeClick={(event: CustomEvent<{ node: GraphNode }>) => handleNodeSelection(event.detail.node)}
          onFieldClick={(event: CustomEvent<{ node: GraphNode; field: { name: string; type: string; isRequired?: boolean } }>) => {
            handleNodeSelection(event.detail.node);
            selectedFieldName = event.detail.field.name;
          }}
        />
      </div>
    </div>
  </div>
</Story>