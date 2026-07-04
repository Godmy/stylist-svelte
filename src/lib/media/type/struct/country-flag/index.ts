import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { RecipeCountryFlag } from '$stylist/media/interface/recipe/country-flag';

export type CountryFlagProps = RecipeCountryFlag & HTMLAttributes<HTMLSpanElement> & SlotThemeBorder & BehaviorTypography;
