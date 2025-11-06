<script lang="ts">
  import { Story, type ControlConfig } from 'stylist-svelte/playground';
  import Label from './Label.svelte';
  import Input from './Input.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'text',
      type: 'text',
      defaultValue: 'Демо метка'
    }
  ];
</script>

<Story
  id="atoms-label"
  title="Label"
  category="Atoms"
  component={Label}
  description="Ярлык для элементов формы"
  tags={['form', 'label', 'input']}
  controls={controls}
>
  {#snippet children(props: Record<string, any>)}
    <div class="space-y-2">
      <Label
        htmlFor="demo-input"
        size={props.size}
        required={props.required}
        disabled={props.disabled}
        text={props.text}
      />
      <Input
        id="demo-input"
        label=""
        placeholder="Введите значение"
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>