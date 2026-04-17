"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { IconLoader2, IconPlus, IconWorld, IconX } from "@tabler/icons-react";
import { formOptions, useForm } from "@tanstack/react-form";
import { PropsWithChildren, useEffect, useState } from "react";
import {
  inquiryDefualtValues,
  inquiryFormValidator,
} from "./inquiry.validation";
import { CountryMultiSelect } from "./country-select";
import { PhoneCodeSelect } from "./phone-code-select";

/** Normalise TanStack Form errors (string | unknown) to FieldError format. */
const toErrors = (errors: unknown[]) =>
  errors
    .filter((e) => e !== undefined && e !== null && e !== "")
    .map((e) => ({ message: typeof e === "string" ? e : String(e) }));

export default function InquiryForm() {
  const formOpts = formOptions({
    defaultValues: inquiryDefualtValues,
    validators: {
      onBlur: inquiryFormValidator,
    },
    onSubmit: async ({ value }) => {
      const res = await fetch("/api/v1/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry. Please try again.");
      }
    },
  });

  const form = useForm({ ...formOpts });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="space-y-4 **:[&>input]:text-sm">
        {/* ── Personal Info ─────────────────────────────────────── */}
        <Card>
          <CardContent>
            <FieldGroup className="mt-4">
              {/* Name */}
              <form.Field name="name">
                {(field) => (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <FieldContent>
                      <Input
                        name={field.name}
                        value={field.state.value}
                        placeholder="John Doe"
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

              {/* Phone Number */}
              <form.Field name="phoneNumber.code">
                {(codeField) => (
                  <form.Field name="phoneNumber.number">
                    {(numberField) => (
                      <Field>
                        <FieldLabel>Phone Number</FieldLabel>
                        <FieldContent>
                          <InputGroup>
                            <InputGroupAddon className="p-0">
                              <PhoneCodeSelect
                                value={codeField.state.value}
                                onChange={(isoCode) =>
                                  codeField.handleChange(isoCode)
                                }
                                onBlur={codeField.handleBlur}
                              />
                            </InputGroupAddon>
                            <InputGroupInput
                              placeholder="Enter your phone number"
                              value={numberField.state.value}
                              onChange={(e) =>
                                numberField.handleChange(e.target.value)
                              }
                              onBlur={numberField.handleBlur}
                            />
                          </InputGroup>
                          {codeField.state.meta.isTouched &&
                            codeField.state.meta.errors.length > 0 && (
                              <FieldError
                                errors={toErrors(codeField.state.meta.errors)}
                              />
                            )}
                          {numberField.state.meta.isTouched &&
                            numberField.state.meta.errors.length > 0 && (
                              <FieldError
                                errors={toErrors(numberField.state.meta.errors)}
                              />
                            )}
                        </FieldContent>
                      </Field>
                    )}
                  </form.Field>
                )}
              </form.Field>
            </FieldGroup>
          </CardContent>
        </Card>

        {/* ── Company Info ──────────────────────────────────────── */}
        <Card>
          <CardContent>
            <FieldGroup>
              {/* Brand Name */}
              <form.Field name="company.name">
                {(field) => (
                  <Field>
                    <FieldLabel>Brand Name</FieldLabel>
                    <FieldContent>
                      <Input
                        name={field.name}
                        value={field.state.value}
                        placeholder="Acme Corp."
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

              {/* Company Description */}
              <form.Field name="company.description">
                {(field) => (
                  <Field>
                    <FieldLabel>Company Description</FieldLabel>
                    <FieldContent>
                      <Textarea
                        name={field.name}
                        value={field.state.value}
                        placeholder="A brief description of your company"
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

              {/* Company Website */}
              <form.Field name="company.website">
                {(field) => (
                  <Field>
                    <FieldLabel>Company Website</FieldLabel>
                    <FieldContent>
                      <InputGroup>
                        <InputGroupAddon>
                          <IconWorld />
                        </InputGroupAddon>
                        <InputGroupInput
                          name={field.name}
                          value={field.state.value}
                          placeholder="https://www.acme.com"
                          onChange={(e) => field.handleChange(e.target.value)}
                          onBlur={field.handleBlur}
                        />
                      </InputGroup>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </FieldContent>
                  </Field>
                )}
              </form.Field>

              {/* Company Size */}
              <form.Field name="company.size">
                {(field) => (
                  <CustomField label="Company Size">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(
                            value as
                              | "just_me"
                              | "small"
                              | "medium"
                              | "enterprise",
                          );
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Company Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="just_me">Just me</SelectItem>
                          <SelectItem value="small">
                            Small (2–10 employees)
                          </SelectItem>
                          <SelectItem value="medium">
                            Medium (11–100 employees)
                          </SelectItem>
                          <SelectItem value="enterprise">
                            Enterprise (100+ employees)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>

              {/* Top Competitors */}
              <CustomField label="Top Competitors">
                <form.Field name="company.topCompetitors" mode="array">
                  {(field) => (
                    <AddOptionsField
                      onChange={(options) => field.handleChange(options)}
                    />
                  )}
                </form.Field>
              </CustomField>
            </FieldGroup>
          </CardContent>
        </Card>

        {/* ── Target Audience ───────────────────────────────────── */}
        <Card>
          <CardContent>
            <FieldGroup>
              {/* Age Group */}
              <form.Field name="targetAudience.ageGroup">
                {(field) => (
                  <CustomField label="Age Group">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(
                            value as
                              | "18-22"
                              | "23-30"
                              | "31-40"
                              | "41-50"
                              | "50+",
                          );
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Age Group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-22">18–22</SelectItem>
                          <SelectItem value="23-30">23–30</SelectItem>
                          <SelectItem value="31-40">31–40</SelectItem>
                          <SelectItem value="41-50">41–50</SelectItem>
                          <SelectItem value="50+">50+</SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>

              {/* Primary Gender */}
              <form.Field name="targetAudience.primaryGender">
                {(field) => (
                  <CustomField label="Primary Gender">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(value as "Male" | "Female");
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Primary Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>

              {/* Income Range */}
              <form.Field name="targetAudience.incomeRange">
                {(field) => (
                  <CustomField label="Income Range">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(
                            value as
                              | "<500$"
                              | "500$-2,500$"
                              | "2,500$-5,000$"
                              | "5,000$-10,000$"
                              | "10,000$+",
                          );
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Income Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<500$">
                            Under $500 / mo
                          </SelectItem>
                          <SelectItem value="500$-2,500$">
                            $500 – $2,500 / mo
                          </SelectItem>
                          <SelectItem value="2,500$-5,000$">
                            $2,500 – $5,000 / mo
                          </SelectItem>
                          <SelectItem value="5,000$-10,000$">
                            $5,000 – $10,000 / mo
                          </SelectItem>
                          <SelectItem value="10,000$+">
                            $10,000+ / mo
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>

              {/* Target Countries */}
              <form.Field name="targetAudience.country">
                {(field) => (
                  <CustomField label="Target Countries">
                    <>
                      <CountryMultiSelect
                        value={field.state.value}
                        onChange={(value) => field.handleChange(value)}
                        onBlur={field.handleBlur}
                      />
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>
            </FieldGroup>
          </CardContent>
        </Card>

        {/* ── Project Details ───────────────────────────────────── */}
        <Card>
          <CardContent>
            <FieldGroup>
              {/* Estimated Budget */}
              <form.Field name="estimatedBudget">
                {(field) => (
                  <CustomField label="Estimated Budget">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(
                            value as
                              | "500$-1000$"
                              | "1000$-2500$"
                              | "2500$-5000$"
                              | "5000$-8000$"
                              | "8000$+",
                          );
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500$-1000$">
                            $500 – $1,000
                          </SelectItem>
                          <SelectItem value="1000$-2500$">
                            $1,000 – $2,500
                          </SelectItem>
                          <SelectItem value="2500$-5000$">
                            $2,500 – $5,000
                          </SelectItem>
                          <SelectItem value="5000$-8000$">
                            $5,000 – $8,000
                          </SelectItem>
                          <SelectItem value="8000$+">$8,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>

              {/* Project Timeline */}
              <form.Field name="projectTimeline">
                {(field) => (
                  <CustomField label="Project Timeline">
                    <>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) => {
                          field.handleChange(
                            value as
                              | "<14 days"
                              | "15-45 days"
                              | "45-90 days"
                              | "90+ days",
                          );
                          field.handleBlur();
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<14 days">
                            Under 14 days
                          </SelectItem>
                          <SelectItem value="15-45 days">15–45 days</SelectItem>
                          <SelectItem value="45-90 days">45–90 days</SelectItem>
                          <SelectItem value="90+ days">90+ days</SelectItem>
                        </SelectContent>
                      </Select>
                      {field.state.meta.isTouched && (
                        <FieldError errors={toErrors(field.state.meta.errors)} />
                      )}
                    </>
                  </CustomField>
                )}
              </form.Field>
            </FieldGroup>
          </CardContent>
        </Card>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? <IconLoader2 className="animate-spin" /> : null}
              {isSubmitting ? "Submitting" : "Submit"} Inquiry
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}

function CustomField({
  children,
  label,
  description,
  className,
}: PropsWithChildren & {
  label?: string;
  className?: string;
  description?: string;
}) {
  return (
    <Field className={cn("", className)}>
      <FieldLabel>{label}</FieldLabel>
      <FieldContent>{children}</FieldContent>
      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

function AddOptionsField({
  onChange,
  name,
}: {
  onChange?: (options: string[]) => void;
  name?: string;
}) {
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    onChange?.(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <div className="w-full">
      <InputGroup className="w-full">
        <InputGroupInput
          name={name}
          value={inputValue}
          placeholder="Competitor Name"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <InputGroupButton
          onClick={() => {
            if (inputValue && !options.includes(inputValue)) {
              setOptions((prev) => [...prev, inputValue]);
              setInputValue("");
            }
          }}
          variant="default"
        >
          <IconPlus />
        </InputGroupButton>
      </InputGroup>
      <div className="flex flex-col gap-1 my-1">
        {options.map((option, index) => (
          <div
            key={option + index}
            className="flex items-center justify-between border rounded-md p-1"
          >
            <p>{option}</p>
            <Button
              variant="destructive"
              size="icon-xs"
              onClick={() => {
                setOptions((prev) => prev.filter((o) => o !== option));
              }}
            >
              <IconX />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
