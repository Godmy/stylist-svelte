import type { RecipeWbdFinalReportBuilder } from '$stylist/wbd/interface/recipe/final-report-builder';
import type { StructWbdFinalReportSection } from '$stylist/wbd/type/struct/final-report-section';

export function createWbdFinalReportBuilderState(props: RecipeWbdFinalReportBuilder) {
	const className = $derived(props.class ?? '');

	return {
		get sections() {
			return props.sections;
		},
		get enabledCount() {
			return props.sections.filter((section) => section.enabled !== false).length;
		},
		get className() {
			return className;
		},
		updateSection(section: StructWbdFinalReportSection) {
			props.onUpdateSections?.(props.sections.map((item) => (item.id === section.id ? section : item)));
		},
		publishReport() {
			props.onPublishReport?.();
		}
	};
}

export default createWbdFinalReportBuilderState;
