import classIcon from '$stylist/domain/data/svg/class.svg?raw';
import componentIcon from '$stylist/domain/data/svg/component.svg?raw';
import constIcon from '$stylist/domain/data/svg/const.svg?raw';
import dataIcon from '$stylist/domain/data/svg/data.svg?raw';
import functionIcon from '$stylist/domain/data/svg/function.svg?raw';
import interfaceIcon from '$stylist/domain/data/svg/interface.svg?raw';
import typeIcon from '$stylist/domain/data/svg/type.svg?raw';

export const CLUSTER_TOOLBAR_ITEMS = [
	{ name: 'data', svg: dataIcon },
	{ name: 'const', svg: constIcon },
	{ name: 'type', svg: typeIcon },
	{ name: 'interface', svg: interfaceIcon },
	{ name: 'class', svg: classIcon },
	{ name: 'function', svg: functionIcon },
	{ name: 'component', svg: componentIcon }
] as const;
