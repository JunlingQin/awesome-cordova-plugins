/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Esp Idf Provisioning
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { EspIdfProvisioning, ESPSecurity, ESPTransport } from '@awesome-cordova-plugins/esp-idf-provisioning';
 * import { catchError } from 'rxjs/operators';
 * import { EMPTY } from 'rxjs';
 *
 * ...
 *
 *
 * EspIdfProvisioning.searchESPDevices(BLE_DEVICE_NAME_PREFIX, ESPTransport.ble, ESPSecurity.secure,)
 *   .pipe(
 *    catchError((err) => {
 *       console.log("scan error:", err);
 *       return EMPTY;
 *     }),
 *   )
 *   .subscribe((res) =>{});
 *
 * ```
 */

 export type ESPIdfStatusOK = "OK"

 export const ESPTransport = {
     ble: "ble"
 }
 
 export const ESPSecurity = {
     secure: 1
 }

 export type ProvisionStatus = "CREATE_SESSION_FAILED" | "WIFI_CONFIG_FAILED" | "WIFI_CONFIG_APPLY_FAILED" | "WIFI_CONFIG_APPLIED" | "WIFI_STATUS_ERROR"
     | "WIFI_STATUS_AUTHENTICATION_ERROR" | "WIFI_STATUS_NETWORK_NOT_FOUND" | "WIFI_STATUS_DISCONNECTED" | "UNKNOWN_ERROR" | "DEVICE_PROVISIONING_SUCCESS"

 export interface BleDevice {
     name: string
     primaryServiceUuid: string
 }
 export interface WifiInfo {
     ssid: string
     rssi: number
 }

@Plugin({
  pluginName: 'EspIdfProvisioning',
  plugin: 'cordova-plugin-esp-idf-provisioning', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ESPIdfProvisioning', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class EspIdfProvisioning extends AwesomeCordovaNativePlugin {

  @Cordova({
    observable: true,
  })
  searchESPDevices(devicePrefix:string, transport:string, security: number): Observable<BleDevice | ESPIdfStatusOK> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  stopSearchingESPDevices(): Promise<ESPIdfStatusOK> {
    return;
  }

  @Cordova()
  connectBLEDevice(espDeviceName:string, primaryServiceUuid:string, proofOfPossession:string): Promise<BleDevice> {
    return;
  }

  @Cordova()
  disconnectBLEDevice(espDeviceName:string): Promise<string> {
    return;
  }

  @Cordova()
  scanNetworks(espDeviceName:string): Promise<WifiInfo[]> {
    return;
  }

  @Cordova({
    observable: true,
  })
  provision(espDeviceName:string, wifiSsid:string, wifiPassword:string): Observable<ProvisionStatus> {
    return;
  }

}
