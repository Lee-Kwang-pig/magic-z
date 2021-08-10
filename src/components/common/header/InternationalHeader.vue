<template>
  <div class="m-header">
    <div class="m-header_content">
      <slot name='left'></slot>
      <slot name='center'></slot>
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternationalHeader',
  props: {}
}

</script>

<style>
.m-header {
  width: 100%;
  height: 56px;
}

.m-header_content {
  height: 56px;
  color: #fff;
  font-size: 16px;
  margin: 0 24px;
  display: flex;
  justify-content: space-between;
}
</style>
