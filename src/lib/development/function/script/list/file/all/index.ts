// Use dynamic imports for Node.js modules to prevent Vite from failing in browser builds
let fs: any = null;
let path: any = null;

async function initNodeModules() {
  if (typeof window === 'undefined' && !fs) {
    fs = await import('fs');
    path = await import('path');
  }
}

/**
 * Recursively collect all file paths from a directory
 * Note: This function only works in Node.js environment
 *
 * @param dirPath - Absolute path to directory
 * @returns Array of absolute file paths
 */
export function listFileAll(dirPath: string): string[] {
  // Synchronous version for CLI/Server use
  // We use require here as a fallback if dynamic import is not suitable for sync function
  // In a real browser environment this function will return an empty array
  
  if (typeof window !== 'undefined') {
    return [];
  }

  // Use standard require for sync execution in Node
  const nodeFs = require('fs');
  const nodePath = require('path');

  const files: string[] = [];

  if (!nodeFs.existsSync(dirPath)) {
    return files;
  }

  const entries = nodeFs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = nodePath.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...listFileAll(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}
