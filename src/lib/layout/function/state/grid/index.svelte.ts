import type { GridProps } from '$stylist/layout/type/struct/grid/grid-props';
import type { GridRestProps } from '$stylist/layout/type/struct/grid/grid-rest-props';

export type { GridProps } from '$stylist/layout/type/struct/grid/grid-props';
export type { GridRestProps } from '$stylist/layout/type/struct/grid/grid-rest-props';

export function stateFn(props: GridProps) {
  const gapClass = $derived.by(() => {
    const gap = props.gap ?? 'md';
    return {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    }[gap];
  });

  const alignItemsClass = $derived.by(() => {
    const align = props.alignItems ?? 'stretch';
    return {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    }[align];
  });

  const justifyContentClass = $derived.by(() => {
    const justify = props.justifyContent ?? 'start';
    return {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    }[justify];
  });

  const gridClass = $derived.by(() => {
    const cols = props.cols ?? 2;
    const responsive = props.responsive ?? true;
    const hostClass = props.class ?? '';
    return `
      grid
      ${
        responsive
          ? `grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(cols, 4)} lg:grid-cols-${cols}`
          : `grid-cols-${cols}`
      }
      ${gapClass}
      ${alignItemsClass}
      ${justifyContentClass}
      ${hostClass}
    `;
  });

  const restProps = $derived.by(() => {
    const {
      class: _class,
      cols: _cols,
      gap: _gap,
      responsive: _responsive,
      alignItems: _alignItems,
      justifyContent: _justifyContent,
      children: _children,
      ...rest
    } = props;
    return rest as GridRestProps;
  });

  return {
    get gridClass() {
      return gridClass;
    },
    get restProps() {
      return restProps;
    },
  };
}

export default stateFn;
