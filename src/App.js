
import Quadrado from './componentes/quadrado.js';
import Foter from './componentes/foter.js';
import Cabecario from './componentes/cabecario.js';
import Marcas from './componentes/marcas.js';
import Segundo_quadrado from './componentes/segundo_quadrado.js';
import Faixa from './componentes/faixa.js';
import Terceiro_quadrado from './componentes/terceiro_quadrado.js';
import Quarto_quadrado from './componentes/quarto_quadrado.js';
import Quinto_quadrado from './componentes/quinto_quadrado.js';
import './App.css'

function App() {
  return (
    <div className="App">
  
    <Cabecario/>
    <Quadrado/>
    <Marcas/>
    <Segundo_quadrado/>
    <Faixa/>
    <Terceiro_quadrado/>
    <Quarto_quadrado/>
    <Quinto_quadrado/>

    <br></br>
    <Foter/>    
    </div>
  )
}
export default App
