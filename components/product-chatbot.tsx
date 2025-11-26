'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, ThumbsUp, ThumbsDown, ExternalLink, ShoppingBag, Mic, MicOff, Globe, RotateCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  products?: any[]
  redirectUrl?: string | null
  intent?: string
  feedback?: 'liked' | 'disliked' | null
}

type Language = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'gu' | 'bn' | 'kn' | 'ml' | 'pa' | 'or' | 'ur'

const translations: Record<Language, Record<string, string>> = {
  en: {
    greeting: 'Hi, I\'m Angel, your Fashino product assistant. I can help you with products, prices, categories, and deals. How can I help you today?',
    placeholder: 'Ask about products, prices, categories...',
    error: 'Sorry, I couldn\'t understand your query. Please ask product-related questions.',
    technicalError: 'Sorry, there\'s a technical issue. Please try again later.',
    clearChat: 'Clear chat',
    closeChat: 'Close chat',
    viewProduct: 'View Product',
    viewAll: 'View All',
    helpful: 'Helpful',
    notHelpful: 'Not helpful',
    productQueriesOnly: 'Product queries only',
    example: 'Example: "hoodies under ₹2000"',
    listening: 'Listening...',
    speakNow: 'Speak now',
    selectLanguage: 'Select Language',
  },
  hi: {
    greeting: 'नमस्ते! मैं Fashino का product assistant हूं। आप मुझसे products, prices, categories, और deals के बारे में पूछ सकते हैं। कैसे help कर सकता हूं?',
    placeholder: 'Products, prices, categories पूछें...',
    error: 'क्षमा करें, मैं आपकी query समझ नहीं पाया। कृपया product से related सवाल पूछें।',
    technicalError: 'क्षमा करें, कुछ technical issue आ रहा है। कृपया थोड़ी देर बाद try करें।',
    clearChat: 'Chat साफ करें',
    closeChat: 'Chat बंद करें',
    viewProduct: 'Product देखें',
    viewAll: 'सभी देखें',
    helpful: 'मददगार',
    notHelpful: 'मददगार नहीं',
    productQueriesOnly: 'केवल product queries',
    example: 'उदाहरण: "₹2000 के अंदर hoodie"',
    listening: 'सुन रहा हूं...',
    speakNow: 'अब बोलें',
    selectLanguage: 'भाषा चुनें',
  },
  ta: {
    greeting: 'வணக்கம்! நான் Fashino இன் product assistant. நீங்கள் products, prices, categories, மற்றும் deals பற்றி கேட்கலாம். எவ்வாறு உதவ முடியும்?',
    placeholder: 'Products, prices, categories கேள்வி...',
    error: 'மன்னிக்கவும், உங்கள் query ஐ புரிந்து கொள்ள முடியவில்லை. தயவுசெய்து product தொடர்பான கேள்விகளை கேளுங்கள்.',
    technicalError: 'மன்னிக்கவும், சில technical issue வருகிறது. தயவுசெய்து சிறிது நேரம் கழித்து முயற்சிக்கவும்.',
    clearChat: 'Chat அழிக்க',
    closeChat: 'Chat மூட',
    viewProduct: 'Product பார்க்க',
    viewAll: 'அனைத்தையும் பார்க்க',
    helpful: 'உதவியாக',
    notHelpful: 'உதவியாக இல்லை',
    productQueriesOnly: 'Product queries மட்டும்',
    example: 'எடுத்துக்காட்டு: "₹2000 க்கு கீழே hoodie"',
    listening: 'கேட்கிறேன்...',
    speakNow: 'இப்போது பேசுங்கள்',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  },
  te: {
    greeting: 'నమస్కారం! నేను Fashino యొక్క product assistant. మీరు products, prices, categories, మరియు deals గురించి అడగవచ్చు. ఎలా సహాయం చేయగలను?',
    placeholder: 'Products, prices, categories అడగండి...',
    error: 'క్షమించండి, మీ query ను అర్థం చేసుకోలేకపోయాను. దయచేసి product సంబంధిత ప్రశ్నలు అడగండి.',
    technicalError: 'క్షమించండి, కొన్ని technical issue వస్తోంది. దయచేసి కొంచెం సమయం తర్వాత ప్రయత్నించండి.',
    clearChat: 'Chat తొలగించు',
    closeChat: 'Chat మూసివేయి',
    viewProduct: 'Product చూడండి',
    viewAll: 'అన్నీ చూడండి',
    helpful: 'సహాయకరమైన',
    notHelpful: 'సహాయకరమైనది కాదు',
    productQueriesOnly: 'Product queries మాత్రమే',
    example: 'ఉదాహరణ: "₹2000 కింద hoodie"',
    listening: 'వింటున్నాను...',
    speakNow: 'ఇప్పుడు మాట్లాడండి',
    selectLanguage: 'భాషను ఎంచుకోండి',
  },
  mr: {
    greeting: 'नमस्कार! मी Fashino चा product assistant आहे. तुम्ही products, prices, categories, आणि deals बद्दल विचारू शकता. कसे मदत करू शकतो?',
    placeholder: 'Products, prices, categories विचारा...',
    error: 'क्षमस्व, मी तुमची query समजू शकलो नाही. कृपया product संबंधित प्रश्न विचारा.',
    technicalError: 'क्षमस्व, काही technical issue येत आहे. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.',
    clearChat: 'Chat साफ करा',
    closeChat: 'Chat बंद करा',
    viewProduct: 'Product पहा',
    viewAll: 'सर्व पहा',
    helpful: 'उपयुक्त',
    notHelpful: 'उपयुक्त नाही',
    productQueriesOnly: 'फक्त product queries',
    example: 'उदाहरण: "₹2000 अंतर्गत hoodie"',
    listening: 'ऐकत आहे...',
    speakNow: 'आता बोला',
    selectLanguage: 'भाषा निवडा',
  },
  gu: {
    greeting: 'નમસ્તે! હું Fashino નો product assistant છું. તમે products, prices, categories, અને deals વિશે પૂછી શકો છો. કેવી રીતે મદદ કરી શકું?',
    placeholder: 'Products, prices, categories પૂછો...',
    error: 'માફ કરશો, હું તમારી query સમજી શક્યો નથી. કૃપા કરીને product સંબંધિત પ્રશ્નો પૂછો.',
    technicalError: 'માફ કરશો, કેટલાક technical issue આવી રહ્યું છે. કૃપા કરીને થોડી વાર પછી પ્રયાસ કરો.',
    clearChat: 'Chat સાફ કરો',
    closeChat: 'Chat બંધ કરો',
    viewProduct: 'Product જુઓ',
    viewAll: 'બધા જુઓ',
    helpful: 'મદદગાર',
    notHelpful: 'મદદગાર નથી',
    productQueriesOnly: 'માત્ર product queries',
    example: 'ઉદાહરણ: "₹2000 ની અંદર hoodie"',
    listening: 'સાંભળી રહ્યો છું...',
    speakNow: 'હવે બોલો',
    selectLanguage: 'ભાષા પસંદ કરો',
  },
  bn: {
    greeting: 'নমস্কার! আমি Fashino এর product assistant। আপনি products, prices, categories, এবং deals সম্পর্কে জিজ্ঞাসা করতে পারেন। কিভাবে সাহায্য করতে পারি?',
    placeholder: 'Products, prices, categories জিজ্ঞাসা করুন...',
    error: 'দুঃখিত, আমি আপনার query বুঝতে পারিনি। অনুগ্রহ করে product সম্পর্কিত প্রশ্ন জিজ্ঞাসা করুন।',
    technicalError: 'দুঃখিত, কিছু technical issue হচ্ছে। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।',
    clearChat: 'Chat সাফ করুন',
    closeChat: 'Chat বন্ধ করুন',
    viewProduct: 'Product দেখুন',
    viewAll: 'সব দেখুন',
    helpful: 'সহায়ক',
    notHelpful: 'সহায়ক নয়',
    productQueriesOnly: 'শুধুমাত্র product queries',
    example: 'উদাহরণ: "₹2000 এর নিচে hoodie"',
    listening: 'শুনছি...',
    speakNow: 'এখন বলুন',
    selectLanguage: 'ভাষা নির্বাচন করুন',
  },
  kn: {
    greeting: 'ನಮಸ್ಕಾರ! ನಾನು Fashino ನ product assistant. ನೀವು products, prices, categories, ಮತ್ತು deals ಬಗ್ಗೆ ಕೇಳಬಹುದು. ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    placeholder: 'Products, prices, categories ಕೇಳಿ...',
    error: 'ಕ್ಷಮಿಸಿ, ನಾನು ನಿಮ್ಮ query ಅನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು product ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.',
    technicalError: 'ಕ್ಷಮಿಸಿ, ಕೆಲವು technical issue ಬರುತ್ತಿದೆ. ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
    clearChat: 'Chat ಅಳಿಸಿ',
    closeChat: 'Chat ಮುಚ್ಚಿ',
    viewProduct: 'Product ನೋಡಿ',
    viewAll: 'ಎಲ್ಲಾ ನೋಡಿ',
    helpful: 'ಸಹಾಯಕ',
    notHelpful: 'ಸಹಾಯಕವಲ್ಲ',
    productQueriesOnly: 'ಕೇವಲ product queries',
    example: 'ಉದಾಹರಣೆ: "₹2000 ಕೆಳಗೆ hoodie"',
    listening: 'ಕೇಳುತ್ತಿದ್ದೇನೆ...',
    speakNow: 'ಈಗ ಮಾತನಾಡಿ',
    selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ',
  },
  ml: {
    greeting: 'നമസ്കാരം! ഞാൻ Fashino ന്റെ product assistant ആണ്. നിങ്ങൾക്ക് products, prices, categories, എന്നിവയെക്കുറിച്ച് ചോദിക്കാം. എങ്ങനെ സഹായിക്കാം?',
    placeholder: 'Products, prices, categories ചോദിക്കുക...',
    error: 'ക്ഷമിക്കണം, ഞാൻ നിങ്ങളുടെ query മനസ്സിലാക്കാൻ കഴിഞ്ഞില്ല. ദയവായി product സംബന്ധിച്ച ചോദ്യങ്ങൾ ചോദിക്കുക.',
    technicalError: 'ക്ഷമിക്കണം, ചില technical issue വരുന്നു. ദയവായി കുറച്ച് സമയത്തിന് ശേഷം വീണ്ടും ശ്രമിക്കുക.',
    clearChat: 'Chat മായ്ക്കുക',
    closeChat: 'Chat അടയ്ക്കുക',
    viewProduct: 'Product കാണുക',
    viewAll: 'എല്ലാം കാണുക',
    helpful: 'സഹായകരമാണ്',
    notHelpful: 'സഹായകരമല്ല',
    productQueriesOnly: 'Product queries മാത്രം',
    example: 'ഉദാഹരണം: "₹2000 ൽ താഴെ hoodie"',
    listening: 'കേൾക്കുന്നു...',
    speakNow: 'ഇപ്പോൾ സംസാരിക്കുക',
    selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
  },
  pa: {
    greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ Fashino ਦਾ product assistant ਹਾਂ। ਤੁਸੀਂ products, prices, categories, ਅਤੇ deals ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ। ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    placeholder: 'Products, prices, categories ਪੁੱਛੋ...',
    error: 'ਮਾਫ਼ ਕਰੋ, ਮੈਂ ਤੁਹਾਡੀ query ਸਮਝ ਨਹੀਂ ਸਕਿਆ। ਕਿਰਪਾ ਕਰਕੇ product ਸੰਬੰਧੀ ਸਵਾਲ ਪੁੱਛੋ।',
    technicalError: 'ਮਾਫ਼ ਕਰੋ, ਕੁਝ technical issue ਆ ਰਿਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਥੋੜ੍ਹੀ ਦੇਰ ਬਾਅਦ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
    clearChat: 'Chat ਸਾਫ਼ ਕਰੋ',
    closeChat: 'Chat ਬੰਦ ਕਰੋ',
    viewProduct: 'Product ਵੇਖੋ',
    viewAll: 'ਸਭ ਵੇਖੋ',
    helpful: 'ਮਦਦਗਾਰ',
    notHelpful: 'ਮਦਦਗਾਰ ਨਹੀਂ',
    productQueriesOnly: 'ਸਿਰਫ਼ product queries',
    example: 'ਉਦਾਹਰਣ: "₹2000 ਹੇਠਾਂ hoodie"',
    listening: 'ਸੁਣ ਰਿਹਾ ਹਾਂ...',
    speakNow: 'ਹੁਣ ਬੋਲੋ',
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
  },
  or: {
    greeting: 'ନମସ୍କାର! ମୁଁ Fashino ର product assistant। ଆପଣ products, prices, categories, ଏବଂ deals ବିଷୟରେ ପଚାରିପାରିବେ। କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
    placeholder: 'Products, prices, categories ପଚାରନ୍ତୁ...',
    error: 'କ୍ଷମା କରନ୍ତୁ, ମୁଁ ଆପଣଙ୍କର query ବୁଝିପାରିଲି ନାହିଁ। ଦୟାକରି product ସମ୍ବନ୍ଧୀୟ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ।',
    technicalError: 'କ୍ଷମା କରନ୍ତୁ, କିଛି technical issue ଆସୁଛି। ଦୟାକରି ଅଳ୍ପ ସମୟ ପରେ ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।',
    clearChat: 'Chat ସଫା କରନ୍ତୁ',
    closeChat: 'Chat ବନ୍ଦ କରନ୍ତୁ',
    viewProduct: 'Product ଦେଖନ୍ତୁ',
    viewAll: 'ସମସ୍ତ ଦେଖନ୍ତୁ',
    helpful: 'ସାହାଯ୍ୟକାରୀ',
    notHelpful: 'ସାହାଯ୍ୟକାରୀ ନୁହେଁ',
    productQueriesOnly: 'କେବଳ product queries',
    example: 'ଉଦାହରଣ: "₹2000 ତଳେ hoodie"',
    listening: 'ଶୁଣୁଛି...',
    speakNow: 'ଏବେ କହନ୍ତୁ',
    selectLanguage: 'ଭାଷା ବାଛନ୍ତୁ',
  },
  ur: {
    greeting: 'السلام علیکم! میں Fashino کا product assistant ہوں۔ آپ مجھ سے products, prices, categories, اور deals کے بارے میں پوچھ سکتے ہیں۔ کیسے مدد کر سکتا ہوں؟',
    placeholder: 'Products, prices, categories پوچھیں...',
    error: 'معذرت، میں آپ کی query سمجھ نہیں پایا۔ براہ کرم product سے متعلق سوالات پوچھیں۔',
    technicalError: 'معذرت، کچھ technical issue آ رہا ہے۔ براہ کرم تھوڑی دیر بعد دوبارہ کوشش کریں۔',
    clearChat: 'Chat صاف کریں',
    closeChat: 'Chat بند کریں',
    viewProduct: 'Product دیکھیں',
    viewAll: 'سب دیکھیں',
    helpful: 'مددگار',
    notHelpful: 'مددگار نہیں',
    productQueriesOnly: 'صرف product queries',
    example: 'مثال: "₹2000 کے نیچے hoodie"',
    listening: 'سن رہا ہوں...',
    speakNow: 'اب بولیں',
    selectLanguage: 'زبان منتخب کریں',
  },
}

const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  mr: 'मराठी',
  gu: 'ગુજરાતી',
  bn: 'বাংলা',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം',
  pa: 'ਪੰਜਾਬੀ',
  or: 'ଓଡ଼ିଆ',
  ur: 'اردو',
}

export function ProductChatbot() {
  const router = useRouter()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<Language>('en')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [showVoiceModal, setShowVoiceModal] = useState(false)
  const recognitionRef = useRef<any>(null)
  const synthesisRef = useRef<SpeechSynthesis | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const hasShownWelcomeRef = useRef(false)

  // Show welcome message when chat opens or resets
  const showWelcomeMessage = useCallback(() => {
    const welcomeMessage = translations[language].greeting
    setMessages([{
      id: '1',
      text: welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }])
    hasShownWelcomeRef.current = true
    // Speak the welcome message
    if (synthesisRef.current) {
      const utterance = new SpeechSynthesisUtterance(welcomeMessage)
      utterance.lang = language === 'en' ? 'en-IN' : `${language}-IN`
      utterance.rate = 0.9
      utterance.pitch = 1
      setIsSpeaking(true)
      
      utterance.onend = () => {
        setIsSpeaking(false)
      }
      
      utterance.onerror = () => {
        setIsSpeaking(false)
      }
      
      synthesisRef.current.speak(utterance)
    }
  }, [language])

  // Initialize messages with greeting when chat opens
  useEffect(() => {
    if (isOpen && !hasShownWelcomeRef.current) {
      showWelcomeMessage()
    }
  }, [isOpen, showWelcomeMessage])

  // Reset welcome flag when chat closes
  useEffect(() => {
    if (!isOpen) {
      hasShownWelcomeRef.current = false
    }
  }, [isOpen])

  // Update greeting when language changes (only if welcome message is showing)
  useEffect(() => {
    if (messages.length === 1 && messages[0].id === '1' && hasShownWelcomeRef.current) {
      const welcomeMessage = translations[language].greeting
      setMessages([{
        id: '1',
        text: welcomeMessage,
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [language])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = language === 'en' ? 'en-IN' : `${language}-IN`

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setIsListening(false)
          setShowVoiceModal(false)
          // Send the transcript directly as a message
          if (transcript.trim()) {
            sendVoiceMessage(transcript.trim())
          }
        }

        recognitionRef.current.onerror = () => {
          setIsListening(false)
          setShowVoiceModal(false)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
          setShowVoiceModal(false)
        }
      }

      synthesisRef.current = window.speechSynthesis
    }
  }, [language])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      setShowVoiceModal(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
      setShowVoiceModal(false)
    }
  }

  const sendVoiceMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: text }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || translations[language].error,
        sender: 'bot',
        timestamp: new Date(),
        products: data.products || [],
        redirectUrl: data.redirectUrl || null,
        intent: data.intent,
        isExactMatch: data.isExactMatch || false
      }

      setMessages(prev => [...prev, botMessage])
      
      // Speak the bot response
      if (data.response) {
        speakText(data.response)
      }
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: translations[language].technicalError,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const speakText = (text: string) => {
    if (synthesisRef.current) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = language === 'en' ? 'en-IN' : `${language}-IN`
      utterance.rate = 0.9
      utterance.pitch = 1
      setIsSpeaking(true)
      
      utterance.onend = () => {
        setIsSpeaking(false)
      }
      
      utterance.onerror = () => {
        setIsSpeaking(false)
      }
      
      synthesisRef.current.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel()
      setIsSpeaking(false)
    }
  }

  const handleFeedback = (messageId: string, type: 'liked' | 'disliked') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, feedback: type } : msg
    ))
    // You can send feedback to API here if needed
  }

  const handleViewAll = (url: string) => {
    if (url) {
      router.push(url)
      setIsOpen(false)
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage.text }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || translations[language].error,
        sender: 'bot',
        timestamp: new Date(),
        products: data.products || [],
        redirectUrl: data.redirectUrl || null,
        intent: data.intent,
        isExactMatch: data.isExactMatch || false
      }

      setMessages(prev => [...prev, botMessage])
      
      // Speak the bot response
      if (data.response) {
        speakText(data.response)
      }
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: translations[language].technicalError,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const resetChat = () => {
    stopSpeaking()
    stopListening()
    hasShownWelcomeRef.current = false
    showWelcomeMessage()
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 max-[480px]:bottom-20 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 smooth-transition flex items-center justify-center z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 max-[480px]:bottom-20 max-[480px]:left-1/2 max-[480px]:-translate-x-1/2 max-[480px]:w-[95vw] sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] md:w-96 max-w-md h-[calc(100vh-8rem)] sm:h-[calc(100vh-10rem)] md:h-[600px] max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-10rem)] md:max-h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 sm:p-4 rounded-t-lg flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base truncate">
                  Angel – <span className="brand-logo-fashino">Fashino</span> Assistant
                </h3>
                <p className="text-xs opacity-90 truncate">{translations[language].productQueriesOnly}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* Language Selector */}
              <div className="relative group">
                <button
                  className="p-1 sm:p-1.5 hover:bg-primary/80 rounded-full smooth-transition"
                  title={translations[language].selectLanguage}
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <div className="absolute bottom-full right-0 mb-2 w-40 sm:w-48 bg-background border border-border rounded-lg shadow-lg p-2 hidden group-hover:block z-10">
                  <div className="max-h-60 overflow-y-auto space-y-1">
                    {Object.entries(languageNames).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code as Language)
                          resetChat()
                        }}
                        className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-muted smooth-transition ${
                          language === code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Reset Button */}
              <button
                onClick={resetChat}
                className="p-1 sm:p-1.5 hover:bg-primary/80 rounded-full smooth-transition"
                title="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsOpen(false)
                  stopSpeaking()
                  stopListening()
                }}
                className="p-1 sm:p-1.5 hover:bg-primary/80 rounded-full smooth-transition"
                title={translations[language].closeChat}
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-muted/20 min-h-0">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-lg p-2.5 sm:p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border text-foreground'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('en-IN', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>

                {/* Product Cards */}
                {message.sender === 'bot' && message.products && message.products.length > 0 && (
                  <div className="mt-2 ml-10 space-y-2">
                    {message.products.slice(0, 3).map((product: any) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 bg-muted/50 border border-border rounded-lg hover:border-primary smooth-transition"
                      >
                        <div className="flex gap-3">
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                            <p className="text-xs text-muted-foreground">
                              ₹{product.price.toLocaleString('en-IN')}
                              {product.discount > 0 && (
                                <span className="text-primary ml-1">({product.discount}% off)</span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.rating}⭐ • {product.reviews} reviews
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                {message.sender === 'bot' && (
                  <div className="mt-2 ml-10 flex items-center gap-2 flex-wrap">
                    {message.products && message.products.length === 1 && (message as any).isExactMatch && (
                      <Link
                        href={`/products/${message.products[0].id}`}
                        onClick={() => setIsOpen(false)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 smooth-transition flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {translations[language].viewProduct}
                      </Link>
                    )}
                    {message.redirectUrl && !(message as any).isExactMatch && (
                      <button
                        onClick={() => handleViewAll(message.redirectUrl!)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 smooth-transition flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {translations[language].viewAll}
                      </button>
                    )}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleFeedback(message.id, 'liked')}
                        className={`p-1.5 rounded hover:bg-muted smooth-transition ${
                          message.feedback === 'liked' ? 'text-primary' : 'text-muted-foreground'
                        }`}
                        title={translations[language].helpful}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, 'disliked')}
                        className={`p-1.5 rounded hover:bg-muted smooth-transition ${
                          message.feedback === 'disliked' ? 'text-destructive' : 'text-muted-foreground'
                        }`}
                        title={translations[language].notHelpful}
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-background border border-border rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 sm:p-4 bg-background flex-shrink-0">
            <div className="flex gap-1.5 sm:gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={translations[language].placeholder}
                className="flex-1 px-3 sm:px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                disabled={isLoading || isListening}
              />
              {/* Voice Input Button */}
              <button
                onClick={isListening ? stopListening : startListening}
                disabled={isLoading}
                className={`px-2 sm:px-3 py-2 rounded-lg smooth-transition flex items-center justify-center flex-shrink-0 ${
                  isListening
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
                title={isListening ? translations[language].listening : translations[language].speakNow}
              >
                {isListening ? (
                  <MicOff className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
                ) : (
                  <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
              
              {/* Voice Input Modal */}
              {showVoiceModal && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg">
                  <div className="bg-background border border-border rounded-lg p-6 shadow-2xl max-w-sm w-[90%]">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Mic className="w-8 h-8 text-red-500 animate-pulse" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {translations[language].listening}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {translations[language].speakNow}
                      </p>
                      <button
                        onClick={stopListening}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 smooth-transition"
                      >
                        Stop
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading || isListening}
                className="px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 gap-1">
              <p className="text-[10px] sm:text-xs text-muted-foreground text-center flex-1 line-clamp-1">
                {translations[language].productQueriesOnly} • {translations[language].example}
              </p>
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 smooth-transition flex items-center gap-1"
                >
                  <MicOff className="w-3 h-3" />
                  Stop
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}








