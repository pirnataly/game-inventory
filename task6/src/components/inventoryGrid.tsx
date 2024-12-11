import React from "react";
import {InventoryItemData} from "../types/types";
import {InventoryItem} from "./inventoryItem";

export const InventoryGrid: React.FC<{ items: InventoryItemData[] }> = ({items}) => {
  const newItems = items.length!==0?items.slice():[];
  const gridSize = {rows: 8, columns: 12};

  return (
      <div
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${gridSize.rows}, 60px)`,
            gridTemplateColumns: `repeat(${gridSize.columns}, 60px)`,
            gap: "2px",
            position: "relative",
            border: "1px solid #000",
          }}
      >
        {newItems.length !== 0 ?(
          newItems.map((item) => (
              <InventoryItem key={item.id} item={item}/>
          )))
         :<h2>Nothing was found</h2>
}
      </div>
  );
};
