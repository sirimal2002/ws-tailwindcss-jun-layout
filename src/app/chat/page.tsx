"use client";
import { ChatList } from "@/components/chat/ChatList";
import { Input } from "@/components/chat/Input";
import { createMockChats } from "./_data/mock-chats";
import { createMockMessages } from "./_data/mock-messages";
import { createMockSettings } from "./_data/mock-settings";
import { Conversation } from "@/components/chat/Conversation";
import { ChatSetting } from "@/components/chat/ChatSetting";
import { Button } from "@/components/ui/button";
import { UserPlus, MoreVertical } from "lucide-react";

// Create mock data once
const mockChats = createMockChats();
const mockMessages = createMockMessages();
const mockSettings = createMockSettings();

export default function ChatPage() {
  return (
    <div className="jun-layout">
      <header className="jun-header flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Messages</h1>
          <span className="text-sm text-muted-foreground">
            {mockChats.length} conversations
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <UserPlus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <aside className="jun-edgeSidebar">
        <div className="jun-edgeContent">
          <ChatList
            chats={mockChats}
            onSelect={(id) => console.log("Selected chat:", id)}
          />
        </div>
      </aside>

      <main className="jun-content">
        <Conversation messages={mockMessages} />
      </main>

      <aside className="jun-edgeSidebar jun-edgeSidebarR">
        <div className="jun-edgeContent">
          <ChatSetting
            participant={mockSettings.participant}
            sharedMedia={mockSettings.sharedMedia}
          />
        </div>
      </aside>

      <div className="jun-footer">
        <Input onSend={(message) => console.log("Sent message:", message)} />
      </div>
    </div>
  );
}
