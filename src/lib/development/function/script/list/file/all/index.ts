import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Recursively collect all file paths from a directory
 *
 * Usage:
 *   - As module: `listFileAll('/path/to/dir')`
 *   - As CLI: `npx ts-node index.ts /path/to/dir`
 *
 * @param dirPath - Absolute path to directory
 * @returns Array of absolute file paths
 */
export function listFileAll(dirPath: string): string[] {
  const files: string[] = [];

  if (!existsSync(dirPath)) {
    return files;
  }

  const entries = readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...listFileAll(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}
