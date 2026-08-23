import { TOKEN_CONTROLLER_TYPE } from '$stylist/domain/const/object/controller-type';

export type TokenControllerType =
	(typeof TOKEN_CONTROLLER_TYPE)[keyof typeof TOKEN_CONTROLLER_TYPE];
