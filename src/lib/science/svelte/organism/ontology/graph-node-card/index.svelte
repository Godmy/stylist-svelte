<script lang="ts">
  import { Button, Icon } from '$stylist';
  import { createEventDispatcher } from 'svelte';
  import { GraphNodeCardStyleManager } from '$stylist/science/class/style-manager/graph-node-card';
  import type { GraphNodeCardRecipe } from '$stylist';

  import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';

  // Props
  type GraphNodeCardData = GraphNodeCardRecipe & {
    name: string;
    type: string;
    description?: string;
    fields?: { name: string; type: string; isRequired?: boolean }[];
  };

  type GraphNodeCardProps = {
    node: GraphNodeCardData;
    expanded?: boolean;
    showDetails?: boolean;
    selected?: boolean;
    highlight?: boolean;
    variant?: string;
    size?: string;
    class?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;

  let {
    node,
    expanded = false,
    showDetails = true,
    selected = false,
    highlight = false,
    variant = 'default',
    size = 'md',
    class: className = '',
    ...restProps
  }: GraphNodeCardProps = $props();

  // Events
  const dispatch = createEventDispatcher<{
    toggleExpand: { node: GraphNodeCardData };
    viewDetails: { node: GraphNodeCardData };
    addField: { node: GraphNodeCardData };
    fieldClick: { field: any };
  }>();

  // Local state
  let isExpanded = $state(expanded);

  // Toggle expanded state
  function toggleExpanded() {
    isExpanded = !isExpanded;
    dispatch('toggleExpand', { node });
  }

  // Determine node type for styling
  const nodeTypeClass = (type: string) => {
    switch (type) {
      case 'object': return 'node-card-object';
      case 'interface': return 'node-card-interface';
      case 'union': return 'node-card-union';
      case 'enum': return 'node-card-enum';
      case 'scalar': return 'node-card-scalar';
      case 'input': return 'node-card-input';
      default: return 'node-card-default';
    }
  };

  // Get appropriate icon for type
  const getIconName = (type: string) => {
    switch (type) {
      case 'object': return 'object';
      case 'interface': return 'interface';
      case 'union': return 'union';
      case 'enum': return 'enum';
      case 'scalar': return 'scalar';
      case 'input': return 'input';
      default: return 'default';
    }
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(GraphNodeCardStyleManager.getContainerClass(variant, size, selected, highlight, className));
  const headerClass = GraphNodeCardStyleManager.getHeaderClass();
  const titleClass = GraphNodeCardStyleManager.getTitleClass();
  const typeClass = $derived(GraphNodeCardStyleManager.getTypeClass(node.type));
  const contentClass = GraphNodeCardStyleManager.getContentClass();
  const descriptionClass = GraphNodeCardStyleManager.getDescriptionClass();
  const fieldsListClass = GraphNodeCardStyleManager.getFieldsListClass();
  const fieldItemClass = GraphNodeCardStyleManager.getFieldItemClass();
  const fieldNameClass = GraphNodeCardStyleManager.getFieldNameClass();
  const fieldTypeClass = GraphNodeCardStyleManager.getFieldTypeClass();
  const fieldRequiredClass = GraphNodeCardStyleManager.getFieldRequiredClass();
  const actionsClass = GraphNodeCardStyleManager.getActionsClass();
</script>

<div class={containerClass} {...restProps}>
  <div
    class={headerClass}
    onclick={toggleExpanded}
    role="button"
    tabindex="0"
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpanded();
      }
    }}
    aria-expanded={isExpanded}
    aria-label={`Graph node card for ${node.name}`}
  >
    <div class="mr-2">
      <Icon name={getIconName(node.type)} size="sm" />
    </div>
    <div class={titleClass}>{node.name}</div>
    <div class={typeClass}>{node.type}</div>
  </div>

  {#if isExpanded}
    <div class={contentClass}>
      {#if node.description}
        <div class={descriptionClass}>{node.description}</div>
      {/if}

      {#if node.fields && node.fields.length > 0}
        <div class={fieldsListClass}>
          {#each node.fields as field}
            <div
              class={fieldItemClass}
              onclick={() => dispatch('fieldClick', { field })}
              role="button"
              tabindex="0"
              onkeydown={(e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  dispatch('fieldClick', { field });
                }
              }}
              aria-label={`Field ${field.name} of type ${field.type}`}
            >
              <span class={fieldNameClass}>
                {field.name}
                {#if field.isRequired}<span class={fieldRequiredClass}>*</span>{/if}
              </span>
              <span class={fieldTypeClass}>{field.type}</span>
            </div>
          {/each}
        </div>
      {/if}

      <div class={actionsClass}>
        <Button
          size="sm"
          variant="ghost"
          onclick={() => dispatch('viewDetails', { node })}
          aria-label={`View details for ${node.name}`}
        >
          Details
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onclick={() => dispatch('addField', { node })}
          aria-label={`Add field to ${node.name}`}
        >
          Add Field
        </Button>
      </div>
    </div>
  {/if}
</div>





