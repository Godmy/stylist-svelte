<script lang="ts">
	/**
	 * Компонент BreadcrumbLink
	 *
	 * Следует принципам SOLID:
	 * - SRP: Компонент отвечает только за отображение элемента навигационной цепочки
	 * - OCP: Легко расширяем за счет пропсов
	 * - LSP: Подчиняется контракту, заданному интерфейсом IBreadcrumbLinkProps
	 * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
	 * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
	 *
	 * Следует Atomic Design: Это молекула, являющаяся часть навигационной цепочки
	 */

	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { IBreadcrumbLinkProps } from '$stylist/design-system/props';
	import { mergeClasses } from '$stylist/utils/classes';

	let { current = false, href, children, ...restProps }: IBreadcrumbLinkProps = $props();

	const linkClass = $derived(
		mergeClasses('breadcrumb-link', current ? 'current' : 'not-current')
	);
</script>

{#if current}
	<span class={linkClass} {...restProps}>
		{@render children?.()}
	</span>
{:else}
	<a {href} class={linkClass} {...restProps}>
		{@render children?.()}
	</a>
{/if}

