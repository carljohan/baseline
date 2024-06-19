import { writable } from "svelte/store";
import { type Item, items } from "./data";

type ItemStore = {
  selected: Item["id"] | null;
};

function createItemStore() {
  const store = writable<ItemStore>({ selected: items[0].id });

  return {
    subscribe: store.subscribe,
    setItem: (id: Item["id"]) => {
      store.update((store) => ({ ...store, selected: id }));
    },
  };
}

export const itemStore = createItemStore();
