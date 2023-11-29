import { CardElement,  useStripe } from "@stripe/react-stripe-js";




const CheckoutForm = () => {
    const stripe = useStripe();
  
  
  
    return (
      <div style={formContainerStyle}>
        <form onSubmit={''} style={formStyle}>
          <div>
            <div style={cardElementStyle}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
            <button
              type="submit"
              style={payButtonStyle}
              disabled={!stripe}
            >
              Pay
            </button>
          </div>
  
         
        </form>
      </div>
    );
  };
  
  // add some costom styel
  
  const formContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  };
  
  const formStyle = {
    width: "400px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  };
  
  const cardElementStyle = {
    marginBottom: "20px",
  };
  
  const payButtonStyle = {
    backgroundColor: "#4285f4",
    color: "#ffffff",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  
  export default CheckoutForm;
  