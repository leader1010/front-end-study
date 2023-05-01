<template>

  <!--  全选区域-->
  <div class="footer-container">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isfull" @change="onCheckBoxChange"/>
      <label class="custom-control-label" for="fullCheck">全选</label>
    </div>

    <!-- 合计区域 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥{{amount.toFixed(2)}}</span>
    </div>

    <!--    结算区域-->
      <button type="button" class="btn btn-primary btn-settle">结算 ({{total}})</button>

  </div>


</template>

<script>


export default {
  name: "EsFooter",
  emits: ['fullChange'],
  props: {
    // 已勾选商品的总价格
    amount: {
      type: Number,
      default: 0
    },
    // 已勾选商品的总数量
    total: {
      type: Number,
      default: 0
    },
    isfull: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    onCheckBoxChange(e){
      console.log(e.target.checked)
      this.$emit('fullChange', e.target.checked)
    }
  }
}
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #efefef;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.amount {
  font-weight: bold;
  color: red;
}

.btn-settle {
  min-width: 90px;
  height: 38px;
  border-radius: 19px;
}

</style>