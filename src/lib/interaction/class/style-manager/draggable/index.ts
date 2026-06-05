import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { DraggableStyleManagerOptions } from '$stylist/interaction/interface/slot/draggable-style-manager-options';

export class DraggableStyleManager {
	static getClasses(options: DraggableStyleManagerOptions = {}): string {
		const {
			draggable = false,
			dropzone = false,
			isDragging = false,
			isOverDropZone = false,
			disabled = false,
			showHandle = false,
			class: className = ''
		} = options;

		if (disabled) {
			return mergeClassNames('c-draggable', 'c-draggable--disabled', className);
		}

		return mergeClassNames(
			'c-draggable',
			draggable && 'c-draggable--grab',
			showHandle && draggable && 'c-draggable--handle',
			isDragging && 'c-draggable--dragging',
			dropzone && isOverDropZone && 'c-draggable--drop-active',
			className
		);
	}
}
