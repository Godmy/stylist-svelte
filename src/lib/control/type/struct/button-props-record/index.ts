import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ContainerProps } from '$stylist/layout/type/struct/container';
import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';
import type { BorderRecipe } from '$stylist/layout/interface/recipe/border';
import type { ClickProps } from '$stylist/control/interface/component/click/other';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type ButtonPropsRecord = HTMLButtonAttributes &
	ContainerProps &
	ThemeBackgroundRecipe &
	BorderRecipe &
	ClickProps & {
		variant?: TokenAppearance;
		size?: TokenSize;
		loading?: boolean;
		block?: boolean;
		loadingLabel?: string;
		children?: Snippet;
		class?: string;
	} & Record<string, unknown>;
