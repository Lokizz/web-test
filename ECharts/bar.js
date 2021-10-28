// * 柱形图
// ? 使用 echarts.init 初始化实例对象
const barChart = echarts.init(document.querySelector('.bar-chart'))

// ? 初始化数据
const xData = ["张三", "李四", "王五", "闰土", "小明", "茅台", "二妞", "大强"]
const yData1 = [88, 92, 63, 77, 94, 80, 72, 86]
const yData2 = [80, 72, 53, 87, 54, 60, 30, 90] 

// ? 设置配置项（如表格样式等）
const option = {
  // title - 标题设置
  title: {
    text: '成绩表',
    backgroundColor: '#eee'
  }, 
  // x轴
  xAxis: {
    // 设置轴显示的数据类型
    type: 'category',
    data: xData
  },
  // y轴
  yAxis: {
    // 数值的显示主要在 series 项中配置
    type: 'value'
  },
  // series - 表格样式等设置
  series: [
    {
      name: '语文',
      // 设置图表类型
      type: 'bar',  // 柱形图
      data: yData1,
      markPoint: {
        data: [
          {
            name: '最大值',
            type: 'max'
          }, 
          { 
            name: '最小值',
            type: 'min'
          }
        ]
      },
      markLine: {
        data: [
          { name: '平均值', type: 'average' }
        ]
      },
      label: {
        show: true
      }
    }, 
    {
      name: '数学',
      type: 'bar',
      data: yData2,
      markPoint: {
        data: [
          {
            name: '最大值', 
            type: 'max'
          },
          {
            name: '最小值',
            type: 'min'
          }
        ]
      }, 
      markLine: {
        data: [
          { name: '平均值', type: 'average' }
        ]
      }, 
      label: {
        show: true
      }
    }
  ]
}

// ? 使用 setOption 应用配置项到指定实例
barChart.setOption(option)