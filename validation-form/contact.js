import * as yup from "yup";

export const contactSchema = yup.object().shape({
  user_name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name must be at least 3 characters long.")
    .max(10, "Name must be longer 10 characters."),
  user_email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|icloud\.com)$/,
      "Email must be from Gmail, Outlook, or iCloud."
    ),
  message: yup
    .string()
    .required("Message is required.")
    .min(10, "Message must be at least 10 characters long.")
});
