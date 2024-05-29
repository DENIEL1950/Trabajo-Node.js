//import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import BotonStateful from './components/BotonStateful';
import Boton from './components/Boton';
import Mycomponent from './components/Mycomponent';
import StringComponent from './components/StringComponent'; // Importa StringComponent

function App() {
    return (
        <div className="App">
            <h1>Hola desde React</h1>
            <p></p>
            <MyButton />
            <p></p>
            <Saludo />
            <p></p>
            <BotonStateful onClick={() => console.log('clickeando')}>
                clickeando
            </BotonStateful>
            <h2>Boton sin estado </h2>
            <Boton texto="Boton sin estado" onClick={() => console.log('Boton clickeado')} />
            <h2>Propiedades</h2>
            <Mycomponent name="John" anios={21} />
            <h2>Lista de nombres</h2>
            <StringComponent /> {/* Añade el StringComponent aquí */}
        </div>
    );
}

function MyButton() {
    return (
        <button>Soy un button</button>
    );
}

export default App;
