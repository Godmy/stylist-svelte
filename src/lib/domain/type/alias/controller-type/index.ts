import { TOKEN_CONTROLLER_TYPE } from '$stylist/domain/const/map/controller-type';

export type TokenControllerType =
	(typeof TOKEN_CONTROLLER_TYPE)[keyof typeof TOKEN_CONTROLLER_TYPE];
