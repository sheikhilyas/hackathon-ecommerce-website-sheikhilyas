import ChefGrid from "@/components/Chefs";
import Header2 from "@/components/Header2";
import Outchef from "@/components/outchef";

const OurChef: React.FC = () => {
  return (
    <div>
      <Header2/>
      <Outchef />
      <ChefGrid />
    </div>
  );
};

export default OurChef;
