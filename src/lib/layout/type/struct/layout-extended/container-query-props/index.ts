import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { ContainerQueryType } from '$stylist/layout/type/enum/container-query-type';

export type ContainerQueryProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/**
	 * Тип контейнера:
	 * - `inline-size` — запросы по ширине (наиболее частый случай)
	 * - `size` — запросы по ширине и высоте
	 * - `normal` — отключает запросы по размеру, только style containment
	 */
	containerType?: ContainerQueryType;
	/**
	 * Имя контейнера для именованных запросов `@container/name`.
	 * Позволяет вложенным компонентам явно таргетировать конкретный контейнер.
	 */
	containerName?: string;
};
