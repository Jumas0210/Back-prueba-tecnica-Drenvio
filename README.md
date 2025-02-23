# Desafío React / MongoDB - Backend

Este repositorio contiene la API desarrollada con **Node.js**, **Express** y **TypeScript** para el desafío técnico. La API se conecta a una base de datos **MongoDB** mediante **Mongoose** y ofrece endpoints para gestionar tanto productos como precios especiales.

---

## Introducción

La API fue diseñada para soportar operaciones CRUD sobre productos y gestionar precios especiales para determinados usuarios. Se utiliza **TypeScript** para contar con tipado estático, lo que mejora la robustez y mantenibilidad del código. La conexión a la base de datos se configura mediante variables de entorno, permitiendo adaptar la configuración sin modificar el código fuente.

Dentro del proyecto se implementa un **schema** y **modelo** para gestionar precios especiales. En el schema se definen los campos requeridos (como `userID`, `productID` y `specialPrice`), y en el modelo se incluyen métodos para:

- Recuperar todos los precios especiales.
- Crear un nuevo registro de precio especial.
- Obtener todos los productos con su precio especial (utilizando agregación para unir la información de productos con la colección de precios especiales, filtrada por el `userID`).

---

## Pasos para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jumas0210/Back-prueba-tecnica-Drenvio.git
cd Back-prueba-tecnica-Drenvio
```

## 2. Configurar las variables de entorno

Crea un archivo **.env** en la raíz del proyecto con el siguiente contenido:

```bash
PORT=5000

SERVER_DB=drenviochallenge.2efc0.mongodb.net

USER_DB=drenviochallenge

PASS_DB=m1jWly3uw42cBwp6
```

## 3. Instalar dependencias y ejecutar el servidor

Instala las dependencias:

```bash
npm install
```
Para ejecutar el servidor en modo desarrollo, utiliza:

```bash
npm run dev
```

## Justificación de elecciones técnicas

**Node.js y Express con TypeScript:**  
TypeScript permite detectar errores en tiempo de desarrollo gracias al tipado estático, lo que mejora la mantenibilidad del código. Express facilita la construcción de APIs REST de forma sencilla y escalable.

**MongoDB y Mongoose:**  
MongoDB ofrece flexibilidad para manejar esquemas y buen rendimiento para grandes volúmenes de datos, mientras que Mongoose simplifica la definición y validación de esquemas, además de facilitar la interacción con la base de datos.

## Descripción de la estructura del proyecto

**La estructura actual del proyecto es la siguiente:**

```bash
 src/ ├── config/                                    // Configuraciones generales y conexión a la base de datos
├── controllers/                                    // Lógica de negocio y manejo de endpoints
│ └── ProductsController.ts                        // Ejemplo de controller para productos
├── models/                                       // Modelos de datos y métodos de acceso
│ ├── productModel.ts                            // Modelo para productos
│ └── specialPriceModel.ts                      // Modelo para precios especiales
├── routes/                                    // Definición de rutas de la API
├── schema/                                   // Definición de schemas para Mongoose
│ ├── products.ts                            // Schema de productos
│ └── specialPrice.ts                       // Schema de precios especiales (se exporta como 'preciosEspecialesDelatorre33')
├── utils/
│ └── interfaces/                         // Definición de interfaces y tipos (por ejemplo, ISpecialPrice, Iproducts
└── index.ts                             // Punto de entrada principal de la aplicación
.env                                    // Archivo de configuración de variables de entorno
package.json                           // Dependencias y scripts (incluye: "dev", "dev:api", "build" y "start")
tsconfig.json                         // Configuración de TypeScript
```



