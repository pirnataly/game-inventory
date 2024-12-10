import React from "react";
import {InventoryItemData} from "../types/types";

const rarityColors: Record<string, string> = {
  common: "lightGreen",
  rare: "pink",
  epic: "lightBlue",
};

export const InventoryItem: React.FC<{ item: InventoryItemData}> = ({ item }) => {
  const { type, rarity, size } = item;
  return (

      <div
          style={{
            gridColumn: `span ${size[0]}`,
            gridRow: `span ${size[1]}`,
            backgroundColor: rarityColors[rarity],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
          }}
      >
        {type}
      </div>
  );
};