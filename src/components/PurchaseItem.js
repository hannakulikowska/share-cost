export default function PurchaseItem({ item, onSelection, selectedItem }) {
  const isSelected = selectedItem?.id === item.id;

  return (
    <li
      className={
        isSelected ? "item purchase-item selected" : "item purchase-item"
      }
      onClick={() => onSelection(item)}
    >
      <div className="purchase-info">
        <input
          type="checkbox"
          className="purchase-name"
        />
        {item.name}

        <div className="data">
          <p className="quantity">{item.quantity} pcs</p>
          <p className="price">{item.price}$</p>
        </div>
      </div>
      <p className="purchase-amount">
        Total amount: {item.quantity * item.price}$
      </p>
    </li>
  );
}
