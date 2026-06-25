import type { ConnectionLinePoint } from '$stylist/architecture/type/struct/connection-line-point';

export type ConnectionPathResult = {
	path: string;
	length: number;
	midPoint: ConnectionLinePoint;
	angle: number;
};
