import atomIcon from '$stylist/domain/data/svg/atom.svg?raw';
import behaviorIcon from '$stylist/domain/data/svg/behavior.svg?raw';
import builderIcon from '$stylist/domain/data/svg/builder.svg?raw';
import configIcon from '$stylist/domain/data/svg/config.svg?raw';
import contractIcon from '$stylist/domain/data/svg/contract.svg?raw';
import directorIcon from '$stylist/domain/data/svg/director.svg?raw';
import enumIcon from '$stylist/domain/data/svg/enum.svg?raw';
import fragIcon from '$stylist/domain/data/svg/frag.svg?raw';
import jsonIcon from '$stylist/domain/data/svg/json.svg?raw';
import managerIcon from '$stylist/domain/data/svg/manager.svg?raw';
import mapIcon from '$stylist/domain/data/svg/map.svg?raw';
import mdIcon from '$stylist/domain/data/svg/md.svg?raw';
import moleculeIcon from '$stylist/domain/data/svg/molecule.svg?raw';
import objectManagerIcon from '$stylist/domain/data/svg/object-manager.svg?raw';
import organismIcon from '$stylist/domain/data/svg/organism.svg?raw';
import recipeIcon from '$stylist/domain/data/svg/recipe.svg?raw';
import recordIcon from '$stylist/domain/data/svg/record.svg?raw';
import scriptIcon from '$stylist/domain/data/svg/script.svg?raw';
import slotIcon from '$stylist/domain/data/svg/slot.svg?raw';
import stateIcon from '$stylist/domain/data/svg/state.svg?raw';
import structIcon from '$stylist/domain/data/svg/struct.svg?raw';
import styleManagerIcon from '$stylist/domain/data/svg/style-manager.svg?raw';
import svgIcon from '$stylist/domain/data/svg/svg.svg?raw';
import valueIcon from '$stylist/domain/data/svg/value.svg?raw';
import vertIcon from '$stylist/domain/data/svg/vert.svg?raw';
import yamlIcon from '$stylist/domain/data/svg/yaml.svg?raw';

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
