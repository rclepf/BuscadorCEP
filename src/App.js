import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
      <h1 className="title">Teste</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearch"><FiSearch size={25} color="#fff" /> </button>
      </div>
      <main className='main'>
        <h2>CEP: 11111111</h2>

        <span>Rua Teste</span>
        <span>Complement: algo</span>
      </main>

    </div>
  );
}

export default App;
