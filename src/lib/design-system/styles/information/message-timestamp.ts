export interface MessageTimestampStyles {
  container: string;
  [key: string]: string;
}

export interface MessageTimestampStyleManagerInterface {
  getContainerClass: () => string;
}

export const createMessageTimestampStyles = <TOptions extends Record<string, unknown>>(
  _: TOptions,
  baseClasses?: Partial<MessageTimestampStyles>
): MessageTimestampStyles => {
  return {
    container: [
      'text-xs text-gray-500 whitespace-nowrap',
      baseClasses?.container || ''
    ].join(' ')
  };
};