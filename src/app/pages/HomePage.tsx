import { Link } from 'react-router-dom';
import { Check, Star, Home, MapPin, Calendar, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/app/components/SEO';
import heroImage from '@/assets/a571ae92f7cf8200356dd74a7b517b1de6c4fc52.jpg';
import acupunctureImage from '@/assets/3dada79126756c3434669a8dc76521f8f051ca78.jpg';
import rcvsLogo from '@/assets/c6b0e8d6547a901cfb5d2c9fe772a37e507d2b69.png';
import googleLogo from '@/assets/9de5472d821013eb1bbe6a36581587c9ba3ba3c8.png';
import abvaLogo from '@/assets/503f0fcb693db01f094b4f8509dfb58a2480c451.png';
import googleReviewsLogo from '@/assets/6d0166c9830200356e13c82a56adabd2629c5eb2.png';
import ctaBackground from '@/assets/4f7fa0999a01cc24cf63ce2a5e72fbc69929e953.jpg';

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.max(0, scrollY * 0.3);
  const heroVideoId = 'XE9xmSimyNY';
  const heroVideoThumbnail = `https://img.youtube.com/vi/${heroVideoId}/maxresdefault.jpg`;
  const heroVideoSrc = `https://www.youtube.com/embed/${heroVideoId}?autoplay=1&rel=0`;

  const getYouTubeThumbnail = (embedUrl: string) => {
    const videoId = embedUrl.split('/embed/')[1]?.split('?')[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

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
      question: "Do you have parking at the therapy centres? How do we get there?",
      answer: "At FlowMotion Hydrotherapy Centre, yes there is easy free parking - you can drive your car right up to the door with the acupuncture room a few steps from the doorway. So this location is ideal for large, less mobile dogs or for cats and rabbits who want a quiet space and car transport.\n\nFido's of Fitzrovia is in the heart of London - there is no allocated free parking but there are numerous transport links and taxis can drop off right outside the door. There's also a lovely doggy shop and other wellness services on site.\n\nStudley Green Community Centre is just off Junction 5/Stokenchurch of the M40 and there is masses of free parking."
    },
    {
      question: "Are your clinics inside a vet surgery?",
      answer: "No, we are intentionally located in non-surgery spaces to minimise the association for pets who feel stress when visiting a vet clinic. The timings and locations have been chosen to give your pet a calm, individual experience away from others, and minimal or zero waiting time.  If you arrive early, you can wait in your car right outside the door (FlowMotion and Kite's Nest), have a sniff around the park (Kite's Nest) or have a browse in the doggy boutique (Fido's)"
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
    },
    {
      question: "Do you treat rabbits?",
      answer: "Yes, we do, particularly for the pain associated with osteoarthritis. Since rabbits are particularly sensitive to stress and need special attention, please contact us to discuss the best option for them regarding appointment arrangements"
    }
  ];

  const teamBios = [
    {
      name: 'Dr Alastair Greenway',
      credentials: 'BVM&S MRCVS ABVA',
      photo: '/al-gva-bw.jpg',
      alt: 'Dr Alastair Greenway',
      bio: [
        'Graduating in 1995, Alastair has a wealth of medical and surgical experience in large, small and equine patients.',
        'Recognising the significance of acupuncture over 20 years ago as an effective treatment modality, he was an early adopter of the discipline and trained on the first recognised UK course with the ABVA.',
        'He has since treated hundreds of dogs, cats and horses throughout the South East, using acupuncture to manage a variety of painful and chronic clinical conditions.',
      ],
    },
    {
      name: 'Dr Claire Greenway',
      credentials: 'BVM&S MRCVS ABVA',
      photo: '/claire-GVA-bw.jpg',
      alt: 'Dr Claire Greenway',
      bio: [
        'Graduating in 1997, Claire\'s early veterinary experience spanned farm, equine and the charity sector in the UK and abroad, with the majority of her medical, surgical and emergency work being in small animal practice.',
        'Her interest in acupuncture developed from a desire to enhance the quality of daily life for pet families living with chronic pain and mobility issues in a way that is focused, effective and kind on the bodies of older patients.',
        'She has recently gained the WSAVA Certification in Pain Management and is a Council Member of the Association of British Veterinary Acupuncturists.',
      ],
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Greenway Veterinary Acupuncture',
    description: 'Veterinary acupuncture for dogs and cats in London. Natural pain relief, mobility support, and post-operative recovery.',
    url: 'https://acupuncture-vet.co.uk',
    telephone: '03333397274',
    email: 'office@acupuncture-vet.co.uk',
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    location: [
      {
        '@type': 'Place',
        name: 'Flowmotion',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Unit 7, Bow Triangle Business Centre, Eleanor Street',
          addressLocality: 'London',
          postalCode: 'E3 4UR',
          addressCountry: 'GB',
        },
      },
      {
        '@type': 'Place',
        name: "Fido's of Fitzrovia",
        address: {
          '@type': 'PostalAddress',
          streetAddress: '87 Great Portland St',
          addressLocality: 'London',
          postalCode: 'W1W 7LU',
          addressCountry: 'GB',
        },
      },
      {
        '@type': 'Place',
        name: "Kite's Nest",
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Wycombe Road, Studley Green',
          addressLocality: 'High Wycombe',
          postalCode: 'HP14 3UY',
          addressCountry: 'GB',
        },
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Greenway Veterinary Acupuncture | Natural Pain Relief for Pets in London"
        description="Veterinary acupuncture for dogs and cats in London. Natural pain relief, mobility support, and post-operative recovery. RCVS registered, ABVA members. Book a home visit or clinic appointment."
        path="/"
        jsonLd={[localBusinessSchema, faqSchema]}
      />
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-32 pt-36">
        {/* Background Image */}
        <div className="absolute inset-0 -top-32 z-0">
          <img 
            src={heroImage} 
            alt="Dog and cat together" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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
            {isHeroVideoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={heroVideoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <button
                onClick={() => setIsHeroVideoPlaying(true)}
                className="relative w-full h-full group cursor-pointer"
                aria-label="Play introduction video"
              >
                <img
                  src={heroVideoThumbnail}
                  alt="Preview of veterinary acupuncture video"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </button>
            )}
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
                We believe in an integrated approach that complements and supports the treatment plan made with your primary veterinary surgeon. Co-ordination with other professionals involved in your pet's health and well-being, such as veterinary physiotherapists, massage and hydrotherapists, is also welcomed and greatly valued.
              </p>
              <p className="text-lg text-primary-foreground/80">
                This collaboration enhances the effects of each therapy, reaching for our shared goal of happy pet-families, living long and well together.
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
      <section id="how-it-works" className="bg-primary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              <div className="flex items-center gap-4 mb-6 min-h-[5rem]">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="bg-accent/10 p-4 rounded-xl shrink-0"
                >
                  <Home className="text-accent w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Home Visit</h3>
                  <p className="text-accent text-sm font-medium">Limited Availability — <em>Low Mobility Pet Families Prioritised</em></p>
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
                    <h4 className="text-lg text-foreground mb-1 font-medium">Choose Home Visit</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      In the comfort of your pet's familiar environment. Ideal for families with transport or mobility challenges.
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
                    <h4 className="text-lg text-foreground mb-1 font-medium">Registration</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll confirm availability in your area, find out a bit more about your pet from you and liaise with your vet.
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
                      We'll send you the next available home visit slot.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-4 rounded-xl transition-all group-hover:shadow-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Contact us for Availability
                </Link>
                <p className="text-muted-foreground text-xs mt-2 invisible" aria-hidden="true">*Appointments cancelled with less than 24 hours' notice incur a 30% fee.</p>
              </div>
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
              <div className="flex items-center gap-4 mb-6 min-h-[5rem]">
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="bg-accent p-4 rounded-xl shadow-lg shrink-0"
                >
                  <MapPin className="text-accent-foreground w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground">Clinic Visit</h3>
                  <p className="text-accent text-sm font-medium">Instant Booking — <em>At therapy centres with parking and transport links</em></p>
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
                    <h4 className="text-lg text-foreground mb-1 font-medium">Choose Visit Us</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Visit one of our London or Chiltern locations for an in-clinic acupuncture session
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
                    <h4 className="text-lg text-foreground mb-1 font-medium">Registration</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Add your details on-line and we'll follow up to find out a bit more about your pet and liaise with your vet.
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
                      Book instantly through our calendar with an online payment. Manage or move your appointment up to 24 hours before*
                    </p>
                  </div>
                </motion.div>
              </div>

              <div>
                <a
                  href="https://app.conciergevet.co.uk/book/gva-0f4570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-xl font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  Book your clinic appointment now
                </a>
                <p className="text-muted-foreground text-xs mt-2 text-center">*Appointments cancelled with less than 24 hours' notice incur a 30% fee.</p>
              </div>
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
            <div className="bg-secondary rounded-2xl p-8 border-2 border-primary/20 hover:border-accent transition-all hover:shadow-xl flex flex-col md:grid md:grid-rows-subgrid md:row-span-4">
              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">Initial Home Visit</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive consultation and treatment in the comfort and familiarity of your home. Contact us for availability
                </p>
              </div>
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-primary/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£192</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Full review of your pet's clinical history and co-ordination with your vet</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">1 hour home visit from a RCVS veterinary surgeon (ABVA)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Physical examination including musculoskeletal and neurological assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Mobility and gait analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Professional acupuncture treatment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Expert advice on exercise, home environment and adjustments to help your pet family</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Advice on local physiotherapist options</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="w-full text-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium self-end"
              >
                Contact Us Today
              </Link>
            </div>

            {/* Repeat Home-Visit */}
            <div className="bg-secondary rounded-2xl p-8 border-2 border-primary/20 hover:border-accent transition-all hover:shadow-xl flex flex-col md:grid md:grid-rows-subgrid md:row-span-4">
              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">Repeat Home-Visit</h3>
                <p className="text-sm text-muted-foreground">
                  Convenient follow-up sessions at home. Limited slots available
                </p>
              </div>
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-primary/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£168</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">30-45 minute home revisit</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Re-assessment and examination by the same vet</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Acupuncture treatment tailored to your pet's progress</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Continued advice on supportive complementary therapies</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="w-full text-center border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium self-end"
              >
                Contact Us Today
              </Link>
            </div>

            {/* In-Clinic Treatment */}
            <div className="bg-accent/5 rounded-2xl p-8 border-2 border-accent hover:border-accent/80 transition-all hover:shadow-xl flex flex-col md:grid md:grid-rows-subgrid md:row-span-4 relative overflow-hidden">
              {/* Popular badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">In-Clinic Treatment</h3>
                <p className="text-sm text-muted-foreground">
                  Calm, comfortable acupuncture sessions in our clinics
                </p>
              </div>
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-accent/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-accent">£162 / £120</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Full review of your pet's clinical history and co-ordination with your vet</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">30 or 45 minute appointment with a RCVS veterinary surgeon (ABVA)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Physical examination including mobility assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Professional acupuncture treatment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Convenient, pet-friendly choice of locations</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-foreground text-sm">Instant booking without waiting times</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://app.conciergevet.co.uk/book/gva-0f4570"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg transition-all font-medium shadow-md self-end"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="relative bg-primary py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-16 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-primary-foreground text-center mb-4"
          >
            Our Locations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-primary-foreground/80 text-lg mb-12"
          >
            Visit us at one of our partner locations across London and The Chilterns
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fido's of Fitzrovia",
                description: "Located in the heart of London, between Regents Park and Oxford Street - ideal for mobile or portable dogs, with the bonus of on-site boutique doggy shopping, grooming and wellbeing services",
                address: "87 Great Portland St, London, W1W 7LU",
                mapQuery: "Fido's+of+Fitzrovia+87+Great+Portland+St+London+W1W+7LU",
                mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fido's+of+Fitzrovia+87+Great+Portland+St+London+W1W+7LU",
              },
              {
                name: "FlowMotion Hydrotherapy",
                description: "Located in Bow, East London with free parking and drive-up access - ideal for less mobile dogs and for cats, rabbits or reactive dogs who need a dog-free, quiet environment",
                address: "Unit 7, Bow Triangle Business Centre, Eleanor Street, London, E3 4UR",
                mapQuery: "Flowmotion+Unit+7+Bow+Triangle+Business+Centre+Eleanor+Street+London+E3+4UR",
                mapsUrl: "https://www.google.com/maps/search/?api=1&query=Flowmotion+Unit+7+Bow+Triangle+Business+Centre+Eleanor+Street+London+E3+4UR",
              },
              {
                name: "Kite's Nest",
                description: "Located within the Community Centre at Studley Green, just off the M40 between High Wycombe and Oxford.  A quiet, peaceful space with plenty of free parking - ideal for all dogs, cats and rabbits, with the bonus of a dog-friendly garden centre and cafe opposite",
                address: "Wycombe Road, Studley Green, High Wycombe, HP14 3UY",
                mapQuery: "Community+Centre+Studley+Green+Wycombe+Road+High+Wycombe+HP14+3UY",
                mapsUrl: "https://www.google.com/maps/search/?api=1&query=Community+Centre+Studley+Green+Wycombe+Road+High+Wycombe+HP14+3UY",
              },
            ].map((location, i) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-border"
              >
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title={`Map of ${location.name}`}
                    src={`https://www.google.com/maps?q=${location.mapQuery}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif text-foreground mb-1">{location.name}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{location.description}</p>
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-accent hover:underline transition-colors"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    {location.address}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative bg-card py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-serif text-foreground text-center mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto space-y-4 text-center mb-12"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              Drs Alastair and Claire Greenway are both graduates of the Royal (Dick) Veterinary College, University of Edinburgh, and members of the Royal College of Veterinary Surgeons (RCVS) and the Association of British Veterinary Acupuncturists (ABVA).
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              They are based in The Chilterns, providing acupuncture for pet families from Oxford to Essex.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamBios.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-secondary/60 border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid sm:grid-cols-[140px_1fr] gap-6 items-start">
                  <img
                    src={person.photo}
                    alt={person.alt}
                    className="w-full sm:w-[140px] aspect-[4/5] object-cover rounded-xl border border-border shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-2xl font-serif text-foreground">{person.name}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{person.credentials}</p>
                    <div className="space-y-3">
                      {person.bio.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-sm text-foreground/80 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
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
                  onClick={() => {
                    const nextOpen = openFaqIndex === index ? null : index;
                    setOpenFaqIndex(nextOpen);
                    if (playingVideo !== null && playingVideo !== nextOpen) {
                      setPlayingVideo(null);
                    }
                  }}
                  className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-accent/5 transition-colors rounded-t-lg"
                >
                  <span className="text-lg text-primary-foreground font-medium pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-accent flex-shrink-0 transition-transform duration-500 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-primary-foreground/80 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                      {faq.video && openFaqIndex === index && (
                        <div className="mt-6 w-full aspect-video">
                          {playingVideo !== index ? (
                            <button
                              onClick={() => setPlayingVideo(index)}
                              className="relative w-full h-full group cursor-pointer"
                            >
                              <img
                                src={getYouTubeThumbnail(faq.video)}
                                alt="Veterinary acupuncture session with a relaxed dog"
                                className="w-full h-full object-cover rounded-lg"
                                loading="lazy"
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
                              src={`${faq.video}${faq.video.includes('?') ? '&' : '?'}autoplay=1&rel=0`}
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
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors inline-block font-medium shadow-lg">
              Book now
            </button>
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
