// app/page.tsx or app/messages/page.tsx

import MessageBoard from "@/components/MessageBoard/MessageBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-5 max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center break-words px-10 py-3">
        🎂 Birthday Messages Wall🎈
      </h1>
      <MessageBoard />
    </main>
  );
}
