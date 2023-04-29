export default function Home() {
  return (
    <main className="container">
      <h1>Next.js + TypeScript + Pico CSS</h1>

      <p>
        Soy un párrafo de texto. <a href="#">Soy un enlace</a>.
      </p>

      <p>
        <button>Soy un botón</button>
      </p>

      <p>
        <input type="text" placeholder="Soy un campo de texto" />
      </p>

      <p>
        <label>
          <input type="checkbox" /> Soy un checkbox
        </label>
      </p>

      <p>
        <label>
          <input type="radio" name="radio" /> Soy un radio
        </label>
      </p>

      <p>
        <select>
          <option>Soy un select</option>
        </select>
      </p>
    </main>
  );
}
