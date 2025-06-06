"use client";

import { useEffect, useState } from "react";
import { addMessage, getMessages } from "@/lib/messageService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/neobrutalism-ui/button";
import { Textarea } from "@/components/neobrutalism-ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/neobrutalism-ui/form";
import { Input } from "@/components/neobrutalism-ui/input";
import Loading from "../Loading/Loading";

type Message = {
  id: string;
  content: string;
  sender: string;
  created_at: string;
};

const MessageBoard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    content: z.string().min(1, { message: "Message cannot be empty." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      await addMessage({
        content: values.content,
        sender: values.name,
      });

      form.reset({
        name: "",
        content: "",
      });

      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error("Could not send message", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);

      try {
        const data = await getMessages();
        setMessages(data);
        setLoading(false);
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
            name="name"
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
                    placeholder="Write a birthday message for Amber!"
                    className="w-full p-2 border rounded"
                    rows={3}
                    maxLength={100}
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
        {loading && <Loading />}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white max-w-sm md:max-w-lg p-4 rounded-lg shadow-sm border border-pink-100"
          >
            <div className="bg-pink-50 p-3 text-center rounded">
              <p className="text-gray-700 break-words whitespace-pre-line">
                “{msg.content}”
              </p>
            </div>

            <p className="text-xs font-bold text-gray-500 mt-2">
              —{" "}
              <span className="italic">
                {msg.sender.charAt(0).toUpperCase() + msg.sender.slice(1) ||
                  "Anonymous"}
              </span>
              , {new Date(msg.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
