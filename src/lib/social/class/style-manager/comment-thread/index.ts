import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class CommentThreadStyleManager {
	static getWrapperClass(hostClass = ''): string {
		return mergeClassNames('c-comment-thread', hostClass);
	}

	static getHeaderClass(headerClass = ''): string {
		return mergeClassNames('c-comment-thread__header', headerClass);
	}

	static getComposerInputClass(inputClass = ''): string {
		return mergeClassNames('c-comment-thread__input', inputClass);
	}

	static getCommentClass(commentClass = ''): string {
		return mergeClassNames('c-comment-thread__comment', commentClass);
	}

	static getReplyClass(replyClass = ''): string {
		return mergeClassNames('c-comment-thread__reply', replyClass);
	}

	static getActionButtonClass(active = false): string {
		return mergeClassNames(
			'c-comment-thread__action-btn',
			active && 'c-comment-thread__action-btn--active'
		);
	}
}
