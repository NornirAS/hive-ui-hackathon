const parseGhostAddress = (ghostAddress: string) => {
  const [domain, service, ghostID] = ghostAddress.split('/')
  return {
    refDomain: domain,
    refService: service,
    refGhostID: ghostID,
  }
}

export default parseGhostAddress
