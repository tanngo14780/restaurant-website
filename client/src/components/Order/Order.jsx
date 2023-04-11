import React from 'react';
import "./Order.css"

const Order = () => {
    const orders = [
        {
        id: "DH1",
        address: "123 Main Street",
        phone: 123456789,
        date: "20/12/2023",
        total: 500000,
        isDelivered: false,
        },
        {
        id: "DH2",
        address: "456 Oak Avenue",
        phone: 987654321,
        date: "20/12/2023",
        total: 1200000,
        isDelivered: false,
        },

    ];
    
    const deliveryStatus = (isDelivered) => {
        return isDelivered ? 'Delivered' : 'Delivering';
      };

  return (
    <div>
      <h2>Order</h2>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Address</th>
            <th>Order date</th>
            <th>Total</th>
            <th>Delivery status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td><a href="#">{order.id}</a></td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{deliveryStatus(order.isDelivered)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
