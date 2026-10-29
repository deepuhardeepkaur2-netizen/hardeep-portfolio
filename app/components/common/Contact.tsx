
const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#f5f6fb] px-4 py-16 sm:px-6 sm:py-20 md:py-[110px]"
        >
            <div className="mx-auto w-full max-w-[1140px]">
                {/* Section Title */}
                <div className="mb-10 text-center sm:mb-14">


                    <h2 className="mt-5 text-[32px] leading-tight font-bold tracking-tight text-[#242044] sm:text-[42px] md:text-[54px]">
                        Let&apos;s Work Together
                        <span className="mt-1 block text-[#6c2bff]">
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#6c2bff]/15 bg-white px-5 py-2 text-sm font-semibold text-[#6c2bff] shadow-sm sm:text-base">
                                <span className="h-4 w-4 text-2xl rounded-full bg-[#f7a71d]" />
                                Get In Touch
                            </span>
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[570px] text-sm leading-7 text-gray-500 sm:text-base">
                        Have a project in mind or looking for a web designer?
                        I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Contact Wrapper */}
                <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-8">
                    {/* Contact Information */}
                    <div className="rounded-[28px] border border-[#e9e5f5] bg-white p-6 shadow-[0_12px_45px_rgba(40,25,90,0.06)] sm:p-8 lg:p-9">
                        <h3 className="mb-2 text-2xl font-bold text-[#242044]">
                            Contact Info
                        </h3>

                        <p className="mb-9 text-sm leading-6 text-gray-500">
                            Feel free to reach out. I&apos;m happy to connect with you.
                        </p>

                        {/* Address */}
                        <div className="mb-8 flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                                <img
                                    src="/images/location.png"
                                    alt="Location"
                                    className="h-10 w-10 object-contain"
                                />
                            </div>

                            <div className="min-w-0 pt-1">
                                <h4 className="mb-1 text-base font-semibold text-[#242044]">
                                    Address
                                </h4>
                                <p className="text-sm leading-6 text-gray-500">
                                    Hoshiarpur, Punjab
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-8 flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                                <img
                                    src="/images/mail.png"
                                    alt="Email"
                                    className="h-10 w-10 object-contain"
                                />
                            </div>

                            <div className="min-w-0 pt-1">
                                <h4 className="mb-1 text-base font-semibold text-[#242044]">
                                    Email Address
                                </h4>
                                <a
                                    href="mailto:deepuhardeepkaur@gmail.com"
                                    className="break-all text-sm leading-6 text-gray-500 transition-colors hover:text-[#6c2bff]"
                                >
                                    deepuhardeepkaur@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                                <img
                                    src="/images/telephone.png"
                                    alt="Phone"
                                    className="h-10 w-10 object-contain"
                                />
                            </div>

                            <div className="min-w-0 pt-1">
                                <h4 className="mb-1 text-base font-semibold text-[#242044]">
                                    Phone Number
                                </h4>
                                <a
                                    href="tel:+918872486145"
                                    className="text-sm leading-6 text-gray-500 transition-colors hover:text-[#6c2bff]"
                                >
                                    +91 8872486145
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <form
                        action="mailto:deepuhardeepkaur@gmail.com"
                        method="post"
                        encType="text/plain"
                        className="min-w-0 rounded-[28px] border border-[#e9e5f5] bg-white p-6 shadow-[0_12px_45px_rgba(40,25,90,0.06)] sm:p-8 lg:p-10"
                    >
                        <h3 className="mb-2 text-2xl font-bold text-[#242044]">
                            Send Me a Message
                        </h3>

                        <p className="mb-8 text-sm leading-6 text-gray-500">
                            Fill out the form below and let&apos;s discuss your ideas.
                        </p>

                        {/* Name and Email */}
                        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block text-sm font-semibold text-[#393253]"
                                >
                                    Your Name <span className="text-[#6c2bff]">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="Name"
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    required
                                    className="box-border min-h-[56px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-3 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#6c2bff] focus:bg-white focus:ring-4 focus:ring-[#6c2bff]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block text-sm font-semibold text-[#393253]"
                                >
                                    Email Address <span className="text-[#6c2bff]">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="Email"
                                    placeholder="Enter your email"
                                    autoComplete="email"
                                    required
                                    className="box-border min-h-[56px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-3 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#6c2bff] focus:bg-white focus:ring-4 focus:ring-[#6c2bff]/10"
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
                                    className="box-border min-h-[56px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-3 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#6c2bff] focus:bg-white focus:ring-4 focus:ring-[#6c2bff]/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-subject"
                                    className="mb-2 block text-sm font-semibold text-[#393253]"
                                >
                                    Subject <span className="text-[#6c2bff]">*</span>
                                </label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    name="Subject"
                                    placeholder="What is this about?"
                                    required
                                    className="box-border min-h-[56px] w-full rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-3 text-sm text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#6c2bff] focus:bg-white focus:ring-4 focus:ring-[#6c2bff]/10"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-7">
                            <label
                                htmlFor="contact-message"
                                className="mb-2 block text-sm font-semibold text-[#393253]"
                            >
                                Your Message <span className="text-[#6c2bff]">*</span>
                            </label>
                            <textarea
                                id="contact-message"
                                name="Message"
                                placeholder="Tell me about your project..."
                                required
                                className="box-border min-h-[170px] w-full resize-y rounded-xl border border-[#e7e5ef] bg-[#faf9fd] px-4 py-4 text-sm leading-6 text-[#242044] outline-none transition placeholder:text-gray-400 focus:border-[#6c2bff] focus:bg-white focus:ring-4 focus:ring-[#6c2bff]/10"
                            />
                        </div>

                        {/* Submit Button */}

                        <button
                            type="submit"
                            className="inline-flex min-h-[54px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#f7a71d] px-7 py-4 text-base font-semibold text-white shadow-[0_8px_20px_rgba(247,167,29,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e99a0b] hover:shadow-[0_12px_28px_rgba(247,167,29,0.32)] sm:w-auto"
                        >
                            Send Message
                            <span aria-hidden="true">→</span>
                        </button>


                        <p className="mt-4 text-xs leading-5 text-gray-400">
                            Fields marked with * are required.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
