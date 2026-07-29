# Base de conocimiento: Onboarding y migración al Design System

# Base de conocimiento: Onboarding y migración al Design System

## Proceso general de onboarding

Para empezar a migrar tus pantallas al nuevo Design System, seguí estos pasos:

1. Solicitá acceso a la librería de componentes en Figma (canal #design-system-acceso).
2. Instalá el plugin de tokens desde el archivo de Figma principal.
3. Revisá la guía de mapeo de componentes viejos → nuevos (ver sección "Mapeo de componentes" más abajo).
4. Migrá pantalla por pantalla, empezando por las de menor complejidad.
5. Pedí revisión al equipo de Design Ops antes de dar por cerrada la migración de un flujo completo.

El proceso completo de onboarding para un diseñador nuevo toma entre 3 y 5 días hábiles.

## Mapeo de componentes (nombres viejos → nuevos)

| Nombre anterior | Nombre nuevo en el Design System | Ubicación en Figma |
|---|---|---|
| Portada | Hero Block | Librería / Layout |
| Tarjeta de producto | Product Card | Librería / Data Display |
| Botón primario | Button (variant: Primary) | Librería / Actions |
| Menú desplegable | Dropdown | Librería / Forms |
| Aviso de error | Inline Message (variant: Error) | Librería / Feedback |
| Barra de navegación | Nav Bar | Librería / Navigation |

## Componentes: detalle

### Hero Block
Reemplaza al viejo componente "Portada". Se usa como sección introductoria de una pantalla o landing. Tiene tres variantes: Full, Compact y With Image. No debe combinarse con Nav Bar en el mismo contenedor sin el espaciado del token `spacing/hero-gap`.

### Product Card
Reemplaza a "Tarjeta de producto". Tiene soporte nativo para estado de carga (skeleton) y estado de error. Usar siempre los tokens de color `surface/card` y `text/card-title`, nunca colores hardcodeados.

### Button
El Design System unificó todos los botones viejos en un solo componente con variantes: Primary, Secondary, Destructive y Ghost. Antes existían componentes separados como "Botón primario" y "Botón secundario"; ahora es un solo componente configurable por variante.

## Preguntas frecuentes

**¿Cómo se llama ahora el componente de portada?**
Se llama "Hero Block" y está en la sección Layout de la librería.

**¿Puedo seguir usando los componentes viejos mientras migro?**
Sí, durante el período de transición conviven ambas versiones, pero cualquier pantalla nueva debe usar únicamente los componentes del nuevo Design System.

**¿A quién le pido revisión de mi migración?**
Al equipo de Design Ops, a través del canal #design-system-revision.

**¿Dónde reporto un bug o inconsistencia en un componente?**
En el canal #design-system-bugs, con capturas de pantalla y el link al archivo de Figma.

---


-->

## Ejemplo (borrar al pegar el contenido real)

### Componente "Portada"
En el nuevo Design System, el componente que antes se llamaba "Portada" ahora
se llama "Hero Block". Se encuentra en la librería de Guazú, sección Layout.
