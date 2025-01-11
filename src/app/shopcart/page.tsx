import Product from "@/components/Product";
import ShoppingCard from "@/components/shoppingcard";
import Shoppingcontent from "@/components/Shoppingcontent";

export default function shop(){
    return(
      <div>
        <ShoppingCard/>
        <Product/>
        <Shoppingcontent/>
      </div>
    )
  }