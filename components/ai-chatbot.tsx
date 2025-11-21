'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { useAuth } from '@/context/auth-context'
import { products } from '@/lib/products'
import Link from 'next/link'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function AIChatbot() {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  
  // Only show chatbot if user is authenticated
  if (!user) {
    return null
  }
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = `Hello${user ? ` ${user.name}` : ''}! 👋 I'm your shopping assistant. I can help you find products, check availability, and prices. What are you looking for today?`
      setMessages([{
        id: '1',
        text: greeting,
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [isOpen, user, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const searchProducts = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.subcategory?.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    )
  }

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Greeting patterns
    if (lowerMessage.match(/hi|hello|hey|good morning|good afternoon|good evening/)) {
      return `Hello${user ? ` ${user.name}` : ''}! 👋 How can I help you find the perfect product today?`
    }

    // Price queries
    if (lowerMessage.match(/price|cost|how much|₹|rupee/)) {
      const foundProducts = searchProducts(userMessage)
      if (foundProducts.length > 0) {
        const product = foundProducts[0]
        return `The ${product.name} is priced at ₹${product.price.toLocaleString('en-IN')} (Original: ₹${product.originalPrice.toLocaleString('en-IN')}). There's a ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% discount! 🎉`
      }
      return "I couldn't find that product. Could you please specify the product name? For example, 'Premium Essentials Tee' or 'Winter Thermal Tee'."
    }

    // Availability queries
    if (lowerMessage.match(/available|in stock|stock|have|do you have/)) {
      const foundProducts = searchProducts(userMessage)
      if (foundProducts.length > 0) {
        const product = foundProducts[0]
        const inStock = product.inStock ?? true
        return inStock 
          ? `Yes! The ${product.name} is currently in stock. You can add it to your cart right away! ✅`
          : `I'm sorry, the ${product.name} is currently out of stock. Would you like me to suggest similar products?`
      }
      return "I couldn't find that product. Could you please specify the product name?"
    }

    // Product search
    const foundProducts = searchProducts(userMessage)
    if (foundProducts.length > 0) {
      if (foundProducts.length === 1) {
        const product = foundProducts[0]
        return `I found "${product.name}"! It's a ${product.category} ${product.subcategory} priced at ₹${product.price.toLocaleString('en-IN')}. ${product.inStock ?? true ? 'It\'s in stock!' : 'Currently out of stock.'} Would you like to know more?`
      } else {
        const productList = foundProducts.slice(0, 5).map(p => `• ${p.name} - ₹${p.price.toLocaleString('en-IN')}`).join('\n')
        return `I found ${foundProducts.length} products matching your search:\n\n${productList}\n\nWould you like more details about any of these?`
      }
    }

    // Default response
    return "I'm here to help you find products! You can ask me about:\n• Product availability\n• Prices\n• Product search\n\nTry asking: 'Do you have winter jackets?' or 'What's the price of Premium Essentials Tee?'"
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl smooth-transition hover:scale-110 flex items-center justify-center z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-semibold">Shopping Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/80 rounded-full p-1 smooth-transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-lg p-3">
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
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about products, prices, availability..."
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}












