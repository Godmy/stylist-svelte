<script lang="ts">
  import { Story } from '$lib/playground';
  import StepIcon from './StepIcon.svelte';
  import type { ControlConfig } from '$lib/playground';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'status', type: 'select', options: ['pending', 'active', 'completed', 'error'], defaultValue: 'pending' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'stepNumber', type: 'number', min: 0, max: 100, defaultValue: 1 }
    ]
  } = $props<{
    id: string;
    title: string;
    description: string;
    controls: ControlConfig[];
  }>();
</script>

<Story
  {id}
  {title}
  {description}
  component={StepIcon}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props: import('./types').IStepIconProps)}
    <StepIcon
      status={props.status}
      size={props.size}
      stepNumber={props.stepNumber}
    />
  {/snippet}
</Story>
