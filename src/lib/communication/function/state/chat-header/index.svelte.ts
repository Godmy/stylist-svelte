import type { User } from '$stylist/communication/interface/component/chat/other';
import { ChatHeaderStyleManager } from '$stylist/communication/class/style-manager/chat-header';

export type ChatHeaderChat = {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  avatar?: string;
};

export type ChatHeaderOrganismProps = {
  chat: ChatHeaderChat;
  currentUser: User;
  showActions?: boolean;
  class?: string;
  onCall?: () => void;
  onVideoCall?: () => void;
  onInfo?: () => void;
};

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
