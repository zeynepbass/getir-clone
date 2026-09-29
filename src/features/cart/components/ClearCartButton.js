import { memo } from "react";
import { Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@/shared/components/Icon";
import colors from "@/shared/theme/colors";
import { clearCart, selectIsCartEmpty } from "../cartSlice";

function ClearCartButton() {
  const dispatch = useDispatch();
  const isEmpty = useSelector(selectIsCartEmpty);

  return (
    <Pressable
      onPress={() => dispatch(clearCart())}
      disabled={isEmpty}
      hitSlop={8}
      className={`px-2 ${isEmpty ? "opacity-40" : ""}`}
      accessibilityRole="button"
      accessibilityLabel="Sepeti temizle"
      accessibilityState={{ disabled: isEmpty }}
    >
      <Icon name="trash-outline" size={22} color={colors.textOnPrimary} />
    </Pressable>
  );
}

export default memo(ClearCartButton);
