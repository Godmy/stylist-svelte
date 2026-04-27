import atomIcon from '$stylist/joint/data/svg/atom.svg?raw';
import behaviorIcon from '$stylist/joint/data/svg/behavior.svg?raw';
import builderIcon from '$stylist/joint/data/svg/builder.svg?raw';
import configIcon from '$stylist/joint/data/svg/config.svg?raw';
import contractIcon from '$stylist/joint/data/svg/contract.svg?raw';
import directorIcon from '$stylist/joint/data/svg/director.svg?raw';
import enumIcon from '$stylist/joint/data/svg/enum.svg?raw';
import fragIcon from '$stylist/joint/data/svg/frag.svg?raw';
import jsonIcon from '$stylist/joint/data/svg/json.svg?raw';
import managerIcon from '$stylist/joint/data/svg/manager.svg?raw';
import mapIcon from '$stylist/joint/data/svg/map.svg?raw';
import mdIcon from '$stylist/joint/data/svg/md.svg?raw';
import moleculeIcon from '$stylist/joint/data/svg/molecule.svg?raw';
import objectManagerIcon from '$stylist/joint/data/svg/object-manager.svg?raw';
import organismIcon from '$stylist/joint/data/svg/organism.svg?raw';
import recipeIcon from '$stylist/joint/data/svg/recipe.svg?raw';
import recordIcon from '$stylist/joint/data/svg/record.svg?raw';
import scriptIcon from '$stylist/joint/data/svg/script.svg?raw';
import slotIcon from '$stylist/joint/data/svg/slot.svg?raw';
import stateIcon from '$stylist/joint/data/svg/state.svg?raw';
import structIcon from '$stylist/joint/data/svg/struct.svg?raw';
import styleManagerIcon from '$stylist/joint/data/svg/style-manager.svg?raw';
import svgIcon from '$stylist/joint/data/svg/svg.svg?raw';
import valueIcon from '$stylist/joint/data/svg/value.svg?raw';
import vertIcon from '$stylist/joint/data/svg/vert.svg?raw';
import yamlIcon from '$stylist/joint/data/svg/yaml.svg?raw';

export const JOINT_TOOLBAR_ITEMS = [
	{ name: 'value', svg: valueIcon },
	{ name: 'enum', svg: enumIcon },
	{ name: 'map', svg: mapIcon },
	{ name: 'record', svg: recordIcon },
	{ name: 'struct', svg: structIcon },
	{ name: 'config', svg: configIcon },
	{ name: 'behavior', svg: behaviorIcon },
	{ name: 'slot', svg: slotIcon },
	{ name: 'recipe', svg: recipeIcon },
	{ name: 'contract', svg: contractIcon },
	{ name: 'director', svg: directorIcon },
	{ name: 'builder', svg: builderIcon },
	{ name: 'manager', svg: managerIcon },
	{ name: 'object-manager', svg: objectManagerIcon },
	{ name: 'style-manager', svg: styleManagerIcon },
	{ name: 'script', svg: scriptIcon },
	{ name: 'state', svg: stateIcon },
	{ name: 'atom', svg: atomIcon },
	{ name: 'molecule', svg: moleculeIcon },
	{ name: 'organism', svg: organismIcon },
	{ name: 'svg', svg: svgIcon },
	{ name: 'json', svg: jsonIcon },
	{ name: 'md', svg: mdIcon },
	{ name: 'yaml', svg: yamlIcon },
	{ name: 'vert', svg: vertIcon },
	{ name: 'frag', svg: fragIcon }
] as const;
