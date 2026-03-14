import { ChatHeaderModel as ChatHeaderModelClass } from '../../classes/interaction/chat-header';

export function ChatHeaderModel(
	...args: ConstructorParameters<typeof ChatHeaderModelClass>
): InstanceType<typeof ChatHeaderModelClass> {
	return new ChatHeaderModelClass(...args);
}

export default ChatHeaderModel;


