export const fbSignInWithProvider = (auth, authModule, _provider) => {
  return new Promise((resolve, reject) => {
    const provider =
      _provider === 'google'  
      ? new authModule.GoogleAuthProvider() 
      : new authModule.GithubAuthProvider() 
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('fbSignInWithProvider', result)
        resolve(_provider)
      })
      .catch((error) => {
        console.log('Provider AUTH ERROR', _provider, error.code)
        error.errorMsg = error.message
        reject(error)
      })
  })
}

export const fbSignOut = (auth) => {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => resolve('ok'))
      .catch((error) => reject(error))
  })
}
