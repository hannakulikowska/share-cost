import PurchaseItem from "./PurchaseItem";

export default function Purchases() {
  return (
    <div className="form purchases-form">
      <h1>Purchases</h1>
      <ul className="purchases-list">
        <PurchaseItem />
      </ul>
    </div>
  );
}
