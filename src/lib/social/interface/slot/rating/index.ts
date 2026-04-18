/**
 * ���� � ���������� ��� ���������� Rating
 */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';

/**
 * ������� ����� � ���������� ��������
 */

/**
 * ������ ��� ���������� Rating
 */
export interface SlotRating extends InteractionHTMLAttributes<HTMLDivElement> {
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
