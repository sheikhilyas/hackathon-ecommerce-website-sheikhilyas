import Navebar from "@/components/Navebar";
import Choosepick from "@/components/Choose&pick";
import FoodCategory from "@/components/FoodCategory";
import FoodProcessSection from "@/components/FoodProcessSection";
import MeetOurChef from "@/components/MeetOurChef";
import StartSection from "@/components/startsection";
import Testimonial from "@/components/TestimonialComponent";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/wecreatethe";
import BlogPost from "@/components/Blogpost";

export default function HomePage() {
  return (
    <div>
      <Navebar />
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <StartSection />
      <Choosepick />
      <MeetOurChef />
      <Testimonial />
      <FoodProcessSection />
      <BlogPost/>
    </div>
  );
}
