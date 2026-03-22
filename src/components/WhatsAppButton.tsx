"use client";

import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "14105551234";
  const message = encodeURIComponent(
    "Hi, I'm interested in learning more about iNBIO's products and services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Tooltip */}
      <span
        className={`rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white shadow-lg transition-all duration-200 ${
          hovered
            ? "translate-x-0 opacity-100"
            : "translate-x-2 opacity-0 pointer-events-none"
        }`}
      >
        Chat with us
      </span>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 175.216 175.552"
          className="h-8 w-8"
          fill="white"
        >
          <path d="M87.882 14.14c-40.626 0-73.704 33.078-73.72 73.704-.004 12.99 3.394 25.676 9.848 36.876l-10.468 38.2 39.098-10.252a73.6 73.6 0 0 0 35.218 8.97h.032c40.61 0 73.696-33.086 73.712-73.714.008-19.692-7.654-38.218-21.574-52.154-13.92-13.934-32.438-21.608-52.146-21.63zm0 134.888h-.026a61.24 61.24 0 0 1-31.222-8.55l-2.24-1.33-23.218 6.088 6.196-22.622-1.46-2.322a61.28 61.28 0 0 1-9.394-32.588c.014-33.794 27.516-61.296 61.326-61.296 16.374.008 31.774 6.39 43.348 17.976 11.574 11.588 17.942 26.994 17.934 43.37-.016 33.798-27.518 61.274-61.244 61.274zm33.614-45.894c-1.842-.922-10.898-5.38-12.59-5.994-1.692-.614-2.924-.922-4.156.922s-4.77 5.994-5.848 7.228c-1.078 1.232-2.156 1.386-3.998.462-1.842-.922-7.776-2.866-14.81-9.138-5.476-4.882-9.172-10.912-10.25-12.754-1.076-1.842-.114-2.838.81-3.756.83-.826 1.842-2.152 2.764-3.228.92-1.076 1.228-1.844 1.842-3.076.614-1.232.308-2.31-.154-3.232-.46-.922-4.154-10.012-5.694-13.712-1.498-3.6-3.022-3.114-4.154-3.17-1.076-.052-2.308-.064-3.54-.064s-3.232.462-4.924 2.308c-1.692 1.844-6.462 6.316-6.462 15.406 0 9.088 6.616 17.87 7.538 19.102.922 1.232 13.018 19.876 31.536 27.87 4.404 1.902 7.842 3.036 10.522 3.886 4.42 1.404 8.444 1.206 11.624.73 3.546-.53 10.898-4.456 12.436-8.76 1.538-4.306 1.538-7.998 1.076-8.76-.46-.768-1.692-1.228-3.534-2.148z" />
        </svg>
      </a>
    </div>
  );
}
