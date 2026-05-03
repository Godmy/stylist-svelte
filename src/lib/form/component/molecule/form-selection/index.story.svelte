<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import FormSection from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'title',
      type: 'text' as TokenControllerType,
      defaultValue: 'Personal Information',
      description: 'Title of the form section'
    },
    {
      name: 'description',
      type: 'text' as TokenControllerType,
      defaultValue: 'Please provide your personal details.',
      description: 'Description of the form section'
    },
    {
      name: 'collapsible',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether the section is collapsible'
    }
  ];
</script>

<Story
  {controls}
  title="FormSection Component"
  description="Form section component with optional collapsible functionality"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-8">
    <FormSection
      title={controlValues.title}
      description={controlValues.description}
      collapsible={controlValues.collapsible}
      initiallyCollapsed={false}
    >
      <div class="space-y-4">
        <div>
          <label for="form-name" class="block text-sm font-medium text-[var(--color-text-primary)]">Name</label>
          <input id="form-name" type="text" class="mt-1 block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>

        <div>
          <label for="form-email" class="block text-sm font-medium text-[var(--color-text-primary)]">Email</label>
          <input id="form-email" type="email" class="mt-1 block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>

        <div>
          <label for="form-phone" class="block text-sm font-medium text-[var(--color-text-primary)]">Phone</label>
          <input id="form-phone" type="tel" class="mt-1 block w-full rounded-md border-[var(--color-border-primary)] shadow-sm focus:border-[var(--color-primary-500)] focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
      </div>
    </FormSection>
  </div>

  {/snippet}
</Story>




