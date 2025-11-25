<script lang="ts">
  import FormHelperText from './FormHelperText.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import type { IFormHelperTextProps } from './types';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = IFormHelperTextProps & HTMLAttributes<HTMLParagraphElement>;

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'We will never share your email.', description: 'Helper text content' },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
      defaultValue: 'default',
      description: 'Visual variant of the helper text'
    },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];
</script>

<Story
  id="atoms-form-helper-text"
  title="FormHelperText"
  component={FormHelperText}
  category="Atoms"
  description="Secondary helper copy for form fields with semantic variants."
  tags={['form', 'helper']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-4">
      <FormHelperText {...props} />
    </div>
  {/snippet}
</Story>
