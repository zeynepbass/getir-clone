import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementItem, selectQuantityById } from "./cartSlice";

export function useCartItem(productId) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => selectQuantityById(state, productId));

  const increment = useCallback(() => dispatch(addToCart(productId)), [dispatch, productId]);
  const decrement = useCallback(() => dispatch(decrementItem(productId)), [dispatch, productId]);

  return { quantity, increment, decrement };
}
