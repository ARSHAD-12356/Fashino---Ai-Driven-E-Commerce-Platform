import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function AboutUsPage() {
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
                            <BreadcrumbPage>About Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About Us
            </h1>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Welcome to Fashino, your number one source for all things fashion. We're dedicated to giving you the very best of clothing and accessories, with a focus on quality, uniqueness, and customer service.
                </p>

                <div className="my-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Story</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Founded in 2024, Fashino has come a long way from its beginnings. When we first started out, our passion for eco-friendly and stylish fashion drove us to do intense research, and gave us the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the world, and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the fashion industry.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Our mission is to empower individuals to express their unique style through high-quality, sustainable fashion. We believe that fashion should not only look good but also feel good and do good for the planet.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Our Values</h2>
                <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                    <li className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Quality</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We never compromise on the quality of our products.</p>
                    </li>
                    <li className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Sustainability</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We are committed to reducing our environmental footprint.</p>
                    </li>
                    <li className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Inclusivity</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Fashion is for everyone, regardless of shape or size.</p>
                    </li>
                    <li className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Innovation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We are always looking for new ways to improve.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
