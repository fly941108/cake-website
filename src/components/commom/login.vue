<template>
    <div class="login">
        <Modal
            :value="currentLoginStatus"
            title="请登录"
            @on-ok="login"
            @on-cancel="cancel">
            <Form :model="loginForm" :label-width="80" label-position="left">
                <FormItem label="userName">
                    <Input v-model="loginForm.userName" placeholder="Enter userName"></Input>
                </FormItem>
                <FormItem label="password">
                    <Input v-model="loginForm.passward" type="password" placeholder="Enter password"></Input>
                </FormItem>
            </Form>
            <p>没有账号？<Button type="text">立即注册</Button></p>
        </Modal>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userName: '',
        passward: ''
      }
    }
  },
  computed: {
    currentLoginStatus () {
      return this.$store.getters.getShowLogin
    }
  },
  methods: {
    login () {
      this.$store.dispatch('actionSetLoginInfo', this.loginForm.userName, this.loginForm.passward)
      this.$store.dispatch('actionSetGetTocken', this.loginForm.userName)
      this.$store.dispatch('actionSetShowLogin', false)
      this.loginForm.userName = ''
      this.loginForm.passward = ''
    },
    cancel () {
      this.$store.dispatch('actionSetShowLogin', false)
      this.loginForm.userName = ''
      this.loginForm.passward = ''
    }
  }
}
</script>
<style scoped>

</style>
