import type { SlotContent } from '$stylist/layout/interface/slot/content';
import type { SlotSvg } from '$stylist/svg/interface/slot/svg';
import type { SlotSvgName } from '$stylist/svg/interface/slot/svg-name';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SVGAttributes } from 'svelte/elements';

export interface RecipeSvg
	extends ComputeIntersectAll<[
		SlotClass,
		SlotContent,
		SlotSvg,
		Pick<SlotSvgName, 'svg'>,
		Omit<SVGAttributes<SVGSVGElement>, 'class'>
	]> {}
