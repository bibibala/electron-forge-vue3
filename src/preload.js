// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  showMessageBox: (type) => ipcRenderer.invoke('show-message-box', type),
});
