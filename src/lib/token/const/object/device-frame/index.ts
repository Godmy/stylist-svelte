import type { Token } from '$stylist/token/type/object/token';
import { DEVICE_FRAME_VIEWPORT } from '$stylist/domain/const/array/device-frame-viewport';

export const TOKEN_DEVICE_FRAME_SETTING = [
	{ key: 'device-frame-viewport', label: 'Device Frame Viewport', domain: 'domain', controlKind: 'radio', values: DEVICE_FRAME_VIEWPORT }
] satisfies readonly Token[];