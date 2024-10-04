// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// preload with contextIsolation enabled
// src/preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // 在这里定义你想要暴露给渲染进程的 API
    // 例如：
    // sendMessage: (message) => ipcRenderer.send('message', message)
})
