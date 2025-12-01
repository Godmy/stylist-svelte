<script lang="ts">
  import UploadProgress from './UploadProgress.svelte';
  import type { IUploadFile, UploadProgressVariant } from './types';

  // Моковые данные для файлов
  const mockFiles: IUploadFile[] = [
    {
      id: '1',
      name: 'document.pdf',
      size: 1024000,
      status: 'idle',
      progress: 0
    },
    {
      id: '2',
      name: 'image.jpg',
      size: 512000,
      status: 'uploading',
      progress: 45
    },
    {
      id: '3',
      name: 'presentation.pptx',
      size: 2048000,
      status: 'success',
      progress: 100,
      uploadedAt: new Date()
    },
    {
      id: '4',
      name: 'video.mp4',
      size: 5120000,
      status: 'error',
      progress: 20,
      error: 'File too large'
    }
  ];

  // Определение переменных
  let files: IUploadFile[] = mockFiles;
  let variant: UploadProgressVariant = 'default';
  let showFileName: boolean = true;
  let showFileSize: boolean = true;
  let showProgress: boolean = true;
  let showActions: boolean = true;
  let autoHideCompleted: boolean = false;
  let maxVisible: number = 5;
</script>

<div>
  <h2>Default</h2>
  <UploadProgress
    {files}
    {variant}
    {showFileName}
    {showFileSize}
    {showProgress}
    {showActions}
    {autoHideCompleted}
    {maxVisible}
  />

  <h2>Compact</h2>
  <UploadProgress
    {files}
    variant="compact"
    {showFileName}
    {showFileSize}
    {showProgress}
    {showActions}
    {autoHideCompleted}
    {maxVisible}
  />

  <h2>Detailed</h2>
  <UploadProgress
    {files}
    variant="detailed"
    {showFileName}
    {showFileSize}
    {showProgress}
    {showActions}
    {autoHideCompleted}
    {maxVisible}
  />

  <h2>With Hidden Completed</h2>
  <UploadProgress
    {files}
    {showFileName}
    {showFileSize}
    {showProgress}
    {showActions}
    autoHideCompleted={true}
    maxVisible={3}
  />
</div>