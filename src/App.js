import './App.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// Importamos nuestros formularios desde el archivo de componentes 'formularios.js'
import {FormsComponent, F1,F2,F3,F4,F5,F6,F7,F8,F9,F10} from './components/formularios'

// Definimos nuestro componente principal 'App'
function App() {
  // Creamos un estado 'data' para almacenar los datos ingresados en los formularios
  const [data, setData] = useState({})

  // Función que se ejecuta cada vez que un campo de formulario cambia
  const onChange = (e) => {
    e.preventDefault(); // Evitamos que la página se recargue
    const obj = data; // Creamos una referencia al objeto 'data'
    obj[e.target.name] = e.target.value; // Almacenamos el valor del campo en el objeto usando el nombre del campo
    setData(obj) // Actualizamos el estado 'data' con el nuevo objeto
    console.log(data) // Mostramos el objeto 'data' en la consola para depuración
  }                                                                  //La depuración es como "limpiar" o "arreglar" algo que no está funcionando bien en el codigo

  // Función que se ejecuta cuando se hace clic en el botón
  const onClick = () => {
    console.log(data) // Mostramos el objeto 'data' en la consola cuando se hace clic
  }

  /* Definimos un objeto 'forms_obj' que contiene todos los formularios */
  const forms_obj = {
    // Clave: nombre del formulario y valor: componente del formulario
    '1. Formulario de clase': <FormsComponent  onChange={onChange} onClick={onClick}/>,
    '2. Tecnologia y Sociedad': <F1 onChange={onChange} onClick={onClick}/>,
    '3. Ciencia y Medio Ambiente': <F2 onChange={onChange} onClick={onClick}/>,
    '4. Historia y Política': <F3 onChange={onChange} onClick={onClick}/>,
    '5. Economía y Finanzas': <F4 onChange={onChange} onClick={onClick}/>,
    '6. Cultura y Sociedad': <F5 onChange={onChange} onClick={onClick}/>,
    '7. Ciencia y Tecnología': <F6 onChange={onChange} onClick={onClick}/>,
    '8. Psicología y Salud Mental': <F7 onChange={onChange} onClick={onClick}/>,
    '9. Filosofía y Ética': <F8 onChange={onChange} onClick={onClick}/>,
    '10. Educación y Aprendizaje': <F9 onChange={onChange} onClick={onClick}/>,
    '11. Deportes y Salud': <F10 onChange={onChange} onClick={onClick}/>,
  }

  // Creamos una lista de tarjetas a partir de los formularios definidos en 'forms_obj'
  const showCards = Object.entries(forms_obj).map(([key, form]) => {
    return (
      <Col className="mb-2"> 
        <Card className="mt-4" key={key}>
          <Card.Body className='d-flex flex-column justify-content-between'> 
            <Card.Title className='text-center'>{key}</Card.Title> {/* Título de la tarjeta */}
            {form} {/* El formulario correspondiente */}
          </Card.Body>
        </Card>
      </Col>
    )
  })

  // Retornamos la estructura
  return (
    <>
      <Container className="mt-3"> {/* Contenedor principal para alinear todo */}
        <h1 className='text-center'>Cuestionarios en React</h1> {/* Título principal de la página */}
        <Row>{showCards}</Row> 
      </Container>
    </>
  )
}


export default App;
