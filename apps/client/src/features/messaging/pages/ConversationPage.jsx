import { useParams } from "react-router-dom";

export default function ConversationPage() {
  const { conversationId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Conversation</h1>

      <p className="mt-2 text-muted-foreground">
        Chat with other CampusNest users about accommodation and roommate posts.
      </p>

      <p className="mt-4 text-xs text-muted-foreground">
        Conversation ID: {conversationId}
      </p>
    </div>
  );
}
