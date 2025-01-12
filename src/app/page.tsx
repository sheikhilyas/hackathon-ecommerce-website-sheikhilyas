import Navebar from "@/components/Navebar";
import BlogPage from "@/components/Blogpost";
import Choosepick from "@/components/Choose&pick";
import FoodCategory from "@/components/FoodCategory";
import FoodProcessSection from "@/components/FoodProcessSection";
import MeetOurChef from "@/components/MeetOurChef";
import StartSection from "@/components/startsection";
import Testimonial from "@/components/TestimonialComponent";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/wecreatethe";

export default function HomePage() {
  return (
    <div>
      <Navebar />
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <StartSection />
      <BlogPage />
      <FoodProcessSection />
      <MeetOurChef />
      <Testimonial />
      <Choosepick />
    </div>
  );
}
