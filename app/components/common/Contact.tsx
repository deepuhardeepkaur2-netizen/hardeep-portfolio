
"use client";

import { FormEvent, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      phone: formData.get("Phone"),
      subject: formData.get("Subject"),
      message: formData.get("Message"),
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/deepuhardeepkaur@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f5f6fb] px-4 py-16 sm:px-6 sm:py-20 lg:py-[110px]"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f7a71d]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#6c2bff]/[0.06] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1140px]">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
         
 <span className="mb-3 inline-block rounded-full bg-[#f1efff] px-5 py-2 text-sm font-semibold text-[#6d5ce8]">
           <span className="h-2.5 w-2.5 rounded-full bg-[#f7a71d]" />
            Get In Touch
          </span>

          <h2 className="mt-5 text-[32px] leading-tight font-extrabold tracking-tight text-[#242044] sm:text-[42px] md:text-[54px]">
            Let's Work Together
            <span className="block text-[#6c2bff]">
              Build Something Great
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[570px] text-sm leading-7 text-gray-500 sm:text-base">
            Have a project in mind or looking for a web designer?
            Let's connect and turn your ideas into reality.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[350px_minmax(0,1fr)] lg:gap-8">
          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#242044] p-7 text-white shadow-[0_20px_55px_rgba(36,32,68,0.16)] sm:p-9">
            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.04]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#f7a71d]/10 blur-2xl" />

            <div className="relative">
              <span className="text-sm font-semibold tracking-wider text-[#f7a71d]">
                CONTACT DETAILS
              </span>

              <h3 className="mt-3 text-3xl font-bold">
                Let's Talk
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Have a question, project idea, or job opportunity?
                Feel free to contact me. I'd love to hear from you.
              </p>

              <div className="my-9 h-px bg-white/15" />

              {/* Address */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src="/images/location.png"
                    alt="Location"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="mb-1 font-semibold">Location</h4>
                  <p className="text-sm text-white/60">
                    Hoshiarpur, Punjab, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src="/images/mail.png"
                    alt="Email"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="mb-1 font-semibold">Email Address</h4>
                  <a
                    href="mailto:deepuhardeepkaur@gmail.com"
                    className="break-all text-sm text-white/60 transition hover:text-[#f7a71d]"
                  >
                    deepuhardeepkaur@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src="/images/telephone.png"
                    alt="Phone"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="mb-1 font-semibold">Phone Number</h4>
                  <a
                    href="tel:+918872486145"
                    className="text-sm text-white/60 transition hover:text-[#f7a71d]"
                  >
                    +91 8872486145
                  </a>
                </div>
              </div>

              {/* Availability Note */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f7a71d]" />
                  <span className="text-sm font-semibold">
                    Open to Opportunities
                  </span>
                </div>
                <p className="mt-2 text-xs leading-6 text-white/55">
                  Available for web design, frontend development, and
                  creative website projects.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[28px] border border-[#e9e5f5] bg-white p-6 shadow-[0_15px_50px_rgba(40,25,90,0.07)] sm:p-9 lg:p-10">
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-wider text-[#f7a71d]">
                Send A Message
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#242044] sm:text-3xl">
                Have Something in Mind?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Fill in the details below. I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name and Email */}
              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[#393253]"
                  >
                    Your Name <span className="text-[#f7a71d]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="Name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="min-h-[54px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#f7a71d] focus:bg-white focus:ring-4 focus:ring-[#f7a71d]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-[#393253]"
                  >
                    Email Address <span className="text-[#f7a71d]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="Email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="min-h-[54px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#f7a71d] focus:bg-white focus:ring-4 focus:ring-[#f7a71d]/10"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-[#393253]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="Phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    className="min-h-[54px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#f7a71d] focus:bg-white focus:ring-4 focus:ring-[#f7a71d]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-[#393253]"
                  >
                    Subject <span className="text-[#f7a71d]">*</span>
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="Subject"
                    placeholder="Enter subject"
                    required
                    className="min-h-[54px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#f7a71d] focus:bg-white focus:ring-4 focus:ring-[#f7a71d]/10"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#393253]"
                >
                  Your Message <span className="text-[#f7a71d]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  name="Message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={6}
                  className="min-h-[160px] w-full resize-y rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-4 text-sm leading-6 text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#f7a71d] focus:bg-white focus:ring-4 focus:ring-[#f7a71d]/10"
                />
              </div>

              {/* Success and Error Messages */}
              {status === "success" && (
                <div
                  role="status"
                  className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  Your message has been sent successfully. Thank you for
                  contacting me!
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#f7a71d] px-7 py-4 text-base font-bold text-white shadow-[0_8px_20px_rgba(247,167,29,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e99a0b] hover:shadow-[0_12px_28px_rgba(247,167,29,0.32)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <span aria-hidden="true">→</span>}
              </button>

              <p className="mt-4 text-xs leading-5 text-gray-400">
                * Required fields. Your information will only be used to
                respond to your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
