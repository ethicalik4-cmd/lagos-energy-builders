import { describe, expect, it } from "vitest";

import { contactInquirySchema } from "@/lib/contact-schema";

describe("contact inquiry validation", () => {
  it("trims and accepts a valid inquiry", () => {
    const result = contactInquirySchema.safeParse({
      name: "  Ada Okafor  ",
      email: "  ada@example.com  ",
      company: "  Northstar Energy  ",
      message: "  We need engineering support for a facility upgrade.  ",
      website: "",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Ada Okafor");
      expect(result.data.email).toBe("ada@example.com");
      expect(result.data.message).toBe("We need engineering support for a facility upgrade.");
    }
  });

  it("rejects invalid email addresses", () => {
    const result = contactInquirySchema.safeParse({ name: "Ada", email: "not-an-email", message: "Please call me." });

    expect(result.success).toBe(false);
  });

  it("rejects messages longer than 1,000 characters", () => {
    const result = contactInquirySchema.safeParse({
      name: "Ada",
      email: "ada@example.com",
      message: "x".repeat(1001),
    });

    expect(result.success).toBe(false);
  });
});