import type { Token } from '$stylist/token/type/object/token';
import { TOKEN_BUTTON_LOADER_CLASSES } from '$stylist/button/const/array/button-loader-classes';
import { TOKEN_CUBE_FACE_NAME } from '$stylist/token/const/array/cube-face-name';
import { TOKEN_CUBE_FACE_TITLE } from '$stylist/token/const/array/cube-face-title';
import { EXPORT_FORMAT } from '$stylist/file/const/array/export-format';
import { TOKEN_SELECTOR_KIND } from '$stylist/control/const/array/selection-kind';
import { TOKEN_SELECTION_TYPE } from '$stylist/control/const/array/selection-type';

export const TOKEN_CONTROL_SETTING = [
	{
		key: 'button-loader-classes',
		label: 'Button Loader Classes',
		domain: 'control',
		controlKind: 'radio',
		values: TOKEN_BUTTON_LOADER_CLASSES
	},
	{
		key: 'cube-face-name',
		label: 'Cube Face Name',
		domain: 'control',
		controlKind: 'radio',
		values: TOKEN_CUBE_FACE_NAME
	},
	{
		key: 'cube-face-title',
		label: 'Cube Face Title',
		domain: 'control',
		controlKind: 'radio',
		values: TOKEN_CUBE_FACE_TITLE
	},
	{
		key: 'export-format',
		label: 'Export Format',
		domain: 'control',
		controlKind: 'radio',
		values: EXPORT_FORMAT
	},
	{
		key: 'selection-kind',
		label: 'Selection Kind',
		domain: 'control',
		controlKind: 'radio',
		values: TOKEN_SELECTOR_KIND
	},
	{
		key: 'selection-type',
		label: 'Selection Type',
		domain: 'control',
		controlKind: 'radio',
		values: TOKEN_SELECTION_TYPE
	}
] satisfies readonly Token[];
