import type { ChildrenHtmlAttributes } from '$stylist/architecture/type/attribute/children';
import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { AttributeAspectRatio } from '$stylist/architecture/type/attribute/aspect-ratio';
import type { AttributeContainer } from '$stylist/architecture/type/attribute/container';
import type { IBarChartProps } from '$stylist/architecture/interface/bar-chart';
import type { ContractDashboardLayout } from '$stylist/architecture/interface/layout-dashboard';
import type { DividerProps } from '$stylist/architecture/interface/divider';
import type { IGradientBackgroundProps } from '$stylist/architecture/interface/gradient-background';
import type { IHeatmapProps } from '$stylist/architecture/interface/heatmap';
import type { IHeroProps } from '$stylist/architecture/interface/hero';
import type { GridLayoutProps } from '$stylist/architecture/interface/layout';
import type {
	GridLayoutExtendedProps,
	HorizontalLayoutProps,
	VerticalLayoutProps
} from '$stylist/architecture/interface/layout-extended';
import type { ILineChartProps } from '$stylist/architecture/interface/line-chart';
import type { IPageHeaderProps } from '$stylist/architecture/interface/page-header';
import type { IProcessStepProps } from '$stylist/architecture/interface/process-step';
import type {
	SeparatorProps,
	SyntaxHighlightedCodeProps
} from '$stylist/architecture/interface/separator';
import type { SharedCanvasProps } from '$stylist/architecture/interface/shared-canvas';
import type { SidebarProps } from '$stylist/architecture/interface/sidebar';
import type { SpacerProps } from '$stylist/architecture/interface/spacer';
import type { StackProps } from '$stylist/architecture/interface/stack';
import type { MergeArchitectureContract } from '$stylist/architecture/type/merge/contract';

export interface MapArchitectureContract {
	AspectRatio: MergeArchitectureContract<
		[
			AttributeAspectRatio,
			ArchitectureHTMLAttributes<HTMLDivElement>,
			ChildrenHtmlAttributes<HTMLDivElement>
		]
	>;
	Container: MergeArchitectureContract<
		[
			AttributeContainer,
			ArchitectureHTMLAttributes<HTMLDivElement>
		]
	>;
	DashboardLayout: MergeArchitectureContract<
		[
			ContractDashboardLayout,
			ArchitectureHTMLAttributes<HTMLDivElement>,
			ChildrenHtmlAttributes<HTMLDivElement>
		]
	>;
	BarChart: IBarChartProps;
	Divider: DividerProps;
	GradientBackground: IGradientBackgroundProps;
	Heatmap: IHeatmapProps;
	Hero: IHeroProps;
	GridLayout: GridLayoutProps;
	VerticalLayout: VerticalLayoutProps;
	HorizontalLayout: HorizontalLayoutProps;
	GridLayoutExtended: GridLayoutExtendedProps;
	LineChart: ILineChartProps;
	PageHeader: IPageHeaderProps;
	ProcessStep: IProcessStepProps;
	Separator: SeparatorProps;
	SyntaxHighlightedCode: SyntaxHighlightedCodeProps;
	SharedCanvas: SharedCanvasProps;
	Sidebar: SidebarProps;
	Spacer: SpacerProps;
	Stack: StackProps;
}
