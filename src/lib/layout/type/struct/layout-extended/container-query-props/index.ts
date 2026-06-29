import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { ContainerQueryType } from '$stylist/layout/type/alias/container-query-type';

export type ContainerQueryProps = LayoutHTMLAttributes<HTMLDivElement> & {
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

