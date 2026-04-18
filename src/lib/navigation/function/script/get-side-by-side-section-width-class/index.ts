import { SIDE_BY_SIDE_SECTION_WIDTH_MOBILE } from '$stylist/navigation/const/record/side-by-side-section-width-mobile';
import { SIDE_BY_SIDE_SECTION_WIDTH_RESPONSIVE } from '$stylist/navigation/const/record/side-by-side-section-width-responsive';

export function getSideBySideSectionWidthClass(size: string, responsive: boolean): string {
	const map = responsive ? SIDE_BY_SIDE_SECTION_WIDTH_RESPONSIVE : SIDE_BY_SIDE_SECTION_WIDTH_MOBILE;
	return map[size] ?? (responsive ? 'md:w-1/2' : 'w-1/2');
}
