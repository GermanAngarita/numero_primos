# Prueba Técnica Números Primos

Proyecto NodeJS y Express con api que devuelve los números primos existentes en forma descendente de un número dado.

## Comenzando 🚀

Puedes correr este proyecto de forma local de la siguiente forma


### Pre-requisitos 📋

Debes tener instalado NodeJS

### Instalación 🔧

_Para la instalción primero debes clonar el repositorio, en una terminal escribe_

```
git clone git@github.com:GermanAngarita/numero_primos.git
```

_Luego entra en la carpeta que se creo_

```
cd numero_primos
```

_Instala las dependencias del proyecto usando npm_

```
npm install
```
_Puedes correr el proyecto en diferentes modos, por favor revisa el package.json_

_Para correr el proyecto_

```
npm start
```

### End Point Disponibles

_Obtener números primos en una lista descendente desde el un numero inicial_

| End Ponint |
| ---------- |
| http://localhost:7070/api/v1/prime-numbers |

| Parámetros de entrada | Descripción |
| ------------- | ------------ |
| number | Número entero mayor o igual a 2, es un campo requerido |


_ejemplos_

```
http://localhost:7070/api/v1/prime-numbers?number=10
````

_devuelve_

```
{
"status": true,
"operationResult": "Se ha obtenido los números primos descendentes desde 10",
"data": {
    "number": "10",
    "primeList": [
        7,
        5,
        3,
        2
    ],
    "totalPrimeFound": 4
}
}
```
## Ejecutando las pruebas ⚙️

_Puede revisar los test con el siguiente comando_

```
npm run test
```

## Expresiones de Gratitud 🎁

* Muchas gracias!
