<script lang="ts">
  import DownloadCard from './DownloadCard.svelte';
  import type { Meta, StoryFn } from '$lib/playground/interfaces';
  import type { IDownloadCardProps } from './types';

  // Define the meta information for the story
  const meta: Meta = {
    title: 'Molecules/File Management/DownloadCard',
    component: DownloadCard,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered'
    },
    argTypes: {
      file: {
        control: { type: 'object' },
        description: 'Метаданные файла',
        defaultValue: {
          name: 'documentation.pdf',
          size: 2457600,
          type: 'PDF',
          date: '2023-10-15'
        }
      },
      variant: {
        control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
        description: 'Вариант оформления карточки',
        defaultValue: 'primary'
      },
      downloadUrl: {
        control: { type: 'text' },
        description: 'URL для скачивания файла',
        defaultValue: '#'
      },
      iconAlt: {
        control: { type: 'text' },
        description: 'Альтернативный текст для иконки файла',
        defaultValue: 'File'
      },
      showMetadata: {
        control: { type: 'boolean' },
        description: 'Показывать ли метаданные файла',
        defaultValue: true
      },
      icon: {
        control: { type: 'text' },
        description: 'Пользовательская иконка для файла'
      },
      class: {
        control: { type: 'text' },
        description: 'Дополнительные CSS классы'
      }
    }
  };

  // Default story
  const DefaultStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: DownloadCard,
      props: args || {}
    };
  };

  // Story with different configurations
  const WithCustomIconStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: DownloadCard,
      props: { ...args, file: { name: 'style-guide.docx', size: '3.2 MB', type: 'DOCX', date: '2023-10-10' }, variant: 'success', icon: '📝' }
    };
  };

  const WarningVariantStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: DownloadCard,
      props: { ...args, file: { name: 'report.xlsx', size: 5120000, type: 'XLSX', date: '2023-10-01' }, variant: 'warning', downloadUrl: '#' }
    };
  };

  const WithoutMetadataStory: StoryFn = (args?: Record<string, any>) => {
    return {
      Component: DownloadCard,
      props: { ...args, file: { name: 'archive.zip', size: 10485760, type: 'ZIP' }, showMetadata: false, variant: 'danger' }
    };
  };
</script>

<!-- Default story -->
<div id="molecules-download-card">
  <h1>DownloadCard</h1>
  <p>DownloadCard - компонент для отображения карточки файла с возможностью скачивания</p>

  <h2>Default</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={DefaultStory}
      file={{ name: 'documentation.pdf', size: 2457600, type: 'PDF', date: '2023-10-15' }}
      downloadUrl="#"
      variant="primary"
      showMetadata={true} />
  </div>

  <h2>With Custom Icon</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={WithCustomIconStory}
      file={{ name: 'style-guide.docx', size: '3.2 MB', type: 'DOCX', date: '2023-10-10' }}
      variant="success"
      icon="📝" />
  </div>

  <h2>Warning Variant</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={WarningVariantStory}
      file={{ name: 'report.xlsx', size: 5120000, type: 'XLSX', date: '2023-10-01' }}
      variant="warning"
      downloadUrl="#" />
  </div>

  <h2>Without Metadata</h2>
  <div class="p-4 border rounded-lg max-w-md">
    <svelte:component this={WithoutMetadataStory}
      file={{ name: 'archive.zip', size: 10485760, type: 'ZIP' }}
      showMetadata={false}
      variant="danger" />
  </div>
</div>

<!-- Export the meta for Storybook -->
{@html `<script type="application/json" id="svelte-meta">${JSON.stringify(meta)}</script>`}