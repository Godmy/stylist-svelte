// Props for SharedCanvas component
export interface SharedCanvasProps {
  width?: number;
  height?: number;
  objects?: CanvasObject[];
  users?: CanvasUser[];
  currentUserId?: string;
  currentUser?: CanvasUser;
  onObjectAdd?: (obj: CanvasObject) => void;
  onObjectUpdate?: (obj: CanvasObject) => void;
  onObjectDelete?: (id: string) => void;
  showUsers?: boolean;
  showToolbar?: boolean;
  class?: string;
  toolbarClass?: string;
  canvasClass?: string;
  variant?: 'default' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export interface CanvasObject {
  id: string;
  type: 'rectangle' | 'circle' | 'text' | 'path';
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  text?: string;
  points?: { x: number; y: number }[];
  color: string;
  userId?: string;
}

export interface CanvasUser {
  id: string;
  name: string;
  color: string;
  cursorPosition?: { x: number; y: number };
}