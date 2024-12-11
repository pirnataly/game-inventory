import './App.css';
import {InventoryGrid} from "./components/inventoryGrid";
import dataObj from "./data/data1.json" ;
import {InventoryItemData} from "./types/types";
import {validateInventory} from "./utils/validate";

function App() {
  const itemsFromJson = dataObj as InventoryItemData[];
  const gridSize = {rows: 8, columns: 12};

    if (!validateInventory(itemsFromJson, gridSize)) {
      return <h1>Invalid inventory configuration!</h1>;
    }

    return (
        <div>
          <h1>Game inventory</h1>
          {itemsFromJson.length !== 0 ?
              <InventoryGrid items={itemsFromJson}></InventoryGrid> : <h2>Nothing was found</h2>}
        </div>
    )
  }

export default App
