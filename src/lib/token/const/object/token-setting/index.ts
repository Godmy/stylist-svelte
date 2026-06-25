import { PRESENTATION_MODE } from '$stylist/token/const/array/presentation-mode';
import { SCENE_CAMERA_PRESET } from '$stylist/token/const/array/scene-camera-preset';
import { SELECTION_MODE } from '$stylist/token/const/array/selection-mode';
import { CANVAS_TOOLBAR_DRAWING_TOOL } from '$stylist/token/const/array/canvas-toolbar-drawing-tool';
import { TOKEN_CANVAS_CHART_TYPE } from '$stylist/token/const/array/canvas-chart-type';
import { CHAT_MESSAGE_STATUS } from '$stylist/token/const/array/chat-message-status';
import { DISCOUNT_TYPE } from '$stylist/token/const/array/discount-type';
import { INVENTORY_ITEM_STATUS } from '$stylist/token/const/array/inventory-item-status';
import { SUBSCRIPTION_STATUS } from '$stylist/token/const/array/subscription-status';
import { WARRANTY_PERIOD_TYPE } from '$stylist/token/const/array/warranty-period-type';
import { EXPORT_FORMAT } from '$stylist/token/const/array/export-format';
import { FILTER_PANEL_LAYOUT } from '$stylist/token/const/array/filter-panel-layout';
import { DEBUG_CONSOLE_LOG_LEVEL } from '$stylist/token/const/array/debug-console-log-level';
import { DATA_EXPORTER_FORMAT } from '$stylist/token/const/array/data-exporter-format';
import { FILE_EXPLORER_VIEW_MODE } from '$stylist/token/const/array/file-explorer-view-mode';
import { FILE_ITEM_TYPE } from '$stylist/token/const/array/file-item-type';
import { UPLOAD_PROGRESS_VARIANT } from '$stylist/token/const/array/upload-progress-variant';
import { UPLOAD_STATUS } from '$stylist/token/const/array/upload-status';
import { MAP_PROVIDER } from '$stylist/token/const/array/map-provider';
import { GRAPH_NODE_CATEGORY } from '$stylist/token/const/array/graph-node-category';
import { GRAPH_TOOL_MODE } from '$stylist/token/const/array/graph-tool-mode';
import { NODE_TITLE_VARIANT } from '$stylist/token/const/array/node-title-variant';
import { GRAPH_GRID_MODE } from '$stylist/token/const/array/graph-grid-mode';
import { LIST_ITEM_MARKER_TYPE } from '$stylist/token/const/array/list-item-marker-type';
import { STATUS_STATE } from '$stylist/token/const/array/status-state';
import { CONTENT_EDITOR_CONTENT_TYPE } from '$stylist/token/const/array/content-editor-content-type';
import { INTERACTION_FEEDBACK } from '$stylist/token/const/array/interaction-feedback';
import { GRADIENT_DIRECTION } from '$stylist/token/const/array/gradient-direction';
import { CENTERED_LAYOUT_AXIS } from '$stylist/token/const/array/centered-layout-axis';
import { CONTAINER_QUERY_TYPE } from '$stylist/token/const/array/container-query-type';
import { GRID_MOLECULE_JUSTIFY } from '$stylist/token/const/array/grid-molecule-justify';
import { SPLIT_LAYOUT_GAP } from '$stylist/token/const/array/split-layout-gap';
import { ITEM_LAYOUT_GRAVITY } from '$stylist/token/const/array/item-layout-gravity';
import { ITEM_LAYOUT_LEVEL } from '$stylist/token/const/array/item-layout-level';
import { ITEM_LAYOUT_SHAPE } from '$stylist/token/const/array/item-layout-shape';
import { PERFORMANCE_MONITOR_STATUS } from '$stylist/token/const/array/performance-monitor-status';
import { TRAFFIC_ANALYTICS_TIME_RANGE } from '$stylist/token/const/array/traffic-analytics-time-range';
import { AVATAR_USER_STATUS } from '$stylist/token/const/array/avatar-user-status';
import { MEDIA_LIBRARY_MEDIA_TYPE } from '$stylist/token/const/array/media-library-media-type';
import { SPINNER_VARIANT } from '$stylist/token/const/array/spinner-variant';
import { PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID } from '$stylist/token/const/array/playground-ai-assistant-ai-provider-id';
import { PLAYGROUND_CANVAS_SHELL_BACKGROUND_TYPE } from '$stylist/token/const/array/playground-canvas-shell-background-type';
import { PLAYGROUND_CANVAS_SHELL_VIEWPORT_SIZE } from '$stylist/token/const/array/playground-canvas-shell-viewport-size';
import { PLAYGROUND_COMPONENT_CATALOG_SORT_BY } from '$stylist/token/const/array/playground-component-catalog-sort-by';
import { PLAYGROUND_COMPONENT_CATALOG_VIEW_MODE } from '$stylist/token/const/array/playground-component-catalog-view-mode';
import { PROMPT_VARIABLE_TYPE } from '$stylist/token/const/array/prompt-variable-type';
import { SENTIMENT_ANALYSIS_STATUS } from '$stylist/token/const/array/sentiment-analysis-status';
import { TOKEN_SELECTION_TYPE } from '$stylist/token/const/array/selection-type';
import { TOKEN_SELECTOR_KIND } from '$stylist/token/const/array/selection-kind';

export const TOKEN_SETTING = [
	{
		key: 'presentation-mode',
		label: 'Presentation mode',
		domain: 'architecture',
		controlKind: 'select',
		values: PRESENTATION_MODE
	},
	{
		key: 'scene-camera-preset',
		label: 'Scene camera preset',
		domain: 'architecture',
		controlKind: 'select',
		values: SCENE_CAMERA_PRESET
	},
	{
		key: 'selection-mode',
		label: 'Selection mode',
		domain: 'architecture',
		controlKind: 'select',
		values: SELECTION_MODE
	},
	{
		key: 'canvas-toolbar-drawing-tool',
		label: 'Canvas toolbar drawing tool',
		domain: 'canvas',
		controlKind: 'select',
		values: CANVAS_TOOLBAR_DRAWING_TOOL
	},
	{
		key: 'canvas-chart-type',
		label: 'Canvas chart type',
		domain: 'chart',
		controlKind: 'select',
		values: TOKEN_CANVAS_CHART_TYPE
	},
	{
		key: 'chat-message-status',
		label: 'Chat message status',
		domain: 'chat',
		controlKind: 'select',
		values: CHAT_MESSAGE_STATUS
	},
	{
		key: 'discount-type',
		label: 'Discount type',
		domain: 'commerce',
		controlKind: 'select',
		values: DISCOUNT_TYPE
	},
	{
		key: 'inventory-item-status',
		label: 'Inventory item status',
		domain: 'commerce',
		controlKind: 'select',
		values: INVENTORY_ITEM_STATUS
	},
	{
		key: 'subscription-status',
		label: 'Subscription status',
		domain: 'commerce',
		controlKind: 'select',
		values: SUBSCRIPTION_STATUS
	},
	{
		key: 'warranty-period-type',
		label: 'Warranty period type',
		domain: 'commerce',
		controlKind: 'select',
		values: WARRANTY_PERIOD_TYPE
	},
	{
		key: 'export-format',
		label: 'Export format',
		domain: 'control',
		controlKind: 'select',
		values: EXPORT_FORMAT
	},
	{
		key: 'filter-panel-layout',
		label: 'Filter panel layout',
		domain: 'control',
		controlKind: 'select',
		values: FILTER_PANEL_LAYOUT
	},
	{
		key: 'debug-console-log-level',
		label: 'Debug console log level',
		domain: 'development',
		controlKind: 'select',
		values: DEBUG_CONSOLE_LOG_LEVEL
	},
	{
		key: 'data-exporter-format',
		label: 'Data exporter format',
		domain: 'file',
		controlKind: 'select',
		values: DATA_EXPORTER_FORMAT
	},
	{
		key: 'file-explorer-view-mode',
		label: 'File explorer view mode',
		domain: 'file',
		controlKind: 'select',
		values: FILE_EXPLORER_VIEW_MODE
	},
	{
		key: 'file-item-type',
		label: 'File item type',
		domain: 'file',
		controlKind: 'select',
		values: FILE_ITEM_TYPE
	},
	{
		key: 'upload-progress-variant',
		label: 'Upload progress variant',
		domain: 'file',
		controlKind: 'select',
		values: UPLOAD_PROGRESS_VARIANT
	},
	{
		key: 'upload-status',
		label: 'Upload status',
		domain: 'file',
		controlKind: 'select',
		values: UPLOAD_STATUS
	},
	{
		key: 'map-provider',
		label: 'Map provider',
		domain: 'geo',
		controlKind: 'select',
		values: MAP_PROVIDER
	},
	{
		key: 'graph-node-category',
		label: 'Graph node category',
		domain: 'graph',
		controlKind: 'select',
		values: GRAPH_NODE_CATEGORY
	},
	{
		key: 'graph-tool-mode',
		label: 'Graph tool mode',
		domain: 'graph',
		controlKind: 'select',
		values: GRAPH_TOOL_MODE
	},
	{
		key: 'node-title-variant',
		label: 'Node title variant',
		domain: 'graph',
		controlKind: 'select',
		values: NODE_TITLE_VARIANT
	},
	{
		key: 'graph-grid-mode',
		label: 'Graph grid mode',
		domain: 'graph',
		controlKind: 'select',
		values: GRAPH_GRID_MODE
	},
	{
		key: 'list-item-marker-type',
		label: 'List item marker type',
		domain: 'information',
		controlKind: 'select',
		values: LIST_ITEM_MARKER_TYPE
	},
	{
		key: 'status-state',
		label: 'Status state',
		domain: 'information',
		controlKind: 'select',
		values: STATUS_STATE
	},
	{
		key: 'content-editor-content-type',
		label: 'Content editor content type',
		domain: 'interaction',
		controlKind: 'select',
		values: CONTENT_EDITOR_CONTENT_TYPE
	},
	{
		key: 'interaction-feedback',
		label: 'Interaction feedback',
		domain: 'interaction',
		controlKind: 'select',
		values: INTERACTION_FEEDBACK
	},
	{
		key: 'gradient-direction',
		label: 'Gradient direction',
		domain: 'layout',
		controlKind: 'select',
		values: GRADIENT_DIRECTION
	},
	{
		key: 'centered-layout-axis',
		label: 'Centered layout axis',
		domain: 'layout',
		controlKind: 'select',
		values: CENTERED_LAYOUT_AXIS
	},
	{
		key: 'container-query-type',
		label: 'Container query type',
		domain: 'layout',
		controlKind: 'select',
		values: CONTAINER_QUERY_TYPE
	},
	{
		key: 'grid-molecule-justify',
		label: 'Grid molecule justify',
		domain: 'layout',
		controlKind: 'select',
		values: GRID_MOLECULE_JUSTIFY
	},
	{
		key: 'split-layout-gap',
		label: 'Split layout gap',
		domain: 'layout',
		controlKind: 'select',
		values: SPLIT_LAYOUT_GAP
	},
	{
		key: 'item-layout-gravity',
		label: 'Item layout gravity',
		domain: 'layout',
		controlKind: 'select',
		values: ITEM_LAYOUT_GRAVITY
	},
	{
		key: 'item-layout-level',
		label: 'Item layout level',
		domain: 'layout',
		controlKind: 'select',
		values: ITEM_LAYOUT_LEVEL
	},
	{
		key: 'item-layout-shape',
		label: 'Item layout shape',
		domain: 'layout',
		controlKind: 'select',
		values: ITEM_LAYOUT_SHAPE
	},
	{
		key: 'performance-monitor-status',
		label: 'Performance monitor status',
		domain: 'management',
		controlKind: 'select',
		values: PERFORMANCE_MONITOR_STATUS
	},
	{
		key: 'traffic-analytics-time-range',
		label: 'Traffic analytics time range',
		domain: 'marketing',
		controlKind: 'select',
		values: TRAFFIC_ANALYTICS_TIME_RANGE
	},
	{
		key: 'avatar-user-status',
		label: 'Avatar user status',
		domain: 'media',
		controlKind: 'select',
		values: AVATAR_USER_STATUS
	},
	{
		key: 'media-library-media-type',
		label: 'Media library media type',
		domain: 'media',
		controlKind: 'select',
		values: MEDIA_LIBRARY_MEDIA_TYPE
	},
	{
		key: 'spinner-variant',
		label: 'Spinner variant',
		domain: 'notification',
		controlKind: 'select',
		values: SPINNER_VARIANT
	},
	{
		key: 'playground-ai-assistant-ai-provider-id',
		label: 'Playground AI provider',
		domain: 'playground',
		controlKind: 'select',
		values: PLAYGROUND_AI_ASSISTANT_AI_PROVIDER_ID
	},
	{
		key: 'playground-canvas-shell-background-type',
		label: 'Playground canvas background',
		domain: 'playground',
		controlKind: 'select',
		values: PLAYGROUND_CANVAS_SHELL_BACKGROUND_TYPE
	},
	{
		key: 'playground-canvas-shell-viewport-size',
		label: 'Playground canvas viewport',
		domain: 'playground',
		controlKind: 'select',
		values: PLAYGROUND_CANVAS_SHELL_VIEWPORT_SIZE
	},
	{
		key: 'playground-component-catalog-sort-by',
		label: 'Playground catalog sort',
		domain: 'playground',
		controlKind: 'select',
		values: PLAYGROUND_COMPONENT_CATALOG_SORT_BY
	},
	{
		key: 'playground-component-catalog-view-mode',
		label: 'Playground catalog view mode',
		domain: 'playground',
		controlKind: 'select',
		values: PLAYGROUND_COMPONENT_CATALOG_VIEW_MODE
	},
	{
		key: 'prompt-variable-type',
		label: 'Prompt variable type',
		domain: 'science',
		controlKind: 'select',
		values: PROMPT_VARIABLE_TYPE
	},
	{
		key: 'sentiment-analysis-status',
		label: 'Sentiment analysis status',
		domain: 'science',
		controlKind: 'select',
		values: SENTIMENT_ANALYSIS_STATUS
	},
	{
		key: 'selection-type',
		label: 'Token selection type',
		domain: 'token',
		controlKind: 'select',
		values: TOKEN_SELECTION_TYPE
	},
	{
		key: 'selection-kind',
		label: 'Token selector kind',
		domain: 'token',
		controlKind: 'select',
		values: TOKEN_SELECTOR_KIND
	}
] as const;
