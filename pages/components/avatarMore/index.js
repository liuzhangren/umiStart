import React from 'react'
import styles from './index.css';
import {
  Dropdown,
  Icon
} from 'antd'

const mockArr = [
  1, 2, 3, 4, 5, 6, 7
]

const y = (arr) => {
  let temp = []
  for(let i = 0,len = arr.length; i < len; i += 4){
    temp.push(arr.slice(i,i+4))
  }
  return temp.reduce((r, c) => {
    return [
      ...r,
      ...(c.reduce((_r, _c, i) => {
        return [
          ..._r,
          ...(
              i === 3?
              [<Icon key={`Icon${i}`} type="user"/>, <br key={`br${i}`} />]:
              [<Icon key={`Icon${i}`} type="user"/>]
            )
        ]  
      }, []))
    ]
  }, [])
}

let res = y(mockArr)
console.log(res)
const props = {
  content: (
    <div>
      {res}
    </div>
  )
}

const AvatarMore = () => {

  return (
    <div className={styles.container}>
      <Dropdown overlay={props.content}>
        <Icon type="ellipsis" style={{cursor: 'pointer'}}/>
      </Dropdown>
    </div>
  )
}




export default AvatarMore