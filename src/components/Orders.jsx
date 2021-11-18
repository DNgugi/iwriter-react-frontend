import React from 'react';

const Orders = (props) => {
        return (
        <div>
            {props.data.map((order, i)=> (
              <div key={i} className='card'>
                <h1>Order ID: {order.order_id}</h1>
                <h2>Order Amount: USD {order.amount}</h2>
                <h3>Attachment: {order.attachment}</h3>
                <h3>Topic: {order.topic}</h3>
                <h3>Deadline: {order.deadline}</h3>
                <h3>Instructions: {order.instructions}</h3>




              </div>
        ))}
        </div>
    )
}

export default Orders
