<style lang='less'>
.gap {
  margin-top: 20px;
}
</style>

<template>
  <div>
    <div class="gap"></div>
    <div>
      <span>id</span>
      <input type="number" v-model="id" />
      <span>title</span>
      <input type="text" v-model="title" />
      <span>content</span>
      <input type="text" v-model="content" />
      <button @click="query">查询</button>
    </div>
    <div class="gap"></div>
    <list-child :listData="listTable"></list-child>
  </div>
</template>

<script>
import { safeRequest } from "../../utils";
import bus from "@/utils/eventBus";

import listChild from "@/components/listChild";
export default {
  components: {
    listChild
  },
  data() {
    return {
      listTable: [],
      id: "",
      title: "",
      content: ""
    };
  },
  methods: {
    async query(val) {
      const { id, title, content } = this;
      let _url = "/test/list?";
      if (id) {
        _url += `id=${id}`;
      }
      if (title) {
        _url += `title=${title}`;
      }
      if (content) {
        _url += `content=${content}`;
      }
      const resp = await safeRequest({
        url: _url
      })

      if (resp.code == 0) {
        this.listTable = res.data;
      }
    }
  },
  mounted() {
    this.query();
    console.log("parent mounted");
    bus.$on("query", this.query);
  },
  beforeUpdate() {
    console.log("parent beforeUpdate");
  },
  updated() {
    console.log("parent updated");
  }
};
</script>
