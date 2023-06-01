<template>
  <router-view/>
</template>

<script>
import {db} from '@/firebase'
import { collection, doc, setDoc, getDocs, addDoc, query, where } from "firebase/firestore";

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
      console.log(this.ipAddress);
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
      try {
        const q = query(collection(db, "ipAddresses"), where("ipAddress", "==", this.ipAddress));
        const querySnapshot = await getDocs(q);
        // const querySnapshot = await db.collection('ipAddresses').where("ipAddress", "==", this.ipAddress).get()
        const arr = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          arr.push({
            id: doc.id,
            data: doc.data()
          })
        });
        if(arr.length > 0) {
          //nếu mảng có chứa địa chỉ ip đó thì update số lần đọc
          const result = await setDoc(doc(db, "ipAddresses", arr[0].id), {
            ipAddress: arr[0].data.ipAddress,
            countOfRead: arr[0].data.countOfRead + 1
          })
          console.log(result);
        }
        else {
          //nếu không có thì tạo mới cho ip đó
          const result = await addDoc(collection(db, "ipAddresses"), {
            ipAddress: this.ipAddress,
            countOfRead: 1
          });
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>