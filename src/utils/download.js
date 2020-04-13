/*
 * @Author       : Zoe
 * @Date         : 2020-04-13 17:33:02
 * @LastEditors  : Zoe
 * @LastEditTime : 2020-04-13 17:45:05
 * @FilePath     : /irp-minder/Users/ZoeAllen/Workspace/source-code/go-workspace/irp-web/src/components/react-zmage/src/utils/download.js
 */

// remote
const { ipcRenderer } = window.require('electron');

/**
 * 下载文件
 * @param {string}  href - 下载目标地址
 * @param {string} [name] - 下载文件名称
 */
export const downloadByElectron = (url, name) => {
  name = name || `IRP_${Math.random().toString().substring(2, 7)}.png`;
  ipcRenderer.send('downloadFile', {
    url,
    name,
    extensions: '.png',
    isBase64: url.startsWith('data:'),
  });
}
