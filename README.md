# webpack by midudev

1- Inicializamos el proyecto

```bash
    npm init -y
```

2- Install webpack

```bash
    npm i -D webpack webpack-cli
```

3- Ejecutar webpack

```bash
    npx webpack
```

Crea por defecto una carpeta dist con un archivo main.js minificado (sin espacios, sin comentarios, sin saltos de línea) está optimizado

4- alternativamente puedes crear un script que lo haga por defecto

```bash
    npm run dev
```

5- Al poner el modo development el resultado es diferente
Por defecto webpack tiene que le punto de entrada está en la carpeta src/index.js

6- Si quieres cambiar el comportamiento por defecto se crea el archivo webpack.config.js

Al cambiar el output y hacer npm run dev te crea la carpeta build, así que se borra la carpeta dist

7- Para cambiar el nombre del bundle resultante se usa filename

8- Install react and react-dom

```bash
    npm i react react-dom
```

Se necesita un loader (babel) porque no entiende JSX

```bash
    npm i -D @babel/core babel-loader @babel/preset-react
```

```bash
    npx servor build
```

en una utilidad para servir una carpeta que contenga un archivo index.html

-   Hasta ahora hemos creado un index.html manualmente. Para que webpack lo haga automáticamente:

```bash
    npm i -D html-webpack-plugin
```
