import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';
/**
 * ���� � ���������� ��� ���������� Rating
 */


/**
 * ������� ����� � ���������� ��������
 */

/**
 * ������ ��� ���������� Rating
 */
export interface SlotRating extends HTMLAttributes<HTMLDivElement> {
	/**
	 * ������� ������� (0-5)
	 * @default 0
	 */
	rating?: number;

	/**
	 * ������������ ���������� �����
	 * @default 5
	 */
	max?: number;

	/**
	 * ������ ��� ������ (��� ����������� ���������)
	 * @default false
	 */
	readonly?: boolean;

	/**
	 * ����������� ���������
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * ������ �����
	 * @default 'md'
	 */
	size?: TokenSize;

	/**
	 * �������������� CSS ������
	 */
	class?: string;

	/**
	 * ���������� ��������� ��������
	 */
	onRatingChange?: (rating: number) => void;
}
