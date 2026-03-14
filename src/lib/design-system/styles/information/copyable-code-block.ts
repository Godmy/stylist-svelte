import { cn } from '../../utils/cn/index';
import { CodeStyleManager } from './code-block';

export class CopyableCodeStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-copyable-code-block', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getHeaderClass(extraClasses = ''): string {
		return cn(CodeStyleManager.getHeaderBaseClasses(), extraClasses);
	}

	static getRelativeContainerClass(): string {
		return 'relative';
	}

	static getPreClass(extraClasses = ''): string {
		return cn(CodeStyleManager.getPreBaseClasses(), 'max-w-full overflow-x-auto', extraClasses);
	}

	static getCopyButtonContainerClass(): string {
		return CodeStyleManager.getCopyButtonContainerClass();
	}

	static getIconClass(isCopied: boolean): string {
		return cn(CodeStyleManager.getIconBaseClasses(), isCopied ? 'text-[var(--color-success-600)]' : '');
	}
}

