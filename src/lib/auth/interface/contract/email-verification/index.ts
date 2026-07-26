import type { AuthResult } from '$stylist/auth/type/object/auth-result';
import type { EmailVerification } from '$stylist/auth/type/object/email-verification';
import type { MessageResponse } from '$stylist/auth/type/object/message-response';

export interface IEmailVerification {
	verifyEmail(data: EmailVerification): Promise<AuthResult<MessageResponse>>;
	resendVerificationEmail(email: string): Promise<AuthResult<MessageResponse>>;
}
