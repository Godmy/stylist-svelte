/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export class ConnectionLineStyleManager {
  static getLineClasses(className?: string): string {
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
}
