// * 直角坐标系

// ? echarts.init 初始化 echarts 实例
const coordinateSystem = echarts.init(document.querySelector('.coordinate-system'))
const coordinateXData = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
const coordinateYData = ['12','15','56','78','56','32','59','65','78','89','75','60']

// ? 设置对应的配置项
const coordinateSystemOption = {
  title: {
    text: '直角坐标系通用配置',
    backgroundColor: 'lightCoral',
    textStyle: {
      color: '#fff',
      fontSize: '16px'
    },
    top: 0
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  // grid - 控制直角坐标系的布局和大小
  grid: {
    show: true,
    right: 10,  // 直角坐标系（不包括 x轴 和 y轴 的标签）距离容器边界的距离（绝对值或百分比）
    left: 40,
    width: '80%', // 绝对值或百分比
    height: '80%'
  },
  // dataZoom - 更高级的区域缩放，为数组可设置多个区域缩放器
  dataZoom: [
    {
      type: 'slider',  // 滑块控制
      // xAxisIndex - 设置控制哪个 x 轴
      xAxisIndex: 0,
      // start/end - 数据窗口范围的起始/结束百分比
      start: 10,
      end: 60
    },
    {
      type: 'inside',  // 鼠标滚轮或双指缩放
      yAxisIndex: 0,
      start: 0,
      end: 90
    }
  ],
  xAxis: {
    type: 'category',
    data: coordinateXData,
    // position - x轴只能取值为 top 或 bottom
    position: 'top'
  },
  yAxis: {
    // position - y轴只能取值为 left 或 right
    position: 'right'
  },
  series: [
    {
      name: '测试',
      type: 'effectScatter',
      data: coordinateYData,
      symbolSize: 8,
      label: {
        show: true,
        position: 'top'
      }
    }
  ]
}

// ? 应用配置项
coordinateSystem.setOption(coordinateSystemOption)
