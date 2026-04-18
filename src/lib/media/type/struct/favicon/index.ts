import type { ContractFavicon as FaviconContract } from '$stylist/media/interface/contract/favicon';
import type { HTMLImgAttributes } from 'svelte/elements';

export type FaviconProps = FaviconContract & HTMLImgAttributes;
