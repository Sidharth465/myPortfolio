import AnimatedSection from "@library/components/AnimatedSection";
import FloatingInput from "@library/components/FloatingInput";
import Page from "@library/components/Page";
import RevealItem from "@library/components/RevealItem";
import { useNavContext } from "@library/context/NavContext";
import { LoadingSvg } from "@library/utils/Svgs";
import Footer from "@pages/footer";
import { postContactData } from "@utils/service";
import { FC, useState } from "react";

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const accessKey = import.meta.env.VITE_WEB3_ACCESS_TOKEN;
  const { showToast } = useNavContext();

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for that specific field if the user starts typing
    if (value.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let valid = true;
    const formErrors = { name: "", email: "", message: "" };

    // Name validation: must not contain digits or special characters
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name) {
      formErrors.name = "Name is required.";
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      formErrors.name = "Name cannot contain numbers or special characters.";
      valid = false;
    }

    // Email validation: must follow standard email pattern like @gmail.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email =
        "Please enter a valid email (e.g., example@gmail.com).";
      valid = false;
    }

    // Message validation: check if message is not empty
    if (!formData.message) {
      formErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate before submitting
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("access_key", accessKey);
      // Simulate a successful response
      const response = await postContactData(Object.fromEntries(formData));

      if (response?.success) {
        showToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" }); // Clear errors on success
      } else {
        showToast({ type: "error", message: "Sorry!, It's not you it's us" });
      }
    } catch {
      alert("Network error.");
      showToast({ type: "error", message: "Opps!,something went wrong" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection id="contactus" variant="fade" stagger>
      <Page
        showTopDivider={false}
        showBottomDivider={false}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient px-2 reveal-child"
                style={{ ["--reveal-i" as string]: 0 }}
              >
                Get In Touch
              </h1>
              <p
                className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 reveal-child"
                style={{ ["--reveal-i" as string]: 1 }}
              >
                Have a project in mind or want to collaborate? I'd love to hear
                from you!
              </p>
            </div>

            {/* Contact Content — equal columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 lg:items-stretch">
              {/* Contact Info */}
              <RevealItem
                variant="left"
                index={0}
                className="min-w-0 h-full"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl glass">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <div className="relative flex h-full flex-col p-4 sm:p-6 lg:p-8">
                    <div className="mb-6 sm:mb-8">
                      <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        Let's Connect
                      </h2>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                        I'm always open to discussing new opportunities,
                        interesting projects, or just having a chat about
                        technology and development.
                      </p>
                    </div>

                    <div className="mt-auto space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-soft min-w-0">
                        <div className="w-10 h-10 shrink-0 glass-chip rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-white font-semibold text-sm">
                            Email
                          </h3>
                          <a
                            href="mailto:siddharthverma465@gmail.com"
                            className="text-gray-400 text-xs sm:text-sm break-all hover:text-white"
                          >
                            siddharthverma465@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-soft">
                        <div className="w-10 h-10 shrink-0 glass-chip rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">
                            Location
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Delhi, India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl glass-soft">
                        <div className="w-10 h-10 shrink-0 glass-chip rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">
                            Response Time
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm">
                            Within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealItem>

              {/* Contact Form */}
              <RevealItem
                variant="right"
                index={1}
                className="relative min-w-0 h-full"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl glass">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                  <div className="relative flex h-full flex-col p-4 sm:p-6 lg:p-8">
                    <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                      Send Message
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-1 flex-col space-y-4"
                    >
                      <FloatingInput
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        errorMessage={errors.name}
                        isActive={formData?.name?.length > 0}
                      />
                      <FloatingInput
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        required
                        name="email"
                        errorMessage={errors.email}
                        isActive={formData?.email?.length > 0}
                      />

                      <FloatingInput
                        type="text"
                        value={formData.message}
                        onChange={handleChange}
                        label="Message"
                        required
                        name="message"
                        isTextarea={true}
                        errorMessage={errors.message}
                        isActive={formData?.message?.length > 0}
                      />
                      <input
                        type="hidden"
                        name="access_key"
                        value={accessKey}
                      />

                      <button
                        type="submit"
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.message ||
                          isLoading
                        }
                        className="mt-auto w-full min-h-[44px] px-8 py-2.5 btn-electric disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.01] touch-manipulation"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <LoadingSvg />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </RevealItem>
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </AnimatedSection>
  );
};

export default ContactUs;
