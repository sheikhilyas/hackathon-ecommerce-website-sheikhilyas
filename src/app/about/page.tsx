import AboutUs from '@/components/Aboutus';
import Ourfoodmenu from '@/components/ourfoodmenu';
import TeamMember from '@/components/TeamMember';
import AboutWhyChooseUs from '@/components/WhyChooseUsabout';
import React from 'react';
import Testimonial from "@/components/TestimonialComponent";
import Header2 from '@/components/Header2';
function about() {
  return (
    <div>
      <Header2 />
      <AboutUs />
      <AboutWhyChooseUs />
      <TeamMember />
      <Testimonial />
      <Ourfoodmenu />
    </div>
  )
}

export default about;
