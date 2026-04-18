export class SettingsStyleManager {
  static container(base: string, className?: string): string {
    return `${base} space-y-6 ${className || ''}`.trim();
  }

  static section(base: string, className?: string): string {
    return `${base} border rounded-lg p-6 ${className || ''}`.trim();
  }

  static header(base: string, className?: string): string {
    return `${base} text-lg font-semibold mb-4 ${className || ''}`.trim();
  }

  static description(base: string, className?: string): string {
    return `${base} text-sm text-[--color-text-secondary] mb-4 ${className || ''}`.trim();
  }

  static formGroup(base: string, className?: string): string {
    return `${base} space-y-4 ${className || ''}`.trim();
  }

  static toggleRow(base: string, className?: string): string {
    return `${base} flex items-center justify-between py-3 ${className || ''}`.trim();
  }

  static toggleLabel(base: string, className?: string): string {
    return `${base} flex flex-col ${className || ''}`.trim();
  }

  static toggleDescription(base: string, className?: string): string {
    return `${base} text-sm text-[var(--color-text-secondary)] ${className || ''}`.trim();
  }
}
