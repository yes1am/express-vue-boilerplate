<template>
  <h1>
    str: {{ str }}
    <my-input v-model="str" />
    <div />
    <!-- input: {{ input }} -->
    <!-- <el-input
      :value="input"
      placeholder="请输入内容"
    /> -->
    <!-- <my-input
      :value="str"
      @input="handleInput"
    /> -->
  </h1>
</template>

<script>

import Input from './input';

export default {
  components: {
    MyInput: Input
  },
  name: 'App',
  data() {
    return {
      str: 'hello world!',
      input: 'hello'
    }
  },
  methods: {
    handleInput(e) {
      console.log(e);
      // const value = e.target.value;
      // this.str = value
      // console.log();
    }
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
</style>
