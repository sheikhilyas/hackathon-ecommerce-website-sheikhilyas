import DescriptionTab from "@/components/DescriptionTab";
import ProductCard from "@/components/ProductCard";
import Shopdetails from "@/components/shopdetails";
import SimilarProducts from "@/components/SimilarProducts";

export default function ShopDetails() {
  return (
    <div>
      <Shopdetails />
      <ProductCard />
      <DescriptionTab />
      <SimilarProducts />
    </div>
  );
}