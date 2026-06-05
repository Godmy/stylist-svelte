<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import { DropZoneStyleManager } from '$stylist/file/class/style-manager/drop-zone';
	import createDropZoneState from '$stylist/file/function/state/drop-zone/index.svelte';
	import { formatFileSize } from '$stylist/file/function/script/drop-zone-format-file-size';
	import type { Props } from '$stylist/file/type/struct/drop-zone/props/-props';

	let props: Props = $props();
	const state = createDropZoneState(props);
</script>

<div
	class={DropZoneStyleManager.getBaseClasses(state.isDragOver, state.disabled, state.classes)}
	ondragover={state.handleDragOver}
	ondragleave={state.handleDragLeave}
	ondrop={state.handleDrop}
	{...state.restProps}
>
	{#if state.children}
		{#if state.children}{@render state.children()}{/if}
	{:else}
		<div class="dz-inner">
			<BaseIcon
				name="upload"
				style="margin-bottom:0.5rem;width:2.5rem;height:2.5rem;color:var(--color-text-tertiary)"
			/>
			<h3 class="dz-label">{state.label}</h3>
			<p class="dz-desc">{state.description}</p>
			<p class="dz-hint">Accepts: {state.accept}</p>
		</div>

		<input
			bind:this={state.fileInputElement}
			type="file"
			class="dz-hidden"
			accept={state.accept}
			multiple={state.multiple}
			disabled={state.disabled}
			onchange={state.handleFileInput}
		/>

		<div class="dz-browse">
			<Button variant="secondary" onclick={state.browse} disabled={state.disabled}>
				Browse Files
			</Button>
		</div>
	{/if}

	{#if state.items.length > 0}
		<div class="dz-dropped">
			<div class="dz-dropped-header">
				<h4 class="dz-dropped-title">
					Dropped Items ({state.items.length})
				</h4>
				<Button variant="ghost" size="sm" onclick={state.clearItems} disabled={state.disabled}>
					Clear All
				</Button>
			</div>

			<div class={DropZoneStyleManager.getListClasses()}>
				{#each state.items as item}
					<div class={DropZoneStyleManager.getItemClasses()}>
						<div class="dz-item-info">
							<div
								style="width:1.25rem;height:1.25rem;flex-shrink:0;color:var(--color-primary-500)"
							>
								<BaseIcon name="check" style="width:1.25rem;height:1.25rem" />
							</div>
							<div class="dz-item-meta">
								<p class="dz-item-name">{item.name}</p>
								<p class="dz-item-desc">{item.type} • {formatFileSize(item.size || 0)}</p>
							</div>
						</div>

						<div class="dz-item-actions">
							<Button
								variant="ghost"
								size="sm"
								onclick={() => state.removeDroppedItem(item.id)}
								disabled={state.disabled}
							>
								<BaseIcon name="x" style="width:1rem;height:1rem" />
							</Button>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if state.isProcessing}
		<div class="dz-processing">
			<div class="dz-processing-text">Processing...</div>
		</div>
	{/if}
</div>

<style>
	.dz-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.dz-label {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.dz-desc {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.dz-hint {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: var(--color-text-tertiary);
	}

	.dz-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.dz-browse {
		margin-top: 1rem;
	}
	.dz-dropped {
		margin-top: 1.5rem;
	}

	.dz-dropped-header {
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.dz-dropped-title {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.dz-item-info {
		display: flex;
		align-items: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.dz-item-meta {
		margin-left: 0.75rem;
		min-width: 0;
	}
	.dz-item-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.dz-item-desc {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.dz-item-actions {
		display: flex;
		align-items: center;
	}

	.dz-processing {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}

	.dz-processing-text {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
</style>
