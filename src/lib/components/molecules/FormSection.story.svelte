<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import FormSection from './forms/FormSection.svelte';
  import FormFieldGroup from './forms/FormFieldGroup.svelte';
  import Input from '../atoms/forms/Input.svelte';
  import Checkbox from '../atoms/forms/Checkbox.svelte';

  type FormSectionStoryProps = {
    title: string;
    description: string;
    collapsible: boolean;
    initiallyCollapsed: boolean;
    required: boolean;
    border: boolean;
    padding: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Profile information'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'We use this information to personalize your workspace.'
    },
    {
      name: 'collapsible',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'initiallyCollapsed',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'border',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'padding',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let name = $state('Jane Doe');
  let email = $state('jane@example.com');
  let marketing = $state(true);
</script>

<Story
  id="molecules-form-section"
  title="FormSection"
  component={FormSection}
  category="Molecules"
  description="Structured form wrapper with optional collapsible behavior."
  tags={['form', 'layout', 'section']}
  controls={controls}
>
  {#snippet children(props: FormSectionStoryProps)}
    <FormSection
      title={props.title}
      description={props.description}
      collapsible={props.collapsible}
      initiallyCollapsed={props.initiallyCollapsed}
      required={props.required}
      border={props.border}
      padding={props.padding}
    >
      {#snippet children()}
        <div class="space-y-6">
          <FormFieldGroup
            id="form-section-name"
            label="Full name"
            required={true}
            hint="Use your real name so teammates can recognize you."
          >
            {#snippet children()}
              <Input
                id="form-section-name"
                label=""
                bind:value={name}
                placeholder="Your name"
              />
            {/snippet}
          </FormFieldGroup>

          <FormFieldGroup
            id="form-section-email"
            label="Email address"
            required={true}
            description="We will send account notifications to this email."
          >
            {#snippet children()}
              <Input
                id="form-section-email"
                label=""
                type="email"
                bind:value={email}
                placeholder="you@example.com"
              />
            {/snippet}
          </FormFieldGroup>

          <FormFieldGroup
            id="form-section-marketing"
            label="Marketing emails"
            description="Stay up to date with product updates and tips."
            orientation="horizontal"
          >
            {#snippet children()}
              <Checkbox
                id="form-section-marketing"
                label="Receive occasional product updates"
                bind:checked={marketing}
              />
            {/snippet}
          </FormFieldGroup>
        </div>
      {/snippet}
    </FormSection>
  {/snippet}
</Story>
