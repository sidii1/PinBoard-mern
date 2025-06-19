#!/bin/bash

echo "🛠 Installing frontend dependencies..."
npm install --prefix ../frontend/NoteFrontendTemplate

echo "🏗 Building React app..."
npm run build --prefix ../frontend/NoteFrontendTemplate

echo "✅ Frontend built. Proceeding with backend."
