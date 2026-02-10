<script lang="ts">
	import type { IErrorMessageProps } from './ErrorMessage.types';

	/**
	 * Компонент ErrorMessage - отображает сообщения об ошибках с возможностью повторной попытки
	 *
	 * Следует принципам SOLID:
	 * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение ошибки
	 * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
	 * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному сообщению об ошибке
	 * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
	 * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через ErrorMessageStyleManager)
	 */

	let {
		error,
		title = 'Error',
		onRetry,
		showRetry = true,
		...restProps
	}: IErrorMessageProps = $props();

	// Local state
	let errorMessage = $state<string | null>(null);

	// Update error message when prop changes
	$effect(() => {
		if (error) {
			errorMessage =
				typeof error === 'string' ? error : error.message || 'An unknown error occurred';
		} else {
			errorMessage = null;
		}
	});

	const baseClasses = $derived(
		'flex items-start gap-2 p-3 text-red-600 bg-red-50 rounded-lg border border-red-200'
	);
	const titleClasses = $derived('font-semibold text-red-700 mb-1');
	const textClasses = $derived('text-sm font-medium');
	const buttonClasses = $derived(
		'mt-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
	);
	const buttonContainerClasses = $derived('mt-2 flex justify-end');
</script>

{#if errorMessage}
	<div class={baseClasses} {...restProps}>
		<div class={titleClasses}>{title}</div>
		<div class={textClasses}>{errorMessage}</div>
		{#if showRetry && onRetry}
			<div class={buttonContainerClasses}>
				<button class={buttonClasses} onclick={onRetry} aria-label="Retry action"> Retry </button>
			</div>
		{/if}
	</div>
{/if}
