import type { CountryFlagRecipe } from '$stylist/media/interface/recipe/country-flag';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export type CountryFlagProps = CountryFlagRecipe & InformationHTMLAttributes<HTMLSpanElement>;
