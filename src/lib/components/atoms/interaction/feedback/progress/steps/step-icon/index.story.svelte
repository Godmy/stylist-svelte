<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import StepIcon from './index.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { IStepIconProps } from '$stylist/design-system/attributes';

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
  {#snippet children(props: IStepIconProps)}
    <StepIcon
      status={props.status}
      size={props.size}
      stepNumber={props.stepNumber}
    />
  {/snippet}
</Story>
