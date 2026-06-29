import type { Token } from '$stylist/token/type/struct/token';
import { AVATAR_USER_STATUS } from '$stylist/media/const/array/avatar-user-status';
import { MEDIA_LIBRARY_MEDIA_TYPE } from '$stylist/media/const/array/media-library-media-type';

export const TOKEN_MEDIA_SETTING = [
	{ key: 'avatar-user-status', label: 'Avatar User Status', domain: 'media', controlKind: 'radio', values: AVATAR_USER_STATUS },
	{ key: 'media-library-media-type', label: 'Media Library Media Type', domain: 'media', controlKind: 'radio', values: MEDIA_LIBRARY_MEDIA_TYPE }
] satisfies readonly Token[];