export interface MessageTimestampStyles {
  container: string;
  [key: string]: string;
}

export interface MessageTimestampStyleManagerInterface {
  getContainerClass: () => string;
}
