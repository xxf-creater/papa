<template>
  <div class="PageB">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <el-button type="primary" @click="before">before</el-button>
        <el-button type="primary" @click="next">next</el-button>
    <p>page-a的数据：{{aData}}</p>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="input"
    >
    </el-input>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";

export default {
  name: "PageB",
  components: {
    // HelloWorld
  },
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState({
      aData: state => state.aData,
      bData: state => state.bData
    })
  },
  methods: {
    next() {
      this.$store.commit("changeBData", { value: this.input });

      this.$router.push(`./page-c`);
    },
    before(){
      this.$router.push(`./page-a`);

    }
  },
  mounted(){
    // console.log('555444');
    this.input = this.bData
  }
};
</script>
