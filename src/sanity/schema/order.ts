const orderSchema = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "firstName", type: "string", title: "First Name" },
      { name: "lastName", type: "string", title: "Last Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "phone", type: "string", title: "Phone" },
      { name: "address", type: "string", title: "Address" },
      { name: "city", type: "string", title: "City" },
      { name: "zipCode", type: "string", title: "ZIP Code" },
      { 
        name: "cartItems", 
        type: "array", 
        title: "Cart Items", 
        of: [{ type: "reference", to: [{ type: "product" }] }]
      },
      { name: "total", type: "number", title: "Total Amount" },
      { name: "discount", type: "number", title: "Discount" },
      { name: "orderDate", type: "datetime", title: "Order Date" },
      {
        name: "status",
        type: "string",
        title: "Order Status",
        options: {
          list: ["pending", "shipped", "delivered", "canceled"],
        },
      },
    ],
    };
  
  export default orderSchema;
  