import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our automation solutions? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@automatepro.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground">Available 9am - 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};