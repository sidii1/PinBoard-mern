#!/bin/bash

echo "📦 Installing backend deps..."
npm install

echo "📦 Installing frontend deps..."
npm install --prefix ../frontend/NoteFrontendTemplate

echo "🏗 Building React frontend..."
npm run build --prefix ../frontend/NoteFrontendTemplate

echo "✅ Build complete."
