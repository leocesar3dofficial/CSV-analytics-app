import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1000,
        show: true, // Show immediately for debugging
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    if (!app.isPackaged) {
        // Wrap in a try-catch to prevent the "Unhandled Promise Rejection" crash
        mainWindow.loadURL('http://127.0.0.1:5173').catch((err) => {
            console.error('CRITICAL: Vite server not found at 127.0.0.1:5173. Did you run npm run dev?');
        });
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    }

    mainWindow.setMenuBarVisibility(false)
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

app.whenReady().then(createWindow)
