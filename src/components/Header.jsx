import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsContext } from "../lib/hooks";

export default function Header() {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => items.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
