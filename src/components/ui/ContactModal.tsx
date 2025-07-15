import React from "react";
import { ContactForm } from "../forms/ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
        >
          ×
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Have a question or need assistance? Send us a message and we'll
              get back to you as soon as possible.
            </p>
          </div>

          <ContactForm className="max-w-none" />
        </div>
      </div>
    </div>
  );
}
