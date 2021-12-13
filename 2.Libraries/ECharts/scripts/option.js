// * 通用配置项
/*
  ? 1. title
      textStyle | border | left/top/right/bottom
  ? 2. tooltip
      trigger | triggerOn | formatter
  ? 3. toolbox
      feature
  ? 4. legend
      data
*/

// ? 初始化 chart 实例
const optionChart = echarts.init(document.querySelector('.chart-option'))
const optionXData = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
const optionYData1 = ['12','15','56','78','56','32','59','65','78','89','75','60']
const optionYData2 = ['56','78','56','12','15','65','78','89','75','60','32','59']

// ? 设置配置项
const optionChartOption = {
  title: {
    text: '通用配置展示图',
    backgroundColor: '#5a89ff',
    textStyle: {
      color: '#fff',
      fontSize: '16px'
    }
  },
  // tooltip - 提示框组件
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    // 字符串模板的用法
    formatter: '{b}的销量是 {c}'
  },
  // 回调函数的用法
  // formatter: function(arg) {
  //   return `${arg.name}的销量是：${arg.value}`
  // },
  // toolbox - 工具栏
  toolbox: {
    show: true,
    // ! feature - 工具的开关
    feature: {
      saveAsImage: {},
      dataView: {},
      restore: {},
      dataZoom: {},
      magicType: {
        type: ['bar', 'line']
      }
    }
  },
  // legend - 图例组件（可选择性的显示特定的 series 对象）
  legend: {
    // 没有指定时，则自动从当前系列获取
    data: ['鼠标', '键盘']
  },
  xAxis: {
    type: 'category',
    data: optionXData
  }, 
  yAxis: {
    type: 'value'
  }, 
  series: [
    {
      name: '鼠标',
      type: 'line',
      data: optionYData1,
      label: {
        show: true
      },
      markLine: {
        data: [
          {
            name: 'Max Value',
            type: 'max'
          }
        ]
      }
    }, 
    {
      name: '键盘',
      type: 'line',
      data: optionYData2,
      label: {
        show: true,
        position: 'left'
      }, 
      markLine: {
        data: [
          {
            name: 'Max Value',
            type: 'max'
          }
        ]
      }
    }
  ]
}

// ? 应用配置项
optionChart.setOption(optionChartOption)