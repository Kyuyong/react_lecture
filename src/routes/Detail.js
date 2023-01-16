import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Detail(props){
  
  
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  
  let{id} = useParams();
  let 찾은상품 = props.shoes.find((x)=> x.id == id);
  
  useEffect(()=>{
    let a = setTimeout(()=>{setAlert(false)},2000)

    return () => {
      clearTimeout(a);
    }
  },[count])

  useEffect(()=>{
    if (isNaN(num) ==true){
      alert('숫자 입력하세요')
    }
  }, [num])


  // 재랜더링마다 코드 실행하고 싶으면
  // mount시 1회 코드 실행하고 싶으면
  // unmout시 1회 코드 실행하고 싶으면
  // useEffect 실행전에뭔가 실행할려면, 


  return(
    <div className="container">
        {
          alert === true
          ? <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          :null
      
        }
        {count}
        <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <input onChange={(e)=>{setNum(e.target.value)}} />
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} alt="shoes" width="100%"></img>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;