// * 散点图
// ! 散点图需要二维数组 => x轴 和 y轴 的 type 都为 value

// ? 初始化 echarts 实例对象
const scatterChart = echarts.init(document.querySelector('.scatter-chart'))

// ? 设置图表配置项
const scatterOption = {
  title: {
    text: '散点图'
  },
  // type 值默认为 value
  xAxis: {},
  yAxis: {},
  series: [
    {
      name: '',
      // 普通效果
      type: 'scatter',
      // effectScatter - 涟漪动画效果
      type: 'effectScatter',
      // showEffectOn: emphasis - 鼠标涟漪动画
      showEffectOn: 'emphasis',
      // 控制圆点大小
      symbolSize: 8,
      // itemStyle - 控制圆点样式
      itemStyle: {
        color: 'lightCoral'
      },
      // 
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ]
    }
  ]
}

// ? 为实例应用 option 项
scatterChart.setOption(scatterOption)