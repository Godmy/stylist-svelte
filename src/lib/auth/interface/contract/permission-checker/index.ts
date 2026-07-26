import type { Permission } from '$stylist/auth/type/object/permission';
import type { Role } from '$stylist/auth/type/object/role';

export interface IPermissionChecker {
	hasPermission(resource: string, action: string): boolean;
	hasRole(roleName: string): boolean;
	hasAnyRole(roleNames: string[]): boolean;
	hasAllRoles(roleNames: string[]): boolean;
	canAccess(resource: string, action: string, scope?: string): boolean;
	getRoles(): Role[];
	getPermissions(): Permission[];
}
