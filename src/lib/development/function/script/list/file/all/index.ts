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

import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Recursively get all files from a directory
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

// CLI mode: run when executed directly
if (require.main === module) {
  const dirPath = process.argv[2];

  if (!dirPath) {
    console.error('Usage: npx ts-node index.ts <directory-path>');
    console.error('Example: npx ts-node index.ts D:\\2026\\code\\template\\stylist-svelte\\src\\lib\\development');
    process.exit(1);
  }

  try {
    const files = listFileAll(dirPath);
    console.log(JSON.stringify(files, null, 2));
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
}
