import { Link } from 'react-router-dom';
import { Check, Star, Home, MapPin, Calendar, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import heroImage from '@/assets/a571ae92f7cf8200356dd74a7b517b1de6c4fc52.png';
import acupunctureImage from '@/assets/3dada79126756c3434669a8dc76521f8f051ca78.png';
import rcvsLogo from '@/assets/c6b0e8d6547a901cfb5d2c9fe772a37e507d2b69.png';
import googleLogo from '@/assets/9de5472d821013eb1bbe6a36581587c9ba3ba3c8.png';
import abvaLogo from '@/assets/503f0fcb693db01f094b4f8509dfb58a2480c451.png';
import googleReviewsLogo from '@/assets/6d0166c9830200356e13c82a56adabd2629c5eb2.png';
import ctaBackground from '@/assets/4f7fa0999a01cc24cf63ce2a5e72fbc69929e953.png';

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.max(0, scrollY * 0.3);

  const conditions = [
    'Arthritis & joint pain',
    'Stiffness / mobility decline',
    'Post-operative recovery support',
    'Chronic pain',
    'Neurological / spinal cases',
    'General wellbeing for older pets',
  ];

  const testimonials = [
    {
      text: "Wonderfully kind people, amazing service and fantastic results on both of my cats. I can't recommend highly enough.",
      author: "Anna Mitchell",
      rating: 5,
    },
    {
      text: "We have used Greenway Veterinary Acupuncture for many years and not only have they been wonderful, but the results have been amazing.",
      author: "Sue and Steve Fenton",
      rating: 5,
    },
    {
      text: "Hazel came in as keen as I'd seen her in two years. The results speak for themselves.",
      author: "Hazel Cotejan",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "Does acupuncture hurt?",
      answer: "95% of the time your pet will not feel anything whilst the needles are placed. Occasionally, they feel it and react briefly and if there's some points that they are particularly sensitive about, we simply remove the needle and maybe use an alternative area. We tend to use less points on the first session and build up on subsequent treatments after assessing their response.",
      video: "https://www.youtube.com/embed/ySLi14_Plw4"
    },
    {
      question: "How will you keep my pet still for the treatment?",
      answer: "It's amazing how relaxed even the most bouncy, wriggly dog or slippery cat becomes after the first few needles are placed and some even fall asleep during treatment. We've had years of experience in handling, coaxing and relaxing animals and there have been very few patients who are totally averse to the idea and completely refuse treatment - though it does happen occasionally!",
      video: "https://www.youtube.com/embed/H4uVRcs-s5g"
    },
    {
      question: "Can I speak to you first for advice?",
      answer: "Yes, of course. If you'd like to speak to us regarding suitability of your pet for acupuncture treatment, contact us by email or phone. Our answering service will take your number and Alastair or Claire will call you back as soon as we're free."
    },
    {
      question: "How long is the session and do I need to prepare anything?",
      answer: "Allow a good hour for the first session so we can examine your pet, see them moving about and talk to you about their history and lifestyle before we start the acupuncture. The needles themselves will be in for about 15-20 minutes. You can feed and exercise them as normal in the run up to the session that day. Then allow your pet an hour or so of relaxation after the session."
    },
    {
      question: "How do I decide whether to book a home visit or a fixed-base appointment?",
      answer: "Both options provide high-quality acupuncture care, but here's how to decide:\n\n✓ Choose a home visit if your pet is anxious about travel or benefits from treatment in their familiar surroundings. (Subject to availability—please contact us first.)\n\n✓ Choose a fixed-base appointment if you want a guaranteed booking without wait times. This option is ideal for urgent cases or when home visit slots are full."
    },
    {
      question: "What if I prefer a home visit but no slots are available?",
      answer: "Due to high demand, our home visit slots are often fully booked. If this happens, we highly recommend booking a fixed-base appointment instead. Your pet will still receive the same expert care in a calm, controlled environment, and we'll make the experience as stress-free as possible."
    },
    {
      question: "Can I be added to a waiting list for a home visit?",
      answer: "Yes! If home visits are currently unavailable in your area, we can add you to our waiting list and contact you as soon as a slot opens up. In the meantime, we encourage booking a fixed-base appointment to avoid delays in your pet's treatment."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-32 pt-36">
        {/* Background Image */}
        <div className="absolute inset-0 -top-32 z-0">
          <img 
            src={heroImage} 
            alt="Dog and cat together" 
            className="w-full h-full object-cover"
          />
          {/* Black gradient overlay - darkest on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-serif text-primary-foreground leading-tight">
                Veterinary<br />Acupuncture
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground">
                Natural Pain Relief & Healing for Your Pet
              </p>
              <p className="text-base text-primary-foreground/80 leading-relaxed max-w-md">
                Acupuncture is a <span className="text-primary-foreground font-medium">safe, natural therapy</span> that supports your pet's health by <span className="text-primary-foreground font-medium">reducing pain</span>, enhancing mobility, and promoting healing. Whether your pet is dealing with <span className="text-primary-foreground font-medium">arthritis, chronic pain, or neurological conditions</span>, acupuncture provides a gentle yet effective way to restore comfort and improve their quality of life—without relying solely on medication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-block text-center font-medium shadow-lg"
                >
                  Find Out If Acupuncture Is Right for Your Pet
                </Link>
              </div>

              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-xl max-w-md relative border border-primary-foreground/20"
              >
                <p className="text-primary-foreground/90 text-base leading-relaxed mb-4 pl-4 border-l-4 border-blue-500 italic">
                  Wonderfully kind people, amazing service and fantastic results on both of my cats. I can't recommend highly enough.
                </p>
                <a
                  href="https://www.google.com/maps/place/Greenway+Veterinary+Acupuncture/@51.6199839,-0.6927426,9z/data=!4m16!1m9!3m8!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!2sGreenway+Veterinary+Acupuncture!8m2!3d51.6199839!4d-0.6927426!9m1!1b1!16s%2Fg%2F1tfmmx3f!3m5!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!8m2!3d51.6199839!4d-0.6927426!16s%2Fg%2F1tfmmx3f?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img src={googleLogo} alt="Google Reviews 5.0" className="h-12 w-auto" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* YouTube Video - Bottom Right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-8 right-8 w-80 aspect-video rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/XE9xmSimyNY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="bg-card py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
            <a 
              href="https://www.rcvs.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={rcvsLogo} alt="RCVS Registered" className="h-24 w-auto" />
            </a>
            <a 
              href="https://www.abva.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={abvaLogo} alt="ABVA Member" className="h-16 w-auto" />
            </a>
            <a 
              href="https://www.google.com/maps/place/Greenway+Veterinary+Acupuncture/@51.6199839,-0.6927426,9z/data=!4m16!1m9!3m8!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!2sGreenway+Veterinary+Acupuncture!8m2!3d51.6199839!4d-0.6927426!9m1!1b1!16s%2Fg%2F1tfmmx3f!3m5!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!8m2!3d51.6199839!4d-0.6927426!16s%2Fg%2F1tfmmx3f?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={googleLogo} alt="5.0 Google Reviews" className="h-16 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* What Acupuncture Can Help With */}
      <section className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            What acupuncture can help with
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start space-x-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground">{condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Not Alternative */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-primary-foreground">
                Complementary, not alternative
              </h2>
              <p className="text-lg text-primary-foreground/80">
                We believe in an integrated approach that complements and supports the treatment plan prescribed by the referring veterinary surgeon. We also co-ordinate with other professionals involved in the health and well-being of the patient, such as hydro- and physiotherapists.
              </p>
              <p className="text-lg text-primary-foreground/80">
                This collaboration enhances the effects of each therapy, reaching for our shared goal of happy, long-lived patients and happy clients.
              </p>
            </div>

            {/* Right Content - Two independent masked layers */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* BOTTOM LAYER: Rounded rectangle mask - static image */}
              <div className="absolute inset-0">
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 -30 602 752" 
                  preserveAspectRatio="xMidYMid meet" 
                  style={{ zIndex: 1 }}
                  shapeRendering="crispEdges"
                >
                  <defs>
                    <clipPath id="bottomRectMask" clipPathUnits="userSpaceOnUse">
                      <path d="M 120 360 Q 0 360 0 480 L 0 720 L 600 720 L 600 360 L 120 360 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href={acupunctureImage}
                    width="600"
                    height="450"
                    x="0"
                    y="360"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#bottomRectMask)"
                    shapeRendering="crispEdges"
                  />
                </svg>
              </div>

              {/* TOP LAYER: 6 circles mask - parallax zoomed image */}
              <div className="absolute inset-0">
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 -30 602 752" 
                  preserveAspectRatio="xMidYMid meet" 
                  style={{ zIndex: 2 }}
                  shapeRendering="crispEdges"
                >
                  <defs>
                    <clipPath id="topCirclesMask" clipPathUnits="userSpaceOnUse">
                      {/* Top row */}
                      <circle cx="82.5" cy="60" r="82.5" />
                      <circle cx="300" cy="60" r="82.5" />
                      <circle cx="517.5" cy="60" r="82.5" />
                      {/* Bottom row */}
                      <circle cx="82.5" cy="277.5" r="82.5" />
                      <circle cx="300" cy="277.5" r="82.5" />
                      <circle cx="517.5" cy="277.5" r="82.5" />
                    </clipPath>
                  </defs>
                  <image
                    href={acupunctureImage}
                    width="1000"
                    height="1000"
                    x="-300"
                    y={-600 + parallaxOffset}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#topCirclesMask)"
                    shapeRendering="crispEdges"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            Words from our clients...
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg border border-border">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-accent font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Greenway+Veterinary+Acupuncture/@51.6199839,-0.6927426,9z/data=!4m16!1m9!3m8!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!2sGreenway+Veterinary+Acupuncture!8m2!3d51.6199839!4d-0.6927426!9m1!1b1!16s%2Fg%2F1tfmmx3f!3m5!1s0x487671f9c5ad828f:0xfbfb8fdd0df73376!8m2!3d51.6199839!4d-0.6927426!16s%2Fg%2F1tfmmx3f?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-8 hover:opacity-80 transition-opacity"
            >
              <span className="text-foreground text-lg font-serif">Click here to see our full google reviews</span>
              <img src={googleLogo} alt="Google Reviews 5.0" className="h-20 w-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Two Ways to Book */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-primary-foreground text-center mb-4"
          >
            Two Ways to Book
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-primary-foreground/70 mb-12"
          >
            Choose your Preferred Appointment Type
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Home Visit */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative bg-card p-8 rounded-2xl border-2 border-accent shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="bg-accent/10 p-4 rounded-xl"
                >
                  <Home className="text-accent w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Home Visit</h3>
                  <p className="text-accent text-sm font-medium">Limited Availability</p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-5 mb-8 relative flex-grow">
                {/* Animated connecting line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "175px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute left-5 top-5 w-0.5 bg-accent"
                  style={{ transform: "translateX(-50%)" }}
                />
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Choose a Home Visit</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A stress-free session in the comfort of your pet's familiar environment.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Registration & Suitability Check</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll confirm availability in your area and assess if acupuncture is suitable for your pet.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Schedule Your Appointment</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll send you several appointment options to choose from.
                    </p>
                  </div>
                </motion.div>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-4 rounded-xl transition-all group-hover:shadow-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                Contact us for Availability
              </Link>
            </motion.div>

            {/* Clinic Visit */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative bg-card p-8 rounded-2xl border-2 border-accent shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="bg-accent p-4 rounded-xl shadow-lg"
                >
                  <MapPin className="text-accent-foreground w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Clinic Visit</h3>
                  <p className="text-accent text-sm font-medium">Instant Booking</p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-5 mb-8 relative flex-grow">
                {/* Animated connecting line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "175px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute left-5 top-5 w-0.5 bg-accent"
                  style={{ transform: "translateX(-50%)" }}
                />
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Choose Come to Us</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Visit us at our London locations for an in-clinic acupuncture session.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Registration & Suitability Check</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Book directly—we'll follow up to confirm suitability and review your pet's history.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 relative z-10"
                >
                  <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground mb-1 font-medium">Schedule Your Appointment</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Book instantly through our calendar and we'll confirm before your visit.
                    </p>
                  </div>
                </motion.div>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-xl font-medium"
              >
                <Calendar className="w-5 h-5" />
                Book your clinic appointment now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">
            Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Initial Home Visit */}
            <div className="bg-secondary rounded-2xl p-8 border-2 border-primary/20 hover:border-accent transition-all hover:shadow-xl flex flex-col">
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-primary/20">
                <h3 className="text-2xl font-serif text-foreground mb-2">Initial Home Visit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive consultation in the comfort of your home—Contact Us for Availability
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£162</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Full health assessment and acupuncture treatment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Review of your pet's full clinical history (we liaise with your vet to obtain notes)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Personalised treatment plan tailored to your pet</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Expert advice on aftercare and ongoing wellness</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Stress-free experience in your pet's familiar environment</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="w-full text-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium"
              >
                Contact Us Today
              </Link>
            </div>

            {/* Maintenance Home Visit */}
            <div className="bg-secondary rounded-2xl p-8 border-2 border-primary/20 hover:border-accent transition-all hover:shadow-xl flex flex-col">
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-primary/20">
                <h3 className="text-2xl font-serif text-foreground mb-2">Maintenance Home Visit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Convenient follow-up sessions at home—limited slots available
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£126</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Ongoing acupuncture treatment tailored to your pet's progress</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Regular reassessment and adjustments to treatment plan and advice</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Continued support for pain relief, mobility, and wellness</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Consistent care from a vet who knows your pet's history</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Advice on complementary therapies to support recovery</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="w-full text-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium"
              >
                Contact Us Today
              </Link>
            </div>

            {/* In Clinic Treatment */}
            <div className="bg-accent/5 rounded-2xl p-8 border-2 border-accent hover:border-accent/80 transition-all hover:shadow-xl flex flex-col relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>

              {/* Header */}
              <div className="mb-6 pb-6 border-b border-accent/20">
                <h3 className="text-2xl font-serif text-foreground mb-2">In Clinic Treatment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Calm, Comfortable Acupuncture Sessions in Our Clinics
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£95</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Professional acupuncture treatment with our experienced vet</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Full review of your pet's clinical history (we obtain and assess records from your vet)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Individualised care plan tailored to your pet's needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Convenient, pet-friendly clinic environment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Ideal for quick access to care without waiting lists</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium shadow-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-primary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-primary-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-accent/30">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-accent/5 transition-colors rounded-t-lg"
                >
                  <span className="text-lg text-primary-foreground font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-primary-foreground/80 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                    {faq.video && (
                      <div className="mt-6 w-full aspect-video">
                        {index === 0 && playingVideo !== index ? (
                          <button
                            onClick={() => setPlayingVideo(index)}
                            className="relative w-full h-full group cursor-pointer"
                          >
                            <img
                              src="https://img.youtube.com/vi/ySLi14_Plw4/maxresdefault.jpg"
                              alt="Video thumbnail"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg">
                              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                              </div>
                            </div>
                          </button>
                        ) : (
                          <iframe
                            width="100%"
                            height="100%"
                            src={faq.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                          ></iframe>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaBackground} 
            alt="Acupuncture needles" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-4xl font-serif text-white">
            Ready to help your pet feel better?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-block font-medium shadow-lg">
              Book now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg transition-all inline-block font-medium">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}