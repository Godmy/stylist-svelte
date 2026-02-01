import type {
  AspectRatioProps,
  ContainerMaxWidth,
  ContainerProps,
  DividerAlign,
  DividerOrientation,
  DividerProps,
  GridLayoutProps,
  HorizontalLayoutProps,
  SpacerAxis,
  SpacerProps
} from '$stylist/design-system/layout';
import {
  getAspectRatioClasses,
  getContainerClasses,
  getDividerLineClass,
  getDividerLineFlexClass,
  getGridLayoutContainerClass,
  getGridLayoutItemClass,
  getGridLayoutStyle,
  getHorizontalLayoutClasses,
  getSpacerClasses,
  getSpacerSize
} from '$stylist/design-system/layout';

export function createAspectRatioState(props: AspectRatioProps) {
  const ratio = $derived(props.ratio ?? 1);
  const classes = $derived(getAspectRatioClasses(props.class ?? ''));

  return {
    get ratio() {
      return ratio;
    },
    get classes() {
      return classes;
    }
  };
}

export function createContainerState(props: ContainerProps) {
  const maxWidth = $derived((props.maxWidth ?? 'full') as ContainerMaxWidth);
  const classes = $derived(getContainerClasses(maxWidth, props.class ?? ''));

  return {
    get maxWidth() {
      return maxWidth;
    },
    get classes() {
      return classes;
    }
  };
}

export function createDividerState(props: DividerProps) {
  const orientation = $derived((props.orientation ?? 'horizontal') as DividerOrientation);
  const align = $derived((props.align ?? 'center') as DividerAlign);
  const dashed = $derived(props.dashed ?? false);
  const baseLineClass = $derived(getDividerLineClass(dashed));
  const leftLineFlex = $derived(getDividerLineFlexClass(align, 'left'));
  const rightLineFlex = $derived(getDividerLineFlexClass(align, 'right'));
  const isHorizontal = $derived(orientation === 'horizontal');

  return {
    get orientation() {
      return orientation;
    },
    get align() {
      return align;
    },
    get dashed() {
      return dashed;
    },
    get baseLineClass() {
      return baseLineClass;
    },
    get leftLineFlex() {
      return leftLineFlex;
    },
    get rightLineFlex() {
      return rightLineFlex;
    },
    get isHorizontal() {
      return isHorizontal;
    }
  };
}

export function createGridLayoutState(props: GridLayoutProps) {
  const columns = $derived(props.columns ?? 'repeat(auto-fit, minmax(250px, 1fr))');
  const gap = $derived(props.gap ?? '1rem');
  const containerClass = $derived(getGridLayoutContainerClass(props.class ?? ''));
  const containerStyle = $derived(getGridLayoutStyle(columns, gap));
  const itemClass = $derived(props.itemClass ?? '');

  return {
    get columns() {
      return columns;
    },
    get gap() {
      return gap;
    },
    get containerClass() {
      return containerClass;
    },
    get containerStyle() {
      return containerStyle;
    },
    get itemClass() {
      return itemClass;
    }
  };
}

export function createHorizontalLayoutState(props: HorizontalLayoutProps) {
  const gap = $derived(props.gap ?? 'md');
  const alignItems = $derived(props.alignItems ?? 'center');
  const justifyContent = $derived(props.justifyContent ?? 'start');
  const wrap = $derived(props.wrap ?? true);
  const classes = $derived(
    getHorizontalLayoutClasses(gap, alignItems, justifyContent, wrap, props.class ?? '')
  );

  return {
    get gap() {
      return gap;
    },
    get alignItems() {
      return alignItems;
    },
    get justifyContent() {
      return justifyContent;
    },
    get wrap() {
      return wrap;
    },
    get classes() {
      return classes;
    }
  };
}

export function createSpacerState(props: SpacerProps) {
  const axis = $derived((props.axis ?? 'vertical') as SpacerAxis);
  const sizeValue = $derived(getSpacerSize(props.size));
  const classes = $derived(getSpacerClasses(axis, props.class ?? ''));

  return {
    get axis() {
      return axis;
    },
    get sizeValue() {
      return sizeValue;
    },
    get classes() {
      return classes;
    }
  };
}
