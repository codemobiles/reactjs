import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";

const StockPage = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <ul>
        {["Angular", "React", "Vue", "Android", "iOS"].map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <MaterialTable
        title="Simple Action Preview"
        data={[
          { name: "Angular", price: 100 },
          { name: "Vue", price: 10 },
          { name: "React", price: 5 }
        ]}
        columns={[
          {
            title: "Name",
            render: item => {
              return <h3>{item.name}</h3>;
            }
          },
          { title: "Price", field: "price" }
        ]}
      />
    </div>
  );
};

export default StockPage;
