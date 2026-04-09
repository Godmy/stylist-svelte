export interface LiteGraphPort {
  id: string;
  name?: string;
  type?: string;
  label?: string;
  dataType?: string;
  direction?: 'input' | 'output';
  index?: number;
}
