export default function PurchaseItem({ item, onSelection, selectedItem }) {
  const isSelected = selectedItem?.id === item.id;

  return (
    <li
      className={
        isSelected ? "item purchase-item selected" : "item purchase-item"
      }
      onClick={() => onSelection(item)}
      disabled={item.purchasedQuantity === item.quantity}
    >
      <div className="purchase-info">
        <input
          type="checkbox"
          className="purchase-name"
        />
        <p style={{ fontWeight: "bold" }}>{item.name}</p>

        <div className="data">
          <p className="quantity">
            {item.purchasedQuantity}/{item.quantity} pcs
          </p>
          <p className="price">
            {(item.totalPaid / item.purchasedQuantity || 0).toFixed(2)}$
          </p>
        </div>
      </div>
      <p className="purchase-amount">
        Total paid: {(item.totalPaid || 0).toFixed(2)}$
      </p>
    </li>
  );
}
