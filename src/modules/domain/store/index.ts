import { defineStore } from 'pinia'
import { DomainsArray } from '../types'
import { craeteDomain, deleteDomain } from '@/api'

export const useDomainsStore = defineStore({
  id: 'domains',
  state: () => ({
    domains: [] as DomainsArray,
    isLoading: true as boolean,
  }),
  getters: {
    getStateDomains: state => state.domains,
    getDomainBySlug: state => {
      return (slug: string) =>
        state.domains.filter(d => d.domain === slug)[0] ?? null
    },
  },
  actions: {
    setDomains(data: DomainsArray) {
      this.domains = data
    },
    async addDomain(domain: string) {
      this.isLoading = true
      const res = await craeteDomain({ domain })
      this.isLoading = false
      return res
    },
    async removeDomain(domain: string) {
      this.isLoading = true
      const res = await deleteDomain({ domain })
      if (res.error) return
      this.isLoading = false
    },
  },
})
