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
      status === 'online' ? 'bg-green-500 ring-2 ring-green-200' :
      status === 'away' ? 'bg-yellow-500 ring-2 ring-yellow-200' :
      status === 'typing' ? 'bg-blue-500 animate-pulse ring-2 ring-blue-200' :
      'bg-gray-400 ring-2 ring-gray-200',
      baseClasses?.indicator || ''
    ].join(' '),

    label: [
      'text-xs',
      status === 'online' ? 'text-green-600' :
      status === 'away' ? 'text-yellow-600' :
      status === 'typing' ? 'text-blue-600' :
      'text-gray-500',
      baseClasses?.label || ''
    ].join(' ')
  };
};