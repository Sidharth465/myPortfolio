import AnimatedSection from "@library/components/AnimatedSection";
import FloatingInput from "@library/components/FloatingInput";
import Page from "@library/components/Page";
import { useNavContext } from "@library/context/NavContext";
import { LoadingSvg } from "@library/utils/Svgs";
import Footer from "@pages/footer";
import { postContactData } from "@utils/service";
import { FC, useEffect, useState } from "react";

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
        [name]: "", // Clear the error message for the field that is cleared
      }));
    }
  };

  // Validate form inputs
  const validateForm = () => {
    let valid = true;
    let formErrors = { name: "", email: "", message: "" };

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
      // Simulate a successful response
      const response = await postContactData("/contact-us", formData);

      console.log("response", await response);
      if (response?.status === 200) {
        showToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" }); // Clear errors on success
      } else {
        showToast({ type: "error", message: "Sorry!, It's not you it's us" });
      }
    } catch (error) {
      alert("Network error.");
      showToast({ type: "error", message: "Opps!,something went wrong" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedSection id="contactus">
      <Page className="flex flex-col justify-between">
        <section
          id="contact"
          className="w-full  text-white py-10 px-5 sm:px-10 justify-between"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold bg-linear2 text-transparent bg-clip-text mb-4">
              Contact Us
            </h2>

            <p className="text-gray-400 text-center mb-10">
              Have questions or want to work together? Fill out the form below.
            </p>

            {/* Form */}
            <form className="w-full grid grid-cols-1 gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
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
              <button
                onClick={handleSubmit}
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.message ||
                  isLoading
                }
                type="submit"
                className="w-fit min-w-[150px] px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <LoadingSvg />
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </Page>
    </AnimatedSection>
  );
};

export default ContactUs;
