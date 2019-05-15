import React from 'react'

export default (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

//这是key-mirror的写法 相当于取了对象变量中的key为xxx的值
// export default ({title}) => {
//   return (
//     <h1>{title}</h1>
//   )
// }
