import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import contactImage from '@/assets/a571ae92f7cf8200356dd74a7b517b1de6c4fc52.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    appointmentType: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in production this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        petName: '',
        petType: '',
        appointmentType: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header Section */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-serif text-primary-foreground mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/80">
            Ready to help your pet feel better? Contact us today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Mail className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:office@acupuncture-vet.co.uk" 
                        className="text-accent hover:underline"
                      >
                        office@acupuncture-vet.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">Phone</h3>
                      <a 
                        href="tel:+447123456789" 
                        className="text-accent hover:underline"
                      >
                        +44 7123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <MapPin className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">Clinic Locations</h3>
                      <p className="text-muted-foreground">London, UK</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Specific location details provided upon booking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="text-accent w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-serif text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link 
                    to="/pricing" 
                    className="block text-accent hover:underline"
                  >
                    View Pricing →
                  </Link>
                  <Link 
                    to="/faqs" 
                    className="block text-accent hover:underline"
                  >
                    Read FAQs →
                  </Link>
                  <Link 
                    to="/how-it-works" 
                    className="block text-accent hover:underline"
                  >
                    How It Works →
                  </Link>
                </div>
              </div>

              {/* Pet Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={contactImage} 
                  alt="Happy dog and cat together" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-3xl font-serif text-foreground mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-accent/10 border border-accent text-foreground p-6 rounded-lg text-center">
                  <Send className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+44 7123 456 789"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="petName" className="block text-sm font-medium text-foreground mb-2">
                        Pet's Name
                      </label>
                      <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Max"
                      />
                    </div>

                    <div>
                      <label htmlFor="petType" className="block text-sm font-medium text-foreground mb-2">
                        Pet Type
                      </label>
                      <select
                        id="petType"
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select...</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="appointmentType" className="block text-sm font-medium text-foreground mb-2">
                      Appointment Preference
                    </label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select...</option>
                      <option value="home">Home Visit</option>
                      <option value="clinic">Clinic Visit</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your pet and what you'd like help with..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}