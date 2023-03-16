import SuperTokens from 'supertokens-web-js'
import Session from 'supertokens-web-js/recipe/session'
import Passwordless from 'supertokens-web-js/recipe/passwordless'
import AppConfig from '@/config'

const SuperTokensSetup = () => {
  SuperTokens.init({
    appInfo: {
      apiDomain: AppConfig.hiveApiDomain,
      apiBasePath: AppConfig.authApiBasePath,
      appName: AppConfig.authAppName,
    },
    recipeList: [Passwordless.init(), Session.init()],
  })
}

export default SuperTokensSetup
