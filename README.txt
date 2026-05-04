==========================================================
        DOCUMENTACION DEL PROYECTO: SENATI STORE API
==========================================================

1. ESTADO DEL PROYECTO
----------------------------------------------------------
El proyecto se encuentra actualmente OPERATIVO. Se ha 
logrado la conexion exitosa entre el servidor local y 
la base de datos en la nube.

- Servidor: Node.js + Express (localhost:3000)
- Base de Datos: MongoDB Atlas (Cloud)
- Estado: ✅ Conectado exitosamente

2. CONFIGURACION DEL ENTORNO (.env)
----------------------------------------------------------
Para la conexion, se configuraron las siguientes variables:

PORT=3000
MONGODB_URI=mongodb+srv://leonards1369_db_user:A6LLplnzdJwDTBYn@cluster0.xxx.mongodb.net/senati_store

3. ENDPOINTS DISPONIBLES
----------------------------------------------------------
> GET /
Verifica el estado del servidor.
Respuesta esperada: {"name": "SENATI Store API", "status": "online"}

> GET /api/products
Lista los productos desde MongoDB Atlas.
Respuesta esperada: {"success": true, "count": 0, "data": []}

> POST /api/products
Permite registrar un nuevo producto enviando un JSON.

4. SOLUCION DE PROBLEMAS (LOG)
----------------------------------------------------------
- ERROR MONGOD: Se presento un error de "punto de entrada" 
  en Windows al intentar ejecutar MongoDB localmente.
- SOLUCION: Se migro la base de datos a MongoDB Atlas 
  para asegurar la estabilidad del proyecto.
- ERROR 400 POSTMAN: Se corrigieron errores de formato 
  JSON (espacios y caracteres invisibles) y se verifico 
  el uso de express.json() en el codigo.

Desarrollado para: S12-S1-T1 - SENATI