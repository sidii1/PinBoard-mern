#!/bin/bash

echo "📦 Installing backend dependencies..."
npm install

echo "📦 Installing frontend dependencies..."
npm install --prefix ../frontend/NoteFrontendTemplate

echo "🏗 Building React frontend..."
npm run build --prefix ../frontend/NoteFrontendTemplate

echo "📁 Checking if build directory exists:"
ls -la ../frontend/NoteFrontendTemplate/dist

echo "✅ Build finished!"
