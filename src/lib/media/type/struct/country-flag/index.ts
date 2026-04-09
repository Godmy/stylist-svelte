import type { CountryFlagRecipe } from '$stylist/geo/interface/recipe/country-flag';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type CountryFlagProps = CountryFlagRecipe & InformationHTMLAttributes<HTMLSpanElement>;
