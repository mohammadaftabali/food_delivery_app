import React from "react";

const Home = () => {
  // Sample food items
  const foodItems = [
    { id: 1, name: "Cheese Burger", price: "₹120", img: "./burger.jpg" },
    { id: 2, name: "Chicken 65 Pizza", price: "₹300", img: "./pizza.jpg" },
    { id: 3, name: "Pasta", price: "₹250", img: "./pasta.jpg" },
    { id: 4, name: "Tacos", price: "₹329", img: "./Tacos.jpg" },
    { id: 5, name: "Biryani", price: "₹120", img: "./biryani.jpg" },
    { id: 6, name: "Shawarma", price: "₹120", img: "./shawarma.jpg" },
    { id: 7, name: "Ice Cream ", price: "₹180", img: "./Ice cream.jpg" },
    { id: 8, name: "Noodles", price: "₹100", img: "./Noodles.jpg" },
    { id: 9, name: "Dosa", price: "₹100", img: "./Dosa.jpg" },
    { id: 10, name: "Pav Bhaji", price: "₹100", img: "./pavbhaji.jpg" },
    
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Hungry Hound</h1>
      <img
        src="./img3.jpg"
        alt="Banner"
        width="100%"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />

      <h2 style={{ marginTop: "20px" }}>Popular Dishes</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        {foodItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              width: "220px", // Fixed width
              height: "320px", // Fixed height
              backgroundColor: "#fff",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px", // Fixed height for uniform images
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{item.name}</h3>
            <p style={{ fontWeight: "bold", color: "green" }}>{item.price}</p>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "5px",
              }}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;