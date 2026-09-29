import { memo } from "react";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

cssInterop(Image, { className: "style" });

function AppImage({ alt, accessibilityLabel = alt, contentFit = "cover", transition = 150, cachePolicy = "memory-disk", ...rest }) {
  return (
    <Image
      accessibilityLabel={accessibilityLabel}
      contentFit={contentFit}
      transition={transition}
      cachePolicy={cachePolicy}
      {...rest}
    />
  );
}

export default memo(AppImage);
