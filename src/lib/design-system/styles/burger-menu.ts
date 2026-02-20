export interface BurgerMenuStyles {
  container: string;
  icon: string;
  line: string;
  [key: string]: string;
}

export interface BurgerMenuStyleManagerInterface {
  getContainerClass: () => string;
  getIconClass: () => string;
  getLineClass: () => string;
}

export const createBurgerMenuStyles = <TOptions extends { size: string; open: boolean }>(
  { size, open }: TOptions,
  baseClasses?: Partial<BurgerMenuStyles>
): BurgerMenuStyles => {
  return {
    container: [
      'relative flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded',
      baseClasses?.container || ''
    ].join(' '),

    icon: [
      size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-7 w-7' : 'h-6 w-6',
      baseClasses?.icon || ''
    ].join(' '),

    line: [
      'absolute block h-0.5 w-6 rounded bg-current transition-all duration-300 ease-in-out',
      baseClasses?.line || ''
    ].join(' ')
  };
};