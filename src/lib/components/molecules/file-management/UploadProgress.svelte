<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Upload, CheckCircle, AlertCircle, X, RotateCcw } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type FileStatus = 'idle' | 'uploading' | 'success' | 'error';

  type UploadFile = {
    id: string;
    name: string;
    size: number;
    status: FileStatus;
    progress: number;
    error?: string;
    uploadedAt?: Date;
    data?: any; // File data
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    files: UploadFile[];
    class?: string;
    itemClass?: string;
    progressClass?: string;
    showFileName?: boolean;
    showFileSize?: boolean;
    showProgress?: boolean;
    showActions?: boolean;
    onRetry?: (file: UploadFile) => void;
    onCancel?: (file: UploadFile) => void;
    onRemove?: (file: UploadFile) => void;
    autoHideCompleted?: boolean;
    maxVisible?: number;
  };

  let {
    files = [],
    class: hostClass = '',
    itemClass = '',
    progressClass = '',
    showFileName = true,
    showFileSize = true,
    showProgress = true,
    showActions = true,
    onRetry,
    onCancel,
    onRemove,
    autoHideCompleted = false,
    maxVisible = 5,
    ...restProps
  }: Props = $props();

  let visibleFiles = $derived(() => {
    let visible = files;
    
    if (autoHideCompleted) {
      visible = files.filter(file => file.status !== 'success');
    }
    
    if (maxVisible > 0) {
      visible = visible.slice(0, maxVisible);
    }
    
    return visible;
  });

  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  function handleRetry(file: UploadFile) {
    onRetry?.(file);
  }

  function handleCancel(file: UploadFile) {
    onCancel?.(file);
  }

  function handleRemove(file: UploadFile) {
    onRemove?.(file);
  }
</script>

<div class={`upload-progress ${hostClass}`} {...restProps}>
  {#if files.length === 0}
    <div class="text-center py-4 text-gray-500">
      No uploads
    </div>
  {:else}
    <div class="space-y-3">
      {#each visibleFiles() as file}
        <div 
          class={`flex items-center p-3 border rounded-lg ${
            file.status === 'success' ? 'border-green-200 bg-green-50' :
            file.status === 'error' ? 'border-red-200 bg-red-50' :
            file.status === 'uploading' ? 'border-blue-200 bg-blue-50' :
            'border-gray-200'
          } ${itemClass}`}
        >
          <div class="flex-shrink-0">
            {#if file.status === 'success'}
              <CheckCircle class="h-6 w-6 text-green-500" />
            {:else if file.status === 'error'}
              <AlertCircle class="h-6 w-6 text-red-500" />
            {:else if file.status === 'uploading'}
              <Upload class="h-6 w-6 text-blue-500 animate-pulse" />
            {:else}
              <Upload class="h-6 w-6 text-gray-400" />
            {/if}
          </div>
          
          <div class="ml-3 min-w-0 flex-1">
            {#if showFileName}
              <p class="text-sm font-medium text-gray-900 truncate">{file.name}</p>
            {/if}
            
            {#if showFileSize}
              <p class="text-sm text-gray-500">{formatFileSize(file.size)}</p>
            {/if}
            
            {#if showProgress && file.status === 'uploading'}
              <div class="mt-2">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class={`h-2 rounded-full ${
                      file.progress < 30 ? 'bg-blue-400' :
                      file.progress < 70 ? 'bg-blue-500' :
                      'bg-blue-600'
                    } ${progressClass}`}
                    style={`width: ${file.progress}%`}
                  ></div>
                </div>
                <div class="text-xs text-gray-500 mt-1">{Math.round(file.progress)}% complete</div>
              </div>
            {/if}
            
            {#if file.status === 'error' && file.error}
              <p class="text-xs text-red-600 mt-1 truncate">{file.error}</p>
            {/if}
          </div>
          
          {#if showActions}
            <div class="ml-4 flex-shrink-0 flex space-x-2">
              {#if file.status === 'error'}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onclick={() => handleRetry(file)}
                  title="Retry upload"
                >
                  <RotateCcw class="h-4 w-4 text-gray-600" />
                </Button>
              {/if}
              
              {#if file.status === 'uploading'}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onclick={() => handleCancel(file)}
                  title="Cancel upload"
                >
                  <X class="h-4 w-4 text-gray-600" />
                </Button>
              {/if}
              
              <Button 
                variant="ghost" 
                size="sm"
                onclick={() => handleRemove(file)}
                title="Remove"
              >
                <X class="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          {/if}
        </div>
      {/each}
      
      {#if autoHideCompleted && files.length > visibleFiles.length}
        <div class="text-center text-sm text-gray-500 py-2">
          {files.length - visibleFiles.length} completed uploads hidden
        </div>
      {/if}
    </div>
  {/if}
</div>
