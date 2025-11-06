<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import EmptyState from './EmptyState.svelte';

  type EmptyStateStoryProps = {
    title: string;
    description: string;
    showAction: boolean;
    actionLabel: string;
    showCustomIcon: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'No projects yet'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Create your first project to start collaborating with your team.'
    },
    {
      name: 'showAction',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'actionLabel',
      type: 'text',
      defaultValue: 'New Project'
    },
    {
      name: 'showCustomIcon',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let actionCount = $state(0);

  function resolveAction(label: string, enabled: boolean) {
    if (!enabled) return undefined;
    return {
      label,
      onClick: () => {
        actionCount += 1;
      }
    };
  }
</script>

{#snippet customIcon()}
  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
    <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
  </div>
{/snippet}

<Story
  id="molecules-empty-state"
  title="EmptyState"
  component={EmptyState}
  category="Molecules"
  description="Centered message for blank slates with optional action."
  tags={['empty', 'placeholder']}
  controls={controls}
>
  {#snippet children(props: EmptyStateStoryProps)}
    <div class="space-y-6">
      <EmptyState
        title={props.title}
        description={props.description}
        icon={props.showCustomIcon ? customIcon : undefined}
        action={resolveAction(props.actionLabel, props.showAction)}
      />

      {#if props.showAction}
        <p class="text-sm text-gray-600">
          Action clicked <span class="font-semibold">{actionCount}</span> {actionCount === 1 ? 'time' : 'times'}.
        </p>
      {/if}
    </div>
  {/snippet}
</Story>
