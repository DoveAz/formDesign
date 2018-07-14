<template>
  <div>
    <aside>
      <el-form element="el-form" v-model="data"
               label-position="left"
               label-width="90px">
        <el-form-item v-for="item in initData" :key="item.type" :label="item.label">
          <template v-if="item.type==='input'">
            <el-input></el-input>
          </template>
          <template v-if="item.type==='select'">
            <el-select v-model="data.select">
              <el-option :value="1" :label="1"></el-option>
            </el-select>
          </template>
          <template v-if="item.type==='checkbox'">
            <el-checkbox>test</el-checkbox>
            <el-checkbox>test2</el-checkbox>
          </template>
          <template v-if="item.type==='radio'">
            <el-radio>test</el-radio>
            <el-radio>test2</el-radio>
          </template>
          <template v-if="item.type==='switch'">
            <el-switch></el-switch>
          </template>
          <template v-if="item.type==='cascader'">
            <el-cascader :options="[]"></el-cascader>
          </template>
          <template v-if="item.type==='rate'">
            <el-rate :value="3"/>
          </template>
          <template v-if="item.type==='slider'">
            <el-slider></el-slider>
          </template>
          <template v-if="item.type==='time-picker'">
            <el-time-picker></el-time-picker>
          </template>
          <template v-if="item.type==='date-picker'">
            <el-date-picker></el-date-picker>
          </template>
          <template v-if="item.type==='upload'">
            <el-upload action="">
              <el-button type="primary" size="mini">点击上传</el-button>
            </el-upload>
          </template>
          <i class="el-icon-plus" @click="add(item)"></i>
        </el-form-item>
      </el-form>
    </aside>
    <div class="main">
      <draggable :options="{draggable:'.el-form-item',group:{name:'form',pull:false}}" element="el-form" v-model="form"
                 label-position="left"
                 label-width="90px">
        <el-form-item :class="{active:index===active}" @click.native="active=index" v-for="(item,index) in form" :key="index" :label="item.label">
          <template v-if="item.type==='input'">
            <el-input></el-input>
          </template>
          <template v-if="item.type==='select'">
            <el-select v-model="data.select">
              <el-option :value="1" :label="1"></el-option>
            </el-select>
          </template>
          <template v-if="item.type==='checkbox'">
            <el-checkbox>test</el-checkbox>
            <el-checkbox>test2</el-checkbox>
          </template>
          <template v-if="item.type==='radio'">
            <el-radio>test</el-radio>
            <el-radio>test2</el-radio>
          </template>
          <template v-if="item.type==='switch'">
            <el-switch></el-switch>
          </template>
          <template v-if="item.type==='cascader'">
            <el-cascader :options="[]"></el-cascader>
          </template>
          <template v-if="item.type==='rate'">
            <el-rate :value="3"/>
          </template>
          <template v-if="item.type==='slider'">
            <el-slider></el-slider>
          </template>
          <template v-if="item.type==='time-picker'">
            <el-time-picker></el-time-picker>
          </template>
          <template v-if="item.type==='date-picker'">
            <el-date-picker></el-date-picker>
          </template>
          <template v-if="item.type==='upload'">
            <el-upload action="">
              <el-button type="primary" size="mini">点击上传</el-button>
            </el-upload>
          </template>
          <i class="el-icon-delete" @click="remove(index)"></i>
        </el-form-item>
      </draggable>
    </div>
    <div class="detail">
      <el-form>
        <el-form-item label="key">
          <el-input v-model="form[active].key"></el-input>
        </el-form-item>
        <el-form-item label="label">
          <el-input v-model="form[active].label"></el-input>
        </el-form-item>
        <el-form-item v-if="form[active].type==='select'" label="选项">

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "Index",
    components: {draggable},
    data() {
      return {
        initData: [],
        data: [
          {
            type: 'input',
            key: 'name',
            label: '输入框'
          },
          {
            type: 'select',
            key: '...',
            label: '选择器',
            options: []
          },
          {
            type: 'cascader',
            key: '',
            label: '级联选择器'
          },
          {
            type: 'checkbox',
            key: 'checkbox',
            label: '复选框'
          },
          {
            type: 'radio',
            key: '',
            label: '单选框'
          },
          {
            type: 'slider',
            key: '',
            label: '滑块'
          },
          {
            type: 'switch',
            key: '',
            label: '开关'
          },
          {
            type: 'time-picker',
            key: 'ccc',
            label: '时间选择器'
          },
          {
            type: 'date-picker',
            key: 'aaa',
            label: '日期选择器'
          },
          {
            type: 'upload',
            key: '',
            label: '上传'
          },
          {
            type: 'rate',
            key: '',
            label: '评分'
          },
        ],
        form: [
          {
            type: 'input',
            key: 'name',
            label: '姓名'
          },
          {
            type: 'select',
            key: 'region',
            label: '地区',
            options: []
          }
        ],
        active:0
      }
    },
    methods: {
      add(item) {
        this.form.push(_.cloneDeep(item))
      },
      remove(index){
        this.form.splice(index,1)
      }
    },
    created() {
      this.initData = _.cloneDeep(this.data)
    }
  }
</script>

<style lang="less" scoped>

  aside {
    position: absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 100vh;
    border-right: 1px solid gainsboro;
    padding: 15px;
    .el-form {
      .el-form-item {
        max-width: 300px;
      }
      .el-icon-plus {
        position: absolute;
        right: -25px;
        top: 13px;
        cursor: pointer;
        &:hover {
          color: #7acfff;
        }
      }
    }
  }

  .main {
    margin-left: 350px;
    padding: 15px;
    max-width: 600px;
    .el-form {
      .el-form-item {
        max-width: 550px;
        &.active{
          background-color: #f7ffd0;
        }
        .el-icon-delete {
          position: absolute;
          top: 13px;
          right: -25px;
          cursor: pointer;
          &:hover{
            color: #ff5b68;
          }
        }
      }
    }
  }

  .detail{
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    border-left:1px solid gainsboro;
    padding: 15px;
  }


</style>
