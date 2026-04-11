import type { TokenComponentType } from '$stylist/architecture/type/enum/component-type';
import type {
  PageBuilderTextAttributes,
  PageBuilderHeadingAttributes,
  PageBuilderButtonAttributes,
  PageBuilderImageAttributes,
  PageBuilderDividerAttributes,
  PageBuilderContainerAttributes
} from '$stylist/control/type/struct/page-builder-element-attributes';

export type PageBuilderElement = {
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
