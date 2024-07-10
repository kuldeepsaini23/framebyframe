"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNo: z.string().optional(),
});

export function BookForm() {
  const { reset } = useForm();
  const { toast } = useToast();

  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
    },
  });

  useEffect(() => {
    const submissionTime = localStorage.getItem("submissionTime");
    if (submissionTime) {
      const elapsedTime = Date.now() - parseInt(submissionTime, 10);
      if (elapsedTime < 12 * 60 * 60 * 1000) { // 12 hours in milliseconds
        setCanSubmit(false);
        setTimeout(() => {
          setCanSubmit(true);
        }, 12 * 60 * 60 * 1000 - elapsedTime);
      }
    }
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setSubmitting(true);
      setLoading(true);
      const res = await fetch("/api/book-call", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast({ title: "Form submitted successfully." });
        localStorage.setItem("submissionTime", Date.now().toString());
        reset({
          name: "",
          email: "",
          phoneNo: "",
        });
        setCanSubmit(false);
        setTimeout(() => {
          setCanSubmit(true);
        }, 12 * 60 * 60 * 1000); // 12 hours in milliseconds
      } else {
        throw new Error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast({ title: "Try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No.</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Phone No" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!canSubmit || loading || submitting}
          className="bg-[#FE4433] text-white hover:bg-red-600 w-full"
        >
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : !canSubmit ? (
            "Submit After 12 hours"
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
