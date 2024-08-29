import Participants from "./Participants";
import Purchases from "./Purchases";
import AddPurchaseForm from "./AddPurchaseForm";

export default function App() {
  return (
    <div className="app">
      <Purchases />
      <Participants />
      <AddPurchaseForm />
    </div>
  );
}
