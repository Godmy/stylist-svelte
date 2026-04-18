export function commentThreadFormatDate(date: Date, locale?: string) {
  return date.toLocaleString(locale ?? [], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
