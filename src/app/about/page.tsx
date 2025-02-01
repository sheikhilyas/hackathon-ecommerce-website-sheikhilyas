import AboutUs from '@/components/Aboutus';
import Ourfoodmenu from '@/components/ourfoodmenu';
import TeamMember from '@/components/TeamMember';
import AboutWhyChooseUs from '@/components/WhyChooseUsabout';
import React from 'react';
import Testimonialaboutus from '@/components/terminalsaboutuspage';

import Header2 from '@/components/Header2';
import Aboutus2 from '@/components/Aboutus2';
function about() {
  return (
    <div>
      <Header2 />
      <Aboutus2/>
      <AboutUs />
      <AboutWhyChooseUs />
      <TeamMember />
      <Testimonialaboutus/>
      <Ourfoodmenu />
    </div>
  )
}

export default about;
