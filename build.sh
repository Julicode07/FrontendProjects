#!/bin/bash

echo "🚀 Ejecutando build"

# Construir la web principal
cd web
npm install
npm run build

echo "✅ Build completado."
