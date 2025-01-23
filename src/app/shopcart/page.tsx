import Header2 from "@/components/Header2";
import Product from "@/components/Product";
import ShoppingCard from "@/components/shoppingcard";
import Shoppingcontent from "@/components/Shoppingcontent";

export default function shop() {
  return (
    <div>
      <Header2/>
      <ShoppingCard />
      <Product />
      <Shoppingcontent />
    </div>
  );
}