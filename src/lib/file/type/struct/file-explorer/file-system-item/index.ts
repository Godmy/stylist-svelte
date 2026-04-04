import type { FileType } from '$stylist/file/type/struct/file-explorer/file-type';

// FileSystemItem type
export type FileSystemItem = {
  id: string;
  name: string;
  type: FileType;
  size?: number;
  modified?: Date;
  created?: Date;
  children?: FileSystemItem[];
  path?: string;
  icon?: string;
};
