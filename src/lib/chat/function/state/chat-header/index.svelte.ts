import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import { ChatHeaderStyleManager } from '$stylist/chat/class/style-manager/chat-header';
import type { ChatHeaderOrganismProps } from '$stylist/chat/type/alias/chat-header-organism-props';

export const createChatHeaderState = (props: ChatHeaderOrganismProps) => {
  const chat = $derived(props.chat);
  const currentUser = $derived(props.currentUser);
  const showActions = $derived(props.showActions ?? true);
  const className = $derived(props.class ?? '');

  const isGroupChat = $derived(chat.participants.length > 2);

  const otherUser = $derived(
    !isGroupChat ? chat.participants.find((u: User) => u.id !== currentUser.id) : null
  ) as User | null;

  const containerClasses = $derived(ChatHeaderStyleManager.getAllClasses(className));
  const infoClasses = $derived(ChatHeaderStyleManager.getInfoClasses());
  const detailsClasses = $derived(ChatHeaderStyleManager.getDetailsClasses());
  const nameClasses = $derived(ChatHeaderStyleManager.getNameClasses());
  const actionsClasses = $derived(ChatHeaderStyleManager.getActionsClasses());

  function handleCall() {
    props.onCall?.();
  }

  function handleVideoCall() {
    props.onVideoCall?.();
  }

  function handleInfo() {
    props.onInfo?.();
  }

  return {
    get isGroupChat() {
      return isGroupChat;
    },
    get otherUser() {
      return otherUser;
    },
    get containerClasses() {
      return containerClasses;
    },
    get infoClasses() {
      return infoClasses;
    },
    get detailsClasses() {
      return detailsClasses;
    },
    get nameClasses() {
      return nameClasses;
    },
    get actionsClasses() {
      return actionsClasses;
    },
    get showActions() {
      return showActions;
    },
    get chat() {
      return chat;
    },
    get currentUser() {
      return currentUser;
    },
    handleCall,
    handleVideoCall,
    handleInfo
  };
};

export default createChatHeaderState;
