<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
const Slash = 'slash';

	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import type { BreadcrumbsRecipe } from '$stylist/information/interface/recipe/breadcrumbs';

	type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	type Props = BreadcrumbsRecipe &
		InteractionHTMLAttributes<HTMLElement> & {
			crumbs?: BreadcrumbItem[];
		};

	let { crumbs = [], class: className = '', ...restProps }: Props = $props();

	// Подсчитываем количество крошек для правильного отображения сепараторов
	const totalCrumbs = $derived(crumbs?.length || 0);

	const listClass = 'breadcrumbs-list';
	const itemClass = 'breadcrumbs-item';
	const separatorClass = 'breadcrumbs-separator';
	const activeLinkClass = 'breadcrumbs-link';
	const currentItemClass = 'breadcrumbs-current';
</script>

<!--
  Компонент Breadcrumbs реализует принципы SOLID следующим образом:
  - SRP (Single Responsibility Principle): Компонент отвечает только за отображение навигационной цепочки
  - OCP (Open/Closed Principle): Легко расширяем через пропсы
  - LSP (Liskov Substitution Principle): Подчиняется контракту навигации
  - ISP (Interface Segregation Principle): Использует минимально необходимый интерфейс BreadcrumbsRecipe
  - DIP (Dependency Inversion Principle): Зависит от абстракций (типов и стилей), а не от конкретных реализаций
-->
<nav aria-label="Breadcrumb" class={className} {...restProps}>
	<ol class={listClass}>
		{#each crumbs as crumb, i}
			<li class={itemClass}>
				{#if i > 0}
					<BaseIcon name={Slash} class={separatorClass} />
				{/if}
				{#if crumb.href && i < totalCrumbs - 1}
					<a href={crumb.href} class={activeLinkClass}>
						{crumb.label}
					</a>
				{:else}
					<span class={currentItemClass}>{crumb.label}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>





