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
      'text-xs text-[--color-text-secondary] whitespace-nowrap',
      baseClasses?.container || ''
    ].join(' ')
  };
};