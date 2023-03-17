import AppConfig from '@/config'
import { addToStorage, getFromStorage } from '@/services/StorageService'
import createHiveClient from '@norniras/hive-client'

// APP CONFIG
const { hiveApiDomain } = AppConfig

/* --Hive API's-- */
const client = createHiveClient(hiveApiDomain)

export const getUserInfo = async () => {
  try {
    const res = await fetch('https://synx-hive-api.herokuapp.com/api/me')

    return res.json()
  } catch (e) {
    return {
      data: null,
      error: true,
      message: e,
    }
  }
}

// Domains
export const craeteDomain = async (data: object) =>
  client.domainCreate({ ...data })

export const deleteDomain = async (data: object) =>
  client.domainDelete({ ...data })

// Services
export const serviceCreate = (data: object) => client.serviceCreate({ ...data })

export const serviceUpdate = (data: object) => client.serviceUpdate({ ...data })

export const serviceRemove = (data: object) => client.serviceRemove({ ...data })

export const serviceLinksUpdate = (data: object) =>
  client.serviceLinksUpdate({ ...data })

export const serviceGhostsAdd = async (data: object) =>
  client.serviceGhostsAdd({ ...data })

// Ghosts
export const ghostDelete = (data: object) => client.ghostDelete({ ...data })

export const ghostMorphedAdd = (data: object) =>
  client.ghostMorphedAdd({ ...data })

export const ghostMorphedRemove = (data: object) =>
  client.ghostMorphedRemove({ ...data })

export const ghostGetStatus = (data: object) => client.ghostStatus({ ...data })

/* --Storage API's-- */
export const setUser = (data: object) => addToStorage('user', data)
export const getUser = () => getFromStorage('user')
