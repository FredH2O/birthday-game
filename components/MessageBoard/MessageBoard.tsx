"use client";

import { useEffect, useState } from "react";
import { addMessage, getMessages } from "@/lib/messageService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  content: string;
  sender: string;
  created_at: string;
};

const MessageBoard = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    content: z.string().min(1, { message: "Message cannot be empty." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await addMessage({
        content: values.content,
        sender: values.username,
      });

      form.reset({
        username: "",
        content: "",
      });

      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error("Could not send message", error);
    }
  };

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error("Could not load messages", error);
      }
    };
    loadMessages();
  }, []);

  return (
    <div className="max-w-xl mx-auto space-y-6 p-4 bg-pink-50 rounded-xl shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="What's your name?"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a birthday message!"
                    className="w-full p-2 border rounded"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">🎉 Send Birthday Message 🎉</Button>
        </form>
      </Form>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-pink-100"
          >
            <p className="text-gray-700">“{msg.content}”</p>
            <p className="text-sm text-gray-500 mt-2">
              — {msg.sender || "Anonymous"},{" "}
              {new Date(msg.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
