import { BleClient } from '@capacitor-community/bluetooth-le'
import { ref } from 'vue'

export function useBluetoothScanner () {
  const scanResults = ref([])
  const scanning = ref(false)

  async function scan () {
    await BleClient.initialize()

    scanning.value = true

    BleClient.requestLEScan(
      {},
      result => {
        scanResults.value.push(result)
      }
    )

    setTimeout(async () => {
      await BleClient.stopLEScan()
      scanning.value = false
    }, 7_000)
  }

  return {
    scanResults,
    scanning,
    scan
  }
}
