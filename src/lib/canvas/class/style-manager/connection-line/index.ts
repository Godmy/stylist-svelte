/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { ConnectionPathResult } from '$stylist/canvas/interface/slot/connection-line-path-result';

export class ConnectionLineStyleManager {
  static getBaseLineClasses(className?: string): string {
    return `connection-line ${className ?? ''}`.trim();
  }

  static getPathClasses(): string {
    return 'connection-line__path';
  }

  static getHitAreaClasses(): string {
    return 'connection-line__hit-area';
  }

  static getArrowMarker(size: number, color: string): string {
    return `<marker id="arrow-${color.replace('#', '')}" markerWidth="${size}" markerHeight="${size * 0.7}" refX="${size * 0.9}" refY="${size * 0.35}" orient="auto"><polygon points="0 0, ${size} ${size * 0.35}, 0 ${size * 0.7}" fill="${color}" /></marker>`;
  }

  private static computeResult(path: string, start: { x: number; y: number }, end: { x: number; y: number }): ConnectionPathResult {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const midPoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return { path, length, midPoint, angle };
  }

  static calculateBezierPath(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ): ConnectionPathResult {
    const dx = Math.abs(end.x - start.x) * 0.5;
    const path = `M ${start.x} ${start.y} C ${start.x + dx} ${start.y}, ${end.x - dx} ${end.y}, ${end.x} ${end.y}`;
    return this.computeResult(path, start, end);
  }

  static calculateStraightPath(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ): ConnectionPathResult {
    const path = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
    return this.computeResult(path, start, end);
  }

  static calculateStepPath(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ): ConnectionPathResult {
    const midX = start.x + (end.x - start.x) / 2;
    const path = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x} ${end.y}`;
    const length = Math.abs(midX - start.x) + Math.abs(end.y - start.y) + Math.abs(end.x - midX);
    const midPoint = { x: midX, y: (start.y + end.y) / 2 };
    const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
    return { path, length, midPoint, angle };
  }

  static calculateArcPath(
    start: { x: number; y: number },
    end: { x: number; y: number }
  ): ConnectionPathResult {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dr = Math.sqrt(dx * dx + dy * dy);
    const path = `M ${start.x} ${start.y} A ${dr} ${dr} 0 0 1 ${end.x} ${end.y}`;
    return this.computeResult(path, start, end);
  }

  static getLineClasses(_type?: string, _lineStyle?: string, _active?: boolean, _animated?: boolean): string {
    return 'connection-line';
  }

  static getLineStyles(
    color: string,
    _activeColor?: string,
    strokeWidth?: number,
    _active?: boolean
  ): Record<string, string> {
    return {
      stroke: color,
      'stroke-width': `${strokeWidth ?? 2}px`,
      fill: 'none'
    };
  }
}
