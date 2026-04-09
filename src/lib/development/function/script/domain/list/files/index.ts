/**
 * List all files in a given domain under stylist-svelte/src/lib/<domain>
 *
 * Usage:
 *   - As module: `domainListFile('development')`
 *   - As CLI: `npx ts-node index.ts <domain-name>`
 *
 * @param domain - The domain name (e.g., 'development', 'architecture', 'theme')
 * @returns Array of absolute file paths in the domain
 */

import { existsSync } from 'fs';
import { join, resolve } from 'path';
import { listFileAll } from '../../../list/file/all';

/**
 * Get all files in a domain under src/lib/<domain>
 *
 * @param domain - Domain name (e.g., 'development')
 * @returns Array of absolute file paths
 */
export function domainListFile(domain: string): string[] {
  // Go up from this file's location to reach stylist-svelte/src/lib/<domain>
  // Current file: stylist-svelte/src/lib/development/function/script/domain/list/files/index.ts
  const libPath = resolve(__dirname, '../../../../../../..');
  const domainPath = join(libPath, domain);

  if (!existsSync(domainPath)) {
    throw new Error(`Domain "${domain}" not found at: ${domainPath}`);
  }

  return listFileAll(domainPath);
}

// CLI mode: run when executed directly
if (require.main === module) {
  const domain = process.argv[2];

  if (!domain) {
    console.error('Usage: npx ts-node index.ts <domain-name>');
    console.error('Example: npx ts-node index.ts development');
    process.exit(1);
  }

  try {
    const files = domainListFile(domain);
    console.log(JSON.stringify(files, null, 2));
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
}
