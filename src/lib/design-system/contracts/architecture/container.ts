import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ContainerMaxWidth } from '$stylist/design-system/tokens/architecture/size';

export interface ContainerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
  size?: ContainerMaxWidth;
}


