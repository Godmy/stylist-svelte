<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Upload, CheckCircle, AlertCircle, X, RotateCcw } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { UploadProgressStyleManager } from './styles';
  import type { IUploadProgressProps, IUploadFile, UploadProgressVariant } from './types';

  let props: IUploadProgressProps = $props();

  // Установка значений по умолчанию
  let files = $derived(props.files || []);
  let hostClass = $derived(props.hostClass || '');
  let itemClass = $derived(props.itemClass || '');
  let progressClass = $derived(props.progressClass || '');
  let showFileName = $derived(props.showFileName ?? true);
  let showFileSize = $derived(props.showFileSize ?? true);
  let showProgress = $derived(props.showProgress ?? true);
  let showActions = $derived(props.showActions ?? true);
  let onRetry = $derived(props.onRetry);
  let onCancel = $derived(props.onCancel);
  let onRemove = $derived(props.onRemove);
  let autoHideCompleted = $derived(props.autoHideCompleted ?? false);
  let maxVisible = $derived(props.maxVisible ?? 5);
  let variant = $derived(props.variant ?? 'default');

  // Остальные атрибуты для корневого элемента
  let restProps = $derived(() => {
    const {
      files, hostClass, itemClass, progressClass, showFileName, showFileSize,
      showProgress, showActions, onRetry, onCancel, onRemove,
      autoHideCompleted, maxVisible, variant, ...rest
    } = props;
    return rest;
  });

  // Вычисление видимых файлов
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

  // Форматирование размера файла
  function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Обработчики событий
  function handleRetry(file: IUploadFile) {
    onRetry?.(file);
  }

  function handleCancel(file: IUploadFile) {
    onCancel?.(file);
  }

  function handleRemove(file: IUploadFile) {
    onRemove?.(file);
  }
</script>

<!--
  Компонент UploadProgress
  Следует принципам SOLID:
  - SRP: Компонент отвечает только за отображение прогресса загрузки файлов
  - OCP: Легко расширяем новыми вариантами отображения
  - LSP: Совместим с базовыми компонентами
  - ISP: Предоставляет только необходимые свойства и методы
  - DIP: Зависит от абстракций (типы, стили из отдельных файлов)
-->
<div class={UploadProgressStyleManager.getHostClasses(variant, `c-upload-progress ${hostClass}`)} {...restProps}>
  {#if files.length === 0}
    <div class={UploadProgressStyleManager.getNoUploadsMessageClasses()}>
      No uploads
    </div>
  {:else}
    <div class={UploadProgressStyleManager.getVariantClasses(variant)}>
      {#each visibleFiles() as file (file.id)}
        <div
          class={UploadProgressStyleManager.getItemClasses(file.status, variant === 'compact', itemClass)}
        >
          <div class="flex-shrink-0">
            {#if file.status === 'success'}
              <CheckCircle class={UploadProgressStyleManager.getIconClasses('success')} />
            {:else if file.status === 'error'}
              <AlertCircle class={UploadProgressStyleManager.getIconClasses('error')} />
            {:else if file.status === 'uploading'}
              <Upload class={UploadProgressStyleManager.getIconClasses('uploading')} />
            {:else}
              <Upload class={UploadProgressStyleManager.getIconClasses('idle')} />
            {/if}
          </div>

          <div class="ml-3 min-w-0 flex-1">
            {#if showFileName}
              <p class={UploadProgressStyleManager.getFileNameClasses()}>{file.name}</p>
            {/if}

            {#if showFileSize}
              <p class={UploadProgressStyleManager.getFileSizeClasses()}>{formatFileSize(file.size)}</p>
            {/if}

            {#if showProgress && file.status === 'uploading'}
              <div class="mt-2">
                <div class={UploadProgressStyleManager.getProgressClasses(file.progress, progressClass)}>
                  <div
                    class={UploadProgressStyleManager.getProgressFillClasses(file.progress)}
                    style={`width: ${file.progress}%`}
                  ></div>
                </div>
                <div class={UploadProgressStyleManager.getProgressTextClasses()}>{Math.round(file.progress)}% complete</div>
              </div>
            {/if}

            {#if file.status === 'error' && file.error}
              <p class={UploadProgressStyleManager.getErrorTextClasses()}>{file.error}</p>
            {/if}
          </div>

          {#if showActions}
            <div class={UploadProgressStyleManager.getActionsContainerClasses()}>
              {#if file.status === 'error'}
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handleRetry(file)}
                  title="Retry upload"
                >
                  <RotateCcw class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              {#if file.status === 'uploading'}
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handleCancel(file)}
                  title="Cancel upload"
                >
                  <X class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleRemove(file)}
                title="Remove"
              >
                <X class="h-4 w-4 text-[--color-text-secondary]" />
              </Button>
            </div>
          {/if}
        </div>
      {/each}

      {#if autoHideCompleted && files.length > visibleFiles.length}
        <div class={UploadProgressStyleManager.getHiddenUploadsMessageClasses()}>
          {files.length - visibleFiles.length} completed uploads hidden
        </div>
      {/if}
    </div>
  {/if}
</div>

