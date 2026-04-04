import { LayoutStyleManager } from '$stylist/layout/class/style-manager/layout';
import { StackStyleManager } from '$stylist/layout/class/style-manager/stack';
import { VerticalLayoutStyleManager } from '$stylist/layout/class/style-manager/vertical-layout';

export const MAP_ARCHITECTURE = {
	AspectRatio: LayoutStyleManager.resolveAspectRatio,
	Container: LayoutStyleManager.resolveContainer,
	Divider: LayoutStyleManager.resolveDivider,
	GridLayout: LayoutStyleManager.resolveGridLayout,
	HorizontalLayout: LayoutStyleManager.resolveHorizontalLayout,
	Spacer: LayoutStyleManager.resolveSpacer,
	Stack: StackStyleManager.resolveStack,
	VerticalLayout: VerticalLayoutStyleManager.resolveVerticalLayout
} as const;


