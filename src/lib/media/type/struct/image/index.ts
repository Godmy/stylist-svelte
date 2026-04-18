import type { ContractImage as ImageContract } from '$stylist/media/interface/contract/image';
import type { HTMLImgAttributes } from 'svelte/elements';

export type ImageProps = ImageContract & HTMLImgAttributes;
