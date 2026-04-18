import type { DevelopmentErrorBoundaryProps } from '$stylist/development/type/struct/development-error-boundary-props';
import type { DevelopmentErrorBoundaryErrorInfo } from '$stylist/development/type/struct/development-error-boundary-error-info';
import { DevelopmentErrorBoundaryStyleManager } from '$stylist/development/class/style-manager/development-error-boundary';

export function createDevelopmentErrorBoundaryState(props: DevelopmentErrorBoundaryProps) {
	const Bug = 'bug';
	const RotateCcw = 'rotate-ccw';
	const Copy = 'copy';
	const FileText = 'file-text';
	const ExternalLink = 'external-link';

	let hasError = $state(false);
	let error: Error | null = $state(null);
	let errorInfo: { componentStack: string } | null = $state(null);
	let copied = $state(false);

	const fallback = $derived(props.fallback);
	const onError = $derived(props.onError);
	const showDetails = $derived(props.showDetails ?? true);
	const showReload = $derived(props.showReload ?? true);
	const showCopyError = $derived(props.showCopyError ?? true);
	const showReportIssue = $derived(props.showReportIssue ?? true);
	const reportUrl = $derived(props.reportUrl ?? 'https://github.com/issues');
	const title = $derived(props.title ?? 'Something went wrong');
	const message = $derived(props.message ?? 'An unexpected error occurred. Our team has been notified.');
	const className = $derived(props.class == null ? '' : String(props.class));
	const children = $derived(props.children);

	const containerClass = $derived(DevelopmentErrorBoundaryStyleManager.getContainerClasses(className));
	const fallbackContainerClass = $derived(DevelopmentErrorBoundaryStyleManager.getFallbackContainerClasses());
	const headerComputedClass = $derived(DevelopmentErrorBoundaryStyleManager.getHeaderClasses());
	const detailsComputedClass = $derived(DevelopmentErrorBoundaryStyleManager.getDetailsClasses());
	const actionsComputedClass = $derived(DevelopmentErrorBoundaryStyleManager.getActionsClasses());

	$effect(() => {
		if (hasError && error && errorInfo && onError) {
			onError(error, errorInfo);
		}
	});

	function resetError() {
		hasError = false;
		error = null;
		errorInfo = null;
	}

	function copyError() {
		const errorText = `Error: ${error?.message}\n\nComponent Stack: ${errorInfo?.componentStack}`;
		navigator.clipboard.writeText(errorText);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	function triggerError(err: Error, info: { componentStack: string }) {
		hasError = true;
		error = err;
		errorInfo = info;
	}

	const restProps = $derived(() => {
		const {
			class: _className, fallback: _fallback,
			onError: _onError, showDetails: _showDetails, showReload: _showReload,
			showCopyError: _showCopyError, showReportIssue: _showReportIssue,
			reportUrl: _reportUrl, title: _title, message: _message, children: _children, ...rest
		} = props;
		return rest;
	});

	return {
		get Bug() { return Bug; },
		get RotateCcw() { return RotateCcw; },
		get Copy() { return Copy; },
		get FileText() { return FileText; },
		get ExternalLink() { return ExternalLink; },
		get hasError() { return hasError; },
		get error() { return error; },
		get errorInfo() { return errorInfo; },
		get copied() { return copied; },
		get fallback() { return fallback; },
		get showDetails() { return showDetails; },
		get showReload() { return showReload; },
		get showCopyError() { return showCopyError; },
		get showReportIssue() { return showReportIssue; },
		get reportUrl() { return reportUrl; },
		get title() { return title; },
		get message() { return message; },
		get className() { return className; },
		get children() { return children; },
		get containerClass() { return containerClass; },
		get fallbackContainerClass() { return fallbackContainerClass; },
		get headerComputedClass() { return headerComputedClass; },
		get detailsComputedClass() { return detailsComputedClass; },
		get actionsComputedClass() { return actionsComputedClass; },
		resetError,
		copyError,
		triggerError,
		get restProps() { return restProps(); }
	};
}

export default createDevelopmentErrorBoundaryState;
