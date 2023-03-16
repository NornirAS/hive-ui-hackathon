export interface GhostObject {
  domain: string
  service: string
  ghostID: string | number
  mapID?: string | null
  pending?: boolean
}

export interface MorphedGhost {
  ghostAddress: string
  active: boolean
}

export interface ReadAccess {
  email: string
  active: boolean
}

export interface Link {
  serviceAddress: string
  active: boolean
}

export interface GhostStatus {
  morphedGhosts: MorphedGhost[]
  readAccess: ReadAccess[]
  linkedTo: Link[]
  linkedFrom: Link[]
}
