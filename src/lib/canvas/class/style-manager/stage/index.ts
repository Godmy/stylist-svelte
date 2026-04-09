import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StageStyleManager {
	static getStageClass(extraClass = ''): string {
		return mergeClassNames('stage', extraClass);
	}

	static getWorldClass(): string {
		return 'world';
	}

	static getWorldStyle(worldWidth: number, worldHeight: number): string {
		return `--world-width: ${worldWidth}px; --world-height: ${worldHeight}px;`;
	}

	static getTransformStyle(cameraX: number, cameraY: number, cameraZoom: number): string {
		return `transform: translate(${-cameraX}px, ${-cameraY}px) scale(${cameraZoom});`;
	}
}

