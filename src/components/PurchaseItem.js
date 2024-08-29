export default function PurchaseItem() {
  return (
    <li className="item purchase-item">
      <div className="purchase-info">
        <input
          type="checkbox"
          className="purchase-name"
        />
        Paper A4
        <div className="data">
          <p className="quantity">2 pcs</p>
          <p className="price">4$</p>
        </div>
      </div>
      <p className="purchase-amount">Total amount: 8$</p>
    </li>
  );
}
