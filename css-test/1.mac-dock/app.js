document.querySelectorAll('.dock li').forEach(li => {
  li.addEventListener('click', e => {
    li.classList.add('loading')
  })

  li.addEventListener('mousemove', e => {  // e -> img 元素
    let item = e.target.parentElement.parentElement
    // ! getBoundingClientRect() 返回一个 DOMRect 对象，包含完整元素的最小矩形，并且拥有 left, top, right, bottom, x, y, width 和 height 这几个以像素为单位的只读属性。
    const itemRect = item.getBoundingClientRect()
    // * 计算鼠标在图标上的位置（可能为负数）
    // ? clientX | clientY -> 鼠标当前的坐标
    // ? 其余属性根据视图窗口的左上角来计算（除了 width 和 height 属性）
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
    
    
    // * 计算图标放大的比例
    // 测试是否存在左右的 li 元素
    let prev = item.previousElementSibling || null
    let next = item.nextElementSibling || null

    // * 放大倍率最大为 1.6 倍
    let scale = 0.6

    // * 鼠标移动超过范围的 li 重置缩放
    // resetScale()

    if (prev) {
      // * 左边的元素（offset 的值要取反）
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }

    // * 直接设置当前的元素为最大
    item.style.setProperty('--scale', 1 + scale)

    if (next) {
      // * 右边的元素
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

// * 离开 dock 的时候重置所有放大比例
document.querySelector('.dock').addEventListener('mouseleave', resetScale)

function resetScale() {
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}
