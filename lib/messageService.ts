import { supabase } from "./supabaseClient";

type MessageProps = {
  content: string;
  sender?: string;
};

export const addMessage = async ({ content, sender }: MessageProps) => {
  const { data, error } = await supabase.from("birthday_messages").insert([
    {
      content,
      sender: sender || "Random Cool Person!",
    },
  ]);

  if (error) {
    console.error("Error adding message.", error.message);
    throw new Error("Error adding the message.");
  }
  return data;
};

export const getMessage = async () => {
  const { data, error } = await supabase
    .from("birthday_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages", error.message);
    throw new Error(error.message);
  }

  return data;
};
