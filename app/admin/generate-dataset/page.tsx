'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GenerateDatasetPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleGenerate = async () => {
    setLoading(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/products/chatbot-data')
      const data = await response.json()
      
      if (data.success) {
        setMessage(`✅ Success! Generated dataset with ${data.totalProducts} products.`)
      } else {
        setMessage(`❌ Error: ${data.error}`)
      }
    } catch (error: any) {
      setMessage(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Generate Product Dataset</h1>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <p className="text-muted-foreground">
            This will generate a complete product dataset with all required fields (tags, sizes, discounts) 
            and save it to <code className="bg-muted px-2 py-1 rounded">/data/products.json</code>
          </p>
          
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Generating...' : 'Generate Dataset'}
          </button>
          
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('✅') 
                ? 'bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400' 
                : 'bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

