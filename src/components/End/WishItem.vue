<template>
  <div class="row">
    <div class="col-md-6 text-black text-md-end">
      <span>{{item.lable}}</span>
    </div>
    <div class="col-md-6 text-white">{{item.content}}</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>