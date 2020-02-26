import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import * as stockActions from "./../../../actions/stock.action";
import { useDispatch, useSelector } from "react-redux";

const StockPage = () => {
  const dispatch = useDispatch();
  const stockReducer = useSelector(({ stockReducer }) => stockReducer);

  React.useEffect(() => {
    // Intailization
    dispatch(stockActions.getProducts())

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
          { title: "Price", field: "price" }
        ]}
      />
    </div>
  );
};

export default StockPage;
