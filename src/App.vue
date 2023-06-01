<template>
  <router-view/>
</template>

<script>
import {db, getDocument, setDocument, addDocument} from '@/firebase'

export default {
  data() {
    return {
      ipAddress: null
    }
  },
  created() {
    this.getIPAddress()
    // this.updateIPAddress()
  },
  watch: {
    $route() {
      // console.log(this.$route);
      const lang = this.$route.path.includes('english') ? 'english' : 'vietnamese'
      this.$store.commit('changeLanguage', lang)
    },
    ipAddress() {
      this.updateIPAddress()
    }
  },
  methods: {
    getIPAddress() {
      fetch('http://api.ipify.org/')
        .then((res) => res.text())
        .then(ip => {
          this.ipAddress = ip
        })
        .catch(err => console.log(err))
    },
    async updateIPAddress() {
      const arr = await getDocument("ipAddresses", {key: "ipAddress", operation: "==", value: this.ipAddress})
      if(arr.length > 0) {
        //nếu mảng có chứa địa chỉ ip đó thì update số lần đọc
        const result = await setDocument("ipAddresses", arr[0].id, {
          ipAddress: arr[0].data.ipAddress,
          countOfRead: arr[0].data.countOfRead + 1
        })
        console.log(result);
      }
      else {
        const result = await addDocument("ipAddresses", {
          ipAddress: this.ipAddress,
          countOfRead: 1
        })
        console.log(result);
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>