<script lang="ts">
  import { Button, Icon } from '$stylist/components/atoms';
  import { createEventDispatcher } from 'svelte';
  import { GraphNodeCardStyleManager } from '$stylist/design-system/styles';
  import type { GraphNodeCardProps, GraphNodeData } from '$stylist/design-system/props';

  import type { HTMLAttributes } from 'svelte/elements';

  // Props
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
  }: GraphNodeCardProps & HTMLAttributes<HTMLDivElement> = $props();

  // Events
  const dispatch = createEventDispatcher<{
    toggleExpand: { node: GraphNodeData };
    viewDetails: { node: GraphNodeData };
    addField: { node: GraphNodeData };
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
  const headerClass = $derived(GraphNodeCardStyleManager.getHeaderClass());
  const titleClass = $derived(GraphNodeCardStyleManager.getTitleClass());
  const typeClass = $derived(GraphNodeCardStyleManager.getTypeClass(node.type));
  const contentClass = $derived(GraphNodeCardStyleManager.getContentClass());
  const descriptionClass = $derived(GraphNodeCardStyleManager.getDescriptionClass());
  const fieldsListClass = $derived(GraphNodeCardStyleManager.getFieldsListClass());
  const fieldItemClass = $derived(GraphNodeCardStyleManager.getFieldItemClass());
  const fieldNameClass = $derived(GraphNodeCardStyleManager.getFieldNameClass());
  const fieldTypeClass = $derived(GraphNodeCardStyleManager.getFieldTypeClass());
  const fieldRequiredClass = $derived(GraphNodeCardStyleManager.getFieldRequiredClass());
  const actionsClass = $derived(GraphNodeCardStyleManager.getActionsClass());
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

