import type { ImageContract } from '$stylist/media/interface/component/image/contract';
import type { HTMLImgAttributes } from 'svelte/elements';

export type { ImageSize } from '$stylist/media/interface/component/image/contract';
export type ImageProps = ImageContract & HTMLImgAttributes;
