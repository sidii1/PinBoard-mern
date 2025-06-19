#!/bin/bash

echo "📦 Installing backend dependencies..."
npm install

echo "📦 Installing frontend dependencies..."
npm install --prefix ./frontend/NoteFrontendTemplate --production=false

echo "🏗 Building frontend with Vite..."
npm run build --prefix ./frontend/NoteFrontendTemplate

echo "✅ Frontend built"
