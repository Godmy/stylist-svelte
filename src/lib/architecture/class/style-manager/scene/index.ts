export class SceneStyleManager {
	static getContainerClass(className = ''): string {
		return ['scene', className].filter(Boolean).join(' ');
	}

	static getCanvasClass(className = ''): string {
		return ['scene__canvas', className].filter(Boolean).join(' ');
	}

	static getOverlayClass(className = ''): string {
		return ['scene__overlay', className].filter(Boolean).join(' ');
	}
}
