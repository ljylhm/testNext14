"use client"
import { useState } from 'react';

/**
 * @description 字符串编码
 */
function DecodeString() {
const [inputValue, setInputValue] = useState('');

/* 解密字符串的方法 */
const decode = (str: string): string => {

    const START_SIGN = "["
    const END_SIGN = "]"

    /** 定义一个状态的对象 */
    const root = {
        data: "",
        /** 默认倍数 */
        ratio: 1,
    }

    /** 定义一个栈 */
    const stack = [root];

    for(let i = 0; i < str.length; i++){
        const lastest = stack[0]
        if(str[i] === START_SIGN){
            let j = i - 1;
            let ratio = ""
            while(str[j] && Number(str[j])){
                ratio = str[j] + ratio 
                j = j - 1;
            }
            stack.unshift({
                data: "",
                ratio: Number(ratio) || 1
            })
            lastest.data = lastest.data.replace(ratio, "")
        }else if(str[i] === END_SIGN){
            const temp = lastest.data
            for(let k = 1; k < lastest.ratio; k++){
                lastest.data = lastest.data + temp
            }
            stack.shift()
            if(stack.length > 0){
                stack[0].data = stack[0].data + lastest.data
            }
        }else{
            lastest.data = lastest.data + str[i]
        }
    }
    return stack[0].data
}

return (
  <div>
    <input 
      type="text" 
      value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} 
      placeholder="请输入字符串"
    />
    <button type="button" onClick={() => {
        console.log("输入前的字符串为" + inputValue)
        console.log("输出的加密字符串为" + decode(inputValue))
    }}>确定</button>
  </div>
);
}

export default DecodeString;
