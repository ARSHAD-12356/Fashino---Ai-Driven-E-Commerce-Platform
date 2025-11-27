import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function PrivacyPolicyPage() {
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
                            <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Privacy Policy
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your privacy is important to us. It is Fashino's policy to respect your privacy regarding any information we may collect from you across our website.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    We use the information we collect to provide, operate, and maintain our website, improve, personalize, and expand our website, understand and analyze how you use our website, and develop new products, services, features, and functionality.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Security</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
            </div>
        </div>
    )
}
