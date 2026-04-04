/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { GraphEdgeProps, GraphNodeProps } from './graph';
export type { GraphEdgeRecipe } from './graph-edge';
export type { GraphvizDirectedEdgeRecipe } from './graphviz-directed-edge';
export type { ListItemMarkerType } from './list-item-marker';
export type { LiteGraphNodeProps, LitegraphNodePresentation } from './litegraph-node';
export type { NodePropertyRecipe } from './node-property';
export type { NodeTitleRecipe, NodeTitleVariant } from './node-title';
export type { PropDefinition } from './props-editor';
export type { AccessibilityCheckboxRecipe } from './accessibility-checkbox';
export type { AtomicPrinciplesRecipe } from './atomic-principles';
export type { AuthGuardRecipe } from './auth-guard';
export type { AutoCompleteRecipe } from './auto-complete';
export type { BadgeRecipe } from './badge';
export type { BadgeGroupItem, BadgeGroupRecipe } from './badge-group';
export type { BlockquoteRecipe } from './blockquote';
export type { BreadcrumbRecipe } from './breadcrumb';
export type { BreadcrumbsRecipe } from './breadcrumbs';
export type { CanvasImageEditorRecipe } from './canvas-image-editor';
export type { ChipRecipe } from './chip';
export type { CodeBlockRecipe } from './code-block';
export type { CodeEditorRecipe } from './code-editor';
export type { ConnectionLineRecipe, ConnectionPathResult, Point } from './connection-line';
export type { CountBadgeRecipe } from './count-badge';
export type { CounterRecipe } from './counter';
export type { CountryFlagRecipe } from './country-flag';
export type { DotRecipe } from './dot';
export type { GraphRecipe } from './graph';
export type { GraphCanvasPosition, GraphCanvasRecipe, GraphCanvasViewport } from './graph-canvas';
export type { GraphNodeRecipe } from './graph-node';
export type { GraphPortDimensions, GraphPortRecipe, GraphPortState } from './graph-port';
export type { GraphToolbarRecipe } from './graph-toolbar';
export type { IconChevronRecipe } from './icon-chevron';
export type { IconCircleRecipe } from './icon-circle';
export type { ThemeIconItem, ThemeIconPickerRecipe, ThemeIconPickerRest } from './icon-picker';
export type { IconWrapperRecipe } from './icon-wrapper';
export type { Idef0BlackBoxRecipe } from './idef0-black-box';
export type { Idef0ConnectorRecipe } from './idef0-connector';
export type { Idef0DiagramRecipe } from './idef0-diagram';
export type { Idef0FunctionBoxRecipe } from './idef0-function-box';
export type { Idef0InputsRecipe, Idef0Port } from './idef0-inputs';
export type { Idef0OutputsRecipe } from './idef0-outputs';
export type { Idef0PortLabelRecipe } from './idef0-port-label';
export type { InputControlRecipe } from './input-control';
export type { LabelRecipe } from './label';
export type { ListItemMarkerRecipe } from './list-item-marker';
export type { LiteGraphNodeProperty, LiteGraphPort, LitegraphNodeRecipe } from './litegraph-node';
export type { NodeHeaderRecipe } from './node-header';
export type { NodePropertiesPanelRecipe } from './node-properties-panel';
export type { NodePropertyState } from './node-property';
export type { PageEllipsisRecipe } from './page-ellipsis';
export type { PictureToolbarRecipe } from './picture-toolbar';
export type { PortGroupRecipe } from './port-group';
export type { ProductSearchRecipe } from './product-search';
export type { ProductSortRecipe } from './product-sort';
export type { PropsEditorRecipe } from './props-editor';
export type { SearchResultsRecipe } from './search-results';
export type { SelectRecipe } from './select';
export type { SelectControlRecipe } from './select-control';
export type { SliderRecipe } from './slider';
export type { SliderTickRecipe } from './slider-tick';
export type { SortRecipe } from './sort';
export type { SortableGridRecipe } from './sortable-grid';
export type { StatusIndicatorRecipe } from './status-indicator';
export type { TableRecipe } from './table';
export type { TableCellRecipe } from './table-cell';
export type { TableRowRecipe } from './table-row';
export type { TableSectionRecipe } from './table-section';
export type { TagRecipe } from './tag';
export type { TextAreaControlRecipe } from './text-area-control';
export type { ToolbarRecipe } from './toolbar';
export type { ToolbarFieldRecipe } from './toolbar-field';
export type { ToolbarGroupRecipe } from './toolbar-group';
export type { ToolbarSeparatorRecipe } from './toolbar-separator';
export type { TooltipWithArrowRecipe } from './tooltip-with-arrow';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

/**
 * recipe/ — эталонные составные контракты (LEGO-рецепты) для домена information.
 *
 * Каждый рецепт показывает, как атомарные кирпичи из четырёх осей
 * (architecture, theme, interaction, information) объединяются в
 * конкретный компонент через RecordArchitectureMerge.
 *
 * Используй рецепты как отправную точку при создании новых компонентов —
 * либо напрямую, либо как основу для расширения через дополнительные кирпичи.
 */