<script lang="ts">
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import VideoScene from '$stylist/video/component/molecule/video-scene/index.svelte';

	type Props = {
		title: string;
		images: TourGalleryImage[];
		videoSrc?: string;
		poster?: string;
	};

	let { title, images, videoSrc, poster }: Props = $props();
	const lead = $derived(images[0]);
	const secondary = $derived(images.slice(1, 4));
</script>

<section class="tc-tour-hero-gallery" aria-label={title}>
	<div class="tc-tour-hero-gallery__lead">
		{#if videoSrc}
			<VideoScene src={videoSrc} poster={poster ?? lead?.src} label={title} />
		{:else if lead}
			<img src={lead.src} alt={lead.alt} />
		{/if}
		<div class="tc-tour-hero-gallery__caption">
			<h1>{title}</h1>
			{#if lead?.caption}<p>{lead.caption}</p>{/if}
		</div>
	</div>
	<div class="tc-tour-hero-gallery__grid">
		{#each secondary as image (image.id)}
			<figure>
				<img src={image.src} alt={image.alt} loading="lazy" />
				{#if image.caption}<figcaption>{image.caption}</figcaption>{/if}
			</figure>
		{/each}
	</div>
</section>

<style>
	.tc-tour-hero-gallery {
		display: grid;
		grid-template-columns: minmax(0, 1.7fr) minmax(16rem, 0.8fr);
		gap: 1rem;
	}
	.tc-tour-hero-gallery__lead,
	.tc-tour-hero-gallery figure {
		position: relative;
		overflow: hidden;
		border-radius: 8px;
		background: #17231f;
	}
	.tc-tour-hero-gallery__lead {
		min-height: 28rem;
	}
	.tc-tour-hero-gallery img,
	.tc-tour-hero-gallery video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.tc-tour-hero-gallery__caption {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 2rem;
		color: #fff;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.66));
	}
	.tc-tour-hero-gallery__caption h1,
	.tc-tour-hero-gallery__caption p {
		margin: 0;
	}
	.tc-tour-hero-gallery__caption h1 {
		max-width: 14ch;
		font-size: clamp(2.4rem, 7vw, 5.5rem);
		line-height: 0.95;
		letter-spacing: 0;
	}
	.tc-tour-hero-gallery__caption p {
		margin-top: 0.75rem;
		max-width: 34rem;
	}
	.tc-tour-hero-gallery__grid {
		display: grid;
		gap: 1rem;
	}
	.tc-tour-hero-gallery figure {
		margin: 0;
		min-height: 8.5rem;
	}
	.tc-tour-hero-gallery figcaption {
		position: absolute;
		right: 0.75rem;
		bottom: 0.75rem;
		left: 0.75rem;
		color: #fff;
		font-size: 0.85rem;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
	}
	@media (max-width: 820px) {
		.tc-tour-hero-gallery {
			grid-template-columns: 1fr;
		}
		.tc-tour-hero-gallery__lead {
			min-height: 22rem;
		}
		.tc-tour-hero-gallery__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@container (max-width: 820px) {
		.tc-tour-hero-gallery {
			grid-template-columns: 1fr;
		}
		.tc-tour-hero-gallery__lead {
			min-height: 22rem;
		}
		.tc-tour-hero-gallery__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 560px) {
		.tc-tour-hero-gallery__grid {
			grid-template-columns: 1fr;
		}
	}
	@container (max-width: 560px) {
		.tc-tour-hero-gallery__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
