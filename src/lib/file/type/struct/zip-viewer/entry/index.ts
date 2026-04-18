import type { ZipEntryType } from '$stylist/file/type/struct/zip-viewer/entry-type';

// SlotZipEntry type
export type SlotZipEntry = {
  id: string;
  name: string;
  type: ZipEntryType;
  size?: number; // in bytes
  compressedSize?: number;
  modified?: Date;
  isText?: boolean; // Is it a text file that can be viewed
  path: string;
  parentPath?: string;
};
