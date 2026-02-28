export interface ChatStatusIndicatorStyles {
  container: string;
  indicator: string;
  label: string;
  [key: string]: string;
}

export interface ChatStatusIndicatorStyleManagerInterface {
  getContainerClass: () => string;
  getIndicatorClass: () => string;
  getLabelClass: () => string;
}

export const createChatStatusIndicatorStyles = <TOptions extends { size: string; status: string; showLabel: boolean }>(
  { size, status, showLabel }: TOptions,
  baseClasses?: Partial<ChatStatusIndicatorStyles>
): ChatStatusIndicatorStyles => {
  return {
    container: [
      'inline-flex items-center justify-center',
      showLabel ? 'space-x-2' : '',
      baseClasses?.container || ''
    ].join(' '),

    indicator: [
      'rounded-full',
      size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5',
      status === 'online' ? 'bg-[--color-success-500] ring-2 ring-[--color-success-200]' :
      status === 'away' ? 'bg-[--color-warning-500] ring-2 ring-[--color-warning-200]' :
      status === 'typing' ? 'bg-[--color-info-500] animate-pulse ring-2 ring-[--color-info-200]' :
      'bg-[--color-neutral-400] ring-2 ring-[--color-neutral-200]',
      baseClasses?.indicator || ''
    ].join(' '),

    label: [
      'text-xs',
      status === 'online' ? 'text-[--color-success-600]' :
      status === 'away' ? 'text-[--color-warning-600]' :
      status === 'typing' ? 'text-[--color-info-600]' :
      'text-[--color-text-secondary]',
      baseClasses?.label || ''
    ].join(' ')
  };
};