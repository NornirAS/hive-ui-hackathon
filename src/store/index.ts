import { defineStore } from 'pinia'
import { computed, ref, readonly } from 'vue'
import { getUserInfo, serviceLinksUpdate } from '@/api'

interface DomainObject {
  domain: string
  active: boolean
}

type Link = string

interface ServiceObject {
  domain: string
  service: string
  dataSchema: string
  timeout: number
  links: Link[]
}

interface GhostObject {
  domain: string
  service: string
  ghostID: string
  mapID: string | null
}

interface UserInfo {
  userID: string
  domains: DomainObject[]
  services: ServiceObject[]
  ghosts: GhostObject[]
}

const useUserStore = defineStore('userStore', () => {
  const userData = ref({} as UserInfo)
  const selectedService = ref({} as ServiceObject)
  const editedLinks = ref([] as Link[])

  const getUserData = async () => {
    const res = await getUserInfo()

    Object.assign(userData.value, res)
  }

  const domains = computed(() => {
    return userData.value.domains
  })

  const getDomainBySlug = () => {
    return (slug: string) =>
      domains.value.filter(d => d.domain === slug)[0] ?? null
  }

  const services = computed(() => {
    return userData.value.services
  })

  const selectService = (service: ServiceObject) => {
    Object.assign(selectedService.value, service)
  }

  const links = computed(() => {
    return selectedService.value.links
  })

  const initLinksEditMode = () => {
    editedLinks.value = [...links.value]
  }

  const updateLinks = async () => {
    const { error } = await serviceLinksUpdate({
      domain: selectedService.value.domain,
      service: selectedService.value.service,
      links: editedLinks.value,
    })

    if (error) return

    await getUserData()
  }

  const addLink = (link: Link) => {
    editedLinks.value.push(link)
  }

  const deleteLink = (linkToDelete: Link) => {
    editedLinks.value = [
      ...editedLinks.value.filter((link: Link) => link !== linkToDelete),
    ]
  }

  const ghosts = computed(() => {
    return userData.value.ghosts
  })

  return {
    getUserData,
    domains,
    getDomainBySlug,
    services,
    selectService,
    selectedService,
    links,
    editedLinks: readonly(editedLinks),
    initLinksEditMode,
    updateLinks,
    addLink,
    deleteLink,
    ghosts,
  }
})

export default useUserStore
