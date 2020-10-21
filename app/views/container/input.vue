<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
  >
</template>

<script>

export default {
  name: 'Input',
  props: {
    value: {
      type: [String, Number],
      default: '',
    }
  },
  data() {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val, 'input', true);
    }
  },
  methods: {
    handleInput(e) {
      this.setCurrentValue(e.target.value);
    },
    setCurrentValue(value) {
      if(value !== this.currentValue) {
        console.log('set current');
        this.currentValue = value;
        if (value !== this.value) {
          this.$emit('input', value);
        }
      }
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
