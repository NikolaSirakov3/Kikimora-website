import { ContactForm } from "./ContactForm";

export function ContactFormExample() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Send us a message and we'll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactFormExample;
