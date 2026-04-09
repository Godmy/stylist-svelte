import { Matrix4 } from '$stylist/architecture/function/script/matrix4';
import type { SceneAtom } from '$stylist/architecture/type/struct/scene-atom/scene-atom';

export function resolveSceneAtomModelMatrix(atom: SceneAtom, animationTime = 0): Matrix4 {
	const { position, rotation, scale } = atom.transform;
	const spin = atom.motion?.spin;

	const scaleMatrix = Matrix4.scale(scale?.x ?? 1, scale?.y ?? 1, scale?.z ?? 1);
	const rotateX = Matrix4.rotateX((rotation?.x ?? 0) + (spin?.x ?? 0) * animationTime);
	const rotateY = Matrix4.rotateY((rotation?.y ?? 0) + (spin?.y ?? 0) * animationTime);
	const rotateZ = Matrix4.rotateZ((rotation?.z ?? 0) + (spin?.z ?? 0) * animationTime);
	const translate = Matrix4.translate(position.x, position.y, position.z);

	return translate.multiply(rotateZ).multiply(rotateY).multiply(rotateX).multiply(scaleMatrix);
}
