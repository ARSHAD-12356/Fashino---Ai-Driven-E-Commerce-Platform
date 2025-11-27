import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ContactUsPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
            <div className="mb-8">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Contact Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Us
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We're here to help! Whether you have a question about your order, need assistance with a return, or just want to say hello, we'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Customer Support</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Email: support@fashino.com</p>
                        <p className="text-gray-600 dark:text-gray-400">Phone: +1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500 mt-4">Available Mon-Fri, 9am - 6pm EST</p>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Business Inquiries</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Email: business@fashino.com</p>
                        <p className="text-gray-600 dark:text-gray-400">Headquarters: 123 Fashion Ave, New York, NY 10001</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
