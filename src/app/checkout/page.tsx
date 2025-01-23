import Checkout from "@/components/Checkout";
import CheckoutPage from "@/components/Checkoutpage";
import Header2 from "@/components/Header2";

const CheckoutPageComponent: React.FC = () => {
  return (
    <div>
      <Header2/>
      <Checkout />
      <CheckoutPage />
    </div>
  );
};

export default CheckoutPageComponent;
