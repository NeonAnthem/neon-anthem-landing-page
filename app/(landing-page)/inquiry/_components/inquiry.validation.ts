import z from "zod";

export const inquiryFormValidator = z.object({
  name: z.string().min(2, "Please Enter a name"),
  phoneNumber: z.object({
    code: z.string().min(2, "Please select a country code").max(2),
    number: z.string().min(6, "Please enter a valid phone number"),
  }),
  email: z.email("Please enter a valid email address"),
  company: z.object({
    name: z.string().min(2, "Company Name too short"),
    size: z.union([
      z.literal("just_me"),
      z.literal("small"),
      z.literal("medium"),
      z.literal("enterprise"),
    ]),
    website: z.httpUrl(),
    description: z.string(),
    topCompetitors: z.array(z.string()),
  }),

  // Target Audience

  targetAudience: z.object({
    ageGroup: z.union([
      z.literal("18-22"),
      z.literal("23-30"),
      z.literal("31-40"),
      z.literal("41-50"),
      z.literal("50+"),
    ]),
    country: z.array(z.string()),
    primaryGender: z.union([z.literal("Male"), z.literal("Female")]),
    incomeRange: z.union([
      z.literal("<500$"),
      z.literal("500$-2,500$"),
      z.literal("2,500$-5,000$"),
      z.literal("5,000$-10,000$"),
      z.literal("10,000$+"),
    ]),
  }),

  estimatedBudget: z.union([
    z.literal("500$-1000$"),
    z.literal("1000$-2500$"),
    z.literal("2500$-5000$"),
    z.literal("5000$-8000$"),
    z.literal("8000$+"),
  ]),
  projectTimeline: z.union([
    z.literal("<14 days"),
    z.literal("15-45 days"),
    z.literal("45-90 days"),
    z.literal("90+ days"),
  ]),
});

export const inquiryDefualtValues: z.infer<typeof inquiryFormValidator> = {
  name: "",
  email: "",
  phoneNumber: {
    code: "",
    number: "",
  },
  company: {
    name: "",
    description: "",
    size: "just_me",
    website: "",
    topCompetitors: [],
  },
  targetAudience: {
    ageGroup: "18-22",
    country: [],
    primaryGender: "Male",
    incomeRange: "<500$",
  },
  estimatedBudget: "1000$-2500$",
  projectTimeline: "15-45 days",
};
