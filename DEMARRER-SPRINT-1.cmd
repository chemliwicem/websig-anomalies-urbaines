@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js est requis pour lancer ce serveur local.
  pause
  exit /b 1
)
echo Ouvrez http://127.0.0.1:8781/ dans votre navigateur.
node "%~dp0serve-sprint-1.js"
pause
