import React  from "react";
import styles from "./styles/OrderConfirmation.module.css"

function OrderConfirmation({order}) {
  console.assert(order)
  return (
    <div className={styles.page}>
      {order ? (
        <div>
          <h2>Order Confirmation</h2>
          <p>Thank you for your order!</p>
          <p>Customer&apos;s Name: {order.name}</p>
          <p>Customer&apos;s Address: {order.address}</p>
          <p>Items Ordered:</p>
          <ul>
          {order.items.map((item) => (<li key={item.id}>{item}</li>))}
          </ul>
          <p>Order ID: {order.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderConfirmation;
