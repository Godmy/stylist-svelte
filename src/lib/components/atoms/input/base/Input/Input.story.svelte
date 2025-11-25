<script lang="ts">
  import Input from './Input.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import type { IInputProps } from './types';

  type Props = Omit<IInputProps, 'value' | 'class'> & {
    value?: string;
    className?: string; // Rename 'class' to 'className' for story controls if desired
  };

  const controls: ControlConfig[] = [
    {
      name: 'id',
      type: 'text',
      defaultValue: 'input-1',
      description: 'Unique identifier for the input field'
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Name',
      description: 'Label text for the input field'
    },
    {
      name: 'type',
      type: 'select',
      options: ['text', 'email', 'password', 'number'],
      defaultValue: 'text',
      description: 'Input type (text, email, password, number)'
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter text...',
      description: 'Placeholder text for the input'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: '',
      description: 'Current value of the input'
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the field is required'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the input is disabled'
    },
    {
      name: 'className',
      type: 'text',
      defaultValue: '',
      description: 'Additional CSS classes to apply to the input container'
    }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Input Component</h1>

  <Story
    id="atoms-input-basic"
    title="Input"
    component={Input}
    category="Atoms"
    description="A basic text input field."
    controls={controls}
  >
    {#snippet children(props: Props)}
      <div class="p-4">
        <Input
          id={props.id}
          label={props.label}
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          disabled={props.disabled}
          value={props.value}
          class={props.className}
        />
      </div>
    {/snippet}
  </Story>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Input Variants</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Text Input</h3>
        <Input id="text-input" label="Text Input" type="text" placeholder="Enter text..." />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Email Input</h3>
        <Input id="email-input" label="Email Input" type="email" placeholder="Enter email..." />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Password Input</h3>
        <Input id="password-input" label="Password Input" type="password" placeholder="Enter password..." />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Number Input</h3>
        <Input id="number-input" label="Number Input" type="number" placeholder="Enter number..." />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Disabled Input</h3>
        <Input id="disabled-input" label="Disabled Input" type="text" placeholder="This input is disabled" disabled={true} />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Required Input</h3>
        <Input id="required-input" label="Required Input" type="text" placeholder="This input is required" required={true} />
      </div>
    </div>
  </div>
</div>