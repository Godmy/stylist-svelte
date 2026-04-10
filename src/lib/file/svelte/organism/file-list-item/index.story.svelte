<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import FileListItem from './index.svelte';

  let item = {
    id: 'file1',
    name: 'document.pdf',
    type: 'document' as const,
    size: 1028000,
    modified: new Date(Date.now() - 86400000),
    created: new Date(Date.now() - 172800000),
    path: '/documents/file.pdf',
    owner: 'john.doe',
    selected: false,
  };

  const controls = {
    showThumbnail: false,
    showSize: true,
    showModified: true,
    showOwner: true,
    enableSelection: true,
    disabled: false,
    variant: 'default',
  };
</script>

<Story component={FileListItem} title="FileListItem" description="Interactive file row with selection and actions." {controls}>
  {#snippet template(args)}
    <div class="border rounded">
      <FileListItem item={item} {...args} />
    </div>
  {/snippet}
</Story>
