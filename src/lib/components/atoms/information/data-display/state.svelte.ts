import type { AnimatedNumberProps, NumberFlowProps, PieChartProps, ColorSwatchProps } from '$stylist/design-system/attributes';
import {
  formatAnimatedValue,
  formatNumberFlowValue,
  getNpmBadgeClasses,
  getNpmBadgeLabel,
  getNpmBadgeLinkClasses,
  getNumberFlowClasses
} from '$stylist/design-system/presets/information';

interface NpmBadgeProps {
  type: Parameters<typeof getNpmBadgeLabel>[0];
  label?: string;
  class?: string;
}

export function createAnimatedNumberState(props: AnimatedNumberProps) {
  const value = props.value;
  const prefix = props.prefix ?? '';
  const suffix = props.suffix ?? '';
  const separator = props.separator ?? ',';
  const decimals = props.decimals ?? 0;
  const classes = `${props.class ?? ''} font-mono`.trim();

  const formattedValue = formatAnimatedValue(value, {
    format: props.format,
    separator,
    decimals
  });

  return {
    value,
    prefix,
    suffix,
    formattedValue,
    classes
  };
}

export function createPieChartState(props: PieChartProps) {
  const containerClasses = props.class || '';
  const svgClasses = '';

  return {
    containerClasses,
    svgClasses
  };
}

export function createColorSwatchState(props: ColorSwatchProps) {
  const color = props.color ?? '#0ea5e9';
  const size = props.size ?? 32;
  const classes = props.class || '';
  const style = `background-color: ${color}; width: ${size}px; height: ${size}px;`;

  return {
    classes,
    style
  };
}

export function createNpmBadgeState(props: NpmBadgeProps) {
  const type = props.type;
  const label = getNpmBadgeLabel(type, props.label);
  const classes = getNpmBadgeClasses(type, props.class ?? '');
  const linkClasses = getNpmBadgeLinkClasses();

  return {
    type,
    label,
    classes,
    linkClasses
  };
}

export function createNumberFlowState(props: NumberFlowProps) {
  const value = props.value ?? 0;
  const locales = props.locales ?? 'en-US';
  const format = props.format;
  const prefix = props.prefix ?? '';
  const suffix = props.suffix ?? '';
  const baseClasses = getNumberFlowClasses(props.class ?? '');
  const formattedValue = formatNumberFlowValue(value, locales, format);

  return {
    value,
    prefix,
    suffix,
    formattedValue,
    classes: baseClasses
  };
}
