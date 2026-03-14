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
