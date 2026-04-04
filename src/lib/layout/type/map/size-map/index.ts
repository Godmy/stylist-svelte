import type { TokenSize } from '$stylist/layout/type/enum/size';
export type GraphPortSizeMapDimensions = {
	width: number;
	height: number;
	hoverArea: number;
};

export type RecordSizeMap = Record<TokenSize, GraphPortSizeMapDimensions>;
