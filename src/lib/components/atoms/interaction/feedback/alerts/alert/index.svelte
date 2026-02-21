<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-svelte';
	import { mergeClasses } from '$stylist/utils/classes';

	/**
	 * Компонент Alert - отображает важные сообщения пользователю с разными вариантами
	 *
	 * Следует принципам SOLID:
	 * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение алерта
	 * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
	 * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному сообщению
	 * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
	 * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через AlertStyleManager)
	 */

	let {
		variant = 'info',
		title,
		closable = false,
		icon = true,
		content,
		children,
		class: className = '',
		...restProps
	} = $props<{
		variant?: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'danger';
		title?: string;
		closable?: boolean;
		icon?: boolean;
		content?: Snippet;
		children?: Snippet;
		class?: string;
	}>();

	let open = $state(true);

	// Define the icon mapping with proper typing
	const iconMap = {
		info: Info,
		success: CheckCircle,
		warning: AlertTriangle,
		error: XCircle,
		danger: XCircle,
		primary: Info,
		secondary: Info
	} as const;

	let IconComponent = $derived(iconMap[variant as keyof typeof iconMap]);

	const alertClasses = $derived(
		mergeClasses('alert-container', `variant-${variant}`, className)
	);
	const iconContainerClasses = $derived('alert-icon');
	const iconClasses = $derived(mergeClasses('alert-icon', `variant-${variant}`));
	const textContainerClasses = $derived('alert-content');
	const titleClasses = $derived('alert-title');
	const contentContainerClasses = $derived('alert-description');
	const mainContainerClasses = $derived('alert-content');
	const closeButtonContainerClasses = $derived('alert-content');
	const closeButtonClasses = $derived(mergeClasses('alert-icon', `variant-${variant}`));

	// Функция для закрытия алерта
	function handleClose() {
		open = false;
	}
</script>

{#if open}
	<div role="alert" class={alertClasses} aria-live="polite" aria-atomic="true" {...restProps}>
		<div class={mainContainerClasses}>
			{#if icon}
				<div class={iconContainerClasses}>
					<IconComponent class={iconClasses} aria-hidden="true" />
				</div>
			{/if}
			<div class={textContainerClasses}>
				{#if title}
					<h3 class={titleClasses}>{title}</h3>
				{/if}
				<div class={contentContainerClasses}>
					<p>
						{#if content}
							{@render content()}
						{:else if children}
							{@render children?.()}
						{/if}
					</p>
				</div>
			</div>
			{#if closable}
				<div class={closeButtonContainerClasses}>
					<button
						type="button"
						class={closeButtonClasses}
						aria-label="Закрыть"
						onclick={handleClose}
					>
						<X class="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}



