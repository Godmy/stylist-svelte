/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';
import type { TokenNodeType } from '$stylist/architecture/type/enum/node-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenSeverity } from '$stylist/interaction/type/record/sevetity';
import type { TokenInteration } from '$stylist/interaction/type/record/interaction';

export class LiteGraphNodeStyleManager {
  static getNodeClasses(
    type?: TokenNodeType,
    mode?: TokenSeverity,
    status?: TokenInteration,
    size?: TokenSize,
    selected?: boolean,
    presentation?: SemanticZoomPresentation
  ): string {
    const base = 'litegraph-node';
    const parts = [base];
    if (type) parts.push(`${base}--${type}`);
    if (size) parts.push(`${base}--${size}`);
    if (selected) parts.push(`${base}--selected`);
    if (mode) parts.push(`${base}--${mode}`);
    if (status) parts.push(`${base}--${status}`);
    return parts.join(' ');
  }

  static getNodeStyles(params: {
    x?: number;
    y?: number;
    width?: number | string;
    minWidth?: number;
    height?: number | string;
    color?: string;
    headerColor?: string;
    presentation?: SemanticZoomPresentation;
  }): Record<string, string> {
    const styles: Record<string, string> = {};
    if (params.x !== undefined) styles.left = `${params.x}px`;
    if (params.y !== undefined) styles.top = `${params.y}px`;
    if (params.width !== undefined) styles.width = typeof params.width === 'number' ? `${params.width}px` : params.width;
    if (params.minWidth) styles.minWidth = `${params.minWidth}px`;
    if (params.height !== undefined) styles.height = typeof params.height === 'number' ? `${params.height}px` : params.height;
    if (params.color) styles['--node-color'] = params.color;
    if (params.headerColor) styles['--header-color'] = params.headerColor;
    return styles;
  }

  static getHeaderClasses(): string {
    return 'litegraph-node__header';
  }

  static getBodyClasses(): string {
    return 'litegraph-node__body';
  }

  static getPortsClasses(): string {
    return 'litegraph-node__ports';
  }

  static getPropertiesClasses(): string {
    return 'litegraph-node__properties';
  }

  static getContentClasses(): string {
    return 'litegraph-node__content';
  }

  static getSemanticShellClasses(): string {
    return 'litegraph-node__semantic-shell';
  }

  static getSemanticIconClasses(): string {
    return 'litegraph-node__semantic-icon';
  }

  static getSemanticTitleClasses(): string {
    return 'litegraph-node__semantic-title';
  }

  static getSemanticDescriptionClasses(): string {
    return 'litegraph-node__semantic-description';
  }
}
