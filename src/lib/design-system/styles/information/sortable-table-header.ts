export interface SortableTableHeaderStyles {
  container: string;
  content: string;
  icon: string;
  [key: string]: string;
}

export interface SortableTableHeaderStyleManagerInterface {
  getContainerClass: () => string;
  getContentClass: () => string;
  getIconClass: () => string;
}
