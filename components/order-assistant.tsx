'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, ThumbsUp, ThumbsDown, ExternalLink, Package, Truck, HelpCircle } from 'lucide-react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  orders?: any[]
  actions?: string[]
  feedback?: 'liked' | 'disliked' | null
}

interface OrderAssistantProps {
  initialOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function OrderAssistant({ initialOpen = false, onOpenChange }: OrderAssistantProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(initialOpen)
  
  // Sync with external control
  useEffect(() => {
    if (initialOpen !== undefined) {
      setIsOpen(initialOpen)
    }
  }, [initialOpen])
  
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = `Hello${user ? ` ${user.name}` : ''}! 👋 How can I assist you with your orders today?`
      setMessages([{
        id: '1',
        text: greeting,
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [isOpen, user, messages.length])

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
  }

  const handleAction = (action: string, order?: any) => {
    switch (action) {
      case 'view_order':
        router.push('/dashboard')
        handleOpenChange(false)
        break
      case 'track':
        if (order?.trackingUrl) {
          window.open(order.trackingUrl, '_blank')
        }
        break
      case 'cancel':
        router.push('/dashboard')
        handleOpenChange(false)
        // Trigger cancel modal in dashboard
        break
      case 'need_help':
        // Could open support form or redirect
        break
      default:
        break
    }
  }

  const handleSend = async (customQuery?: string) => {
    const queryText = customQuery || input.trim()
    if (!queryText || isLoading || !user) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: queryText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    if (!customQuery) setInput('')
    setIsLoading(true)

    try {
      // Get orders from localStorage as fallback
      let localOrders: any[] = []
      if (typeof window !== 'undefined') {
        try {
          const stored = JSON.parse(window.localStorage.getItem('recentOrders') || '[]')
          localOrders = stored.map((order: any) => ({
            id: order.id,
            orderId: order.id,
            orderDate: order.date,
            items: order.products || [],
            paymentStatus: order.paymentStatus || 'pending',
            orderStatus: order.status || 'processing',
            totalAmount: order.total,
            trackingId: `TRK-${order.id.slice(-8)}`,
            trackingUrl: `https://track.fashino.com/${order.id}`,
            refundStatus: null,
            returnStatus: null
          }))
        } catch (e) {
          console.error('Error reading localStorage:', e)
        }
      }

      const response = await fetch('/api/assistant-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-name': user.name || 'User'
        },
        body: JSON.stringify({ 
          query: queryText,
          userId: user.id,
          localOrders: localOrders // Send localStorage orders as fallback
        }),
      })

      const data = await response.json()

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Sorry, I couldn\'t understand your query. Please ask about your orders, tracking, or support.',
        sender: 'bot',
        timestamp: new Date(),
        orders: data.orders || [],
        actions: data.actions || []
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Order assistant error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was a technical issue. Please try again.',
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
    setMessages([{
      id: '1',
      text: `Hello${user ? ` ${user.name}` : ''}! 👋 How can I assist you with your orders today?`,
      sender: 'bot',
      timestamp: new Date()
    }])
  }

  if (!user) return null

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => handleOpenChange(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 smooth-transition flex items-center justify-center z-50 group"
          aria-label="Open AI Assistant"
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
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Order & Support</p>
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
                onClick={() => handleOpenChange(false)}
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

                {/* Order Cards */}
                {message.sender === 'bot' && message.orders && message.orders.length > 0 && (
                  <div className="mt-2 ml-10 space-y-2">
                    {message.orders.map((order: any) => (
                      <div
                        key={order.id || order.orderId}
                        className="p-3 bg-muted/50 border border-border rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-foreground">Order #{order.id || order.orderId}</p>
                          <span className={`text-xs px-2 py-1 rounded ${
                            order.orderStatus === 'delivered' ? 'bg-green-500/20 text-green-600' :
                            order.orderStatus === 'shipped' ? 'bg-blue-500/20 text-blue-600' :
                            'bg-amber-500/20 text-amber-600'
                          }`}>
                            {order.orderStatus}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {order.items?.length || 0} items • ₹{order.totalAmount?.toLocaleString('en-IN') || '0'}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                {message.sender === 'bot' && message.actions && message.actions.length > 0 && (
                  <div className="mt-2 ml-10 flex items-center gap-2 flex-wrap">
                    {message.actions.includes('view_order') && (
                      <button
                        onClick={() => handleAction('view_order', message.orders?.[0])}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 smooth-transition flex items-center gap-1"
                      >
                        <Package className="w-3 h-3" />
                        View Order
                      </button>
                    )}
                    {message.actions.includes('track') && (
                      <button
                        onClick={() => handleAction('track', message.orders?.[0])}
                        className="px-3 py-1.5 bg-blue-500 text-white rounded-lg text-xs font-medium hover:bg-blue-600 smooth-transition flex items-center gap-1"
                      >
                        <Truck className="w-3 h-3" />
                        Track Order
                      </button>
                    )}
                    {message.actions.includes('cancel') && (
                      <button
                        onClick={() => handleAction('cancel', message.orders?.[0])}
                        className="px-3 py-1.5 bg-destructive text-destructive-foreground rounded-lg text-xs font-medium hover:bg-destructive/90 smooth-transition"
                      >
                        Cancel Order
                      </button>
                    )}
                    {message.actions.includes('need_help') && (
                      <button
                        onClick={() => handleAction('need_help')}
                        className="px-3 py-1.5 border border-border text-foreground rounded-lg text-xs font-medium hover:bg-muted smooth-transition flex items-center gap-1"
                      >
                        <HelpCircle className="w-3 h-3" />
                        Need Help?
                      </button>
                    )}
                  </div>
                )}

                {/* Feedback Buttons */}
                {message.sender === 'bot' && (
                  <div className="mt-2 ml-10 flex items-center gap-1">
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

          {/* Quick Query Buttons */}
          {messages.length <= 1 && (
            <div className="border-t border-border p-4 bg-muted/30">
              <p className="text-xs text-muted-foreground mb-3 font-medium">Quick Queries:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSend('Track my order')}
                  disabled={isLoading}
                  className="px-3 py-2 text-xs bg-background border border-border rounded-lg hover:bg-muted smooth-transition text-left disabled:opacity-50"
                >
                  📦 Track Order
                </button>
                <button
                  onClick={() => handleSend('Recent orders dikhao')}
                  disabled={isLoading}
                  className="px-3 py-2 text-xs bg-background border border-border rounded-lg hover:bg-muted smooth-transition text-left disabled:opacity-50"
                >
                  📋 My Orders
                </button>
                <button
                  onClick={() => handleSend('Mera order kab deliver hoga?')}
                  disabled={isLoading}
                  className="px-3 py-2 text-xs bg-background border border-border rounded-lg hover:bg-muted smooth-transition text-left disabled:opacity-50"
                >
                  🚚 Delivery ETA
                </button>
                <button
                  onClick={() => handleSend('Customer support number')}
                  disabled={isLoading}
                  className="px-3 py-2 text-xs bg-background border border-border rounded-lg hover:bg-muted smooth-transition text-left disabled:opacity-50"
                >
                  💬 Support
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-4 bg-background">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
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
              Order & Support queries only
            </p>
          </div>
        </div>
      )}
    </>
  )
}

