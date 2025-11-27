import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function TermsAndConditionsPage() {
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
                            <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Terms & Conditions
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Welcome to Fashino. By accessing or using our website, you agree to be bound by these Terms & Conditions. Please read them carefully before using our services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    These terms govern your use of Fashino's online store and services. By accessing our site, you agree to comply with these terms, our Privacy Policy, and any other policies referenced herein.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Use of Service</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    You must be at least 18 years old or have parental consent to use our services. You agree not to use our products for any illegal or unauthorized purpose.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Product Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    We make every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Pricing and Payment</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                </p>
            </div>
        </div>
    )
}
