/**
 * Менеджер стилей для компонента ButtonGroup
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента ButtonGroup
 */

import type { ButtonGroupOrientation } from './types';

export class ButtonGroupStyleManager {
  /**
   * Получает CSS-классы для контейнера группы кнопок
   */
  static getContainerClasses(
    orientation: ButtonGroupOrientation = 'horizontal',
    fullWidth: boolean = false,
    additionalClass: string = ''
  ): string {
    const baseClasses = 'inline-flex';
    
    const orientationClasses = orientation === 'horizontal' 
      ? 'flex-row divide-x divide-[--color-border-divider] rounded-md' 
      : 'flex-col divide-y divide-[--color-border-divider] rounded-md';
    
    const widthClasses = fullWidth ? 'w-full' : '';
    
    const allClasses = `${baseClasses} ${orientationClasses} ${widthClasses}`;
    return additionalClass ? allClasses.split(' ').filter(cls => cls).join(' ') + ` ${additionalClass}` 
      : allClasses.split(' ').filter(cls => cls).join(' ');
  }

  /**
   * Получает CSS-классы для отдельных кнопок в группе
   */
  static getButtonClasses(orientation: ButtonGroupOrientation = 'horizontal'): string {
    const baseClasses = 'not-first:rounded-none not-last:rounded-none';
    const orientationSpacing = orientation === 'horizontal' 
      ? 'not-first:ml-0' 
      : 'not-first:mt-0';
    
    return `${baseClasses} ${orientationSpacing}`;
  }
}