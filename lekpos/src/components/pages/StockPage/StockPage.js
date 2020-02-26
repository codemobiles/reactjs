import React from "react";

const StockPage = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <ul>
        {["Angular", "React", "Vue", "Android", "iOS"].map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockPage;
