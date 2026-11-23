import { createServerFn } from "@tanstack/react-start";

import { contactInquirySchema } from "@/lib/contact-schema";

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((input) => contactInquirySchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) {
      return { ok: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    });

    if (error) {
      throw new Error("Unable to save the inquiry.");
    }

    return { ok: true };
  });