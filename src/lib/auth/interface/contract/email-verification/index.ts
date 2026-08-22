import type { AuthResult } from '$stylist/auth/type/object/auth-result';
import type { MessageResponse } from '$stylist/auth/type/object/message-response';
export interface IEmailVerification {
	verifyEmail(data: { token: string }): Promise<AuthResult<MessageResponse>>;
	resendVerificationEmail(email: string): Promise<AuthResult<MessageResponse>>;
}
