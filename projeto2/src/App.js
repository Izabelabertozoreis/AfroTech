import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import LivroAvaliado from './components/avaliacao/avaliacao';
import Menu from './components/menu/menu';
import Catalogo from './components/catalogo/catalogo';
import CardAvaliacao from './components/livros/livros';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <LivroAvaliado />
      <Catalogo livros={livros} />
    
    </div>
  );
}

export default App;
