import { lazy, Suspense } from "react";
import ScreenLoader from "../components/ScreenLoader";

export default function lazyScreen(factory) {
  const Screen = lazy(factory);

  function LazyScreen(props) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        <Screen {...props} />
      </Suspense>
    );
  }

  return LazyScreen;
}
