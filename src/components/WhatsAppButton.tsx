import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/917012089560?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-primary-foreground shadow-lg hover:bg-[hsl(142_70%_40%)] transition-all duration-200 hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;