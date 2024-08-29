export default function AddPurchaseForm() {
  return (
    <div className="add-purchase-form">
      <form className="form">
        <label
          htmlFor="name"
          className="label"
        >
          Purchase
        </label>
        <input
          type="text"
          id="name"
          placeholder="Add item"
        />
        <label
          htmlFor="pcs"
          className="label"
        >
          Quantity
        </label>
        <input
          type="text"
          id="pcs"
          placeholder="Add quantity"
        />
        <label
          htmlFor="price"
          className="label"
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          placeholder="Add price per piece"
        />
        <button
          type="submit"
          className="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
