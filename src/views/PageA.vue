<template>
  <div class="PageA">
    <el-button type="primary" @click="next">next</el-button>
    <el-input type="textarea" autosize placeholder="请输入内容" v-model="input">
    </el-input>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "PageA",
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState({
      aData: state => state.aData
    })
  },
  methods: {
    next() {
      this.$store.commit("changeAData", { value: this.input });
      this.$router.push(`./page-b`);
      // console.log(this.input);
    },
  },
  mounted(){
    // console.log('555444');
    this.input = this.aData
  }
};
</script>
