import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getProductById } from "@/features/products/data/products";

const initialState = {
  ids: [],
  quantities: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;
      if (!state.quantities[id]) {
        state.ids.push(id);
        state.quantities[id] = 0;
      }
      state.quantities[id] += 1;
    },
    decrementItem(state, action) {
      const id = action.payload;
      if (!state.quantities[id]) return;
      state.quantities[id] -= 1;
      if (state.quantities[id] === 0) {
        delete state.quantities[id];
        state.ids = state.ids.filter((itemId) => itemId !== id);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      delete state.quantities[id];
      state.ids = state.ids.filter((itemId) => itemId !== id);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addToCart, decrementItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

const selectCart = (state) => state.cart;

export const selectCartIds = (state) => selectCart(state).ids;
export const selectQuantityById = (state, id) => selectCart(state).quantities[id] ?? 0;
export const selectIsCartEmpty = (state) => selectCart(state).ids.length === 0;

export const selectCartCount = createSelector([selectCart], ({ ids, quantities }) =>
  ids.reduce((count, id) => count + quantities[id], 0)
);

export const selectCartTotal = createSelector([selectCart], ({ ids, quantities }) =>
  ids.reduce((total, id) => {
    const product = getProductById(id);
    if (!product) return total;
    return total + (product.discountedPrice ?? product.price) * quantities[id];
  }, 0)
);
