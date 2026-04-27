<script lang="ts">
	import {
		createImageGalleryState
	} from '$stylist/media/function/state/image-gallery';
	import type { ImageGalleryStateProps } from '$stylist/media/interface/recipe/image-gallery-image-gallery-state-props';
	import { Icon as BaseIcon } from '$stylist';
	import { ImageGalleryStyleManager } from '$stylist/media/class/style-manager/image-gallery';

	let props: ImageGalleryStateProps = $props();
	const state = createImageGalleryState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	{#if state.images.length > 0}
		<div class="relative">
			<!-- Main image display -->
			<div
				class={ImageGalleryStyleManager.getImageContainerClasses()}
				onclick={() => state.openFullscreen(state.currentIndex)}
				onkeydown={(e) =>
					(e.key === 'Enter' || e.key === ' ') && state.openFullscreen(state.currentIndex)}
				role="button"
				tabindex="0"
			>
				<img
					src={state.images[state.currentIndex].src}
					alt={state.images[state.currentIndex].alt || `Gallery image ${state.currentIndex + 1}`}
					class={ImageGalleryStyleManager.getImageClasses(props.imageClass ?? '')}
				/>

				<!-- Navigation arrows -->
				{#if state.images.length > 1}
					<button
						type="button"
						class={ImageGalleryStyleManager.getNavigationButtonClasses(props.navigationClass ?? '')}
						onclick={() => state.prevImage()}
						aria-label="Previous image"
					>
						<BaseIcon name={state.icons.CHEVRON_LEFT} class="h-6 w-6" />
					</button>

					<button
						type="button"
						class={ImageGalleryStyleManager.getNavigationButtonClasses(props.navigationClass ?? '')}
						onclick={() => state.nextImage()}
						aria-label="Next image"
					>
						<BaseIcon name={state.icons.CHEVRON_RIGHT} class="h-6 w-6" />
					</button>
				{/if}

				<!-- Image counter -->
				<div class={ImageGalleryStyleManager.getImageCounterClasses()}>
					{state.currentIndex + 1} / {state.images.length}
				</div>
			</div>

			<!-- Caption -->
			{#if state.showCaptions && state.images[state.currentIndex].caption}
				<div class={ImageGalleryStyleManager.getCaptionClasses(props.captionClass ?? '')}>
					{state.images[state.currentIndex].caption}
				</div>
			{/if}

			<!-- Thumbnails -->
			{#if state.showThumbnails && state.images.length > 1}
				<div class={ImageGalleryStyleManager.getThumbnailsContainerClasses()}>
					{#each state.images as img, index}
						<div
							class={ImageGalleryStyleManager.getThumbnailClasses(
								index === state.currentIndex,
								props.thumbnailClass ?? ''
							)}
							onclick={() => state.goToImage(index)}
							onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && state.goToImage(index)}
							role="button"
							tabindex="0"
						>
							<img
								src={img.src}
								alt={img.alt || `Thumbnail ${index + 1}`}
								class={ImageGalleryStyleManager.getThumbnailImageClasses()}
							/>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/if}

	<!-- Fullscreen overlay -->
	{#if state.isFullscreen}
		<div class={ImageGalleryStyleManager.getFullscreenOverlayClasses()}>
			<button
				type="button"
				class={ImageGalleryStyleManager.getFullscreenCloseButtonClasses()}
				onclick={() => state.closeFullscreen()}
				aria-label="Close fullscreen"
			>
				<BaseIcon name={state.icons.X} class="h-6 w-6" />
			</button>

			<button
				type="button"
				class={ImageGalleryStyleManager.getFullscreenLeftButtonClasses()}
				onclick={() => state.prevImage()}
				aria-label="Previous image"
			>
				<BaseIcon name={state.icons.CHEVRON_LEFT} class="h-8 w-8" />
			</button>

			<div class={ImageGalleryStyleManager.getFullscreenImageContainerClasses()}>
				<img
					src={state.images[state.currentIndex].src}
					alt={state.images[state.currentIndex].alt || `Fullscreen image ${state.currentIndex + 1}`}
					class={ImageGalleryStyleManager.getFullscreenImageClasses()}
				/>

				{#if state.showCaptions && state.images[state.currentIndex].caption}
					<div class={ImageGalleryStyleManager.getFullscreenCaptionClasses(props.captionClass ?? '')}>
						{state.images[state.currentIndex].caption}
					</div>
				{/if}

				<div class={ImageGalleryStyleManager.getFullscreenCounterClasses()}>
					{state.currentIndex + 1} / {state.images.length}
				</div>
			</div>

			<button
				type="button"
				class={ImageGalleryStyleManager.getFullscreenRightButtonClasses()}
				onclick={() => state.nextImage()}
				aria-label="Next image"
			>
				<BaseIcon name={state.icons.CHEVRON_RIGHT} class="h-8 w-8" />
			</button>
		</div>
	{/if}
</div>
