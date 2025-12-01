export function dateToInputString(date: Date | undefined): string {
  return date ? date.toISOString().split('T')[0] : '';
}

export function inputStringToDate(dateString: string): Date | undefined {
  return dateString ? new Date(dateString) : undefined;
}
