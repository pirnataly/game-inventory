import './App.css';
import {InventoryGrid} from "./components/inventoryGrid";
import dataObj from "./data/data1.json" ;
import {InventoryItemData} from "./types/types";

function App() {
  const itemsFromJson = dataObj as InventoryItemData[];

  return (
      <>
        <div>
          <h1>Game inventory</h1>
          {itemsFromJson.length !== 0 ?
              <InventoryGrid items={itemsFromJson}></InventoryGrid> : <h2>Nothing was found</h2>}
        </div>

      </>
  )
}


export default App
