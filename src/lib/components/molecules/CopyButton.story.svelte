<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CopyButton from './CopyButton.svelte';

  type CopyButtonStoryProps = {
    text: string;
    label: string;
    successMessage: string;
    showIcon: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'text',
      type: 'text',
      defaultValue: 'npm install stylist-svelte'
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Copy command'
    },
    {
      name: 'successMessage',
      type: 'text',
      defaultValue: 'Copied to clipboard'
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let status = $state<string | null>(null);
  let statusType = $state<'success' | 'error'>('success');

  function handleSuccess(message: string) {
    status = message;
    statusType = 'success';
  }

  function handleError(message: string) {
    status = message;
    statusType = 'error';
  }
</script>

<Story
  id="molecules-copy-button"
  title="CopyButton"
  component={CopyButton}
  category="Molecules"
  description="Copies text to the clipboard with feedback state."
  tags={['clipboard', 'button']}
  controls={controls}
>
  {#snippet children(props: CopyButtonStoryProps)}
    <div class="space-y-4">
      <pre class="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-auto">
{props.text}
      </pre>

      <CopyButton
        text={props.text}
        label={props.label}
        successMessage={props.successMessage}
        showIcon={props.showIcon}
        onSuccess={handleSuccess}
        onError={handleError}
      />

      {#if status}
        <div class="text-sm font-medium {statusType === 'success' ? 'text-green-600' : 'text-red-600'}">
          {status}
        </div>
      {/if}
    </div>
  {/snippet}
</Story>
