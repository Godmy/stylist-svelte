<script lang="ts">
	import MediaThumbnail from '$stylist/image/component/molecule/media-thumbnail/index.svelte';
	import DropZone from '$stylist/file/component/organism/drop-zone/index.svelte';
	import type { SlotDropItem } from '$stylist/file/interface/slot/drop-item';
	import type { RecipeMediaGalleryManager } from '$stylist/travel-admin/interface/recipe/media-gallery-manager';
	import createMediaGalleryManagerState from './state.svelte';

	let props: RecipeMediaGalleryManager = $props();
	const state = createMediaGalleryManagerState(props);

	function handleItemAdded(item: SlotDropItem) {
		if (item.data instanceof File) state.upload(item.data);
	}
</script>

<div class="media-gallery-manager {props.class ?? ''}">
	<div class="media-gallery-manager__grid">
		{#each state.assets as asset, i (asset.id)}
			<MediaThumbnail src={asset.url} alt={asset.alt} onRemove={() => state.remove(i)} />
		{/each}
	</div>
	<DropZone
		multiple
		accept="image/*"
		disabled={state.uploading}
		label="Перетащите фото"
		description="или нажмите, чтобы выбрать файл"
		onItemAdded={handleItemAdded}
	/>
</div>

<style>
	.media-gallery-manager {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.media-gallery-manager__grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}
</style>
