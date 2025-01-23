import DescriptionTab from "@/components/DescriptionTab";
import Header2 from "@/components/Header2";
import ProductCard from "@/components/ProductCard";
import Shopdetails from "@/components/shopdetails";
import SimilarProducts from "@/components/SimilarProducts";

export default function ShopDetails() {
  return (
    <div>
      <Header2/>
      <Shopdetails />
      <ProductCard />
      <DescriptionTab />
      <SimilarProducts />
    </div>
  );
}