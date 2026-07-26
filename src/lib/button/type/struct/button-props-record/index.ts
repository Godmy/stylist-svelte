import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ContainerProps } from '$stylist/layout/interface/recipe/container';
import type { RecipeThemeBackground } from '$stylist/layout/interface/recipe/background';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { SlotClick } from '$stylist/control/interface/slot/click';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export type ButtonPropsRecord = HTMLButtonAttributes &
	ContainerProps &
	RecipeThemeBackground &
	RecipeBorder &
	SlotClick & {
		variant?: TokenColorTone;
		size?: TokenSize;
		loading?: boolean;
		block?: boolean;
		loadingLabel?: string;
		children?: Snippet;
		class?: string;
	} & Record<string, unknown>;
