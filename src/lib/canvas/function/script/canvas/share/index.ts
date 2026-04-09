import type {
	SharedCanvasObjectBounds,
	SharedCanvasPoint,
	SharedCanvasTool
} from '$stylist/canvas/type/struct/shared-canvas';
import type { CanvasObject } from '$stylist/canvas/interface/component/shared-canvas/other';

export function cloneCanvasObjects(value: readonly CanvasObject[] = []): CanvasObject[] {
	return value.map((object) => ({
		...object,
		points: object.points?.map((point) => ({ ...point }))
	}));
}

export function getCanvasObjectBounds(
	object: CanvasObject
): SharedCanvasObjectBounds | null {
	switch (object.type) {
		case 'rectangle':
			if (object.width == null || object.height == null) return null;
			return { x: object.x, y: object.y, width: object.width, height: object.height };
		case 'circle':
			if (object.radius == null) return null;
			return {
				x: object.x - object.radius,
				y: object.y - object.radius,
				width: object.radius * 2,
				height: object.radius * 2
			};
		case 'text': {
			const width = Math.max(64, (object.text?.length ?? 0) * 10);
			return { x: object.x, y: object.y - 18, width, height: 24 };
		}
		case 'path':
			if (!object.points?.length) return null;
			return getPathBounds(object.points);
		default:
			return null;
	}
}

export function hitTestCanvasObject(
	objects: readonly CanvasObject[],
	point: SharedCanvasPoint
): CanvasObject | null {
	for (let index = objects.length - 1; index >= 0; index -= 1) {
		const object = objects[index];
		const bounds = getCanvasObjectBounds(object);

		if (!bounds) continue;

		const withinBounds =
			point.x >= bounds.x &&
			point.x <= bounds.x + bounds.width &&
			point.y >= bounds.y &&
			point.y <= bounds.y + bounds.height;

		if (withinBounds) {
			return object;
		}
	}

	return null;
}

export function createCanvasObjectId(): string {
	return `obj_${Date.now()}`;
}

export function createDraftCanvasObject(
	tool: SharedCanvasTool,
	point: SharedCanvasPoint,
	color: string,
	currentUserId?: string
): CanvasObject | null {
	if (tool === 'select') return null;

	return {
		id: createCanvasObjectId(),
		type: tool === 'rectangle' ? 'rectangle' : tool === 'circle' ? 'circle' : 'text',
		x: point.x,
		y: point.y,
		color,
		userId: currentUserId
	};
}

export function updateDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: SharedCanvasPoint,
	currentPoint: SharedCanvasPoint
): CanvasObject {
	if (tool === 'rectangle') {
		return {
			...object,
			x: Math.min(startPoint.x, currentPoint.x),
			y: Math.min(startPoint.y, currentPoint.y),
			width: Math.abs(currentPoint.x - startPoint.x),
			height: Math.abs(currentPoint.y - startPoint.y)
		};
	}

	if (tool === 'circle') {
		return {
			...object,
			radius: Math.hypot(currentPoint.x - object.x, currentPoint.y - object.y)
		};
	}

	return object;
}

export function finalizeDraftCanvasObject(
	object: CanvasObject,
	tool: SharedCanvasTool,
	startPoint: SharedCanvasPoint,
	endPoint: SharedCanvasPoint
): CanvasObject {
	if (tool === 'rectangle') {
		return updateDraftCanvasObject(object, tool, startPoint, endPoint);
	}

	if (tool === 'text') {
		return {
			...object,
			text: object.text || 'Text'
		};
	}

	if (tool === 'circle') {
		return {
			...object,
			radius: object.radius ?? Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y)
		};
	}

	return object;
}

export function drawCanvasObjects(
	ctx: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	objects: readonly CanvasObject[],
	selectedObjectId: string | null
): void {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (const object of objects) {
		drawCanvasObject(ctx, object, object.id === selectedObjectId);
	}
}

export function getCanvasPointerPosition(
	event: MouseEvent,
	canvas: HTMLCanvasElement
): SharedCanvasPoint {
	const rect = canvas.getBoundingClientRect();

	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}

function getPathBounds(points: readonly SharedCanvasPoint[]): SharedCanvasObjectBounds {
	const xs = points.map((point) => point.x);
	const ys = points.map((point) => point.y);
	const minX = Math.min(...xs);
	const minY = Math.min(...ys);
	const maxX = Math.max(...xs);
	const maxY = Math.max(...ys);

	return {
		x: minX,
		y: minY,
		width: Math.max(1, maxX - minX),
		height: Math.max(1, maxY - minY)
	};
}

function drawCanvasObject(
	ctx: CanvasRenderingContext2D,
	object: CanvasObject,
	isSelected: boolean
): void {
	ctx.strokeStyle = object.color || '#000000';
	ctx.lineWidth = isSelected ? 3 : 2;
	ctx.fillStyle = object.color || '#000000';

	switch (object.type) {
		case 'rectangle':
			if (object.width && object.height) {
				ctx.strokeRect(object.x, object.y, object.width, object.height);
			}
			break;
		case 'circle':
			if (object.radius) {
				ctx.beginPath();
				ctx.arc(object.x, object.y, object.radius, 0, 2 * Math.PI);
				ctx.stroke();
			}
			break;
		case 'text':
			ctx.font = '16px Arial';
			ctx.fillText(object.text || '', object.x, object.y);
			break;
		case 'path':
			if (object.points?.length) {
				ctx.beginPath();
				ctx.moveTo(object.points[0].x, object.points[0].y);
				for (let index = 1; index < object.points.length; index += 1) {
					ctx.lineTo(object.points[index].x, object.points[index].y);
				}
				ctx.stroke();
			}
			break;
	}

	if (!isSelected) return;

	const bounds = getCanvasObjectBounds(object);
	if (!bounds) return;

	ctx.save();
	ctx.setLineDash([6, 4]);
	ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
	ctx.lineWidth = 1;
	ctx.strokeRect(bounds.x - 4, bounds.y - 4, bounds.width + 8, bounds.height + 8);
	ctx.restore();
}
