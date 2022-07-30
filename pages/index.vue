<template>
  <v-row justify="center" align="center">
    <v-col cols="6" class="d-flex flex-column align-center mt-16">
          <v-btn
            color="primary"
            nuxt
            @click="signInWithProvider('google')"
          >
            Авторизація з Google
          </v-btn>
          <v-divider class="my-2"/>
          <v-btn
            color="primary"
            nuxt
            @click="signInWithProvider('github')"
          >
            Авторизація з GitHub
          </v-btn>
          <v-divider  class="my-2"/>
          <v-btn
            color="primary"
            nuxt
            @click="signOut"
          >
            Вихід
          </v-btn>
          <v-simple-table class="my-8" style="min-width:100%">
            <tbody>
              <tr>
                <th>Name</th><td> {{ user.name }} </td>
              </tr>
              <tr>
                <th>uid</th><td> {{ user.uid }}  </td>
              </tr>
              <tr>
                <th>Photo</th><td> {{ user.picture }} </td>
              </tr>
              <tr>
                <th>email</th><td> {{ user.email }} </td>
              </tr>
            </tbody>
          </v-simple-table>

      <v-img
            width= "40"
            v-show="user.uid"
            :src="user.picture"
            :alt="user.name"
      />
      <p v-show="user.uid"> {{ user.name }} </p>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import { fbSignOut, fbSignInWithProvider } from '../utils/fb.js'

export default {
  name: 'IndexPage',
  computed: {
     ...mapState(['user']),
  },
  methods: {
      async signInWithProvider(provider) {
      console.log('click', provider, this.$fire.auth, this.$fireModule.auth)
      const ret = await fbSignInWithProvider(this.$fire.auth, this.$fireModule.auth, provider)
      console.log(ret)
    },
     async signOut() {
      console.log('click')
       const ret = await fbSignOut(this.$fire.auth)
       console.log(ret)
  }
  } 
}
</script>
