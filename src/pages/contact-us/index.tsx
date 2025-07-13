import AnimatedSection from "@library/components/AnimatedSection";
import FloatingInput from "@library/components/FloatingInput";
import Page from "@library/components/Page";
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
    <AnimatedSection id="contactus">
      <Page className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear2 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear
                from you!
              </p>
            </div>

            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, interesting
                    projects, or just having a chat about technology and
                    development.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-400">
                        siddharthverma465@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-400">Delhi, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                      <h3 className="text-white font-semibold">
                        Response Time
                      </h3>
                      <p className="text-gray-400">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>

                  <div className="relative p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Send Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
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
                      </div>

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
                      ></input>

                      <button
                        type="submit"
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.message ||
                          isLoading
                        }
                        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </AnimatedSection>
  );
};

export default ContactUs;
