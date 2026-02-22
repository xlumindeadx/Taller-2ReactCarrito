Proyecto Carrito de Compras – React + Vite

-Descripción del Proyecto-
Este proyecto fue desarrollado como parte del taller práctico de React.
Iniciamos creando la primera aplicación con Vite, eliminando la estructura 
inicial y construyendo la arquitectura desde cero.

El proyecto consiste en la maquetación de un carrito de compras,
estructurado con tres componentes principales:Header,Content,Footer
En el componente Content se incluye un formulario para agregar productos
y un catálogo de 6 productos visibles en tarjetas.
Para la interfaz se utilizó Bootstrap.
___________________________________________________________________________________________________________________________

-Características principales-

-Creación de proyecto con Vite + React.
Estructura basada en 3 componentes principales.
Formulario completo para ingresar datos de productos:
Nombre del producto
Precio
Stock
URL de imagen
Descripción

-Catálogo de 6 productos estáticos incluidos manualmente.
Cada tarjeta muestra:
Nombre
Precio
Disponibilidad
Imagen
Botones Editar y Eliminar
Diseño Utilizando Bootstrap 5.
__________________________________________________________________________________________________________________________

-Maquetación personalizada (posicionando formulario a la izquierda y productos a la derecha).
No se utilizó CSS adicional.
Se implementaron conceptos de Props vistos en clase:
Comunicación entre componentes (padre → hijo).

-Interfaz Gráfica-
La interfaz está compuesta por dos secciones principales:

-Formulario de productos
Ubicado en la columna izquierda.
Permite diligenciar un producto con todos sus datos.

Catálogo de productos
Ubicado en la columna derecha.
Muestra 6 bebidas de ejemplo

_________________________________________________________________________________________________________________________

-Arquitectura del Proyecto-

src/
 ├── components/
 |    |__ Content.jsx
 │    ├── Footer.jsx
 │    ├── Header.jsx
 │    └── Props.jsx
 ├── App.jsx
 └── main.jsx

-Descripción-

Header.jsx: Contiene el título principal del proyecto.
Content.jsx: Contiene el formulario y la grilla de productos (maquetación principal).
Footer.jsx: Pie de página básico del proyecto.
App.jsx: Componente padre que organiza los tres componentes principales.
main.jsx: Punto de entrada del proyecto con ReactDOM.
props.jsx:Se aplicó el tema visto en clase de Props para comprender la herencia entre componentes.
_________________________________________________________________________________________________________________________

-Datos del Autor-
Nombre: Mariana Cardona Mazo
Tecnologo: Desarrollo de Software
Tecnologías usadas: React, Vite, Bootstra
