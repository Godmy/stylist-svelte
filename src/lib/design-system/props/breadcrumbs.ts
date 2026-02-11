import type { HTMLAttributes } from 'svelte/elements';

import type { HtmlAttributesWithChildren } from './common';

export interface IBreadcrumbLinkProps extends HtmlAttributesWithChildren<HTMLElement> {
	current?: boolean;
	href?: string;
}

export interface IBreadcrumbItem {
	href: string;
	label: string;
}

export type PageEllipsisProps = {
	class?: string;
} & HTMLAttributes<HTMLDivElement>;

export interface IBreadcrumbProps {
	items?: Array<{ href?: string; label: string; current?: boolean }>;
	class?: string;
}

export interface IBreadcrumbsCrumb {
	href?: string;
	label: string;
}

export interface IBreadcrumbsProps {
	crumbs?: Array<{ href?: string; label: string }>;
	class?: string;
}
