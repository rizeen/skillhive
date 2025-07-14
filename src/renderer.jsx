import React from 'react'

export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat()
    }
  }
}

function formatProps(props) {
  if (!props) return ''
  return Object.entries(props)
    .filter(([key]) => key !== 'children')
    .map(([key, val]) => ` ${key}="${val}"`)
    .join('')
}

// Recursive renderer with indentation
export function render(node, depth = 0) {
  if (node === null || node === undefined || typeof node === 'boolean') return

  const indent = '  '.repeat(depth) // 2 spaces per level

  if (typeof node === 'string' || typeof node === 'number') {
    console.log(indent + node)
    return
  }

  if (typeof node.type === 'function') {
    return render(node.type({ ...node.props }), depth)
  }

  if (node.type === React.Fragment) {
    const children = [].concat(node.props?.children || [])
    children.forEach(child => render(child, depth))
    return
  }

  const tag = node.type
  console.log(`${indent}<${tag}${formatProps(node.props)}>`)
  
  const children = [].concat(node.props?.children || [])
  children.forEach(child => render(child, depth + 1))

  console.log(`${indent}</${tag}>`)
}
