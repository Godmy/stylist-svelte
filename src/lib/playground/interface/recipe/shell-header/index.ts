import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ShellHeaderProps as ShellHeaderProps } from '$stylist/playground/type/struct/shell-header-props';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeShellHeader
	extends ComputeIntersectAll<
		[ShellHeaderProps, Omit<HTMLAttributes<HTMLElement>, 'class'>, BehaviorBorderToken, BehaviorTypography]
	> {
	title?: string;
	showNavigation?: boolean;
	showSearch?: boolean;
	showThemeToggle?: boolean;
	showUserMenu?: boolean;
	navItems?: Array<{ label: string; href: string; active?: boolean }>;
	class?: string;
}
