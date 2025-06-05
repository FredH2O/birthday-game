// app/page.tsx or app/messages/page.tsx

import MessageBoard from "@/components/MessageBoard/MessageBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎈 Leave a Message for Amber 🎈
      </h1>
      <MessageBoard />
    </main>
  );
}
