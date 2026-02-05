<script lang="ts">
  import FormHelperText from './index.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  type Props = {
    text?: string;
    variant?: 'default' | 'warning' | 'danger' | 'filled' | 'ghost';
    content?: () => any;
    class?: string;
  };

  const controls: ControlConfig[] = [
    { name: 'text', type: 'text', defaultValue: 'We will never share your email.', description: 'Helper text content' },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'warning', 'danger', 'filled', 'ghost'],
      defaultValue: 'default',
      description: 'Visual variant of the helper text'
    },
    { name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
  ];

  const props: Props = {};
</script>

<div class="p-4">
  <FormHelperText {...props} />
</div>


