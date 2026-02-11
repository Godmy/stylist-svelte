<script lang="ts">
	/**
	 * Компонент Breadcrumb
	 *
	 * Следует принципам SOLID:
	 * - SRP: Компонент отвечает только за отображение навигационной цепочки
	 * - OCP: Легко расширяем за счет пропсов
	 * - LSP: Подчиняется контракту, заданному интерфейсом IBreadcrumbProps
	 * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
	 * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
	 *
	 * Следует Atomic Design: Это молекула, состоящая из атомов (ссылок)
	 */

	import { ChevronRight } from 'lucide-svelte';
	import type { IBreadcrumbProps } from '$stylist/design-system/props';
	import { mergeClasses } from '$stylist/utils/classes';

	let { items, class: className = '' }: IBreadcrumbProps = $props();

	const containerClass = $derived(mergeClasses('breadcrumb-container', className));
	const getItemClass = (current: boolean) =>
		mergeClasses('breadcrumb-item', current ? 'current' : 'not-current');
	const separatorClass = 'breadcrumb-separator';
	const getLinkClass = (current: boolean) =>
		mergeClasses('breadcrumb-link', current ? 'current' : 'not-current');
</script>

<nav aria-label="Breadcrumb" class={containerClass}>
	{#if items}
		{#each items as item, i}
			<div class={getItemClass(i === items.length - 1)}>
				{#if i > 0}
					<ChevronRight class={separatorClass} aria-hidden="true" />
				{/if}
				<a
					href={item.href}
					class={getLinkClass(i === items.length - 1)}
					aria-current={i === items.length - 1 ? 'page' : undefined}
				>
					{item.label}
				</a>
			</div>
		{/each}
	{/if}
</nav>
