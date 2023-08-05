"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Define form schema
const schema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long.",
    })
    .max(50, { message: "Name must not be longer than 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(1000, { message: "Message must not be longer than 1000 characters." }),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Define form submission
  const onSubmit = async (values: z.infer<typeof schema>) => {
    setIsLoading(true);

    const formData = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    // Send form data to api/mail
    const requestPromise = fetch("api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // Create a promise that resolves after 1 second
    const response = new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    // Wait for either the request or the timeout to complete
    await Promise.race([requestPromise, response]);
    setIsLoading(false);

    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Name"
                    {...field}
                    className="bg-secondary xl:max-w-2xl w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Your Email"
                    {...field}
                    className="bg-secondary xl:max-w-2xl w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Message"
                    {...field}
                    className="bg-secondary xl:max-w-2xl xl:h-40 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className="xl:max-w-2xl w-full bg-softblue hover:bg-softblue hover:opacity-90"
          >
            {isLoading && (
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            )}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
