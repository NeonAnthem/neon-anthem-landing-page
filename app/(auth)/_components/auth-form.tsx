"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/utils/auth-client";
import { IconLoader2, IconMailFilled } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z.email("Please enter a valid email address");

const toErrors = (errors: unknown[]) =>
  errors
    .filter((e) => e !== undefined && e !== null && e !== "")
    .map((e) => ({ message: typeof e === "string" ? e : String(e) }));

interface AuthFormProps {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const isLogin = mode === "login";

  const form = useForm({
    defaultValues: { email: "" },
    onSubmit: async ({ value }) => {
      setServerError(null);
      const { error } = await authClient.signIn.magicLink({
        email: value.email,
        callbackURL: "/admin",
      });
      if (error) {
        setServerError(
          error.message ?? "Something went wrong. Please try again.",
        );
        return;
      }
      router.push("/validating-auth");
    },
  });

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isLogin ? "Welcome back" : "Create an account"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isLogin
            ? "Enter your email to receive a sign-in link."
            : "Enter your email to get started."}
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                validators={{
                  onBlur: ({ value }) => {
                    const result = emailSchema.safeParse(value);
                    return result.success
                      ? undefined
                      : result.error.issues[0].message;
                  },
                }}
              >
                {(field) => (
                  <Field>
                    <FieldLabel>Email address</FieldLabel>
                    <FieldContent>
                      <Input
                        type="email"
                        name={field.name}
                        value={field.state.value}
                        placeholder="you@example.com"
                        autoComplete="email"
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              </form.Field>

              {serverError && (
                <p className="text-sm text-destructive">{serverError}</p>
              )}

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!canSubmit || isSubmitting}
                  >
                    {isSubmitting ? (
                      <IconLoader2 className="animate-spin" />
                    ) : (
                      <IconMailFilled />
                    )}
                    {isSubmitting
                      ? "Sending link…"
                      : isLogin
                        ? "Send sign-in link"
                        : "Send sign-up link"}
                  </Button>
                )}
              </form.Subscribe>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/signup" : "/login"}
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
