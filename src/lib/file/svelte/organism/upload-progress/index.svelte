<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist';
  const Upload = 'upload';
  const CheckCircle = 'check-circle';
  const AlertCircle = 'alert-circle';
  const X = 'x';
  const RotateCcw = 'rotate-ccw';
  import { Button } from '$stylist';
  import { UploadProgressStyleManager } from '$stylist/file/class/style-manager/upload-progress';
  import type { IUploadProgressProps } from '$stylist/file/interface/component/upload-progress/struct/props';
  import type { IUploadFile } from '$stylist/file/interface/component/upload-progress/struct/file';
  import type { UploadProgressVariant } from '$stylist/file/type/struct/upload-progress/variant';
  import { createUploadProgressState } from '$stylist/file/function/state/upload-progress';
  import {
    handleRetry as handleRetryFn,
    handleCancel as handleCancelFn,
    handleRemove as handleRemoveFn,
    formatFileSize,
  } from '$stylist/file/function/script/upload-progress';

  let props: IUploadProgressProps = $props();

  let files = $derived(props.files ?? []);
  let hostClass = $derived(props.hostClass ?? '');
  let itemClass = $derived(props.itemClass ?? '');
  let progressClass = $derived(props.progressClass ?? '');
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
  const state = createUploadProgressState(props);

  let restProps = $derived.by(() => {
    const {
      files: _files, hostClass: _hostClass, itemClass: _itemClass, progressClass: _progressClass,
      showFileName: _showFileName, showFileSize: _showFileSize,
      showProgress: _showProgress, showActions: _showActions, onRetry, onCancel, onRemove,
      autoHideCompleted: _autoHideCompleted, maxVisible: _maxVisible, variant: _variant, ...rest
    } = props;
    return rest;
  });

  let visibleFiles = $derived.by(() => {
    let visible = files;
    if (autoHideCompleted) {
      visible = files.filter(file => file.status !== 'success');
    }
    if (maxVisible > 0) {
      visible = visible.slice(0, maxVisible);
    }
    return visible;
  });

  function handleRetry(file: IUploadFile) {
    handleRetryFn(file, onRetry);
  }

  function handleCancel(file: IUploadFile) {
    handleCancelFn(file, onCancel);
  }

  function handleRemove(file: IUploadFile) {
    handleRemoveFn(file, onRemove);
  }
</script>

<div class={UploadProgressStyleManager.getHostClasses(state.variant as 'default' | 'compact', `c-upload-progress ${hostClass}`)} {...restProps}>
  {#if files.length === 0}
    <div class={UploadProgressStyleManager.getNoUploadsMessageClasses()}>
      No uploads
    </div>
  {:else}
    <div class={UploadProgressStyleManager.getVariantClasses(state.variant as 'default' | 'compact')}>
      {#each visibleFiles as file (file.id)}
        <div
          class={UploadProgressStyleManager.getItemClasses(file.status, state.variant === 'compact', itemClass)}
        >
          <div class="flex-shrink-0">
            {#if file.status === 'success'}
              <BaseIcon name={CheckCircle} class={UploadProgressStyleManager.getIconClasses('success')} />
            {:else if file.status === 'error'}
              <BaseIcon name={AlertCircle} class={UploadProgressStyleManager.getIconClasses('error')} />
            {:else if file.status === 'uploading'}
              <BaseIcon name={Upload} class={UploadProgressStyleManager.getIconClasses('uploading')} />
            {:else}
              <BaseIcon name={Upload} class={UploadProgressStyleManager.getIconClasses('idle')} />
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
                  <BaseIcon name={RotateCcw} class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              {#if file.status === 'uploading'}
                <Button
                  variant="ghost"
                  size="sm"
                  onclick={() => handleCancel(file)}
                  title="Cancel upload"
                >
                  <BaseIcon name={X} class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              <Button
                variant="ghost"
                size="sm"
                onclick={() => handleRemove(file)}
                title="Remove"
              >
                <BaseIcon name={X} class="h-4 w-4 text-[--color-text-secondary]" />
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
