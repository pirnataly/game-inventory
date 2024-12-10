export type ItemType = "potion" | "equipment" | "weapon";
export type RarityType = "common" | "rare" | "epic";

export interface InventoryItemData {
  id: string;
  type: ItemType;
  rarity: RarityType;
  size: [number, number];
  position: [number, number];
}

