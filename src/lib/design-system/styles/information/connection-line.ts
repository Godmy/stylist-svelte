import type { Point } from '$stylist/design-system/contracts/information/connection-line';
import type { TokenTrajectory } from '$stylist/design-system/tokens/architecture/trajectory';
import type { TokenBorderStyle as LineStyleToken } from '$stylist/design-system/tokens/architecture/border-style';
import { cn } from '$stylist/design-system/utils/cn';
import type { ConnectionPathResult } from '$stylist/design-system/contracts/information/connection-line';


/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ Р»РёРЅРёРё СЃРѕРµРґРёРЅРµРЅРёСЏ
 */
export class ConnectionLineStyleManager {
	/**
	 * РџРѕР»СѓС‡Р°РµС‚ РєР»Р°СЃСЃС‹ Р»РёРЅРёРё
	 */
	static getLineClasses(
		type: TokenTrajectory,
		lineStyle: LineStyleToken,
		active: boolean,
		animated: boolean
	): string {
		return cn(
			'connection-line',
			`connection-line--${type}`,
			`connection-line--${lineStyle}`,
			active && 'connection-line--active',
			animated && 'connection-line--animated'
		);
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ СЃС‚РёР»Рё Р»РёРЅРёРё
	 */
	static getLineStyles(
		color: string,
		activeColor: string,
		strokeWidth: number,
		active: boolean
	): string {
		const currentColor = active ? activeColor : color;
		return `
			--connection-color: ${currentColor};
			--connection-stroke-width: ${strokeWidth}px;
		`.trim();
	}

	/**
	 * Р Р°СЃСЃС‡РёС‚С‹РІР°РµС‚ РїСѓС‚СЊ РєСЂРёРІРѕР№ Р‘РµР·СЊРµ
	 */
	static calculateBezierPath(start: Point, end: Point): ConnectionPathResult {
		const deltaX = end.x - start.x;
		const controlOffset = Math.min(Math.abs(deltaX) * 0.5, 150);

		const control1: Point = { x: start.x + controlOffset, y: start.y };
		const control2: Point = { x: end.x - controlOffset, y: end.y };

		const path = `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`;

		// РџСЂРёР±Р»РёР·РёС‚РµР»СЊРЅР°СЏ РґР»РёРЅР° РєСЂРёРІРѕР№
		const length = Math.sqrt(deltaX * deltaX + (end.y - start.y) ** 2);

		const midPoint: Point = {
			x: (start.x + end.x) / 2,
			y: (start.y + end.y) / 2
		};

		const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);

		return { path, length, midPoint, angle };
	}

	/**
	 * Р Р°СЃСЃС‡РёС‚С‹РІР°РµС‚ РїСЂСЏРјРѕР№ РїСѓС‚СЊ
	 */
	static calculateStraightPath(start: Point, end: Point): ConnectionPathResult {
		const path = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
		const length = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);

		const midPoint: Point = {
			x: (start.x + end.x) / 2,
			y: (start.y + end.y) / 2
		};

		const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);

		return { path, length, midPoint, angle };
	}

	/**
	 * Р Р°СЃСЃС‡РёС‚С‹РІР°РµС‚ СЃС‚СѓРїРµРЅС‡Р°С‚С‹Р№ РїСѓС‚СЊ
	 */
	static calculateStepPath(start: Point, end: Point): ConnectionPathResult {
		const midX = (start.x + end.x) / 2;
		const path = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x} ${end.y}`;
		const length = Math.abs(midX - start.x) + Math.abs(end.y - start.y) + Math.abs(end.x - midX);

		const midPoint: Point = {
			x: midX,
			y: (start.y + end.y) / 2
		};

		const angle = 0;

		return { path, length, midPoint, angle };
	}

	/**
	 * Р Р°СЃСЃС‡РёС‚С‹РІР°РµС‚ РґСѓРіРѕРІРѕР№ РїСѓС‚СЊ
	 */
	static calculateArcPath(start: Point, end: Point): ConnectionPathResult {
		const deltaX = end.x - start.x;
		const deltaY = end.y - start.y;
		const radius = Math.sqrt(deltaX ** 2 + deltaY ** 2) * 0.5;

		const largeArcFlag = deltaY > 0 ? 1 : 0;
		const path = `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 ${largeArcFlag} ${end.x} ${end.y}`;

		const length = radius * Math.PI;

		const midPoint: Point = {
			x: (start.x + end.x) / 2,
			y: (start.y + end.y) / 2 + radius * 0.3
		};

		const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

		return { path, length, midPoint, angle };
	}

	/**
	 * РџРѕР»СѓС‡Р°РµС‚ SVG РґР»СЏ СЃС‚СЂРµР»РєРё
	 */
	static getArrowMarker(arrowSize: number, color: string): string {
		return `
			<marker
				id="arrowhead-${arrowSize}"
				markerWidth="${arrowSize}"
				markerHeight="${arrowSize}"
				refX="${arrowSize / 2}"
				refY="${arrowSize / 2}"
				orient="auto"
			>
				<polygon
					points="0 0, ${arrowSize} ${arrowSize / 2}, 0 ${arrowSize}"
					fill="${color}"
				/>
			</marker>
		`.trim();
	}
}

export default ConnectionLineStyleManager;








