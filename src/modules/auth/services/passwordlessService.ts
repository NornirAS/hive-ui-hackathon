import {
  createCode,
  resendCode,
  consumeCode,
} from 'supertokens-web-js/recipe/passwordless'
import AppConfig from '@/config'

export const passwordlessInit = async (
  email: string,
  onStatusOK: () => void,
) => {
  try {
    const { status } = await createCode({ email })
    switch (status) {
      case 'OK':
        onStatusOK()
        break
    }
  } catch (e) {
    console.error(e)
  }
}

export const passwordlessResend = async (onStatusOK: () => void) => {
  try {
    const { status } = await resendCode({})
    switch (status) {
      case 'OK':
        onStatusOK()
        break

      case 'RESTART_FLOW_ERROR':
        window.location.href = AppConfig.authAppBasePath
        break
    }
  } catch (e) {
    console.error(e)
  }
}

export const passwordlessConsume = async () => {
  try {
    const { status } = await consumeCode({})
    switch (status) {
      case 'OK':
        window.location.href = AppConfig.authAppBasePath
        break

      case 'INCORRECT_USER_INPUT_CODE_ERROR':
        window.location.href = AppConfig.authAppBasePath
        break

      case 'EXPIRED_USER_INPUT_CODE_ERROR':
        window.location.href = AppConfig.authAppBasePath
        break

      case 'RESTART_FLOW_ERROR':
        window.location.href = AppConfig.authAppBasePath
        break

      default:
        break
    }
  } catch (e) {
    console.error(e)
  }
}
