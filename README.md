# Documentación Básica
Ultima Actualizacion: 1-Mar-23

## Estructra del proyecto
```bash
├── api
├── client
│   ├── node_modules
│   ├── public
│   │   │── img
│   │   │   └── zanahoria.ico
│   │   └── index.html
│   │── src
│   │   │── components
│   │   │   ├── Footer
│   │   │   │   │──Footer.jsx
│   │   │   │   │──Footer.scss
│   │   │   │   └──logofooter.png
│   │   │   └── Navbar
│   │   │       │──logo.png
│   │   │       │──Navbar.jsx
│   │   │       └──Navbar.scss
│   │   │── pages
│   │   │   ├── Ers
│   │   │   │   │──Ers.jsx
│   │   │   │   │──Ers.scss
│   │   │   │   └──Images
│   │   │   ├── Home
│   │   │   │   │──Home.jsx
│   │   │   │   │──Home.scss
│   │   │   │   └──Images-Video
│   │   │   ├── News
│   │   │   │   │──News.jsx
│   │   │   │   └──News.scss
│   │   │   ├── Profiles
│   │   │   │   │──Profiles.jsx
│   │   │   │   │──Profiles.scss
│   │   │   │   └──Images
│   │   │   ├── Survey
│   │   │   │   │──Survey.jsx
│   │   │   │   └──Survey.scss
│   │   │   ├── About.jsx
│   │   │   ├── Forum.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │──App.js
│   │   │──App.scss
│   │   └──index.js
│   │── .gitignore
│   │── package-lock.json
│   │── package.json
│   │── README.md
│   └── yarn.lock
├── README.md
 ```

## Iniciar el cliente
- Dirigirse al directorio 'client'
- En la terminal escribir el comando 'yarn' para instalar las librerias (node_modules)
- Ejecutar el proyecto con el comando 'yarn start'
- Para importar una libreria se usa el comando 'yarn add {nombre}'

## Funcionamiento Básico de la app (client)
Actualmente la app tiene las librerias de 'react-router-dom' para poder navegar a traves de las paginas, 'material-ui-icons' para poder importar iconos con estilos directamente en las paginas y 'sass' que nos permitira crear nuestra hoja de estilos de menera mas organizada.

Para verlo de manera simple, solo se trabaja sobre el directorio client/src ya que ahi se encuentran los componentes, las paginas y el App.js que es donde "guiaremos" el funcionamiento de la app.

### App.js
Dentro de App.js se destacan la creacion del router, que nos permitira conectar todas las paginas de la app, primero hay que entender la creacion de un 'Layout' que nos permitira usar nuestros componentes (Navbar, Footer) de manera constante en las paginas, evitando que se tengan que crear en cada pagina, este Layout se observa en este codigo:
```jsx
import "./App.scss" // Hoja de estilos
import {
  createBrowserRouter,
  RouterProvider,   // Impotacion de nuestro router
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Footer from "./components/Footer/Footer";    // Hay que importar cada uno de 
import Navbar from "./components/Navbar/Navbar";    // los elementos de la app
import Home from "./pages/Home/Home";

const Layout = () => {
  return (
    <>
      <Navbar/> // Componente
      <Outlet/> // Pagina actual
      <Footer/> // Componente
    </>
  );
};
 ```
De esta manera nosotros podremos controlar que paginas necesitan los comopentes con el siguiente codigo:
```Jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>    // La pagina Home cuenta con los componentes
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,   // La pagina Register no cuenta con los componentes
  }
]);
 ```
Finalmente nos queda retornar el contenido de la aplicacion que seria el router que creamos anteriormente.
```jsx
function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}
 ```

### Components/Pages
Nuestros componentes y paginas son los elementos que vamos a deplegar al usuario, de manera que la forma en la que trabajaremos nuetros elementos es con una carpeta con el nombre de nuestro elemento y dentro los archvivos .jsx, .scss y elementos adicionales que requiera nuestro elemento.
```bash
├── Carpeta del elemento (Compoenente/Pagina)
│   │──Archivo.jsx
│   │──Archivo.scss
│   └──Elementos adicionales (Imagenes/Videos)
 ```
Dentro del archivo .jsx crearemos la parte "HTML" que se desplegara al usuario ademas de poder hacer funciones que ayuden a hacer mas comoda la interaccion con la pagina
```jsx
import React, { useState } from 'react'
import { Link } from "react-router-dom"; // Impotacion de librerias si el elemento lo requiere
import "./Elemento.scss"  // Es importante asociar nuestra hoja de estilos en cada elemento

const Elemento = () => {
  const [clicked, setClick] = useState(false)   // Ejemplo basico de una funcion
  return (
    <div className="example">
      // dentro de esta seccion podremos escribir nuestro "HTML"
      // para despues darle estilo en el scss
    </div>
  )
}

export default Elemento
 ```
Dentro del archivo .scss daremos el formato deseado a nuestro "HTML" antes creado. SASS funciona de manera un poco distinto a CSS ya que ahora formaremos nuestra hoja de estilos de manera jerarquica, es decir que si en nuestro archivo .jsx tenemos un:
```jsx
const Elemento = () => {
  return (
    <div className="example">
      Algunos elementos
      <div className="example2">
        Algunos elementos
        <div className="example3">Algun elemento</div>
      </div>

      <div className="example4">
        Algunos elementos
      </div>
    </div>
  )
}

export default Elemento
 ```
Nuestra hoja de estilos deberia quedar de la siguiente manera:
```scss
.example {
  estilos: propiedades;

  .example2 {
    estilos: propiedades;

    .example3 {
      estilos: propiedades;
    }
  }

  .example4 {
    estilos: propiedades;
  }
}
 ```
Siguiendo estas reglas se formaran de manera correcta nuestros componentes o paginas de la aplicacion

## Iniciar la api
Aun no esta creada

## Funcionamiento Básico de la app (api)
Aun no esta creada
