<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import AttachmentPreview from './index.svelte';

  type Props = {
    attachmentName: string;
    attachmentType: 'image' | 'document' | 'video' | 'audio';
    attachmentSize: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'attachmentName',
      type: 'text',
      defaultValue: 'example.pdf'
    },
    {
      name: 'attachmentType',
      type: 'select',
      defaultValue: 'document',
      options: ['image', 'document', 'video', 'audio']
    },
    {
      name: 'attachmentSize',
      type: 'number',
      defaultValue: 2400000
    }
  ];
</script>

<Story
  id="molecules-attachment-preview"
  title="AttachmentPreview"
  component={AttachmentPreview}
  category="Molecules"
  description="A component to preview file attachments."
  tags={['file', 'preview', 'attachment']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Attachment Preview</h2>
      <div class="max-w-md mx-auto">
        <AttachmentPreview
          attachment={{
            id: '1',
            name: values.attachmentName,
            type: values.attachmentType,
            size: values.attachmentSize
          }}
        />
      </div>
    </div>
  {/snippet}
</Story>



