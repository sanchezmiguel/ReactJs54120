# Marvel Store

## Descripción

Esta es una aplicación web para una tienda de artículos de Marvel, creada por **Pablo Miguel Sánchez**. La aplicación permite a los usuarios navegar, visualizar y comprar una variedad de productos temáticos de Marvel. A continuación se describen las funcionalidades principales de la aplicación.

Marvel Store es una aplicación de comercio electrónico construida usando React y Firebase. La aplicación permite a los usuarios navegar, buscar y comprar productos temáticos de Marvel, incluyendo cómics, juguetes y accesorios. La aplicación soporta funcionalidades como autenticación de usuarios, gestión del carrito de compras y actualizaciones de stock en tiempo real.

## Funcionalidades

- **Autenticación de Usuarios**: Los usuarios pueden registrarse, iniciar sesión y cerrar sesión.
- **Navegación de Productos**: Navegar productos por categoría, buscar artículos específicos y ver información detallada de cada producto.
- **Carrito de Compras**: Agregar productos al carrito, ajustar cantidades y eliminar artículos.
- **Gestión de Stock en Tiempo Real**: Asegura que el stock se actualice en tiempo real para evitar sobreventas.
- **Historial de Compras**: Rastrea compras anteriores y gestiona pedidos.
- **Wishlist**: Permite a los usuarios guardar productos para comprar en otro momento. Los productos pueden ser añadidos a la wishlist desde el detalle o el listado y pueden ser gestionados desde un widget en el navbar.
- **Categorías Dinámicas**: Las categorías de productos se cargan de forma dinámica desde Firebase, permitiendo una fácil actualización y gestión de las mismas.
- **Diseño Responsivo**: La aplicación está optimizada tanto para dispositivos de escritorio como móviles.

## Dependencias del Proyecto Marvel Store

Este archivo documenta las librerías públicas utilizadas en el proyecto Marvel Store, junto con sus enlaces y justificaciones de por qué agregan valor al proyecto.

### react-router-dom

**Enlace:** [react-router-dom](https://reactrouter.com/)

**Justificación:**
React Router Dom es fundamental para la navegación dentro de una aplicación de React. Proporciona componentes como `BrowserRouter`, `Routes`, `Link` y `useNavigate`, que permiten manejar la navegación entre diferentes vistas de la aplicación sin recargar la página. Esto mejora significativamente la experiencia del usuario al permitir una navegación más rápida y fluida.

### firebase

**Enlace:** [firebase](https://firebase.google.com/)

**Justificación:**
Firebase es una plataforma completa para el desarrollo de aplicaciones móviles y web. En este proyecto, Firebase se utiliza para la autenticación de usuarios y para la base de datos en tiempo real (Firestore). Firebase Authentication permite gestionar usuarios de manera segura, mientras que Firestore proporciona una base de datos escalable y flexible para almacenar los datos de la aplicación.

### @fortawesome/react-fontawesome

**Enlace:** [@fortawesome/react-fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

**Justificación:**
Font Awesome es una biblioteca de iconos muy popular que se utiliza para mejorar la interfaz de usuario de la aplicación. La integración con React mediante `@fortawesome/react-fontawesome` permite incluir fácilmente iconos vectoriales escalables en los componentes, lo que mejora la estética y la usabilidad de la aplicación.

### prop-types

**Enlace:** [prop-types](https://github.com/facebook/prop-types)

**Justificación:**
Prop-types es una biblioteca que permite validar las props que se pasan a los componentes de React. Esto es útil para garantizar que los componentes se usen correctamente y para ayudar a prevenir errores durante el desarrollo, mejorando así la calidad del código y facilitando el mantenimiento.

### bootstrap

**Enlace:** [bootstrap](https://getbootstrap.com/)

**Justificación:**
Bootstrap es una biblioteca de CSS que facilita el diseño responsivo y la creación de interfaces de usuario atractivas y coherentes. Utilizar Bootstrap en este proyecto ayuda a asegurar que la aplicación sea accesible y se vea bien en una amplia gama de dispositivos y tamaños de pantalla.

### react-bootstrap

**Enlace:** [react-bootstrap](https://react-bootstrap.github.io/)

**Justificación:**
React Bootstrap es la implementación de los componentes de Bootstrap en React. Permite utilizar los componentes de Bootstrap de manera nativa en React, proporcionando una integración más fluida y facilitando el uso de Bootstrap en una aplicación de React.

### react-hook-form

**Enlace:** [react-hook-form](https://react-hook-form.com/)

**Justificación:**
React Hook Form es una biblioteca para manejar formularios en React de manera eficiente y sencilla. Mejora el rendimiento del formulario al minimizar las renderizaciones innecesarias y facilita la validación y el manejo de formularios complejos.

### yup

**Enlace:** [yup](https://github.com/jquense/yup)

**Justificación:**
Yup es una biblioteca de validación de esquemas para JavaScript. Se utiliza junto con React Hook Form para validar los datos de los formularios de manera sencilla y robusta. Proporciona una forma declarativa de definir las reglas de validación, lo que mejora la legibilidad y mantenibilidad del código.

### axios

**Enlace:** [axios](https://axios-http.com/)

**Justificación:**
Axios es una biblioteca para realizar solicitudes HTTP desde Node.js o XMLHttpRequests desde el navegador. Se utiliza para la comunicación con APIs, permitiendo realizar operaciones como obtener datos de un servidor o enviar datos a un servidor. Es fácil de usar y manejar con promesas, lo que mejora la simplicidad y claridad del código de solicitud HTTP.



## Componentes

### Componentes Principales

- **App.jsx**: El componente principal de la aplicación que configura el enrutamiento y los proveedores globales.
- **Navbar.jsx**: La barra de navegación con enlaces a diferentes páginas y widgets.
- **Footer.jsx**: El pie de página con enlaces a varias páginas informativas y redes sociales.
- **CartModalContainer.jsx**: El contenedor para el modal del carrito de compras, que gestiona los artículos del carrito y el proceso de pago.

### Componentes Funcionales

- **CategoryDropdown.jsx**: Muestra un menú desplegable de categorías de productos.
- **CategoryLink.jsx**: Componente para enlaces de navegación de categorías.
- **ItemListContainer.jsx**: Contenedor para mostrar una lista de artículos, obteniendo datos de Firebase.
- **ItemList.jsx**: Muestra una cuadrícula de artículos, cada uno enlazando a su página de detalles.
- **ItemDetailContainer.jsx**: Obtiene y muestra detalles de un artículo seleccionado.
- **ItemDetail.jsx**: Vista detallada de un solo artículo, incluyendo la funcionalidad de agregar al carrito.
- **CartWidget.jsx**: Muestra el número de artículos en el carrito y navega al modal del carrito.
- **WishlistWidget.jsx**: Muestra el número de artículos en la lista de deseos y navega a la página de wishlist.
- **CartItem.jsx**: Muestra artículos individuales del carrito con opciones para ajustar la cantidad y eliminar.
- **CartActions.jsx**: Contiene acciones para vaciar el carrito y proceder al pago.
- **PaymentModal.jsx**: Modal para seleccionar el método de pago y completar la compra.
- **Loading.jsx**: Muestra un spinner de carga durante las búsquedas de datos.
- **Alert.jsx**: Muestra mensajes de alerta para varias acciones del usuario.
- **OrderSearchLink.jsx**: Enlace para la búsqueda de órdenes.
- **PurchaseHistoryWidget.jsx**: Muestra el historial de compras del usuario.

### Componentes de Utilidad

- **ErrorBoundary.jsx**: Captura errores de JavaScript en cualquier parte del árbol de componentes hijos.
- **StockMessage.jsx**: Muestra mensajes de disponibilidad de stock basados en la cantidad de stock.
- **PriceDisplay.jsx**: Formatea y muestra precios con símbolos de moneda.
- **PurchaseMessage.jsx**: Muestra mensajes después de completar una compra.
- **DiscountCodeInput.jsx**: Maneja la entrada y aplicación de códigos de descuento.
- **CartTotal.jsx**: Muestra el precio total de los artículos en el carrito, incluyendo descuentos.
- **BrandLogo.jsx**: Muestra el logo de la marca en la barra de navegación.
- **NavbarToggler.jsx**: Botón de alternancia para colapsar la barra de navegación en dispositivos móviles.
- **UnderConstruction.jsx**: Componente de marcador de posición para páginas en construcción.
- **ItemTitle.jsx**: Muestra el título de un artículo.
- **ItemCount.jsx**: Permite a los usuarios incrementar o decrementar la cantidad de artículos.
- **FooterLinks.jsx**: Contiene enlaces de navegación usados en el pie de página.
- **AuthLink.jsx**: Enlaces personalizados para iniciar sesión y registrarse.

### Contexto y Hooks

- **AuthContext.jsx**: Proporciona el contexto de autenticación y funciones para manejar el estado del usuario.
- **CartContext.jsx**: Proporciona el estado del carrito y funciones para agregar, eliminar y vaciar artículos.
- **CategoryContext.jsx**: Proporciona el estado de las categorías y funciones para gestionarlas.
- **WishlistContext.jsx**: Proporciona el estado de la lista de deseos y funciones para agregar y eliminar artículos.
- **useCart.js**: Hook personalizado para acceder al contexto del carrito.
- **useCustomNavigate.js**: Hook personalizado para acciones de navegación con registro opcional.
- **useAuth.js**: Hook personalizado para acceder al contexto de autenticación.
- **useCategories.js**: Hook personalizado para acceder al contexto de categorías.
- **useWishlist.js**: Hook personalizado para acceder al contexto de la lista de deseos.

### Configuración de Firebase

- **firebase-config.js**: Inicializa Firebase y exporta la instancia de Firestore.
- **config.js**: Contiene detalles de configuración como URLs de API.

## Configuración e Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/yourusername/marvel-store.git
    cd marvel-store
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

3. Configura Firebase:
  - Reemplaza la configuración de Firebase en `firebase-config.js` con los detalles de tu propio proyecto de Firebase.

4. Inicia el servidor de desarrollo:
    ```sh
    npm start
    ```

5. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en acción.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request si tienes alguna mejora o corrección de errores.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
