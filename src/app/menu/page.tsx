import Dessert from "@/components/Dessert";
import Drink from "@/components/Drink";
import Menucouse from "@/components/menucouse";
import Ourmenu from "@/components/ourmenu";
import PartnersClients from "@/components/PartnersClients";
import StartMenu from "@/components/startmenu";
import StartSection from "@/components/startsection";

const Menu: React.FC = () => {
  return (
    <div>
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


