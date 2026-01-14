"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setPending(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setPending(false)
        setSuccess(true)
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {success ? (
                    <div className="text-center py-8 space-y-4">
                        <div className="text-2xl">🎉</div>
                        <h3 className="text-lg font-semibold">Message Sent</h3>
                        <p className="text-muted-foreground">Thanks for reaching out! I will reply to your email shortly.</p>
                        <Button onClick={() => setSuccess(false)} variant="outline">Send another</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                            <Input id="name" required placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                            <Input id="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                            <Textarea id="message" required placeholder="Hey, I'd like to discuss a project..." className="min-h-[120px]" />
                        </div>
                        <Button type="submit" className="w-full" disabled={pending}>
                            {pending ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    )
}
