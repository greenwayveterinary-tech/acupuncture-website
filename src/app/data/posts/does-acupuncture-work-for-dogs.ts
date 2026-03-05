import type { BlogPost } from '@/app/types/blog';
import heroImg from '@/assets/4f7fa0999a01cc24cf63ce2a5e72fbc69929e953.jpg';

export const doesAcupunctureWorkForDogs: BlogPost = {
  slug: 'does-acupuncture-work-for-dogs',
  title: 'Does Acupuncture Really Work for Dogs? A Vet\'s Honest Answer',
  subtitle: 'A veterinary acupuncturist with 25 years of clinical experience explains the science, evidence and realistic expectations',
  description:
    'A veterinary acupuncturist with 25 years of clinical experience explains the science, evidence and realistic expectations for dog acupuncture.',
  category: 'Evidence & Science',
  authorSlug: 'alastair-greenway',
  publishedAt: '2026-03-01',
  readingTime: 9,
  heroImage: heroImg,
  tags: [
    'acupuncture for dogs',
    'does dog acupuncture work',
    'veterinary acupuncture evidence',
    'dog acupuncture UK',
    'acupuncture for dogs arthritis',
  ],
  relatedSlugs: [
    'first-acupuncture-session-what-to-expect',
    'acupuncture-arthritis-dogs',
    'veterinary-acupuncture-cost-uk',
  ],
  content: [
    // --- Opening ---
    {
      type: 'emphasizedParagraph',
      text: 'I understand the scepticism. When most people think of acupuncture, they picture something vaguely mystical. Talk of energy channels, maybe some relaxation music. It sounds more like a spa treatment than veterinary medicine.',
    },
    {
      type: 'paragraph',
      text: 'So when I tell a dog owner that placing thin needles into specific points on their dog\'s body will help manage chronic pain, I\'m used to the look. Polite interest, slight narrowing of the eyes, and an unspoken question somewhere behind it all.',
    },
    {
      type: 'paragraph',
      text: 'It\'s a fair reaction. I had a similar one myself, about 25 years ago.',
    },

    // --- How I came to veterinary acupuncture ---
    {
      type: 'heading',
      level: 2,
      text: 'How I came to veterinary acupuncture',
      id: 'how-i-came-to-acupuncture',
    },
    {
      type: 'paragraph',
      text: 'I graduated from the Royal (Dick) Veterinary College at Edinburgh University in 1995 with a firmly conventional training. Surgery, pharmacology, diagnostic imaging, evidence-based medicine. I wasn\'t looking for anything alternative.',
    },
    {
      type: 'paragraph',
      text: 'But in clinical practice, I kept encountering the same problem. Dogs with chronic pain, particularly arthritis, where the conventional options were either insufficient or poorly tolerated. NSAIDs helped many patients, but some had gastrointestinal sensitivity. Others had concurrent liver or kidney disease that limited what we could safely prescribe. A proportion simply needed more on top of their existing medication.',
    },
    {
      type: 'paragraph',
      text: 'I trained in veterinary acupuncture on the first recognised UK course run by the Association of British Veterinary Acupuncturists (ABVA). What I found was a treatment with a growing scientific evidence base, well-characterised neurophysiological mechanisms, and consistent clinical results. Not in every case. Not miraculous results. But consistent enough that it became a central part of how I manage pain across my caseload.',
    },

    // --- The neurophysiology ---
    {
      type: 'heading',
      level: 2,
      text: 'The neurophysiology: how acupuncture works',
      id: 'neurophysiology',
    },
    {
      type: 'paragraph',
      text: 'The traditional Chinese medicine framework has historical significance, and some practitioners use it effectively. But you don\'t need to accept the concept of energy meridians to understand why acupuncture produces clinical effects. The neurophysiological mechanisms are increasingly well characterised.',
    },
    {
      type: 'paragraph',
      text: 'When a needle is inserted at a specific acupuncture point, it stimulates nerve endings at sites where nerves and blood vessels travel closely together. The impulses travel to the spinal cord and brain, triggering several measurable responses.',
    },
    {
      type: 'paragraph',
      text: '<strong>Endogenous opioid release.</strong> Acupuncture stimulates the release of endorphins, enkephalins and endomorphins. These bind to opioid receptors in the brain and spinal cord, producing genuine analgesia. This has been measured in both human and animal studies and is one of the best-established mechanisms.',
    },
    {
      type: 'paragraph',
      text: '<strong>Descending pain inhibition.</strong> Acupuncture activates the descending inhibitory pain pathway through the release of serotonin (5-hydroxytryptamine) and noradrenaline. In practical terms, the brain sends signals back down the spinal cord that dampen incoming pain messages. Recent research has demonstrated that acupuncture activates specific supraspinal pathways within the brain to achieve this effect.',
    },
    {
      type: 'paragraph',
      text: '<strong>Anti-inflammatory effects.</strong> At the spinal level, acupuncture reduces the release of pro-inflammatory cytokines including interleukin-1 beta, interleukin-6 and cyclooxygenase-2. This means it has a direct anti-inflammatory action, not just a pain-masking one. There is also emerging evidence that acupuncture may inhibit microglial activation, which plays a key role in neuropathic pain states.',
    },
    {
      type: 'paragraph',
      text: '<strong>Local circulatory and muscular effects.</strong> Needle insertion causes local vasodilation, improving blood flow to the area. This increases oxygen delivery, removes inflammatory waste products, and improves healing conditions. There is also a direct muscle relaxation effect, which is particularly relevant for dogs with compensatory muscle tension from chronic lameness.',
    },
    {
      type: 'callout',
      variant: 'science',
      title: 'Peer-reviewed basis',
      text: 'Dewey and Xie published a comprehensive review in the <em>Open Veterinary Journal</em> (2021) summarising two decades of evidence for the scientific basis of acupuncture in veterinary pain management. The mechanisms described above are real, measurable and reproducible.',
    },

    // --- What the evidence says ---
    {
      type: 'heading',
      level: 2,
      text: 'What the evidence says',
      id: 'evidence',
    },
    {
      type: 'paragraph',
      text: 'The evidence base for veterinary acupuncture has strengthened considerably in recent years. It\'s important to be accurate about what it shows.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Professional body endorsement',
      id: 'professional-endorsement',
    },
    {
      type: 'paragraph',
      text: 'The 2015 AAHA/AAFP Pain Management Guidelines stated that acupuncture "offers a compelling and safe method for pain management in veterinary patients and should be strongly considered as a part of multimodal pain management plans." The updated 2022 AAHA guidelines continued to highlight acupuncture among non-pharmacological methods recommended for integration into pain management strategies.',
    },
    {
      type: 'paragraph',
      text: 'The 2022 WSAVA Global Pain Management Guidelines, published in the <em>Journal of Small Animal Practice</em>, include acupuncture in their recommendations and specifically note that the evidence of its efficacy has increased for certain pain conditions.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Clinical outcome data',
      id: 'clinical-outcome-data',
    },
    {
      type: 'paragraph',
      text: 'A 2017 prospective study published in the <em>Canadian Veterinary Journal</em> followed 181 dogs with neurological and musculoskeletal diseases treated with acupuncture alone or combined with analgesics. The success rates were substantial:',
    },
    {
      type: 'keyTakeaway',
      title: 'Key findings from the 2017 study',
      points: [
        '<strong>79%</strong> improvement on the Helsinki Chronic Pain Index',
        '<strong>84%</strong> improvement in owner-assessed quality of life',
        '<strong>78%</strong> improvement on visual analogue scales for both pain and locomotion',
        'Dogs with musculoskeletal conditions showed significantly greater improvement than those with neurological disorders',
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Osteoarthritis evidence',
      id: 'osteoarthritis-evidence',
    },
    {
      type: 'paragraph',
      text: 'Multiple studies have investigated acupuncture for canine osteoarthritis with encouraging results. Published trials have reported improvements in validated chronic pain scores (including the Canine Brief Pain Inventory), owner-assessed function, and veterinary-assessed locomotion.',
    },
    {
      type: 'paragraph',
      text: 'A 2020 randomised, placebo-controlled, blinded clinical trial published in <em>BMC Veterinary Research</em> found that while objective gait analysis measures didn\'t reach significance, owner-completed clinical metrology instruments did record treatment response, consistent with real-world clinical observations that owners can detect functional improvements.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Intervertebral disc disease',
      id: 'ivdd-evidence',
    },
    {
      type: 'paragraph',
      text: 'The evidence for acupuncture in IVDD is notable. Research has shown that electroacupuncture combined with standard medical treatment led to faster recovery of ambulation and deep pain sensation in dogs with thoracolumbar disc disease compared to conventional treatment alone.',
    },
    {
      type: 'paragraph',
      text: 'One study found electroacupuncture was more effective (79% success) than delayed decompressive surgery (40%) for return of ambulation in dogs with severe (grades IV and V) thoracolumbar IVDD. A 2024 critically appraised topic published in <em>Veterinary Evidence</em> assessed the evidence for acupuncture in thoracolumbar disc extrusion and rated the strength of evidence as moderate.',
    },
    {
      type: 'paragraph',
      text: 'A 2025 randomised controlled trial published in the journal <em>Animals</em> evaluated laser acupuncture in dogs with osteoarthritis and found significant improvements in pain scores in the treatment group after 30 days, while the control group showed no change.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'The honest caveats',
      id: 'honest-caveats',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'An important distinction',
      text: 'The 2024 <em>Veterinary Evidence</em> review assessed acupuncture as a sole analgesic (without other pain medication) and concluded the evidence for that specific application is weak. The strongest case for acupuncture is as part of a multimodal approach, used alongside conventional treatment rather than replacing it entirely. This is exactly how the AAHA, AAFP and WSAVA guidelines recommend its use, and it reflects how I use it in clinical practice.',
    },
    {
      type: 'paragraph',
      text: 'A 2024 review in the <em>Journal of Small Animal Practice</em> also noted that while published studies report improvements in validated pain scores and subjective outcome measures, further larger-scale randomised controlled trials would strengthen the evidence base further.',
    },

    // --- What acupuncture treats in dogs ---
    {
      type: 'divider',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What acupuncture treats in dogs',
      id: 'what-it-treats',
    },
    {
      type: 'paragraph',
      text: 'Based on the evidence and 25 years of clinical experience, the conditions where I see the most consistent benefit are:',
    },
    {
      type: 'paragraph',
      text: '<strong>Osteoarthritis.</strong> This is the most common indication and where the evidence is strongest. Dogs with chronic joint pain from hip, elbow, stifle or spinal arthritis frequently show measurable improvement in mobility and comfort. I see this regularly across breeds, particularly Labradors, Golden Retrievers and German Shepherds where degenerative joint disease is prevalent.',
    },
    {
      type: 'paragraph',
      text: '<strong>Spinal conditions.</strong> Spondylosis, intervertebral disc disease and chronic back pain are responsive to treatment. Electroacupuncture, where a gentle electrical current passes between needles, is particularly useful for nerve-related pain and in supporting recovery from disc disease. The published IVDD data supports this clinical observation.',
    },
    {
      type: 'paragraph',
      text: '<strong>Compensatory muscle pain.</strong> A dog favouring a painful limb overloads its back, shoulders and opposite leg. These secondary myofascial trigger points and muscle tensions often account for a significant proportion of the dog\'s discomfort. Acupuncture is effective at releasing these compensatory patterns, and this is an area where clinical response is often rapid and visible.',
    },
    {
      type: 'paragraph',
      text: '<strong>Post-surgical rehabilitation.</strong> After orthopaedic procedures such as cruciate ligament repair or spinal surgery, acupuncture supports recovery by managing pain, reducing muscle spasm and promoting tissue healing. I work alongside the primary vet and physiotherapist as part of the rehabilitation team.',
    },
    {
      type: 'paragraph',
      text: '<strong>Cases where conventional analgesia is limited.</strong> Some dogs have hepatic or renal compromise that restricts NSAID use. Others have gastrointestinal sensitivity. For these patients, acupuncture provides meaningful pain relief without adding systemic drug load. This is one of the most valuable clinical applications.',
    },

    // --- What acupuncture does not do ---
    {
      type: 'heading',
      level: 2,
      text: 'What acupuncture does not do',
      id: 'what-it-doesnt-do',
    },
    {
      type: 'paragraph',
      text: 'Acupuncture does not cure arthritis or regenerate cartilage. It manages pain, improves function, and by allowing more normal movement, may help slow the secondary consequences of chronic lameness.',
    },
    {
      type: 'paragraph',
      text: 'It is not a replacement for surgery when surgery is indicated. A ruptured cruciate ligament needs surgical repair. Acupuncture can support pain management before and rehabilitation after surgery, but it cannot fix structural damage.',
    },
    {
      type: 'quote',
      variant: 'pullquote',
      text: 'If I don\'t see clinical improvement after three to four sessions, I discuss that honestly with the owner. There is no justification for continuing treatment that isn\'t producing results.',
    },
    {
      type: 'paragraph',
      text: 'It does not work equally well for every patient. Based on published data and my own clinical experience, roughly 75\u201380% of dogs show meaningful improvement. For the remainder, the response may be minimal.',
    },
    {
      type: 'paragraph',
      text: 'And it does not replace proper diagnosis. Before any acupuncture treatment, we need to understand the underlying condition. That means thorough clinical examination and, where appropriate, diagnostic imaging. I will not treat a patient without a clear clinical picture.',
    },

    // --- What a session involves ---
    {
      type: 'heading',
      level: 2,
      text: 'What a session involves',
      id: 'what-a-session-involves',
    },
    {
      type: 'paragraph',
      text: 'Every session begins with a clinical assessment. I watch the dog move, palpate the spine and limbs for areas of tension and pain response, and review the current management plan. This hands-on evaluation is important because it determines where the needles need to go. Acupuncture isn\'t a fixed recipe applied the same way each time; the point selection is tailored to what I find on the day.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Most dogs relax during treatment',
      text: 'The needles are very fine, considerably thinner than injection needles. Most dogs settle within a minute or two of placement. A large proportion become visibly relaxed or fall asleep during treatment. This is a consistent observation across thousands of sessions and reflects the endogenous opioid release that the research describes.',
    },
    {
      type: 'paragraph',
      text: 'Needles remain in place for 10 to 20 minutes depending on the individual case. The standard protocol begins with an initial course of three to four weekly sessions, followed by maintenance at gradually increasing intervals. Most of my long-term patients settle into a rhythm of every four to six weeks, though this varies with severity and individual response.',
    },

    // --- The regulatory position ---
    {
      type: 'heading',
      level: 2,
      text: 'The regulatory position',
      id: 'regulatory-position',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'UK law',
      text: 'Under UK law, acupuncture on animals may only be performed by a qualified veterinary surgeon. The anatomical knowledge required to place needles safely, understanding the relationship between needle placement and underlying nerves, blood vessels and organs, requires veterinary training. The Royal College of Veterinary Surgeons emphasises evidence-based decision making, and both Claire and I are registered members of the ABVA, which maintains professional standards for education and practice in veterinary acupuncture.',
    },

    // --- The summary ---
    {
      type: 'heading',
      level: 2,
      text: 'The summary',
      id: 'summary',
    },
    {
      type: 'paragraph',
      text: 'Veterinary acupuncture is a treatment with well-characterised neurophysiological mechanisms, growing clinical evidence, and endorsement from the major professional bodies (AAHA, AAFP, WSAVA) as part of multimodal pain management. It is not a cure-all, it does not work for every patient, and the evidence base would benefit from further large-scale trials. But for chronic pain, musculoskeletal conditions and rehabilitation, it is a genuinely useful clinical tool.',
    },
    {
      type: 'paragraph',
      text: 'I would not have spent 25 years practising it, referring vets would not send me their patients, and the 78 veterinary surgeries that refer to our practice would not continue to do so, if it did not produce real clinical results.',
    },
    {
      type: 'emphasizedParagraph',
      text: 'If your dog has arthritis, chronic pain, spinal problems, or is recovering from surgery, acupuncture is worth discussing with your vet. Not as a replacement for conventional treatment, but as part of a considered, multimodal approach. The two work better together.',
    },
  ],
};
