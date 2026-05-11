import { DOMAIN_SCREEN_BACKLOG } from '$stylist/domain/const/value/domain-screen-backlog';
import { DOMAIN_SCREEN_DIAGNOSTICS } from '$stylist/domain/const/value/domain-screen-diagnostics';
import { DOMAIN_SCREEN_DOMAIN } from '$stylist/domain/const/value/domain-screen-domain';
import { DOMAIN_SCREEN_LANDING } from '$stylist/domain/const/value/domain-screen-landing';

export const DOMAIN_SCREEN_VALUES = [
	DOMAIN_SCREEN_LANDING,
	DOMAIN_SCREEN_DOMAIN,
	DOMAIN_SCREEN_BACKLOG,
	DOMAIN_SCREEN_DIAGNOSTICS
] as const;
