import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ShippingPolicyPage() {
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
                            <BreadcrumbPage>Shipping Policy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Shipping Policy
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We strive to deliver your orders as quickly and efficiently as possible. Below are the details of our shipping policy.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Processing Time</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Shipping Rates & Delivery Estimates</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Shipping charges for your order will be calculated and displayed at checkout. We offer standard and express shipping options.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mt-2 space-y-2">
                    <li>Standard Shipping: 3-5 business days</li>
                    <li>Express Shipping: 1-2 business days</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">International Shipping</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    We currently ship to select international countries. Shipping times and costs vary depending on the destination. Customs duties and taxes may apply and are the responsibility of the customer.
                </p>
            </div>
        </div>
    )
}
