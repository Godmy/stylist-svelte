import type { ErrorBoundaryProps } from '$stylist/notification/type/struct/error-boundary-props';
import { ErrorBoundaryStyleManager } from '$stylist/notification/class/style-manager/error-boundary';

export function createErrorBoundaryState(props: ErrorBoundaryProps) {
	const themedClasses = $derived(`${ErrorBoundaryStyleManager.getThemedClasses()} ${props.class ?? ''}`);
	const contentClasses = $derived(`${ErrorBoundaryStyleManager.getContentClasses()} ${props.contentClass ?? ''}`);
	const headerClasses = $derived(`${ErrorBoundaryStyleManager.getHeaderClasses()} ${props.headerClass ?? ''}`);
	const bodyClasses = $derived(`${ErrorBoundaryStyleManager.getBodyClasses()} ${props.bodyClass ?? ''}`);
	const footerClasses = $derived(`${ErrorBoundaryStyleManager.getFooterClasses()} ${props.footerClass ?? ''}`);
	const detailsClasses = $derived(ErrorBoundaryStyleManager.getDetailsClasses());
	const detailsTextClasses = $derived(ErrorBoundaryStyleManager.getDetailsTextClasses());
	const iconClasses = $derived(ErrorBoundaryStyleManager.getIconClasses());
	const summaryClasses = $derived(ErrorBoundaryStyleManager.getSummaryClasses());

	function handleReset(reset: () => void) {
		reset();
		props.onReset?.();
	}

	return {
		get themedClasses() { return themedClasses; },
		get contentClasses() { return contentClasses; },
		get headerClasses() { return headerClasses; },
		get bodyClasses() { return bodyClasses; },
		get footerClasses() { return footerClasses; },
		get detailsClasses() { return detailsClasses; },
		get detailsTextClasses() { return detailsTextClasses; },
		get iconClasses() { return iconClasses; },
		get summaryClasses() { return summaryClasses; },
		handleReset
	};
}

export default createErrorBoundaryState;
