# Base de conocimiento: Guazú Global Design System (GGDS)

---

## Sobre Guazú

Guazú Global Design System (GGDS) es el lenguaje común que usamos para construir productos digitales en Grupo Vázquez.

Nació para acompañar el crecimiento del ecosistema del Grupo, dando soporte a equipos con necesidades e identidades diferentes a través de +18 empresas.

Conecta diseño, desarrollo y producto a partir de una base compartida de estándares para optimizar recursos, reducir deuda técnica y construir experiencias de calidad.

### Qué permite

Con GGDS, los equipos pueden:
- Construir y escalar experiencias de forma ágil, consistente y sostenible
- Reducir tiempos de diseño y desarrollo
- Compartir estándares entre equipos y marcas
- Reutilizar soluciones de calidad, validadas y documentadas

### Qué incluye

- Librerías en Figma, React y Flutter con componentes reutilizables para web y mobile. Próximamente: React Native.
- Sistema de tokens robusto y customizable
- Patrones de interacción
- Documentación de uso
- Soporte en procesos de adopción y contribución

### Principios

- **Global:** brinda soporte a múltiples empresas, productos y equipos dentro del ecosistema de Grupo Vázquez.
- **Multimarca:** se adapta a distintas marcas y segmentos sobre una base compartida.
- **Multiplataforma:** mantiene experiencias consistentes entre tecnologías y plataformas.
- **Colaborativo:** evoluciona junto a los equipos que lo usan y contribuyen al sistema.

### Cómo trabajamos

Tenemos un modelo de gobernanza híbrido donde los equipos de producto tienen un rol activo en la construcción y evolución del sistema. Pueden proponer mejoras, nuevos componentes o documentación.

El equipo Core acompaña las propuestas y asegura calidad, mantenimiento y consistencia, evitando convertirse en un cuello de botella.

Este enfoque permite equilibrar autonomía, escalabilidad y estándares compartidos en todo el ecosistema.

---

## Cómo contribuir en Guazú

Guazú es de todos los equipos que lo usan. Si algo falta, no funciona como debería, o hay un componente en tu proyecto que podría serle útil a más equipos, este es el camino.

El modelo de contribución existe para que ese proceso sea simple y trazable: los equipos proponen, Design System Core acompaña, y lo que aporta valor termina en el sistema.

### ¿Quién puede contribuir?

Cualquier squad de Grupo Vázquez puede contribuir al sistema.

### ¿Qué es una contribución?

Una contribución es cualquier mejora o adición al sistema en sí mismo. No toda necesidad que surja en un proyecto es una contribución.

**Sí es una contribución:**
- Diseñar un componente o patrón que no existe en el sistema
- Proponer una variante o estado nuevo para un componente o patrón que ya existe
- Corregir algo que no funciona como se espera en Guazú
- Proponer un ícono o recurso global que falta en el sistema
- Sumar o mejorar la documentación de un componente para enriquecer los lineamientos

**No es una contribución:**
- Preguntas sobre cómo usar un componente. Para eso, consultá las fichas de documentación, acudí a las office hours o escribí por Slack.
- Soporte técnico con un plugin o herramienta. Se puede pedir por el Portal.
- Personalización de un componente para un proyecto específico usando átomos del design system en los Slots.
- Feedback o review sobre tu propio trabajo de diseño.

### ¿Qué se puede contribuir?

| Tipo | Cuándo usarlo |
|---|---|
| Nuevo componente | Cuando el componente no existe en el sistema y puede ser útil para múltiples equipos. |
| Mejora a un componente existente | Para proponer variantes, estados, propiedades o ajustes sobre algo que ya está en Guazú. |
| Documentación | Para sumar o mejorar la documentación de un componente o patrón. |
| Ícono o core asset | Para proponer un ícono o recurso global que falte en el sistema. |
| Bug | Para reportar algo que no funciona como se espera en diseño o en código. |

### ¿Dónde vive cada contribución?

Las contribuciones viven en las librerías Beta de Guazú. Los componentes se diseñan en branches y una vez que pasan las reviews necesarias se mergean y publican para todos los equipos.

Con el tiempo, un componente Beta puede ser promovido a Core si su adopción crece en el ecosistema y sus características son aplicables a múltiples productos. El equipo Ops evalúa las condiciones para esa promoción y comunica el traspaso a las nuevas librerías.

### El proceso paso a paso

**Etapa 1: Descubrimiento de la necesidad** (squad contribuidor)
- Revisá las librerías Core y Beta disponibles en Figma para validar que lo que necesitás no exista en el sistema.
- Consultá la documentación publicada en Supernova.
- Si encontraste algo similar pero no exactamente lo que necesitás, anotá las diferencias: esa información va a ser clave en tu solicitud.

**Etapa 2: Envío de solicitud por el Portal** (squad contribuidor + Design System Core)
- Accedé al [Portal de contribución](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176) y seleccioná el formulario correspondiente al tipo de contribución.
- Completá todos los campos requeridos con la mayor evidencia posible.
- Enviá la solicitud.
- Vas a recibir confirmación automática, y Design System Core revisa, prioriza, categoriza y te asigna un responsable de seguimiento. Recibís una notificación con el resultado: aprobada, derivada o rechazada.
- Los tiempos de respuesta se están estandarizando. Mientras tanto, si no hay novedades en un tiempo razonable, se puede consultar el estado en el ticket del portal.

**Etapa 3: Diseño de la propuesta en branch de librería Beta** (product designers del squad + responsable de Design System Core)
- Una vez aprobada la solicitud, Design System Core crea una branch en la librería Beta y da acceso de edición.
- Trabajá tu propuesta dentro de la branch asignada, nunca en archivos locales ni en otras librerías.
- Asegurate de cumplir con el widget de Definition of Done antes de la review (podés ayudarte con la herramienta Check Designs de Figma).

**Etapa 4: Review en Figma** (product designers del squad + responsable de Design System Core)
- Cuando la propuesta está lista, se solicita la review del responsable de Design System Core desde Figma (puede ser sincrónica o asincrónica).
- Se evalúa: cumplimiento del DoD, consistencia con el sistema, y calidad del diseño y del racional.
- Resultados posibles: **Aprobada** (se avanza a merge y publicación), **Con observaciones** (se comunican ajustes y se repite la review), o **Rechazada** (no es viable, se comunica el motivo y se cierra la contribución).

**Etapa 5: Desarrollo, review y QA en código** (designers y devs del squad + responsables de Design System Core)
- Con la review aprobada, se hace el handoff al dev del squad y se marca la propuesta como "Ready for dev".
- El dev desarrolla la propuesta y recibe review del responsable dev de Design System Core.
- Una vez aprobada esa review, se hace QA visual, se pasa de "Ready for dev" a "Done" y se avisa al responsable de Design System Core.
- Si el QA se aprueba, pasa a merge y publicación. Si se rechaza, se ajusta y se repite el proceso.

**Etapa 6: Merge, publicación y cierre** (Design System Core)
- Se mergea la branch en las librerías de diseño y desarrollo.
- Se comunica que la contribución ya está lista para usar.
- Se recibe una notificación de cierre y una invitación a una encuesta corta de feedback.

### Cómo empezar

El punto de entrada es el [Portal de contribución](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176) en Jira Service Management. Desde ahí se inician todas las solicitudes, incluidos los [reportes de bugs](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/7750).

### Preguntas frecuentes sobre contribución

**¿Qué pasa si mi solicitud es rechazada?**
Las razones más comunes son: ya existe algo similar en el sistema, la solicitud no tiene suficiente evidencia (se pedirá agregarla), no es escalable para otros equipos y queda como local, o va en detrimento de estándares de usabilidad y accesibilidad. En todos los casos se recibe una notificación con la explicación en el Portal.

**¿Cómo sé si lo que necesito ya existe antes de enviar una solicitud?**
Revisá las librerías de Figma (Core y Beta disponibles para tu producto y marca) y la documentación en Supernova. Si no encontrás nada equivalente, podés enviar la solicitud. Si encontrás algo similar que no cubre del todo tu caso, probablemente sea una mejora y no un componente nuevo.

**¿Cuánto tiempo tarda el proceso de principio a fin?**
Depende del tipo y complejidad de la contribución; los tiempos exactos por etapa todavía se están definiendo. En general: la respuesta inicial llega en los próximos días hábiles, el tiempo de diseño en branch depende de la complejidad y disponibilidad, y la review por Ops ocurre en los días hábiles siguientes a que se solicite desde Figma. Si algo lleva mucho tiempo sin novedades, se puede consultar directamente con el Ops asignado o escribir en `#gu-help`.

**¿Puedo contribuir un componente que ya diseñé en mi archivo local?**
Sí, siempre que desvincules cualquier otra librería que no sea Guazú Global Design System y uses los tokens del sistema en todo momento. Si es una mejora, hay que partir del componente Core a modificar. Se puede usar la herramienta nativa de Figma Check Designs como ayuda.

**¿Puedo pedir ayuda mientras trabajo en mi branch?**
Sí, y es lo recomendado. Para dudas puntuales sobre la propuesta, escribí directamente en tu ticket. Para dudas más amplias, sumate a las Office Hours.

**¿Qué pasa si mi proyecto se pausa o se cancela con una branch abierta?**
No hay problema. Avisale al responsable asignado lo antes posible. Si el proyecto se pausa temporalmente, el ticket queda en espera. Si se cancela o desprioriza, se cierra el ticket y se archiva la branch.

**¿Cómo me entero cuando mi contribución está publicada?**
Por notificación de mail del portal de Jira, y por el canal de Slack `#gu-changelog`.

---

## Tips para tu contribución (Definition of Done)

No alcanza con subir el componente solo. Una branch lista para review incluye todo lo que Design System Core necesita para evaluar, aprobar e implementar sin preguntas.

**Una branch completa tiene:**
- El componente construido según los criterios del sistema
- El handoff con especificaciones para desarrollo
- La descripción de uso del componente en el Component Configuration
- El widget de Definition of Done completado

Trabajá siempre dentro de la branch asignada, nunca en archivos locales ni en otras librerías. Si movés trabajo de un archivo externo a la branch, revisá que no haya elementos vinculados a otras librerías antes de pedir la review.

### Checklist de Definition of Done

- **Auto-layout:** construí el componente con auto-layout y constraints para que sea responsivo. Evitá frames y grupos sueltos que rompan el comportamiento al escalar o cambiar contenido.
- **Properties configuradas:** usá Boolean para sí/no, Variant para opciones múltiples (tamaño, estado, tipo), y Text para contenido editable. Nombralas según los lineamientos del sistema y ordená sus valores de forma lógica.
- **Comportamiento definido:** incluí todas las variantes y estados que correspondan (Default, Hover, Focus, Disabled, Error si aplica, Loading si aplica). En mobile, hover no siempre aplica, pero focus y disabled sí.
- **Tokens de color:** usá tokens en vez de estilos de color o valores hexadecimales directos. Si necesitás un token que no existe, hablalo con tu responsable asignado antes de crear uno nuevo.
- **Variables aplicadas:** usá las variables del sistema para espaciados, border radius y opacidad, nunca valores fijos.
- **Capas nombradas:** nombrá todas las capas de forma descriptiva (por ejemplo "Container", no "Frame 000083738").
- **Nombres del componente, átomos y variantes:** todo en inglés, sin repetir nombres que ya existan en el sistema. Los átomos internos que no deban publicarse en la librería se ocultan con un guión bajo al inicio del nombre (por ejemplo `_list-cards`).
- **Handoff completo:** tiene que incluir cómo están configuradas las properties y para qué sirve cada una, comportamientos específicos no evidentes desde el diseño, lineamientos de accesibilidad (foco por teclado, jerarquía para screen readers, contrastes), y notas de implementación si hay algo que pueda prestarse a confusión.
- **Descripción de uso:** contá brevemente para qué sirve el componente en su descripción (lo primero que ve otro diseñador al encontrarlo en la librería), y completá los metadatos en el Component Configuration.
- **Referencia de comportamiento (opcional):** si el componente tiene interactividad o un behavior complejo, sumar un prototipo, referencia externa o generación con IA ayuda a que la review sea más rápida.

---

## Usá Guazú en Figma

### Mapa de librerías

El equipo de Design System Core mantiene 2 grupos de librerías en Figma:
1. **Resources Libraries:** elementos útiles que alimentan a los componentes de las librerías de cada plataforma.
2. **Platform Libraries:** catálogos de componentes Core y Beta organizados por dispositivo, de donde se construyen los flujos.

### Resources Libraries

Recordá siempre tener prendidas estas librerías en tus archivos.

| Nombre | Para qué usarla |
|---|---|
| Core Icons | Cuando necesitás un ícono por fuera de un componente |
| Core Assets | Recursos globales como banderas o logos de medios de pago |
| UX Kit | Para armar handoffs, dejar anotaciones y usar el changelog |
| Core Foundations | Contiene los valores primitivos de los tokens. La gestiona Design System Core, no hace falta activarla manualmente. |

**Core Icons:** los íconos ya vienen integrados en los componentes de las Platform Libraries. Si necesitás uno suelto, insertalo directamente desde esta librería eligiendo entre **App & Web Icon** (apps móviles y sitios web) o **Touchpoints Icon** (TEDs, Glorys y Vendings). Se ajustan tamaño y estilo (solid/outline) desde las variantes en la barra lateral. Si no encontrás el ícono que buscás, se puede [solicitar en el Portal](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/7749/create/13318).

**Core Assets:** recursos de identidad de terceros disponibles para todos los productos del Grupo (banderas, logos de medios de pago, etc.), que se insertan como componentes dentro de thumbnails o slots. Para incorporar un asset nuevo, se puede [solicitar en el Portal](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/7749/create/13183).

**UX Kit:** la caja de herramientas para organizar y presentar flujos y armar un handoff (changelogs, anotaciones, descripciones de páginas).

**Core Foundations:** contiene todos los valores primitivos que luego se usan en el sistema de tokens. La usa solo Design System Core y está oculta para el resto de los equipos.

### Platform Libraries: Core vs. Beta

Cada plataforma tiene su librería Core y su librería Beta.
- **Core:** componentes estables y robustos, listos para producción, mantenidos centralmente por el equipo DS Core.
- **Beta:** soluciones propias en prueba y evolución, abiertas a contribuciones de product designers, con review de DS Core.

**Core Platform Libraries:**

| Nombre | Para qué usarla | Ejemplos |
|---|---|---|
| Core App | Proyectos de aplicaciones móviles | Apps, POS |
| Core Web | Proyectos web responsive | Sitios web, Landings |
| Core Touchpoints | Proyectos en dispositivos self-service | TEDs, Glorys, Vendings |

Desde el Portal se puede [contribuir un componente nuevo](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/6912/create/13319), [proponer una mejora](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/6912/create/13702), o [reportar un bug](https://itti-digital.atlassian.net/servicedesk/customer/portal/6176/group/7750/create/13320) tanto de componentes como de templates.

**Templates:** plantillas preestablecidas con estructuras comunes de layouts de flujos y patrones, para no empezar a diseñar desde cero.

**Tokens:** variables que almacenan las decisiones de diseño fundamentales del sistema (colores, espaciados, bordes, sombras), aplicadas automáticamente a los componentes.

**Estilos tipográficos:** definiciones de texto que combinan tipografía, tamaño, peso e interlineado para establecer jerarquías (títulos, subtítulos, cuerpos de texto, etiquetas).

**Gradientes:** estilos de degradados para fondos, superficies o elementos decorativos, disponibles en las librerías para aplicarlos con consistencia.

**Beta Platform Libraries:**

| Nombre | Para qué usarla |
|---|---|
| Beta App | Contribuciones de proyectos de aplicaciones móviles |
| Beta Web | Contribuciones de proyectos web |
| Beta Touchpoints | Contribuciones de proyectos en TEDs, Glorys y Vendings |

Tienen la misma base de tokens, estilos y gradientes que las librerías Core, pero sus componentes y templates son creados por squads que contribuyen al sistema. Si otro equipo ya diseñó una solución que se adapta a tu flujo, se puede usar libremente. Al ser soluciones en prueba, los componentes Beta pueden tener cambios e iteraciones frecuentes, así que conviene usarlos con precaución.

### Themes y Extended Collections

Guazú Global es multi-marca y multi-segmento. Esto se logra extendiendo colecciones de variables que permiten que un mismo componente adopte el aspecto visual de distintas marcas de forma automática, sin crear UI Kits custom. Se pueden combinar modos de marca y de segmento (por ejemplo, "Modo ueno empresas + Dark Mode").

### Slots

Son espacios vacíos que incluyen los componentes y templates para anidar otros componentes o contenidos sin hacer detach. Todo lo que se incorpore en un slot tiene que usar tokens y estilos de Guazú, nunca hexadecimales o valores sueltos sin vincular.

### Preguntas frecuentes sobre Figma

**¿Cómo instalo una librería?**
Las librerías de Guazú Global vienen instaladas automáticamente en tu archivo. Si necesitás activar alguna manualmente: en el panel izquierdo, clic en "Assets" (ícono "+"), luego "add more libraries" y buscá las librerías oficiales de Guazú Global que necesites.

**¿Qué pasa con las librerías UDS y GU?**
Pasaron a ser Legacy: no reciben más soporte de Design System Core y a futuro serán deprecadas.

**Necesito que mi marca esté en el design system**
El proceso de solicitud de carga de extended collection todavía se está preparando. Mientras tanto, se puede consultar por Slack.
