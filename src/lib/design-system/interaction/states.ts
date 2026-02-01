// Общий интерфейс для состояний компонентов
export interface StateProps {
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  readonly?: boolean;
  required?: boolean;
  hidden?: boolean;
  visible?: boolean;
  focused?: boolean;
  hovered?: boolean;
  active?: boolean;
  selected?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  expanded?: boolean;
  collapsed?: boolean;
  open?: boolean;
  closed?: boolean;
  pending?: boolean;
  success?: boolean;
  warning?: boolean;
  info?: boolean;
  primary?: boolean;
  secondary?: boolean;
  block?: boolean;
  inline?: boolean;
  sticky?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  relative?: boolean;
}

// Интерфейс для стилей состояний
export interface StateStyleProps {
  disabledStyle?: string;
  loadingStyle?: string;
  errorStyle?: string;
  readonlyStyle?: string;
  successStyle?: string;
  warningStyle?: string;
  primaryStyle?: string;
  secondaryStyle?: string;
}

// Объединенный интерфейс для состояний и их стилей
export interface ComponentStateProps extends StateProps, StateStyleProps {}

// Типы для различных состояний
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type ValidationState = 'valid' | 'invalid' | 'pending';
export type InteractionState = 'enabled' | 'disabled' | 'readonly';
export type VisibilityState = 'visible' | 'hidden' | 'collapsed';