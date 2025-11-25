<script lang="ts">
  import FormErrorMessage from './FormErrorMessage.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import type { IFormErrorMessageProps } from './types';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = IFormErrorMessageProps & HTMLAttributes<HTMLParagraphElement>;

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'Email is required.', description: 'Error message text' },
    { name: 'visible', type: 'boolean', defaultValue: true, description: 'Whether the error message is visible' },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];
</script>

<Story
  id="atoms-form-error-message"
  title="FormErrorMessage"
  component={FormErrorMessage}
  category="Atoms"
  description="Displays validation errors under form fields."
  tags={['form', 'error', 'helper']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-4">
      <FormErrorMessage {...props} />
    </div>
  {/snippet}
</Story>
