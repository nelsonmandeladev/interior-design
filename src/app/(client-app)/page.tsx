import { BlogPosts, FeaturedProducts, ProductSReadMore, TestimonialsSection, WhyChooseUs } from "@/components";
import { WeHelpSection } from "@/components/client-app/home/we-help";

export default function Home() {
  return (
    <main className="">
      <FeaturedProducts />
      <WhyChooseUs />
      <WeHelpSection />
      <ProductSReadMore />
      <TestimonialsSection />
      <BlogPosts show_all={false} />
    </main>
  );
}
