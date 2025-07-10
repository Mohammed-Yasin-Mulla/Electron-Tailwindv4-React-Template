// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from 'electron';
import type { ElectronAPI } from './types/electron-api';


//  This is just dummy data, This gives you type safety when you access window.electronAPI
//  Add fields in ./types/electron-api
const electronAPI: ElectronAPI = {
  desktop: true,
  mobile: false,
  tablet: false
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);