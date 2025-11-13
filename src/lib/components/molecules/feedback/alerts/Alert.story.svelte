<script lang="ts">
  import { Alert } from '$lib';

  // More on args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
  const baseArgs = {
    title: 'Alert title',
    content: 'This is an alert message.',
  };

  const args: {
    variant: 'info' | 'success' | 'warning' | 'error';
    closable: boolean;
    icon: boolean;
    title: string;
    content: string;
  } = {
    ...baseArgs,
    variant: 'info',
    closable: false,
    icon: true,
  };

  const controls = {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    closable: { control: { type: 'boolean' } },
    icon: { control: { type: 'boolean' } },
  };
</script>

<!-- Default story -->
<div class="p-4">
  <Alert 
    variant={args.variant}
    title={args.title}
    closable={args.closable}
    icon={args.icon}
  >
    {#snippet content()}
      {args.content}
    {/snippet}
  </Alert>
</div>

<!-- Variant examples -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Alert Variants</h3>
  <div class="space-y-2">
    <Alert variant="info" title="Informational alert">
      {#snippet content()}
        This is an informational message.
      {/snippet}
    </Alert>
    <Alert variant="success" title="Success alert">
      {#snippet content()}
        This is a success message.
      {/snippet}
    </Alert>
    <Alert variant="warning" title="Warning alert">
      {#snippet content()}
        This is a warning message.
      {/snippet}
    </Alert>
    <Alert variant="error" title="Error alert">
      {#snippet content()}
        This is an error message.
      {/snippet}
    </Alert>
  </div>
</div>

<!-- With icon and without icon -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">With and Without Icon</h3>
  <div class="space-y-2">
    <Alert variant="info" title="Alert with icon" icon={true}>
      {#snippet content()}
        This alert has an icon.
      {/snippet}
    </Alert>
    <Alert variant="info" title="Alert without icon" icon={false}>
      {#snippet content()}
        This alert has no icon.
      {/snippet}
    </Alert>
  </div>
</div>

<!-- With and without closable -->
<div class="p-4 space-y-4">
  <h3 class="text-lg font-medium">Closable and Non-Closable</h3>
  <div class="space-y-2">
    <Alert variant="info" title="Closable alert" closable={true}>
      {#snippet content()}
        This alert can be closed.
      {/snippet}
    </Alert>
    <Alert variant="info" title="Non-closable alert" closable={false}>
      {#snippet content()}
        This alert cannot be closed.
      {/snippet}
    </Alert>
  </div>
</div>