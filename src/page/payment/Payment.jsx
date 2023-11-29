import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Sectiontitle from "../../component/sectiontitle/Sectiontitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_KEY);

const Payment = () => {
    return (
<section className="h-screen pt-28">
<div className="">
<Sectiontitle 
mainTitle={'Payment'}
></Sectiontitle>
  
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
</section>
    );
};

export default Payment;