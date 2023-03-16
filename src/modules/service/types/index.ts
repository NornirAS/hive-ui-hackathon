export interface ServiceObject {
  domain: string
  service: string
  dataSchema: string
  timeout: number
  links: Link[]
}

export type Link = string
