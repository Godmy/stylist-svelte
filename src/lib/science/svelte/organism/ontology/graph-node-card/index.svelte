<script lang="ts">
  import { Button, Icon } from '$stylist';
  import type { GraphNodeCardProps } from '$stylist/science/type/struct/graph-node-card-props';
  import { createGraphNodeCardState } from '$stylist/science/function/state/graph-node-card';

  let props: GraphNodeCardProps = $props();
  const state = createGraphNodeCardState(props);
</script>

<div class={state.containerClass} {...props}>
  <div
    class={state.headerClass}
    onclick={state.toggleExpanded}
    role="button"
    tabindex="0"
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        state.toggleExpanded();
      }
    }}
    aria-expanded={state.isExpanded}
    aria-label={`Graph node card for ${props.node.name}`}
  >
    <div class="mr-2">
      <Icon name={state.getIconName(props.node.type)} size="sm" />
    </div>
    <div class={state.titleClass}>{props.node.name}</div>
    <div class={state.typeClass}>{props.node.type}</div>
  </div>

  {#if state.isExpanded}
    <div class={state.contentClass}>
      {#if props.node.description}
        <div class={state.descriptionClass}>{props.node.description}</div>
      {/if}

      {#if props.node.fields && props.node.fields.length > 0}
        <div class={state.fieldsListClass}>
          {#each props.node.fields as field}
            <div
              class={state.fieldItemClass}
              onclick={() => state.handleFieldClick(field)}
              role="button"
              tabindex="0"
              onkeydown={(e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  state.handleFieldClick(field);
                }
              }}
              aria-label={`Field ${field.name} of type ${field.type}`}
            >
              <span class={state.fieldNameClass}>
                {field.name}
                {#if field.isRequired}<span class={state.fieldRequiredClass}>*</span>{/if}
              </span>
              <span class={state.fieldTypeClass}>{field.type}</span>
            </div>
          {/each}
        </div>
      {/if}

      <div class={state.actionsClass}>
        <Button
          size="sm"
          variant="ghost"
          onclick={state.handleViewDetails}
          aria-label={`View details for ${props.node.name}`}
        >
          Details
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onclick={state.handleAddField}
          aria-label={`Add field to ${props.node.name}`}
        >
          Add Field
        </Button>
      </div>
    </div>
  {/if}
</div>





