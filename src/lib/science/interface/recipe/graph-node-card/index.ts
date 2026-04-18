import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { Snippet } from 'svelte';

export interface GraphNodeCardRecipe extends StructIntersectAll<[]> {
  id?: string;
  name?: string;
  type?: string;
  description?: string;
  fields?: { name: string; type: string; isRequired?: boolean }[];
  class?: string;
  children?: Snippet;
}
