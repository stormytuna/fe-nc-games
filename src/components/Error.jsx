export function Error({ errorMessage }) {
  return (
    <div className="Error">
      <h2>ERROR!</h2>
      <p>{errorMessage}</p>
    </div>
  );
}
