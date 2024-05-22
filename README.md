# Tienda de Artículos de Marvel

Esta es una aplicación web para una tienda de artículos de Marvel, creada por **Pablo Miguel Sánchez**. La aplicación permite a los usuarios navegar, visualizar y comprar una variedad de productos temáticos de Marvel. A continuación se describen las funcionalidades principales de la aplicación.

## Funcionalidades

### Navegación
La aplicación cuenta con un sistema de navegación que permite a los usuarios moverse entre diferentes secciones, como la lista de productos, los detalles de cada producto, y otras secciones informativas como 'Acerca de', 'Contacto', 'Política de privacidad' y 'Términos y condiciones' (actualmente en construcción).

**Código relacionado:**
- `App.jsx`
- `Navbar.jsx`
- `NavbarToggler.jsx`
- `CategoryList.jsx`
- `CategoryLink.jsx`
- `BrandLogo.jsx`
- `useCustomNavigate.js`

### Lista de Productos
La página principal muestra una lista de productos disponibles. Cada producto se presenta con su imagen, nombre y una breve descripción. Los usuarios pueden hacer clic en cualquier producto para ver más detalles. La lista de productos se carga dinámicamente desde una base de datos de Firebase.

**Código relacionado:**
- `ItemListContainer.jsx`
- `ItemList.jsx`
- `Item.jsx`
- `Loading.jsx`
- `utils.js`
- `config.js`

### Detalle del Producto
Al seleccionar un producto, el usuario es redirigido a una página de detalles donde puede ver información más detallada sobre el producto, incluyendo una descripción completa, el precio y el stock disponible. Desde esta página, el usuario puede agregar el producto al carrito de compras.

**Código relacionado:**
- `ItemDetailContainer.jsx`
- `ItemDetail.jsx`
- `StockMessage.jsx`

### Carrito de Compras
La aplicación incluye un carrito de compras que permite a los usuarios agregar, visualizar y gestionar los productos que desean comprar. El carrito se muestra como un modal y permite a los usuarios ver la cantidad de artículos, el precio total y opciones para eliminar productos o proceder al pago.

**Código relacionado:**
- `CartWidget.jsx`
- `CartModal.jsx`
- `CartModalContainer.jsx`
- `CartIcon.jsx`

### Manejo del Carrito
El carrito se gestiona a través de un contexto global que permite agregar productos, eliminar productos y vaciar el carrito. Esto proporciona una experiencia de usuario fluida y coherente.

**Código relacionado:**
- `CartContext.jsx`
- `useCart.js`

### Componentes Adicionales
La aplicación cuenta con componentes adicionales para mejorar la funcionalidad y la experiencia del usuario.

#### ItemCount
Permite a los usuarios seleccionar la cantidad de productos que desean agregar al carrito.

**Código relacionado:**
- `ItemCount.jsx`

#### Footer
Incluye enlaces a páginas informativas y enlaces a redes sociales. También tiene un formulario para suscribirse a un boletín informativo.

**Código relacionado:**
- `Footer.jsx`
- `FooterLinks.jsx`

#### Alert
Muestra mensajes de alerta en la aplicación para diversas situaciones, como errores o confirmaciones.

**Código relacionado:**
- `Alert.jsx`

#### ErrorBoundary
Captura errores en los componentes hijos y muestra un mensaje de error amigable.

**Código relacionado:**
- `ErrorBoundary.jsx`

#### PriceDisplay
Muestra el precio de los productos en un formato adecuado.

**Código relacionado:**
- `PriceDisplay.jsx`

#### UnderConstruction
Muestra un mensaje indicando que la página está en construcción.

**Código relacionado:**
- `UnderConstruction.jsx`

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sanchezmiguel/ReactJs54120.git
