import {InventoryItemData} from "../types/types";

export const validateInventory = (items: InventoryItemData[], gridSize: { rows: number; columns: number }): boolean => {
  const grid = Array(gridSize.rows).fill(null).map(() => Array(gridSize.columns).fill(false));

  for (const item of items) {
    const {position, size} = item;
    const [x, y] = position;
    if (x + size[0] > gridSize.columns || y + size[1] > gridSize.rows) {
      return false;
    }

    for (let i = 0; i < size[1]; i++) {
      for (let j = 0; j < size[0]; j++) {
        if (grid[y + i][x + j]) {
          return false;
        }
        grid[y + i][x + j] = true;
      }
    }
  }

  return true;
};
