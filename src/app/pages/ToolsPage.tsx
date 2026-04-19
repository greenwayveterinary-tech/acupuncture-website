import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/app/components/SEO';

// ─── CANDIDATE CHECKER ───────────────────────────────────────────────────────

const CANDIDATE_QUESTIONS = [
  {
    q: "What species is your pet?",
    options: ["Dog", "Cat", "Horse / Equine", "Rabbit or small animal"],
    scores: [3, 3, 3, 2],
  },
  {
    q: "What is the main reason you're considering acupuncture?",
    options: [
      "Arthritis or joint pain",
      "Back or neck pain / intervertebral disc disease",
      "Neurological condition (weakness, wobbliness, paralysis)",
      "Post-surgery recovery",
      "Anxiety, stress or behavioural issues",
      "Skin or allergic conditions",
      "General wellbeing / performance",
    ],
    scores: [3, 3, 3, 3, 2, 2, 2],
  },
  {
    q: "How long has your pet been experiencing these symptoms?",
    options: [
      "Less than 4 weeks (acute)",
      "1–6 months (subacute)",
      "More than 6 months (chronic)",
    ],
    scores: [2, 3, 3],
  },
  {
    q: "Has your pet had any previous treatment for this condition?",
    options: [
      "No treatment yet",
      "Pain medication only",
      "Physiotherapy or hydrotherapy",
      "Surgery",
      "Multiple treatments with limited success",
    ],
    scores: [2, 2, 3, 3, 3],
  },
  {
    q: "How would you describe your pet's current quality of life?",
    options: [
      "Significantly reduced — struggling daily",
      "Noticeably impacted — some good days",
      "Mildly affected — still mostly active",
    ],
    scores: [3, 3, 2],
  },
];

function getCandidateResult(score: number) {
  if (score >= 13) return {
    badge: "Excellent candidate",
    badgeClass: "bg-green-100 text-green-800",
    heading: "Your pet looks like a great candidate for acupuncture.",
    body: "Based on your answers, acupuncture is very likely to be beneficial. Many pets with this profile see meaningful improvements in comfort, mobility, and quality of life. We'd love to discuss a tailored treatment plan.",
  };
  if (score >= 9) return {
    badge: "Possible candidate",
    badgeClass: "bg-amber-100 text-amber-800",
    heading: "Acupuncture may well help your pet.",
    body: "There are good reasons to explore acupuncture for your pet's situation. A short consultation will help us confirm suitability and design the right approach.",
  };
  return {
    badge: "Needs assessment",
    badgeClass: "bg-red-100 text-red-800",
    heading: "We'd like to learn a little more.",
    body: "Based on your answers, acupuncture might still be appropriate but we'd want to assess your pet properly first. Please get in touch and we'll advise you honestly.",
  };
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-1 bg-primary/20 rounded-full mb-8">
      <div
        className="h-full bg-accent rounded-full transition-all duration-400 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function CandidateChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = CANDIDATE_QUESTIONS.length;
  const qIndex = step - 1;
  const isQuestion = step > 0 && step <= totalSteps;
  const isResult = step > totalSteps;
  const progress = isResult ? 100 : (step / totalSteps) * 100;

  function handleNext() {
    if (selected === null) return;
    setAnswers({ ...answers, [qIndex]: selected });
    setSelected(null);
    setStep(step + 1);
  }

  function handleBack() {
    if (step === 1) { setStep(0); setSelected(null); return; }
    setSelected(answers[step - 2] ?? null);
    setAnswers(prev => { const a = { ...prev }; delete a[qIndex]; return a; });
    setStep(step - 1);
  }

  function totalScore() {
    return Object.entries(answers).reduce((acc, [qi, si]) => {
      return acc + (CANDIDATE_QUESTIONS[Number(qi)]?.scores[si] ?? 0);
    }, 0);
  }

  if (step === 0) return (
    <div>
      <h2 className="text-3xl font-serif text-foreground mb-3">Is Acupuncture Right<br />for Your Pet?</h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">Answer 5 short questions to find out whether your pet is a good candidate for veterinary acupuncture — and receive a personalised assessment.</p>
      <button
        className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium"
        onClick={() => setStep(1)}
      >
        Start the Checker →
      </button>
    </div>
  );

  if (isQuestion) {
    const q = CANDIDATE_QUESTIONS[qIndex];
    return (
      <div>
        <ProgressBar progress={progress} />
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Question {step} of {totalSteps}</p>
        <p className="text-2xl font-serif text-foreground mb-6 leading-snug">{q.q}</p>
        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-5 py-3.5 rounded-lg border-2 transition-all text-sm ${
                selected === i
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-secondary border-primary/20 text-foreground hover:border-primary/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-muted-foreground underline underline-offset-2" onClick={handleBack}>← Back</button>
          <button
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={selected === null}
          >
            {step === totalSteps ? "See My Results →" : "Next →"}
          </button>
        </div>
      </div>
    );
  }

  const result = getCandidateResult(totalScore());
  return (
    <div>
      <ProgressBar progress={100} />
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-4 ${result.badgeClass}`}>
        {result.badge}
      </span>
      <h2 className="text-2xl font-serif text-foreground mb-4 leading-snug">{result.heading}</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">{result.body}</p>
      <hr className="border-primary/20 mb-6" />
      {!submitted ? (
        <>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Send my results + next steps</p>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none mb-3 text-sm"
          />
          <button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-colors font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed mb-6"
            onClick={() => email && setSubmitted(true)}
            disabled={!email}
          >
            Send My Results
          </button>
          <hr className="border-primary/20 mb-6" />
        </>
      ) : (
        <p className="text-sm text-green-700 mb-6">✓ Results sent to {email}</p>
      )}
      <Link
        to="/contact"
        className="block w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg transition-colors font-medium"
      >
        Book a Consultation
      </Link>
      <p className="text-xs text-muted-foreground text-center mt-3">Or call us to discuss your pet's needs</p>
    </div>
  );
}

// ─── PAIN SCORING ─────────────────────────────────────────────────────────────

const PAIN_CATEGORIES = [
  {
    label: "Posture & body language",
    desc: "How is your pet holding themselves?",
    anchors: ["Normal relaxed posture", "Slightly hunched or tense", "Guarded, rigid, or hunched back", "Extreme guarding or unable to rest comfortably"],
  },
  {
    label: "Movement & activity",
    desc: "How are they moving around?",
    anchors: ["Moving freely and willingly", "Slightly reluctant or stiff", "Obvious lameness or slow movement", "Refusing to move or unable to rise"],
  },
  {
    label: "Response to touch",
    desc: "Reaction when gently touching the affected area",
    anchors: ["No reaction", "Mild flinch or looks around", "Pulls away or vocalises", "Snaps, bites or reacts strongly"],
  },
  {
    label: "Vocalisation",
    desc: "Any sounds associated with pain?",
    anchors: ["Silent", "Occasional quiet whimper", "Regular whimpering or groaning", "Persistent crying or yelping"],
  },
  {
    label: "Demeanour & interest",
    desc: "Engagement with surroundings and owners",
    anchors: ["Bright, alert, interested in everything", "Quiet but responsive when approached", "Withdrawn, dull, limited interest", "Unresponsive or completely disengaged"],
  },
];

function getPainResult(total: number) {
  if (total <= 3) return { label: "Minimal pain", badgeClass: "bg-green-100 text-green-800", text: "Your pet shows few signs of significant pain. Monitoring is sensible, and acupuncture can still support overall wellbeing and prevent progression." };
  if (total <= 7) return { label: "Mild to moderate pain", badgeClass: "bg-amber-100 text-amber-800", text: "Your pet is showing meaningful signs of discomfort. This is often the ideal time to intervene — before pain becomes entrenched. Acupuncture has a strong evidence base for this level of pain." };
  if (total <= 11) return { label: "Moderate to severe pain", badgeClass: "bg-amber-100 text-amber-800", text: "Your pet appears to be in significant discomfort. A veterinary assessment is important. Acupuncture can be a powerful adjunct to pain management at this level." };
  return { label: "Severe pain", badgeClass: "bg-red-100 text-red-800", text: "Your pet is showing signs of severe pain and should see a vet promptly. Please contact us or your primary vet today. Acupuncture may form part of a multimodal pain management plan." };
}

function PainScoring() {
  const [scores, setScores] = useState<number[]>(Array(PAIN_CATEGORIES.length).fill(0));
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = PAIN_CATEGORIES.length;
  const isQuestion = step > 0 && step <= totalSteps;
  const isResult = step > totalSteps;
  const progress = isResult ? 100 : (step / totalSteps) * 100;
  const catIndex = step - 1;

  function setScore(val: number) {
    const s = [...scores];
    s[catIndex] = val;
    setScores(s);
  }

  if (step === 0) return (
    <div>
      <h2 className="text-3xl font-serif text-foreground mb-3">Pet Pain Score<br />Assessment</h2>
      <p className="text-muted-foreground mb-8 leading-relaxed">Use this simple scoring tool — based on established veterinary pain scales — to understand how much discomfort your pet may be experiencing right now.</p>
      <button
        className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium"
        onClick={() => setStep(1)}
      >
        Start Assessment →
      </button>
    </div>
  );

  if (isQuestion) {
    const cat = PAIN_CATEGORIES[catIndex];
    const val = scores[catIndex];
    return (
      <div>
        <ProgressBar progress={progress} />
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Category {step} of {totalSteps}</p>
        <p className="text-2xl font-serif text-foreground mb-1 leading-snug">{cat.label}</p>
        <p className="text-sm text-muted-foreground mb-6">{cat.desc}</p>
        <div className="mb-6">
          <input
            type="range"
            min={0}
            max={3}
            step={1}
            value={val}
            onChange={e => setScore(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-accent bg-gradient-to-r from-primary to-accent"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>0 — None</span>
            <span>3 — Severe</span>
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg px-5 py-4 text-sm text-foreground leading-relaxed mb-8">
          <span className="font-medium text-primary">Score {val}:</span> {cat.anchors[val]}
        </div>
        <div className="flex items-center gap-4">
          {step > 1 && <button className="text-sm text-muted-foreground underline underline-offset-2" onClick={() => setStep(step - 1)}>← Back</button>}
          <button
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium"
            onClick={() => setStep(step + 1)}
          >
            {step === totalSteps ? "See Pain Score →" : "Next →"}
          </button>
        </div>
      </div>
    );
  }

  const total = scores.reduce((a, b) => a + b, 0);
  const result = getPainResult(total);
  return (
    <div>
      <ProgressBar progress={100} />
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-4 ${result.badgeClass}`}>
        {result.label}
      </span>
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-6xl font-serif text-primary leading-none">{total}</span>
        <span className="text-muted-foreground text-lg">/ 15</span>
      </div>
      <div className="space-y-0 mb-6 border border-primary/20 rounded-lg overflow-hidden">
        {PAIN_CATEGORIES.map((cat, i) => (
          <div key={i} className="flex justify-between items-center px-4 py-3 border-b border-primary/10 last:border-b-0 text-sm">
            <span className="text-foreground">{cat.label}</span>
            <span className="font-serif text-xl text-primary font-semibold">{scores[i]}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6">{result.text}</p>
      <hr className="border-primary/20 mb-6" />
      {!submitted ? (
        <>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Email me this pain report</p>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none mb-3 text-sm"
          />
          <button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg transition-colors font-medium text-sm disabled:opacity-40 disabled:cursor-not-allowed mb-6"
            onClick={() => email && setSubmitted(true)}
            disabled={!email}
          >
            Send My Report
          </button>
          <hr className="border-primary/20 mb-6" />
        </>
      ) : (
        <p className="text-sm text-green-700 mb-6">✓ Report sent to {email}</p>
      )}
      <Link
        to="/contact"
        className="block w-full text-center bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg transition-colors font-medium"
      >
        Book a Consultation
      </Link>
      <p className="text-xs text-muted-foreground text-center mt-3">Or call us to speak with a veterinary acupuncturist</p>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'candidate' | 'pain'>('candidate');

  return (
    <>
      <SEO
        title="Pet Acupuncture Tools | Is My Pet a Candidate? | Pain Assessment"
        description="Use our free tools to find out if your pet is a good candidate for veterinary acupuncture, and assess their current pain level with our interactive pain scoring guide."
        path="/tools"
      />
      <div className="bg-secondary min-h-screen py-16 px-4">
        <div className="max-w-xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-2">Greenway Veterinary Acupuncture</p>
            <div className="w-8 h-px bg-accent mx-auto mb-6" />
            <h1 className="text-4xl font-serif text-foreground mb-3">Pet Health Tools</h1>
            <p className="text-muted-foreground mb-8">Free interactive guides to help you understand your pet's needs</p>

            {/* Tabs */}
            <div className="inline-flex rounded-lg border-2 border-primary/20 overflow-hidden">
              <button
                onClick={() => setActiveTab('candidate')}
                className={`px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === 'candidate'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Is My Pet a Candidate?
              </button>
              <button
                onClick={() => setActiveTab('pain')}
                className={`px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === 'pain'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Pain Score Assessment
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="bg-card rounded-2xl border border-primary/20 shadow-lg p-8">
            {activeTab === 'candidate'
              ? <CandidateChecker key="candidate" />
              : <PainScoring key="pain" />
            }
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            These tools provide general guidance only and do not replace veterinary advice.
          </p>
        </div>
      </div>
    </>
  );
}
