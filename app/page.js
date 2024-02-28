'use client';

import axios from "axios";
import { useRef, useState } from "react";


export default function Home() {

  const [txt, setTxt] = useState([])
  const elInput = useRef()

  async function dataCrl(type) {
    let res
    switch (type) {
      case 'all': res = await axios.get('/api')
        break;

      case 'one': res = await axios.get('/api/1')
        break;

      case 'insert': res = await axios.post('/api', { id: Date.now(), title: elInput.current.value })
        break;

      case 'delete': res = await axios.delete('/api/1708479416350')
        break;

      case 'put': res = await axios.put('/api/id', { id: '2', title: '5프로젝트' })
        break;
    }
    setTxt(res.data)

  }

  // useEffect(() => {
  //   setTxt(res.data)
  // }, [])
  console.log(txt)
  return (
    <>
      <article>
        <h2>데이터 모두 가져오기(몽고)
          <button onClick={() => { dataCrl('all') }}>전체출력</button>
          <button onClick={() => { dataCrl('insert') }}>추가하기</button>
          <button onClick={() => { dataCrl('one') }}>데이터 1개출력</button>
          <button onClick={() => { dataCrl('delete') }}>삭제하기</button>
          <button onClick={() => { dataCrl('put') }}>수정하기</button>
        </h2>
        <div></div>
      </article>

      <article>
        <h2>데이터(몽고)</h2>
        <form onSubmit={()=>{dataCrl('insert')}}>
          <input type="text" ref={elInput}/>
          <input type="submit" value='저장'></input>
        </form>

        <ul>
          {
            txt.map((obj) => (
              <li key={obj.id}>
              <p >{obj.title}</p>
              </li>
            ))
          }
        </ul>

      </article>





    </>

  );
}
