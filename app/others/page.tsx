"use client";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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

// How to improve the SEO here?
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Contact Form | PlanWed",
//     description: "OneStop for the Memories!",
//   };
  


const ContactForm = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be atleast 2 characters" })
      .max(50),

    subject: z
      .string()
      .min(20, { message: "Subject should be more than 20 words atleast." }),

    message: z
      .string()
      .min(20, { message: "Message should have 20 words atleast." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert("Your form has been submitted!")
  }
  return (
    <div>
      <div className="text-3xl text-center pt-3">Contact Form</div>
      <div className="p-6 rounded-xl mt-12 w-[600px] m-auto bg-gray-200 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter you username" {...field} />
                  </FormControl>
                  <FormDescription>Enter your username here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Please enter the subject" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the subject for which you are writing the mail
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="outline-none w-full h-[200px] rounded-md p-2"
                      placeholder="Please enter the subject"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter your message in an elaborative fashion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;