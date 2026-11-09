# Hoja de vida — Camilo Torrecillas Ardila

Sitio construido con Next.js y preparado para publicarse como sitio estático en Firebase Hosting.

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en Firebase Hosting

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/) y habilita Hosting.
2. Instala Firebase CLI si aún no está instalado: `npm install -g firebase-tools`.
3. Inicia sesión: `firebase login`.
4. Enlaza este repositorio con tu proyecto: `firebase use --add` y selecciona el ID del proyecto. Esto crea `.firebaserc` localmente.
5. Genera los archivos estáticos: `npm run build` (el resultado queda en `out/`).
6. Despliega: `npm run firebase:deploy`.

La configuración de Hosting sirve el contenido de `out/`. No se incluye un `.firebaserc` porque el ID depende del proyecto Firebase de destino.
