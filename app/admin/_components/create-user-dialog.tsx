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
import { IconLoader2, IconPlus, IconX } from "@tabler/icons-react";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email address"),
});

const toErrors = (errors: unknown[]) =>
  errors
    .filter((e) => e !== undefined && e !== null && e !== "")
    .map((e) => ({ message: typeof e === "string" ? e : String(e) }));

interface CreateUserDialogProps {
  onCreated: () => void;
}

export default function CreateUserDialog({ onCreated }: CreateUserDialogProps) {
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm({
    defaultValues: { name: "", email: "" },
    onSubmit: async ({ value }) => {
      setServerError(null);
      const { error } = await authClient.admin.createUser({
        name: value.name,
        email: value.email,
        password: crypto.randomUUID(),
        role: "user",
      });
      if (error) {
        setServerError(error.message ?? "Failed to create user.");
        return;
      }
      form.reset();
      setOpen(false);
      onCreated();
    },
  });

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} size="sm">
        <IconPlus className="size-4" />
        New user
      </Button>
    );
  }

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium">Create user</p>
          <button
            onClick={() => {
              setOpen(false);
              form.reset();
              setServerError(null);
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconX className="size-4" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              validators={{
                onBlur: ({ value }) => {
                  const result = schema.shape.name.safeParse(value);
                  return result.success
                    ? undefined
                    : result.error.issues[0].message;
                },
              }}
            >
              {(field) => (
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <FieldContent>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="Jane Doe"
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

            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) => {
                  const result = schema.shape.email.safeParse(value);
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
                      placeholder="jane@example.com"
                      autoComplete="off"
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
                  size="sm"
                >
                  {isSubmitting && (
                    <IconLoader2 className="size-4 animate-spin" />
                  )}
                  {isSubmitting ? "Creating…" : "Create user"}
                </Button>
              )}
            </form.Subscribe>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
