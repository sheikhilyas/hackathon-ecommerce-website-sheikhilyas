import Dessert from "@/components/Dessert";
import Drink from "@/components/Drink";
import Header2 from "@/components/Header2";
import Menucouse from "@/components/menucouse";
import Ourmenu from "@/components/ourmenu";
import PartnersClients from "@/components/PartnersClients";
import StartMenu from "@/components/startmenu";
import StartSection from "@/components/startsection";

const Menu: React.FC = () => {
  return (
    <div>
      <Header2/>
      <Ourmenu />
      <StartMenu />
      <Menucouse />
      <StartSection />
      <Dessert />
      <Drink />
      <PartnersClients />
    </div>
  );
};

export default Menu;


