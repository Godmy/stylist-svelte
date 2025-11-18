<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IIconProps } from './types';
  import { IconStyleManager } from './styles';
  import { DEFAULT_ICON_NAME, DEFAULT_ICON_SIZE, DEFAULT_STROKE_WIDTH, SVG_NAMESPACE, SVG_VIEWBOX, SVG_FILL, SVG_STROKE, SVG_STROKE_LINECAP, SVG_STROKE_LINEJOIN } from './constant';

  /**
   * Icon component - Displays an SVG icon based on the provided name
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles icon rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other icon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param name - Name of the icon to display
   * @param size - Size of the icon ('xs' | 'sm' | 'md' | 'lg' | 'xl')
   * @param class - Additional CSS classes
   * @param strokeWidth - Stroke width for the icon
   * @returns An accessible, styled SVG icon element
   */
  type Props = IIconProps & HTMLAttributes<SVGSVGElement>;

  let {
    name = DEFAULT_ICON_NAME,
    size = DEFAULT_ICON_SIZE,
    class: className = '',
    strokeWidth = DEFAULT_STROKE_WIDTH,
    ...restProps
  }: Props = $props();

  let classes = $derived(IconStyleManager.getAllClasses(size, className));
  let iconPath = $derived(IconStyleManager.getIconPath(name));
</script>

<svg
  xmlns={SVG_NAMESPACE}
  class={classes}
  viewBox={SVG_VIEWBOX}
  fill={SVG_FILL}
  stroke={SVG_STROKE}
  stroke-width={strokeWidth}
  stroke-linecap={SVG_STROKE_LINECAP}
  stroke-linejoin={SVG_STROKE_LINEJOIN}
  {...restProps}
>
  <path d={iconPath} />
</svg>