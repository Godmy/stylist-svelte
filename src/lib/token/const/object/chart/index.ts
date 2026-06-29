import type { Token } from '$stylist/token/type/struct/token';
import { TOKEN_CANVAS_CHART_TYPE } from '$stylist/chart/const/array/canvas-chart-type';
import { TOKEN_CHART } from '$stylist/chart/const/array/chart';
import { TOKEN_CHART_COLORS } from '$stylist/chart/const/array/chart-colors';

export const TOKEN_CHART_SETTING = [
	{ key: 'canvas-chart-type', label: 'Canvas Chart Type', domain: 'chart', controlKind: 'radio', values: TOKEN_CANVAS_CHART_TYPE },
	{ key: 'chart', label: 'Chart', domain: 'chart', controlKind: 'radio', values: TOKEN_CHART },
	{ key: 'chart-colors', label: 'Chart Colors', domain: 'chart', controlKind: 'radio', values: TOKEN_CHART_COLORS }
] satisfies readonly Token[];