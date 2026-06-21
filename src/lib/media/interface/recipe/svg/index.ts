import type { SlotContent } from '$stylist/architecture/interface/slot/content';
import type { ContractSvg } from '$stylist/media/interface/contract/svg';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SVGAttributes } from 'svelte/elements';

export interface RecipeSvg
	extends ComputeIntersectAll<[ContractSvg, Omit<SVGAttributes<SVGSVGElement>, 'class'>, SlotContent]> {}