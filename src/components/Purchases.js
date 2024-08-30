import PurchaseItem from "./PurchaseItem";

export default function Purchases({
  purchaseItems,
  onSelection,
  selectedPurchase,
}) {
  return (
    <div className="purchases">
      <h2>Purchases</h2>
      <ul>
        {purchaseItems.map((item) => (
          <PurchaseItem
            item={item}
            key={item.id}
            selectedItem={selectedPurchase}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}
