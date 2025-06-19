#!/bin/bash

echo "📦 Installing frontend deps..."
npm install --prefix ../frontend/NoteFrontendTemplate

echo "🏗 Building frontend..."
npm run build --prefix ../frontend/NoteFrontendTemplate

echo "✅ Build done."
