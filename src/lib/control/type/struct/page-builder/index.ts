import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';
export interface PageBuilderTextAttributes {
  FONT_SIZE?: string;
  color?: string;
}

export interface PageBuilderHeadingAttributes extends PageBuilderTextAttributes {
  level?: number;
}

export interface PageBuilderButtonAttributes {
  backgroundColor?: string;
  color?: string;
  padding?: string;
}

export interface PageBuilderImageAttributes {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

export interface PageBuilderDividerAttributes {
  color?: string;
}

export interface PageBuilderContainerAttributes {
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  BORDER_RADIUS?: string;
}

export interface PageBuilderElement {
  id: string;
  type: TokenComponentType;
  content?: string;
  attributes?:
    | PageBuilderTextAttributes
    | PageBuilderHeadingAttributes
    | PageBuilderButtonAttributes
    | PageBuilderImageAttributes
    | PageBuilderDividerAttributes
    | PageBuilderContainerAttributes;
  children?: PageBuilderElement[];
}

export interface PageBuilderToolbarItem {
  type: TokenComponentType;
  label: string;
  icon: string;
}

export interface PageBuilderProps extends InteractionHTMLAttributes<HTMLDivElement> {
  initialElements?: PageBuilderElement[];
  onSave?: (elements: PageBuilderElement[]) => void;
  showToolbar?: boolean;
  showPreview?: boolean;
  editable?: boolean;
  class?: string;
  toolbarClass?: string;
  canvasClass?: string;
  elementClass?: string;
}

