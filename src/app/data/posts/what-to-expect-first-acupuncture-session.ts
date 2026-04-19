import type { BlogPost } from '@/app/types/blog';

export const whatToExpectFirstAcupunctureSession: BlogPost = {
  slug: 'what-to-expect-first-acupuncture-session',
  title: "What to Expect at Your Pet's First Acupuncture Session",
  subtitle:
    'A veterinary acupuncturist walks you through the first visit, from arrival to aftercare, so you and your pet know exactly what is coming.',
  description:
    'A vet-written guide to your pet\'s first acupuncture session: what the consultation looks like, how the needles feel, how pets usually react, session length, and what to do afterwards.',
  category: 'Pet Owner Guides',
  authorSlug: 'claire-greenway',
  publishedAt: '2026-04-19',
  readingTime: 7,
  heroImage: '/blog/what-to-expect-first-acupuncture-session.jpg',
  ogImage: '/blog/og-what-to-expect-first-acupuncture-session.jpg',
  heroImageAlt:
    'A small tan terrier lying relaxed on a bed with a single fine acupuncture needle placed on the top of its head, being gently stroked by its owner.',
  tags: [
    'first pet acupuncture session',
    'what happens dog acupuncture',
    'pet acupuncture what to expect',
    'acupuncture session dogs',
    'cat acupuncture what to expect',
  ],
  relatedSlugs: ['does-acupuncture-work-for-dogs'],
  content: [
    // --- Opening ---
    {
      type: 'emphasizedParagraph',
      text: 'Most owners who ring me to book a first acupuncture session are anxious. Not about acupuncture, exactly. They are anxious because their pet is in pain, they have tried a lot of other things, and they are worried this appointment might be stressful on top of everything else.',
    },
    {
      type: 'paragraph',
      text: 'I understand that. The best thing I can do before your first visit is tell you exactly what is going to happen, so there are no surprises. Acupuncture is a gentle, unhurried treatment, and the session is designed to put your pet at ease rather than rush them through a protocol.',
    },
    {
      type: 'paragraph',
      text: 'Here is what a first session with us actually looks like.',
    },

    // --- Before you arrive ---
    {
      type: 'heading',
      level: 2,
      text: 'Before you arrive',
      id: 'before-you-arrive',
    },
    {
      type: 'paragraph',
      text: 'You can feed and exercise your pet as normal on the day of their first appointment. There is no need to fast them. A gentle walk before a clinic visit can help dogs settle; a cat should travel in their usual carrier with a familiar blanket inside.',
    },
    {
      type: 'paragraph',
      text: 'When you book, we will ask you to send across your pet\'s recent clinical history, any imaging reports, and the current medication list. Reading that before we meet means I can spend our time together focused on your pet rather than on paperwork.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'What to bring',
      text: 'A list of current medications and doses, any recent blood results or X-rays if your vet has not already forwarded them, and anything your pet finds comforting. For nervous dogs that often means their favourite treats; for cats, a piece of bedding that smells of home.',
    },

    // --- Consultation ---
    {
      type: 'heading',
      level: 2,
      text: 'The consultation comes first',
      id: 'consultation',
    },
    {
      type: 'paragraph',
      text: 'We allow a full hour for a first appointment. The needles themselves only account for 15 to 20 minutes of that. The rest is consultation and examination, and in my experience, this is the part of the visit that most improves the treatment plan.',
    },
    {
      type: 'paragraph',
      text: 'I will ask you to talk me through what you are seeing at home. When did you first notice a change? What do they do on a good day, and what do they avoid on a bad one? How are they getting up from lying down, managing stairs, getting into the car? Owners notice things that never come across in a short consulting-room visit, and those details shape where I place the needles.',
    },
    {
      type: 'quote',
      variant: 'pullquote',
      text: 'Owners see their pets across hundreds of hours at home. That picture is more useful to me than any ten-minute clinical exam.',
    },

    // --- Examination ---
    {
      type: 'heading',
      level: 2,
      text: 'A hands-on examination',
      id: 'examination',
    },
    {
      type: 'paragraph',
      text: 'After the conversation, I watch your pet move around the room and, where the space allows, walk them up and down for a few strides. I want to see the posture they naturally adopt, where they carry tension, and whether one limb is taking less weight than the others.',
    },
    {
      type: 'paragraph',
      text: 'Then I palpate. I go slowly along the spine and over the major muscle groups, feeling for areas of heat, tension, spasm, or reactive points. Pets tell you a lot with their body language during this part. An ear flick, a slight shift of weight, a turn of the head. These responses map the areas that need most attention, and they often explain symptoms that are not obvious from a gait assessment alone.',
    },
    {
      type: 'paragraph',
      text: 'Only after that do I decide which points to use. Acupuncture is not a fixed recipe. The selection is tailored to what I find on the day, and it will often evolve from one session to the next as your pet\'s body responds.',
    },

    // --- Needle placement ---
    {
      type: 'heading',
      level: 2,
      text: 'How the needles go in',
      id: 'needles',
    },
    {
      type: 'paragraph',
      text: 'The needles we use are single-use, sterile, and very fine. They are considerably thinner than the needles your vet uses for vaccinations or blood tests, and the sensation is quite different. Most pets do not react at all as the needles are placed. A small number feel a particular point more than others, in which case we simply remove that needle and choose an alternative location.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Does it hurt?',
      text: 'Around 95% of pets show no reaction to needle placement at all. When they do react, it is usually a quick flick or shift, not a pain response, and it settles as soon as the needle is adjusted or swapped. We deliberately use fewer needles in a first session and build up gradually once we know how your pet responds.',
    },
    {
      type: 'paragraph',
      text: 'For some conditions, particularly nerve-related pain and spinal cases, I may use electroacupuncture. That is a gentle pulsed current run between two needles, set at an intensity low enough that you can barely see the muscle twitch. Most dogs sleep through it. I will always explain what I am doing before I do it.',
    },

    // --- During treatment ---
    {
      type: 'heading',
      level: 2,
      text: 'What happens while the needles are in',
      id: 'during-treatment',
    },
    {
      type: 'paragraph',
      text: 'Once the needles are placed, your pet stays with you, on their bed or a blanket on the floor. They are not restrained. You can stroke them, talk to them, or just sit quietly. I will be there the whole time, watching their breathing, their posture, and their expression for signs the treatment is taking effect.',
    },
    {
      type: 'keyTakeaway',
      title: 'Reactions you are likely to see',
      points: [
        '<strong>Deep relaxation.</strong> Shoulders drop, breathing slows, many dogs and a fair number of cats fall asleep. This is the endorphin release the research describes.',
        '<strong>A big sigh or yawn.</strong> Often happens within the first few minutes. It is a reliable sign the nervous system has shifted into a calmer state.',
        '<strong>Stretching or repositioning.</strong> Some pets roll onto their side or stretch out a back leg. They are finding a more comfortable posture now that tension is starting to release.',
        '<strong>A little wriggle at first.</strong> Perfectly normal on a first visit. It almost always settles within a minute or two.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The first session is often the most interesting one for owners to watch. Pets who have been guarding a painful area for months will visibly let their weight shift onto it again as the muscle tension lets go.',
    },

    // --- Duration and frequency ---
    {
      type: 'heading',
      level: 2,
      text: 'How long sessions last and how many you will need',
      id: 'duration',
    },
    {
      type: 'paragraph',
      text: 'Needles are usually in place for 10 to 20 minutes. After the first session, follow-up appointments are shorter, around 30 to 45 minutes in total, because we already have the history and the treatment plan.',
    },
    {
      type: 'paragraph',
      text: 'For most conditions I recommend an initial course of three to four sessions, usually weekly or fortnightly. That block lets us assess how well your pet is responding before deciding on a longer-term plan. If we are not seeing useful change by the end of it, I will tell you honestly, and we will discuss whether to continue.',
    },
    {
      type: 'paragraph',
      text: 'Pets who respond well typically settle into a maintenance rhythm of every four to six weeks. Some need more, some need less. The interval is driven by how long the benefit lasts, not by a fixed schedule.',
    },

    // --- Home visits ---
    {
      type: 'heading',
      level: 2,
      text: 'Why many pets do better at home',
      id: 'home-visits',
    },
    {
      type: 'paragraph',
      text: 'We offer both clinic sessions and home visits, and there is a genuine clinical reason we keep the home visit option open. Pets who are stressed by travel or by a veterinary environment will have raised adrenaline, which masks pain. That makes the examination less accurate and the treatment less relaxing for them.',
    },
    {
      type: 'paragraph',
      text: 'At home, I can see how your pet moves on their own floor, how they navigate their own stairs, and how they get into their own bed. For cats especially, the difference is significant. No carrier, no car journey, no unfamiliar smells. They stay where they feel safe, and the needles go in while they sit on the sofa beside you.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Not sure which to choose?',
      text: 'If your pet is anxious about travel, has limited mobility, or you have multiple pets who would benefit from being seen together, a home visit is usually the better option. If they travel well and the timing of a clinic slot suits, the clinic works just as well. We are happy to talk it through on the phone before you book.',
    },

    // --- After the session ---
    {
      type: 'heading',
      level: 2,
      text: 'After the session',
      id: 'after',
    },
    {
      type: 'paragraph',
      text: 'Allow a quiet hour or two afterwards. Most pets are noticeably relaxed for the rest of the day. A smaller number are mildly sleepy, as though they have had a long walk. Very occasionally a pet will seem a little stiffer for 24 hours before improving, which is a normal treatment response and not a cause for concern.',
    },
    {
      type: 'paragraph',
      text: 'You do not need to change their routine. Normal walks, normal meals, normal access to stairs and beds. If anything, I encourage owners to keep an eye out for small improvements over the following three to five days. Are they getting up more easily in the morning? Following you up the stairs again? Asking for a longer walk? Those are the kinds of changes that tell us the treatment is working.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'We liaise with your vet',
      text: 'Acupuncture in the UK is only legal when performed by a qualified veterinary surgeon, and it works best as part of a joined-up plan. After every session I send a short treatment report to your primary vet, so they know what we have done and how your pet is responding.',
    },

    // --- Questions owners ask ---
    {
      type: 'heading',
      level: 2,
      text: 'Questions owners ask before the first visit',
      id: 'common-questions',
    },
    {
      type: 'paragraph',
      text: '<strong>Will I need to hold my pet still?</strong> No. Most animals settle voluntarily within the first few minutes. Your job is simply to be there and be reassuring.',
    },
    {
      type: 'paragraph',
      text: '<strong>What if my pet hates it?</strong> A small number of pets are not comfortable with needles. If that is the case, we stop. For very sensitive animals we can use laser acupuncture, which stimulates the same points without any needle. It is a useful alternative, particularly in anxious cats.',
    },
    {
      type: 'paragraph',
      text: '<strong>Can I stay in the room?</strong> Yes, always. You are the most familiar thing in your pet\'s world, and your presence makes the session easier for them.',
    },
    {
      type: 'paragraph',
      text: '<strong>How soon will I see a change?</strong> Some owners notice a difference after the first session, usually in the form of better sleep or easier movement the next morning. For most pets, the real picture emerges over three to four sessions as the treatment builds.',
    },

    // --- Close ---
    {
      type: 'divider',
    },
    {
      type: 'emphasizedParagraph',
      text: 'A first acupuncture session is, more than anything, a careful conversation and a hands-on examination. The needles are a small part of the hour we spend together. If you are considering booking, it is worth a phone call first so we can talk about whether acupuncture is likely to help your pet, and whether a home visit or clinic session would suit you both.',
    },
  ],
};
