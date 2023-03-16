import { ref, computed, readonly } from 'vue'
import { defineStore } from 'pinia'
import { ghostGetStatus } from '@/api'
import type { GhostObject, GhostStatus } from '../types'

const useGhostDetailsStore = defineStore('ghostInfoStore', () => {
  const ghost = ref({} as GhostObject)
  const ghostStatus = ref({} as GhostStatus)

  const morphedGhosts = computed(() => {
    return ghostStatus.value.morphedGhosts
  })

  const readAccess = computed(() => {
    return ghostStatus.value.readAccess
  })

  const linkedTo = computed(() => {
    return ghostStatus.value.linkedTo
  })

  const linkedFrom = computed(() => {
    return ghostStatus.value.linkedFrom
  })

  const getGhostDetails = (payload: GhostObject) => {
    // Normaly should call an API, for detailed information.
    // Now we just select ghost from ghost list
    Object.assign(ghost.value, payload)
  }

  const fetchGhostStatus = async () => {
    const { data } = await ghostGetStatus(ghost.value)
    if (!data) return
    Object.assign(ghostStatus.value, data)
  }

  return {
    ghost: readonly(ghost),
    morphedGhosts,
    readAccess,
    linkedTo,
    linkedFrom,
    getGhostDetails,
    fetchGhostStatus,
  }
})

export default useGhostDetailsStore
