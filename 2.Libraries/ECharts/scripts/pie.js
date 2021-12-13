// * 饼图

// ? 初始化 echarts 实例对象
const pieChart = echarts.init(document.querySelector('.pie-chart'))
// ! pie 非直角坐标系，数据格式有所区分
const pieData = [
  // 数组中的每个对象拥有 name、value 属性
  {
    name: '衣服',
    value: 1501
  },
  {
    name: '食物',
    value: 2580
  },
  {
    name: '日常用品',
    value: 1234
  },
  {
    name: '休闲娱乐',
    value: 600
  }
]

// ? 设置表格配置项
// 非直角坐标系，无需设置 x轴 和 y轴
const pieOption = {
  title: {
    text: '饼图'
  },
  series: [
    {
      type: 'pie',
      data: pieData,
      // roseType - 设置如何展现数据大小
      roseType: 'radius',
      // 利用 radius 设置圆环半径
      radius: ['8%', '70%'],
      // selectedMode - 设置是否支持多个选中，默认关闭
      selectedMode: 'single',
      // selectedOffset - 选中部分偏移数值
      selectedOffset: '60',
      itemStyle: {
        borderRadius: 4
      },
      label: {
        // 利用 formatter 显示对应的百分比和数值
        formatter: function(arg) {
          return `${arg.name}: ${arg.value}元\n(${arg.percent}%)`;
        }
      }
    }
  ]
}

// ? 应用配置项
pieChart.setOption(pieOption)