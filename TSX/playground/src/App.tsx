import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <section className="grid grid-cols-3 m-4 gap-4">
        <Counter />
      </section>
    </>
  );
}

export default App;
