import type { HTMLAttributes } from 'svelte/elements';
import type { PaymentMethodType } from '../../tokens/interaction/payment-methods';
import type { PaymentStatus } from '../../tokens/interaction/statuses';

import type { PaymentMethod, PaymentSummaryDiscount, PaymentSummaryItem, PaymentSummaryTax } from '../../types/interaction/payment-controls';
export interface PaymentInfoProps extends HTMLAttributes<HTMLDivElement> {
  paymentMethods: PaymentMethod[];
  acceptedCards?: string[];
  showMethods?: boolean;
  showSecurityInfo?: boolean;
  showAcceptedCards?: boolean;
  showFees?: boolean;
  showProcessingTime?: boolean;
  class?: string;
  onMethodSelect?: (method: PaymentMethod) => void;
}

export interface PaymentMethodSelectorProps extends HTMLAttributes<HTMLDivElement> {
  methods: PaymentMethod[];
  selectedMethod?: string;
  class?: string;
  onMethodSelect?: (method: PaymentMethod) => void;
  onMethodAdd?: () => void;
  onMethodEdit?: (method: PaymentMethod) => void;
  onMethodRemove?: (methodId: string) => void;
  onMethodSetDefault?: (methodId: string) => void;
  showAddButton?: boolean;
  showEditButton?: boolean;
  showRemoveButton?: boolean;
  showSetDefaultButton?: boolean;
  disabled?: boolean;
}

export interface PaymentSelectorProps extends HTMLAttributes<HTMLDivElement> {
  methods: PaymentMethod[];
  selectedMethod?: string;
  showAddButton?: boolean;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  showSetDefault?: boolean;
  title?: string;
  subtitle?: string;
  class?: string;
  onSelect?: (id: string) => void;
  onAdd?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onSetDefault?: (id: string) => void;
}

export interface PaymentSummaryProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  items: PaymentSummaryItem[];
  discounts?: PaymentSummaryDiscount[];
  taxes?: PaymentSummaryTax[];
  total: number;
  currency?: string;
  paymentMethod?: string;
  transactionId?: string;
  date?: Date;
  status?: PaymentStatus;
  class?: string;
}


