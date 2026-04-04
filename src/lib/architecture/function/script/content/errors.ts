export class ContentLoadError extends Error {
  public readonly source: string;

  public constructor(source: string, message: string) {
    super(message);
    this.name = 'ContentLoadError';
    this.source = source;
  }
}

export function assertObject(value: unknown, source: string): asserts value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new ContentLoadError(source, 'Expected object JSON payload');
  }
}
