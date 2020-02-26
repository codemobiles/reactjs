import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import * as stockActions from "./../../../actions/stock.action";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "./../../../constants";

const StockPage = () => {
  const dispatch = useDispatch();
  const stockReducer = useSelector(({ stockReducer }) => stockReducer);

  React.useEffect(() => {
    // Intailization
    dispatch(stockActions.getProducts());
  }, []);

  return (
    <div style={{ marginTop: 100 }}>
      <MaterialTable
        title="Simple Action Preview"
        data={stockReducer.result ? stockReducer.result : []}
        columns={[
          {
            title: "Name",
            render: item => {
              return <h3>{item.name}</h3>;
            }
          },
          {
            title: "Image",
            render: item => {
              return (
                <img
                  src={`${imageUrl}/images/${
                    item.image
                  }?dummy=${Math.random()}`}
                  style={{ width: 70, height: 70, borderRadius: "5%" }}
                />
              );
            }
          },
          { title: "Price", field: "price" },
          { title: "Stock", field: "stock" }
        ]}
      />
    </div>
  );
};

export default StockPage;
