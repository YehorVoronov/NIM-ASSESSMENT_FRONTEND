import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
// import styles from "./styles/ConfirmationPage.module.css"
// import {testMenuItems} from "../sampleTestData"


function ConfirmationPage() {
  const [order, setOrder] = useState(null); 
  const { id } = useParams();
  
  const getOrderById = async () => {
    try{
      const response = await fetch(`/api/orders/${id}`);
    const data = await response.json();
    setOrder(data);
    } catch (error){
      console.log("Error fetching order",error);
    }
    
  };

  useEffect(() => {
    getOrderById();
  }, [id]);

  return (
    <div className="page">
      {order ? (
        <div>
          <h2>Order Confirmation</h2>
          <OrderConfirmation order={order}/>
        </div>
      ) : (
        // Render a loading state or error message if order is not available
       <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ConfirmationPage;
