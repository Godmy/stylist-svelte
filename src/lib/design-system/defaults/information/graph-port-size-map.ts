import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { GraphPortDimensions } from '$stylist/design-system/contracts/information/graph-port';

export const GRAPH_PORT_SIZE_MAP: Record<TokenSize, GraphPortDimensions> = {
	xs: {
		width: '8px',
		height: '8px',
		hoverArea: '16px'
	},
	sm: {
		width: '10px',
		height: '10px',
		hoverArea: '20px'
	},
	md: {
		width: '12px',
		height: '12px',
		hoverArea: '24px'
	},
	lg: {
		width: '16px',
		height: '16px',
		hoverArea: '32px'
	},
	xl: {
		width: '20px',
		height: '20px',
		hoverArea: '40px'
	},
	'2xl': {
		width: '24px',
		height: '24px',
		hoverArea: '48px'
	},
	'1/4': {
		width: '8px',
		height: '8px',
		hoverArea: '16px'
	},
	'1/3': {
		width: '10px',
		height: '10px',
		hoverArea: '20px'
	},
	'2/5': {
		width: '10px',
		height: '10px',
		hoverArea: '20px'
	},
	'1/2': {
		width: '12px',
		height: '12px',
		hoverArea: '24px'
	},
	'3/5': {
		width: '12px',
		height: '12px',
		hoverArea: '24px'
	},
	'2/3': {
		width: '16px',
		height: '16px',
		hoverArea: '32px'
	},
	'3/4': {
		width: '20px',
		height: '20px',
		hoverArea: '40px'
	},
	full: {
		width: '24px',
		height: '24px',
		hoverArea: '48px'
	}
};
