# Lovio Rewrite Service

Este repositorio contiene la configuración para hacer rewrite de `app.lovio.cl/invitacion/slug` a `lovio.cl/invitacion/slug` usando Vercel.

## Configuración

### Archivos principales

- `vercel.json`: Configuración de rewrites y headers de Vercel
- `index.html`: Página de fallback en caso de que el rewrite no funcione
- `package.json`: Configuración del proyecto Node.js

### Rewrite Rules

El archivo `vercel.json` contiene la regla de rewrite:

```json
{
  "rewrites": [
    {
      "source": "/invitacion/:slug",
      "destination": "https://lovio.cl/invitacion/:slug"
    }
  ]
}
```

Esto significa que:
- `app.lovio.cl/invitacion/abc123` → `lovio.cl/invitacion/abc123`
- `app.lovio.cl/invitacion/xyz789` → `lovio.cl/invitacion/xyz789`

## Deployment en Vercel

### Opción 1: Deploy automático desde GitHub

1. Conecta este repositorio a Vercel
2. Vercel detectará automáticamente la configuración en `vercel.json`
3. El dominio `app.lovio.cl` debe estar configurado en tu cuenta de Vercel

### Opción 2: Deploy manual

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Configurar dominio personalizado
vercel domains add app.lovio.cl
```

## Configuración de Dominio

1. En tu panel de Vercel, ve a Settings > Domains
2. Agrega `app.lovio.cl` como dominio personalizado
3. Configura los DNS records según las instrucciones de Vercel

## Testing

Para probar localmente:

```bash
npm install
vercel dev
```

Luego visita `http://localhost:3000/invitacion/test-slug` para verificar que el rewrite funciona.

## Fallback

Si por alguna razón el rewrite no funciona, el `index.html` incluye un script de JavaScript que redirigirá automáticamente al usuario después de 2 segundos.

## Headers de Seguridad

Se incluyen headers básicos de seguridad:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
