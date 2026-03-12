export type FileType = 'file' | 'folder';

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

export type ViewMode = 'list' | 'grid';

