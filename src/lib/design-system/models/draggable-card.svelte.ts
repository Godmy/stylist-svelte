import type { CardData, DraggableCardProps } from '../props/draggable-card';

export class DraggableCardModel {
  isDragging = $state(false);
  
  constructor(props: DraggableCardProps) {
    // Initialize with props
    this.updateFromProps(props);
  }
  
  updateFromProps(props: DraggableCardProps) {
    // Handle any state updates based on props changes
    if (props.disabled || !props.draggable) {
      this.isDragging = false;
    }
  }
  
  handleDragStart = (data: CardData, e: DragEvent) => {
    if (this.isDragging) return;
    
    this.isDragging = true;
    e.dataTransfer?.setData('text/plain', data.id);
  };
  
  handleDragEnd = () => {
    this.isDragging = false;
  };
  
  handleClick = (data: CardData, onClick?: (data: CardData) => void) => {
    if (!this.isDragging && onClick) {
      onClick(data);
    }
  };
  
  handleContextMenu = (data: CardData, event: MouseEvent, onContextMenu?: (data: CardData, event: MouseEvent) => void) => {
    if (!this.isDragging && onContextMenu) {
      event.preventDefault();
      onContextMenu(data, event);
    }
  };
}

export default DraggableCardModel;