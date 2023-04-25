<template>
  <div class="PageC">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-button type="primary" @click="before">before</el-button>
    <el-button type="primary" @click="submit">submit</el-button>
    <p>page-a的数据：{{ aData }}</p>

    <p>page-b的数据：{{ bData }}</p>
    <p style="color:red">{{ message }}</p>
    <el-dialog
      :show-close="false"
      title="登录提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>您还未登录，请登录</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";

export default {
  name: "PageC",
  data() {
    return {
      dialogVisible: false,
      message: "",
    };
  },
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState({
      aData: (state) => state.aData,
      bData: (state) => state.bData,
      isLogin: (state) => state.isLogin,
    }),
  },
  methods: {
    before() {
      this.$router.push(`./page-b`);
    },
    async submit() {
      const form = {
        a: this.aData,
        b: this.bData,
      };

      try {
        const { err, data } = await this.$request({
          method: "POST",
          url: "submit",
          data: {
            ...form,
          },
        });
        if (err) {
          this.message = "提交失败";
          return
        }
        this.message = "提交成功";

        console.log(err,'-----', data);
      } catch (error) {
        console.log(error);
        this.message = "提交失败";
      }
    },
    login() {
      this.$store.commit("changeLogin", { value: true });
      this.dialogVisible = false;
    },
  },
  created() {
    this.dialogVisible = !this.isLogin;
  },
};
</script>
