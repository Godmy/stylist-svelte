export interface ErrorMessageStyles {
  container: string;
  title: string;
  text: string;
  button: string;
  buttonContainer: string;
  [key: string]: string;
}

export interface ErrorMessageStyleManagerInterface {
  getContainerClass: () => string;
  getTitleClass: () => string;
  getTextClass: () => string;
  getButtonClass: () => string;
  getButtonContainerClass: () => string;
}

export const createErrorMessageStyles = <TOptions extends Record<string, unknown>>(
  _: TOptions,
  baseClasses?: Partial<ErrorMessageStyles>
): ErrorMessageStyles => {
  return {
    container: [
      'flex items-start gap-2 p-3 text-red-600 bg-red-50 rounded-lg border border-red-200',
      baseClasses?.container || ''
    ].join(' '),

    title: [
      'font-semibold text-red-700 mb-1',
      baseClasses?.title || ''
    ].join(' '),

    text: [
      'text-sm font-medium',
      baseClasses?.text || ''
    ].join(' '),

    button: [
      'mt-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
      baseClasses?.button || ''
    ].join(' '),

    buttonContainer: [
      'mt-2 flex justify-end',
      baseClasses?.buttonContainer || ''
    ].join(' ')
  };
};