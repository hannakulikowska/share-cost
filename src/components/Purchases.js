import PurchaseItem from "./PurchaseItem";

export default function Purchases() {
  return (
    <form className="form purchases-form">
      <h1>Purchases</h1>
      <ul className="purchases-list">
        <PurchaseItem />
      </ul>
      <button className="button">Add purchase</button>
    </form>
  );
}
