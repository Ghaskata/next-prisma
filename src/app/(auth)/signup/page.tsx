"use client";
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
import { handleSignup } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { signupSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SignUp = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
  });
  const { isSubmitting } = form.formState;
  async function onSubmit(values: z.infer<typeof signupSchema>) {
    const toastId = toast.loading("Creating your account, please wait...");
    try {
      const data = await handleSignup(values);
      toast.success(data.message, { id: toastId });
      router.push("/signin");
    } catch (error: any) {
      // toast.dismiss(toastId);
      toast.error(error?.message || "Network response was not ok", {
        id: toastId,
      });
    }
  }

  return (
    <div className="max-w-md w-full my-auto mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <div className="w-full flex justify-center items-center pb-4">
        <img src={"/logo.svg"} />
      </div>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to PST
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-1 dark:text-neutral-300">
        Login to PST if you can because we don&apos;t have a login flow yet
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-5">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              control={form.control}
              name="fname"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        id="firstname"
                        placeholder="Tyler"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  </LabelInputContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lname"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input
                        id="lastname"
                        placeholder="Swift"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  </LabelInputContainer>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <LabelInputContainer>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="tyler@ts.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </LabelInputContainer>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <LabelInputContainer>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      placeholder="••••••••"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </LabelInputContainer>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <Button
              type="button"
              className="relative group/btn rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            >
              <IconBrandGithub className="h-4 w-4 " />
              GitHub
              <BottomGradient />
            </Button>
            <Button
              type="button"
              className="relative group/btn rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
            >
              <IconBrandGoogle className="h-4 w-4 " />
              Google
              <BottomGradient />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
