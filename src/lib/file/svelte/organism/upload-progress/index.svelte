<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { Button } from '$stylist';
  import { UploadProgressStyleManager } from '$stylist/file/class/style-manager/upload-progress';
  import type { SlotUploadProgress as IUploadProgressProps } from '$stylist/file/interface/slot/upload-progress-upload-progress-2';
  import { createUploadProgressState } from '$stylist/file/function/state/upload-progress';
  import { formatFileSize } from '$stylist/file/function/script/upload-progress';

  let props: IUploadProgressProps = $props();
  const state = createUploadProgressState(props);
</script>

<div class={UploadProgressStyleManager.getHostClasses(state.variant as 'default' | 'compact', `c-upload-progress ${state.hostClass}`)} {...state.restProps}>
  {#if state.files.length === 0}
    <div class={UploadProgressStyleManager.getNoUploadsMessageClasses()}>
      No uploads
    </div>
  {:else}
    <div class={UploadProgressStyleManager.getVariantClasses(state.variant as 'default' | 'compact')}>
      {#each state.visibleFiles as file (file.id)}
        <div class={UploadProgressStyleManager.getItemClasses(file.status, state.variant === 'compact', state.itemClass)}>
          <div class="flex-shrink-0">
            {#if file.status === 'success'}
              <BaseIcon name="check-circle" class={UploadProgressStyleManager.getIconClasses('success')} />
            {:else if file.status === 'error'}
              <BaseIcon name="alert-circle" class={UploadProgressStyleManager.getIconClasses('error')} />
            {:else if file.status === 'uploading'}
              <BaseIcon name="upload" class={UploadProgressStyleManager.getIconClasses('uploading')} />
            {:else}
              <BaseIcon name="upload" class={UploadProgressStyleManager.getIconClasses('idle')} />
            {/if}
          </div>

          <div class="ml-3 min-w-0 flex-1">
            {#if state.showFileName}
              <p class={UploadProgressStyleManager.getFileNameClasses()}>{file.name}</p>
            {/if}

            {#if state.showFileSize}
              <p class={UploadProgressStyleManager.getFileSizeClasses()}>{formatFileSize(file.size)}</p>
            {/if}

            {#if state.showProgress && file.status === 'uploading'}
              <div class="mt-2">
                <div class={UploadProgressStyleManager.getProgressClasses(file.progress, state.progressClass)}>
                  <div class={UploadProgressStyleManager.getProgressFillClasses(file.progress)} style={`width: ${file.progress}%`}></div>
                </div>
                <div class={UploadProgressStyleManager.getProgressTextClasses()}>{Math.round(file.progress)}% complete</div>
              </div>
            {/if}

            {#if file.status === 'error' && file.error}
              <p class={UploadProgressStyleManager.getErrorTextClasses()}>{file.error}</p>
            {/if}
          </div>

          {#if state.showActions}
            <div class={UploadProgressStyleManager.getActionsContainerClasses()}>
              {#if file.status === 'error'}
                <Button variant="ghost" size="sm" onclick={() => state.handleRetry(file)} title="Retry upload">
                  <BaseIcon name="rotate-ccw" class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              {#if file.status === 'uploading'}
                <Button variant="ghost" size="sm" onclick={() => state.handleCancel(file)} title="Cancel upload">
                  <BaseIcon name="x" class="h-4 w-4 text-[--color-text-secondary]" />
                </Button>
              {/if}

              <Button variant="ghost" size="sm" onclick={() => state.handleRemove(file)} title="Remove">
                <BaseIcon name="x" class="h-4 w-4 text-[--color-text-secondary]" />
              </Button>
            </div>
          {/if}
        </div>
      {/each}

      {#if state.autoHideCompleted && state.files.length > state.visibleFiles.length}
        <div class={UploadProgressStyleManager.getHiddenUploadsMessageClasses()}>
          {state.files.length - state.visibleFiles.length} completed uploads hidden
        </div>
      {/if}
    </div>
  {/if}
</div>
