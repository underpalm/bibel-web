export const partners = [
  {
    id: 1,
    name: "Stanford Medicine",
    logo: "https://cdn.prod.website-files.com/6920f51d0fb9a70fdc4c2fa3/692341197914156fb6787786_stanford-med.svg",
  },
  {
    id: 2,
    name: "Cleveland Clinic",
    logo: "https://cdn.prod.website-files.com/6920f51d0fb9a70fdc4c2fa3/692341195fa1174612d82a3b_cleveland-clinic.svg",
  },
  {
    id: 3,
    name: "Y Combinator",
    logo: "https://cdn.prod.website-files.com/6920f51d0fb9a70fdc4c2fa3/69234119dbb21e42b1a6e14f_yc.svg",
  },
];

export const howGalenHelps = [
  {
    id: 1,
    title: "No reading required",
    description:
      "Full voice interface. Ask Rose with your voice, listen to Rose's answer. Perfect for blind people, elderly people, and anyone who struggles with reading.",
    screen: {
      question: "Rose, what does John 1:5 mean for me today?",
      answer:
        "This verse says darkness is real, but it never has the final word. God's light is stronger than confusion, fear, and sin.",
      reference: "John 1:5",
      verse: "The light shines in the darkness.",
      details: ["Historical meaning", "Simple explanation", "Today"],
    },
  },
  {
    id: 2,
    title: "Instant context",
    description:
      "In a normal book, you would flip pages for hours. Rose gives you historical context, original language notes, and related verses in seconds.",
    screen: {
      question: "Rose, does God still hear me when I doubt?",
      answer:
        "Doubt does not push God away. Scripture shows God meeting people in fear, confusion, and honest questions.",
      reference: "Psalm 34:18",
      verse: "The Lord is near to the brokenhearted.",
      details: ["Honest questions", "Comfort verses", "Peace"],
    },
  },
  {
    id: 3,
    title: "Safe & faithful",
    description:
      'Rose stays within mainstream Christian theology (configurable). No hallucinations, no strange doctrines. You can even ask Rose: "On which points do different denominations disagree?"',
    screen: {
      question: "Rose, I don't know what to pray tonight.",
      answer:
        "Start with honesty. Tell God what feels heavy, ask for wisdom, and rest in the promise that He listens before you find perfect words.",
      reference: "Romans 8:26",
      verse: "The Spirit helps us in our weakness.",
      details: ["Start with honesty", "Ask for wisdom", "Rest"],
    },
  },
  {
    id: 4,
    title: "Save thousands of hours",
    description:
      "Pastors report cutting sermon prep time by 70% with Rose. Bible study groups finish a book in one evening instead of three months.",
    screen: {
      question: "Rose, give me a 2 minute Bible moment.",
      answer:
        "Read one verse, ask one honest question, and carry one simple truth into your day.",
      reference: "Psalm 119:105",
      verse: "Your word is a lamp to my feet.",
      details: ["2 min reflection", "One question", "Daily reminder"],
    },
  },
];

export const privacyFeatures = [
  {
    id: 1,
    title: "Always Private",
    description:
      "We never share your data. Every question you ask stays between you and Rose. No tracking. No selling. No third parties.",
    icon: "private",
  },
  {
    id: 2,
    title: "Encrypted",
    description:
      "Your conversations are encrypted – in transit and at rest. Only you can access what you share.",
    icon: "encrypted",
  },
  {
    id: 3,
    title: "Built for trust",
    description:
      "We don't need to know who you are. We only need to help you grow in your faith.",
    icon: "trust",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "I wanted to understand the Bible, but I never had time to read. Rose showed me that I don't need to study for hours – I can just ask. Finally, I understand what the verses are trying to tell me.",
    name: "David, 34",
    useCase: "Little time, but a deep desire for faith",
  },
  {
    id: 2,
    quote:
      "My grandmother was a believer her whole life, but she never learned to read. She passed away without ever fully understanding the Bible. When I found Rose, I thought of her immediately. Finally, there's a way for everyone – even those who cannot read.",
    name: "Anna, 28",
    useCase: "Granddaughter of a non-reader",
  },
  {
    id: 3,
    quote:
      "I had serious doubts about my faith. I didn't know if God even heard me anymore. Rose didn't lecture me – she just showed me the right verse when I needed it most. That changed everything.",
    name: "Michael, 41",
    useCase: "Doubter who found comfort",
  },
  {
    id: 4,
    quote:
      "My teenager is going through a difficult crisis. I didn't know how to help him – or what the Bible says about it. Rose gave me the words I needed. Now I can talk to my son. And he listens.",
    name: "Julia, 45",
    useCase: "Mother of a searching child",
  },
  {
    id: 5,
    quote:
      "I felt alone with my questions. At church, I was afraid to ask – I thought something was wrong with me. Rose showed me: My questions are okay. And the answers are there when I seek them.",
    name: "Thomas, 29",
    useCase: "Quiet seeker",
  },
  {
    id: 6,
    quote:
      "I've been trying to read the Bible regularly for years. But I always gave up because I didn't understand anything. Rose walks with me now – like a friend who helps me stay on track. For the first time in months, I read every day.",
    name: "Sarah, 37",
    useCase: "Rediscovering her faith",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Who should be using Rose?",
    answer:
      "Anyone who seeks to understand the Bible, find comfort in their faith, or explore their questions about God – without judgment, without barriers.",
  },
  {
    id: 2,
    question: "Do I need to be able to read to use Rose?",
    answer:
      "No. Rose works entirely with voice input and voice output. Perfect for blind users or those with low literacy. Just speak, and Rose speaks back.",
  },
  {
    id: 3,
    question: "Is Rose just ChatGPT with a Bible sticker?",
    answer:
      "No. Rose is fine-tuned specifically on the Bible, commentaries, and historical context. We intentionally limit hallucinations. You can ask Rose for exact verses and get them.",
  },
  {
    id: 4,
    question: "Can a pastor trust Rose's theological answers?",
    answer:
      "Yes, but we recommend Rose as a co-pilot, not as infallible. Rose clearly marks where she interprets vs. quotes. You can also set your preferred theological tradition (reformed, catholic, evangelical, etc.).",
  },
  {
    id: 5,
    question: "Is Rose really free?",
    answer:
      "There is a free tier per month. Unlimited access to Rose starts at $9.99/month or $99/year. For churches or communities, we have group plans.",
  },
];

export const navLinks = [
  { id: 1, name: "HOW IT WORKS", href: "#how-it-works" },
  { id: 2, name: "HOW ROSE HELPS", href: "#how-galen-helps" },
  { id: 3, name: "ABOUT", href: "#about" },
  { id: 4, name: "COMMUNITY", href: "#community" },
];
