import classIcon from '$stylist/cluster/data/svg/class.svg?raw';
import componentIcon from '$stylist/cluster/data/svg/component.svg?raw';
import constIcon from '$stylist/cluster/data/svg/const.svg?raw';
import dataIcon from '$stylist/cluster/data/svg/data.svg?raw';
import functionIcon from '$stylist/cluster/data/svg/function.svg?raw';
import interfaceIcon from '$stylist/cluster/data/svg/interface.svg?raw';
import typeIcon from '$stylist/cluster/data/svg/type.svg?raw';

export const CLUSTER_TOOLBAR_ITEMS = [
	{ name: 'data', svg: dataIcon },
	{ name: 'const', svg: constIcon },
	{ name: 'type', svg: typeIcon },
	{ name: 'interface', svg: interfaceIcon },
	{ name: 'class', svg: classIcon },
	{ name: 'function', svg: functionIcon },
	{ name: 'component', svg: componentIcon }
] as const;
