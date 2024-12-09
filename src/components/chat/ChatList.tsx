import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatItem } from "@/components/chat/ChatItem";

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  avatar?: string;
  isOnline?: boolean;
}

interface ChatListProps {
  chats: Chat[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export function ChatList({ chats, selectedId, onSelect }: ChatListProps) {
  return (
    <ScrollArea className="h-full">
      <div className="jun-sidebarContainer jun-sidebarContainer-shrink-[200px] jun-sidebarMenu flex flex-col gap-1 p-2">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={chat.id === selectedId}
            onClick={() => onSelect?.(chat.id)}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
