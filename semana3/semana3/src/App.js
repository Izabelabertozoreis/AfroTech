import './App.css';
import CardAvaliacao from './components/CardAvaliacao/CardAvaliacao';
import estante from './components/estante/estante';
import header from './components/header/header';
import menu from './components/menu/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Favoritos" component={Favotitos} />
        <Route path="/desejados" component={Desejados} />
        <Route path="/avaliados" component={Avaliados} />
        <Route path="/resenha" component={Resenha} />
      </Switch>
    </Router>

    <div className="App">

      
      <header/>

      <hr />

      <h2>Minha Estante</h2>

      <div className='principal'>
        <menu />
        <estante />
      </div>
      <h2>Ultimas Avaliacoes</h2>
      <div className='principal'>
        <CardAvaliacao titulo="Titulo da Resenha" resenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />

        <CardAvaliacao titulo="Titulo da Resenha" resenha="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      </div>
    </div>
  );
}

export default App;
