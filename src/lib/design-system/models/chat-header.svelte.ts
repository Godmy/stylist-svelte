import type { ChatHeaderUser, ChatHeaderChat, ChatHeaderProps } from '../props/chat-header';

export class ChatHeaderModel {
  isGroupChat = $state(false);
  otherUser: ChatHeaderUser | null = $state(null);
  
  constructor(props: ChatHeaderProps) {
    this.updateFromProps(props);
  }
  
  updateFromProps(props: ChatHeaderProps) {
    this.isGroupChat = props.chat.participants.length > 2;
    
    if (!this.isGroupChat) {
      this.otherUser = props.chat.participants.find(
        (user: ChatHeaderUser) => user.id !== props.currentUser.id
      ) || null;
    } else {
      this.otherUser = null;
    }
  }
  
  handleCall = (chat: ChatHeaderChat, dispatch: (event: string, detail: any) => void) => {
    dispatch('call', { chat });
  };

  handleVideoCall = (chat: ChatHeaderChat, dispatch: (event: string, detail: any) => void) => {
    dispatch('videoCall', { chat });
  };

  handleInfo = (chat: ChatHeaderChat, dispatch: (event: string, detail: any) => void) => {
    dispatch('info', { chat });
  };
}

export default ChatHeaderModel;