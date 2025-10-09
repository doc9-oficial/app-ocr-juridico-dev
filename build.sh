#!/bin/bash
set -e

echo "🔨 Building App-ocr-juridico-dev App..."
rm -rf dist/
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

echo "⚙️ Compiling TypeScript..."
npx tsc

echo "✅ Build completed!"
