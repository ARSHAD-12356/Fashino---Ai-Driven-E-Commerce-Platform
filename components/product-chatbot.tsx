'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, ThumbsUp, ThumbsDown, ExternalLink, ShoppingBag } from 'lucide-react'
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

export function ProductChatbot() {
  const router = useRouter()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  
  // Only show chatbot if user is authenticated
  if (!user) {
    return null
  }
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Namaste! Main Fashino ka product assistant hoon. Aap mujhse products, prices, categories, aur deals ke baare me puchh sakte hain. Kaise help kar sakta hoon?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
        text: data.response || 'Sorry, main aapki query samajh nahi paya. Kripya product se related sawal puchhein.',
        sender: 'bot',
        timestamp: new Date(),
        products: data.products || [],
        redirectUrl: data.redirectUrl || null,
        intent: data.intent,
        isExactMatch: data.isExactMatch || false
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chatbot error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, kuch technical issue aa raha hai. Kripya thodi der baad try karein.',
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

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: 'Namaste! Main Fashino ka product assistant hoon. Aap mujhse products, prices, categories, aur deals ke baare me puchh sakte hain. Kaise help kar sakta hoon?',
        sender: 'bot',
        timestamp: new Date()
      }
    ])
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 smooth-transition flex items-center justify-center z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] md:w-96 h-[calc(100vh-8rem)] md:h-[600px] max-h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">Fashino Assistant</h3>
                <p className="text-xs opacity-90">Product queries only</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="p-1.5 hover:bg-primary/80 rounded-full smooth-transition"
                title="Clear chat"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-primary/80 rounded-full smooth-transition"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
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
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
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
                        View Product
                      </Link>
                    )}
                    {message.redirectUrl && !(message as any).isExactMatch && (
                      <button
                        onClick={() => handleViewAll(message.redirectUrl!)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 smooth-transition flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View All
                      </button>
                    )}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleFeedback(message.id, 'liked')}
                        className={`p-1.5 rounded hover:bg-muted smooth-transition ${
                          message.feedback === 'liked' ? 'text-primary' : 'text-muted-foreground'
                        }`}
                        title="Helpful"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleFeedback(message.id, 'disliked')}
                        className={`p-1.5 rounded hover:bg-muted smooth-transition ${
                          message.feedback === 'disliked' ? 'text-destructive' : 'text-muted-foreground'
                        }`}
                        title="Not helpful"
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
          <div className="border-t border-border p-4 bg-background">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Products, prices, categories puchhein..."
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Product queries only • Example: "₹2000 ke andar hoodie"
            </p>
          </div>
        </div>
      )}
    </>
  )
}


