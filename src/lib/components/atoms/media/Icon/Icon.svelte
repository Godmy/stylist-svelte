<script lang="ts">
  import type { IconProps } from './type';
  import { DEFAULT_ICON_NAME, DEFAULT_ICON_SIZE, DEFAULT_STROKE_WIDTH, SVG_NAMESPACE, SVG_VIEWBOX, SVG_FILL, SVG_STROKE, SVG_STROKE_LINECAP, SVG_STROKE_LINEJOIN, SVG_CLASS_BASE } from './constant';
  import { getIconPath, getSizeClasses } from './util';

  let {
    name = DEFAULT_ICON_NAME,
    size = DEFAULT_ICON_SIZE,
    className = '',
    strokeWidth = DEFAULT_STROKE_WIDTH,
    ...restProps
  }: IconProps = $props();

  let sizeClasses = getSizeClasses(size);
  let iconPath = getIconPath(name);
  let iconClass = `${SVG_CLASS_BASE} ${sizeClasses} ${className}`.trim();
</script>

<svg
  xmlns={SVG_NAMESPACE}
  class={iconClass}
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