export interface BurgerMenuStyles {
  container: string;
  icon: string;
  line: string;
  size?: string;
  open?: boolean;
  [key: string]: string | boolean | undefined;
}

export interface BurgerMenuStyleManagerInterface {
  getContainerClass: () => string;
  getIconClass: () => string;
  getLineClass: () => string;
}
