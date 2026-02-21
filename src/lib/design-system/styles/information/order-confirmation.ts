export class OrderConfirmationStyleManager {
  static getBaseClasses(hostClass: string = ''): string {
    return `bg-[--color-background-primary] ${hostClass}`.trim();
  }

  static getContainerClasses(): string { return 'max-w-5xl mx-auto p-6'; }
  static getHeaderClasses(headerClass: string = ''): string { return `mt-6 text-3xl font-semibold text-[--color-text-primary] ${headerClass}`.trim(); }
  static getOrderContainerClasses(): string { return 'bg-white border border-gray-200 rounded-lg overflow-hidden'; }
  static getOrderHeaderClasses(): string { return 'p-6 border-b border-gray-200'; }
  static getOrderContentClasses(): string { return 'p-6'; }
  static getMainGridClasses(): string { return 'grid grid-cols-1 md:grid-cols-3 gap-6'; }
  static getOrderDetailsClasses(summaryClass: string = ''): string { return `bg-gray-50 rounded-lg p-4 ${summaryClass}`.trim(); }
  static getShippingAddressClasses(addressClass: string = ''): string { return `rounded-lg border border-gray-200 p-4 ${addressClass}`.trim(); }
  static getActionButtonsClasses(actionsClass: string = ''): string { return `mt-8 flex flex-wrap gap-3 ${actionsClass}`.trim(); }

  static getOrderStatusClasses(status: 'processing' | 'shipped' | 'delivered' | 'cancelled'): string {
    if (status === 'shipped') return 'bg-blue-100 text-blue-800';
    if (status === 'delivered') return 'bg-green-100 text-green-800';
    if (status === 'cancelled') return 'bg-red-100 text-red-800';
    return 'bg-amber-100 text-amber-800';
  }

  static getPaymentStatusClasses(status: 'paid' | 'pending' | 'failed'): string {
    if (status === 'paid') return 'bg-green-100 text-green-800';
    if (status === 'pending') return 'bg-amber-100 text-amber-800';
    return 'bg-red-100 text-red-800';
  }
}
