import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nCountry: ${formData.country}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:sales@mountwyn.com?subject=${subject}&body=${body}`, "_self");

    toast({
      title: "Opening Email Client",
      description: "Your default email app will open with the inquiry details pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="bg-background"
          />
        </div>
        <div>
          <Input
            name="country"
            placeholder="Country *"
            value={formData.country}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Describe your requirement (product type, quantity, specifications)... *"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background resize-none"
        />
      </div>
      <Button type="submit" variant="gold" size="lg" className="w-full">
        <Send className="w-4 h-4" />
        Send Inquiry
      </Button>
    </form>
  );
};

export default InquiryForm;