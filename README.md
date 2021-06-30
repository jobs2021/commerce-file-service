# File Service API

## Endpoint
https://commerce-file-service.jobs2021.repl.co

## Variables de entorno

| Nombre | Example | Descripcion |
| --- | --- | --- |
| PORT | 3001 | Puerto en el que correra la app
| APP_BUCKET | AABBCCAABBCC | Nombre del bucket de GCP donde se almacenaran las imagees |
| APP_JWT_SECRET_KEY |AABBCCAABBCC | Llave que se usara para verificar los JWT entrantes |
| APP_GOOGLE_CREDENTIALS | {"type":"service_account","project_id":"xxx-xxx", ...more} | Credenciales de google |

## Correr el proyecto

- instalar dependencias
```
    npm install
```

- iniciar el proyecto
```
    npm start
```
