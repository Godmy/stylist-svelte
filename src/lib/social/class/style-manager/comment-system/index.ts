import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class CommentSystemStyleManager {
	static getWrapperClass(hostClass = ''): string {
		return mergeClassNames('c-comment-system', hostClass);
	}

	static getCardClass(): string {
		return 'c-comment-system__card';
	}

	static getComposerClass(formClass = ''): string {
		return mergeClassNames('c-comment-system__composer', formClass);
	}

	static getInputClass(inputClass = ''): string {
		return mergeClassNames('c-comment-system__input', inputClass);
	}

	static getHeaderClass(headerClass = ''): string {
		return mergeClassNames('c-comment-system__header', headerClass);
	}

	static getCommentItemClass(commentClass = '', depth = 0): string {
		return mergeClassNames(
			'c-comment-system__item',
			depth > 0 && 'c-comment-system__item--nested',
			commentClass
		);
	}

	static getActionsClass(actionsClass = ''): string {
		return mergeClassNames('c-comment-system__actions', actionsClass);
	}

	static getPrimaryButtonClass(buttonClass = ''): string {
		return mergeClassNames('c-comment-system__submit-btn', buttonClass);
	}
}
