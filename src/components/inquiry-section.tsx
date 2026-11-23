import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { contactInquirySchema } from "@/lib/contact-schema";
import { SITE_EMAIL, SITE_EMAIL_HREF, SITE_LOCATION } from "@/lib/site-content";
import { submitContactInquiry } from "@/lib/contact.functions";

const emptyInquiry = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

export function InquirySection() {
  const submitInquiry = useServerFn(submitContactInquiry);
  const [values, setValues] = useState(emptyInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError("");

    const parsed = contactInquirySchema.safeParse(values);
    if (!parsed.success) {
      setStatus("idle");
      setValidationError(parsed.error.issues[0]?.message ?? "Check the form details and try again.");
      return;
    }

    setStatus("sending");
    try {
      await submitInquiry({ data: parsed.data });
      setValues(emptyInquiry);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function updateField(field: keyof typeof emptyInquiry, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status === "error" || status === "success") setStatus("idle");
  }

  return (
    <section id="contact" className="contact-section">
      <div className="site-container contact-section__inner">
        <Reveal>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="section-heading">Let’s talk about the work ahead.</h2>
          <p className="contact-section__intro">
            Share a little about your project or facility needs. Your inquiry will be saved for the ELATEV team to review.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail__label">Email</span>
              <a href={SITE_EMAIL_HREF}>{SITE_EMAIL}</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__label">Based in</span>
              <span>{SITE_LOCATION}</span>
            </div>
          </div>
        </Reveal>

        <Reveal order={1}>
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="inquiry-form__row">
              <div className="inquiry-form__field">
                <Label htmlFor="inquiry-name">Your name</Label>
                <Input
                  id="inquiry-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  maxLength={100}
                  required
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </div>
              <div className="inquiry-form__field">
                <Label htmlFor="inquiry-email">Work email</Label>
                <Input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  maxLength={255}
                  required
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </div>
            </div>
            <div className="inquiry-form__field">
              <Label htmlFor="inquiry-company">Company <span>(optional)</span></Label>
              <Input
                id="inquiry-company"
                name="company"
                autoComplete="organization"
                value={values.company}
                maxLength={120}
                onChange={(event) => updateField("company", event.target.value)}
              />
            </div>
            <div className="inquiry-form__field">
              <Label htmlFor="inquiry-message">How can we help?</Label>
              <Textarea
                id="inquiry-message"
                name="message"
                value={values.message}
                maxLength={1000}
                required
                placeholder="Tell us about your project or service requirement."
                onChange={(event) => updateField("message", event.target.value)}
              />
            </div>
            <div className="inquiry-trap" aria-hidden="true">
              <Label htmlFor="inquiry-website">Website</Label>
              <Input
                id="inquiry-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(event) => updateField("website", event.target.value)}
              />
            </div>
            <p className="inquiry-form__status" data-kind="error" role="alert">
              {validationError || (status === "error" ? "We couldn’t save your inquiry. Please email the team directly." : "")}
            </p>
            <p className="inquiry-form__status" data-kind="success" role="status">
              {status === "success" ? "Thank you. Your inquiry has been saved for the ELATEV team." : ""}
            </p>
            <Button type="submit" size="lg" className="button-brand inquiry-form__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send inquiry"}
              {status !== "sending" && <ArrowUpRight aria-hidden="true" />}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}