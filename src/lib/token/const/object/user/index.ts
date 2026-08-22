import type { Token } from '$stylist/token/type/object/token';
import { AVATAR_USER_STATUS } from '$stylist/user/const/array/avatar-user-status';

export const TOKEN_USER_SETTING = [
	{
		key: 'avatar-user-status',
		label: 'Avatar User Status',
		domain: 'user',
		controlKind: 'radio',
		values: AVATAR_USER_STATUS
	}
] satisfies readonly Token[];
