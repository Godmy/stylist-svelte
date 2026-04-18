import { getCanvasObjectBounds } from '$stylist/canvas/function/script/canvas-get-object-bounds';
import type { CanvasObject } from '$stylist/canvas/type/struct/canvas-object';

export function drawCanvasObject(
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
