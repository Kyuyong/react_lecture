import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${props => props.bg == 'blue' ? 'white':'black'};
  padding : 10px;
`
let Box =  styled.div`
  background : grey;
  padding : 20px;
`

function Detail(props){

  let{id} = useParams();
  let 찾은상품 = props.shoes.find((x)=> x.id == id);
  let 찾은상품번호 = props.shoes.find((x)=> x.id = id);
  console.log(찾은상품);
  console.log(찾은상품번호.id);

  return(
    <div className="container">
      <Box>
        <YellowBtn bg ="blue">버튼</YellowBtn>
        <YellowBtn bg="orange ">버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+찾은상품번호.id+".jpg"} alt="shoes" width="100%"></img>
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