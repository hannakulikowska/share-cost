import PurchaseItem from "./PurchaseItem";

export default function Purchases({ purchaseItems }) {
  return (
    <div className="purchases">
      <h2>Purchases</h2>
      <ul>
        {purchaseItems.map((item) => (
          <PurchaseItem
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
