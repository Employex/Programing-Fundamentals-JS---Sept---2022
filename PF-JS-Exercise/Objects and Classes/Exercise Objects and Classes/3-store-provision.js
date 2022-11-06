function storeProvision(stock, product) {
  let currentStore = {};

  for (let i = 0; i < stock.length; i += 2) {
    let name = stock[i];
    currentStore[name] = Number(stock[i + 1]);
  }

  for (let i = 0; i < product.length; i += 2) {
    let name = product[i];
    if (!currentStore.hasOwnProperty(name)) {
      currentStore[name] = 0;
    }
    currentStore[name] += Number(product[i + 1]);
  }

  for (const key in currentStore) {
    console.log(`${key} -> ${currentStore[key]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
