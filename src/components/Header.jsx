import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../stores/ItemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((items) => items.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
