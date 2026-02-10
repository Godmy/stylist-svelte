export interface IErrorMessageProps {
	error?: string | Error;
	title?: string;
	onRetry?: () => void;
	showRetry?: boolean;
	class?: string;
	[key: string]: any; // Для остальных свойств
}
