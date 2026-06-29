import { TOKEN_AI_SETTING } from '$stylist/token/const/object/ai';
import { TOKEN_ARCHITECTURE_SETTING } from '$stylist/token/const/object/architecture';
import { TOKEN_CALENDAR_SETTING } from '$stylist/token/const/object/calendar';
import { TOKEN_CANVAS_SETTING } from '$stylist/token/const/object/canvas';
import { TOKEN_CHART_SETTING } from '$stylist/token/const/object/chart';
import { TOKEN_CHAT_SETTING } from '$stylist/token/const/object/chat';
import { TOKEN_COLOR_SETTING } from '$stylist/token/const/object/color';
import { TOKEN_COMMERCE_SETTING } from '$stylist/token/const/object/commerce';
import { TOKEN_CONTROL_SETTING } from '$stylist/token/const/object/control';
import { TOKEN_DEVELOPMENT_SETTING } from '$stylist/token/const/object/development';
import { TOKEN_FILE_SETTING } from '$stylist/token/const/object/file';
import { TOKEN_GEO_SETTING } from '$stylist/token/const/object/geo';
import { TOKEN_GRAPH_SETTING } from '$stylist/token/const/object/graph';
import { TOKEN_INFORMATION_SETTING } from '$stylist/token/const/object/information';
import { TOKEN_INTERACTION_SETTING } from '$stylist/token/const/object/interaction';
import { TOKEN_LAYOUT_SETTING } from '$stylist/token/const/object/layout';
import { TOKEN_LOCALIZATION_SETTING } from '$stylist/token/const/object/localization';
import { TOKEN_MANAGEMENT_SETTING } from '$stylist/token/const/object/management';
import { TOKEN_MARKETING_SETTING } from '$stylist/token/const/object/marketing';
import { TOKEN_MEDIA_SETTING } from '$stylist/token/const/object/media';
import { TOKEN_NOTIFICATION_SETTING } from '$stylist/token/const/object/notification';
import { TOKEN_PLAYGROUND_SETTING } from '$stylist/token/const/object/playground';
import { TOKEN_SCIENCE_SETTING } from '$stylist/token/const/object/science';
import { TOKEN_SVG_SETTING } from '$stylist/token/const/object/svg';
import { TOKEN_TABLE_SETTING } from '$stylist/token/const/object/table';
import { TOKEN_THEME_SETTING } from '$stylist/token/const/object/theme';
import { TOKEN_TYPOGRAPHY_SETTING } from '$stylist/token/const/object/typography';

export const TOKEN_SETTING = [
	...TOKEN_AI_SETTING,
	...TOKEN_ARCHITECTURE_SETTING,
	...TOKEN_CALENDAR_SETTING,
	...TOKEN_CANVAS_SETTING,
	...TOKEN_CHART_SETTING,
	...TOKEN_CHAT_SETTING,
	...TOKEN_COLOR_SETTING,
	...TOKEN_COMMERCE_SETTING,
	...TOKEN_CONTROL_SETTING,
	...TOKEN_DEVELOPMENT_SETTING,
	...TOKEN_FILE_SETTING,
	...TOKEN_GEO_SETTING,
	...TOKEN_GRAPH_SETTING,
	...TOKEN_INFORMATION_SETTING,
	...TOKEN_INTERACTION_SETTING,
	...TOKEN_LAYOUT_SETTING,
	...TOKEN_LOCALIZATION_SETTING,
	...TOKEN_MANAGEMENT_SETTING,
	...TOKEN_MARKETING_SETTING,
	...TOKEN_MEDIA_SETTING,
	...TOKEN_NOTIFICATION_SETTING,
	...TOKEN_PLAYGROUND_SETTING,
	...TOKEN_SCIENCE_SETTING,
	...TOKEN_SVG_SETTING,
	...TOKEN_TABLE_SETTING,
	...TOKEN_THEME_SETTING,
	...TOKEN_TYPOGRAPHY_SETTING
] as const;