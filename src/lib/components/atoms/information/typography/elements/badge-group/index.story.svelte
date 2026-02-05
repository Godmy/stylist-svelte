<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import BadgeGroup from './BadgeGroup.svelte';

  type Props = {
    maxVisible: number;
    showOverflow: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'maxVisible',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 10
    },
    {
      name: 'showOverflow',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-badge-group"
  title="BadgeGroup"
  component={BadgeGroup}
  category="Molecules"
  description="A component to display a group of badges."
  tags={['badge', 'tag', 'label']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Badge Group</h2>
      <div class="max-w-md mx-auto">
        <BadgeGroup
          badges={[
            { id: '1', label: 'Primary', variant: 'primary', size: 'md' },
            { id: '2', label: 'Secondary', variant: 'secondary', size: 'md' },
            { id: '3', label: 'Success', variant: 'success', size: 'md' },
            { id: '4', label: 'Warning', variant: 'warning', size: 'md' },
            { id: '5', label: 'Danger', variant: 'danger', size: 'md' },
            { id: '6', label: 'Info', variant: 'info', size: 'md' }
          ]}
          maxVisible={props.maxVisible}
          showOverflow={props.showOverflow}
        />
      </div>
    </div>
  {/snippet}
</Story>
