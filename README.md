# Console Retro Game

Interfaz retro estilo consola para explorar Pokemon y jugar una batalla 1v1 basica.

La aplicacion consume datos de PokeAPI, permite seleccionar dos Pokemon y abrir un modo combate con puntos de vida y ataques.

## Captura

![Vista del juego](src/assets/hero.png)

## Demo funcional

1. Navegas por una grilla de Pokemon con la cruceta.
2. Seleccionas tu Pokemon con el boton A.
3. Seleccionas el Pokemon rival con el boton A.
4. Se abre la pantalla VS y atacas usando botones de movimientos.
5. Cuando el HP del rival llega a 0, aparece una ventana con el ganador.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9
- PokeAPI (https://pokeapi.co/)

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Instalacion

```bash
npm install
```

## Ejecucion en desarrollo

```bash
npm run dev
```

Vite mostrara una URL local (normalmente http://localhost:5173).

## Scripts disponibles

- `npm run dev`: inicia servidor de desarrollo.
- `npm run build`: crea build de produccion en `dist/`.
- `npm run preview`: sirve localmente el build de produccion.
- `npm run lint`: ejecuta ESLint sobre el proyecto.

## Controles del juego

### Cruceta izquierda

- `Arriba`: mueve el cursor 3 posiciones hacia arriba en la grilla.
- `Abajo`: mueve el cursor 3 posiciones hacia abajo en la grilla.
- `Izquierda`: mueve el cursor 1 posicion a la izquierda.
- `Derecha`: mueve el cursor 1 posicion a la derecha.

### Botones derechos

- `A`: confirma seleccion del Pokemon actual.
- `B`: deshace seleccion (primero rival, luego jugador).
- `X`, `Y`, `O`, `+`, `R`: actualmente visuales o sin logica de juego.

## Logica de seleccion

- Solo se cargan los primeros 60 Pokemon para el listado inicial.
- El primer `A` define tu Pokemon.
- El segundo `A` define el rival.
- No se permite elegir el mismo Pokemon para ambos lados.

## Logica de batalla actual

- Cada Pokemon inicia con `100` HP.
- Se muestran hasta 4 movimientos del jugador como botones de ataque.
- Cada movimiento ya trae un dano aleatorio precalculado (entre 1 y 399) al cargar datos.
- Al atacar, se reduce el HP del rival con ese dano.
- Si el rival llega a 0 HP, se declara ganador al jugador.
- La ventana de ganador muestra nombre, id e imagen del Pokemon ganador.

## Estructura del proyecto

```text
src/
	App.jsx
	App.css
	index.css
	main.jsx
	components/
		GameScreen.jsx
		LeftControl.jsx
		PokemonDetail.jsx
		RightControl.jsx
		Screen.jsx
	hooks/
		useFetch.jsx
```

## Componentes principales

- `App.jsx`: estado global de navegacion, seleccion y cambio de vista (pokedex/batalla).
- `Screen.jsx`: grilla de Pokemon con scroll automatico al indice seleccionado.
- `PokemonDetail.jsx`: panel con info del Pokemon activo (tipo, sprites, movimientos).
- `LeftControl.jsx`: cruceta para desplazamiento.
- `RightControl.jsx`: seleccion y deshacer seleccion.
- `GameScreen.jsx`: vista VS, HP, ataques y modal de ganador.
- `useFetch.jsx`: hook generico para peticiones HTTP.

## Flujo de datos

1. `useFetch` solicita listado grande a PokeAPI.
2. `App` toma 60 entradas y hace `fetch` paralelo por Pokemon.
3. Se normalizan propiedades (`id`, `name`, `types`, `moves`, `sprites`).
4. Se agrega un campo `attack` aleatorio a cada movimiento.
5. El estado se reparte a componentes de navegacion, detalle y batalla.

## Limites conocidos

- El combate actual solo aplica ataques del jugador al rival.
- No hay sistema de turnos completo ni estados (paralisis, veneno, etc.).
- No existe persistencia de partidas ni marcador.
- Algunos botones son solo esteticos en la UI retro.

## Ideas de mejora

- Ataque automatico del rival por intervalos o turnos.
- Boton para reiniciar combate o volver a seleccion.
- Balanceo de dano segun tipo/estadisticas reales.
- Animaciones de golpe y barra de vida visual.
- Sonidos retro para botones, dano y victoria.

## Licencia

Proyecto educativo/demo. Puedes adaptarlo libremente para aprendizaje.
