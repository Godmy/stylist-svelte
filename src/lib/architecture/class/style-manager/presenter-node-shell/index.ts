import { cn } from '$stylist/layout/function/script/merge-class-names';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';

export class PresenterNodeShellStyleManager {
	static getHostClass(
		presentation: SemanticZoomPresentation,
		selected: boolean,
		className = ''
	): string {
		return cn(
			'presenter-node-shell',
			`presenter-node-shell--stage-${presentation.stage}`,
			`presenter-node-shell--architecture-${presentation.architecture}`,
			`presenter-node-shell--layer-${presentation.layer}`,
			selected && 'presenter-node-shell--selected',
			className
		);
	}

	static getHostStyle(
		left: number,
		top: number,
		width: number,
		height: number,
		scale: number,
		accent: string,
		selected: boolean
	): string {
		return [
			`left:${left}px`,
			`top:${top}px`,
			`width:${width}px`,
			`min-height:${height}px`,
			`transform:translate(-50%, -50%) scale(${scale})`,
			`border-color:${accent}`,
			`box-shadow:${selected ? `0 0 0 2px ${accent}` : 'none'}`
		].join(';');
	}
}

