export const state = () => ({
  user: {
    name: '',
    uid: '',
    email: '',
    picture: ''
  }
})

export const mutations = {
  SETUSER: (state, data) => {
    state.user = data
    console.log('SETUSER', state.user)
  },
  NOUSER: (state) => {
      state.user = {}
  },
}

export const actions = {
  onAuthStateChangedAction: ( { commit }, { authUser, claims }) => {
    if (!authUser) {
      console.log('onAuthStateChangedAction - no user')
      commit('NOUSER')
    } else {
      console.log('onAuthStateChangedAction - yes user', authUser, claims)
      const user = {
        uid: claims.user_id,
        name: claims.name,
        picture: claims.picture,
        email: authUser._delegate.email,       
      }
      commit('SETUSER', user)
    }
  }
}
