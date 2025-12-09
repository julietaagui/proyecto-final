# Proyecto Final - API Products


## Requisitos
- Node.js 16+ (o la versión que use tu entorno de curso)
- Cuenta Firebase con Firestore activado


## Instalación
1. Clonar el repositorio
2. Copiar `.env.example` a `.env` y completar las variables (especialmente las de Firebase y JWT)
3. Ejecutar `npm install`
4. Ejecutar `npm run start`


## Endpoints
- POST /auth/login { email, password } -> retorna `Bearer <token>` si las credenciales son correctas.
- GET /api/products -> lista productos
- GET /api/products/:id -> detalle producto
- POST /api/products/create -> crea producto (protegido: requiere Authorization: Bearer <token>)
- DELETE /api/products/:id -> elimina producto (protegido)


## Notas
- Para pruebas locales puedes usar las credenciales definidas en `.env` (AUTH_EMAIL, AUTH_PASSWORD).
- En producción deberías manejar usuarios en un servicio y no dejar credenciales en .env.
- Asegúrate de crear la colección `products` en Firestore y un primer documento con la estructura:
```json
{
"name": "Producto de ejemplo",
"description": "Descripción...",
"price": 123.45,
"stock": 10,
"createdAt": "2025-12-09T00:00:00.000Z"
}