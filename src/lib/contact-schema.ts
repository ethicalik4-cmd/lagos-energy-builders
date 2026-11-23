import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(255, "Email must be 255 characters or fewer."),
  company: z.string().trim().max(120, "Company must be 120 characters or fewer.").optional(),
  message: z.string().trim().min(1, "Add a short message.").max(1000, "Message must be 1,000 characters or fewer."),
  website: z.string().max(200).optional().default(""),
});

export type ContactInquiry = z.infer<typeof contactInquirySchema>;