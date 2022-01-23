# `Instalación`
Instalamos las dependencias necesarias para poder iniciar el proyecto
```bash
npm install
```

Creamos el archivo .env con los datos requeridos que estan en el archivo .env.example

## Base de datos
La base de datos usada es Mysql, para evitar instalaciones del manejador se usara docker.

## Instalar en docker
Para ello debemos primero tener instalado docker, dentro de nuestra carpeta ejecutamos el comando.
```bash
docker-compose up -d mysql
```
Las tablas se crean por medio sel ORM sequelize en Node.

# `Scripts`
## Iniciar Projecto
Con el siguiente comando compilamos y ejecutamos nuestro proyecto
```bash
npm start
```

Una vez termine de compilar podrás ver el proyecto en http://localhost:5000
