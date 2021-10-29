// * 折线图

// ? 初始化 echart 实例
const lineChart = echarts.init(document.querySelector('.line-chart'))
const lineXData = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
const lineYData1 = ['12','15','56','78','56','32','59','65','78','89','75','60']
const lineYData2 = ['22','35','56','68','46','22','79','45','78','69','65','80']

// ? 设置配置项
const lineOption = {
  title: {
    text: '折线图',
    backgroundColor: '#e3847c',
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: lineXData,
    // boundaryGap - 紧挨边缘
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    // scale - y轴缩放
    scale: true
  },
  series: [
    {
      name: 'A货',
      type: 'line',
      // stack - 产生堆叠
      stack: 'all',
      data: lineYData1,
      // smooth - 平滑曲线（true 为 0.5）
      smooth: true,
      // lineStyle - 线条样式
      lineStyle: {
        color: 'lightCoral',
        type: 'dashed'
      },
      // areaStyle - 填充样式
      areaStyle: {
        color: 'lightPink'
      },
      markPoint: {
        data: [
          {
            type: 'max'
          },
          {
            type: 'min'
          }
        ]
      },
      // markArea - 标注空间
      markArea: {
        data: [
          [
            {
              xAxis: '一月'
            },
            {
              xAxis: '三月'
            }
          ]
        ]
      }
    },
    {
      name: 'B货',
      type: 'line',
      // 产生堆叠
      stack: 'all',
      areaStyle: {},
      data: lineYData2,
      markPoint: {
        data: [
          {
            type: 'max'
          },
          {
            type: 'min'
          }
        ]
      }
    }
  ],
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove', 
    formatter: '{a}{b}的销量为 {c}'
  }
}

// ? 为实例应用 option 项
lineChart.setOption(lineOption)