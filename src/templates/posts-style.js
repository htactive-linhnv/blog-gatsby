import styled from 'styled-components'

const IndexPage = styled.div`
 
  & .post--wrapper {
    border-bottom: 1px solid #e8e8e8;
    padding: 30px 30px 30px 0;
    margin-top:1rem;
    margin-bottom: 30px;
    display:flex;
  }
  & .post--category {
    color:black;
    text-decoration: none;
    font-size: 2.3em;
    margin-bottom:0;
  }
  & .category {
      color:#62adf7;
      font-size:0.45em;
      letter-spacing: .07rem;
      font-weight:500;
  }
  & .post--content {
    margin-bottom:20px;
    letter-spacing: .017rem;
  }
  & .post-category {
    padding:3px 10px;
    font-size:0.55em;
    margin-bottom:10px;
    border-radius:3px;
  }
  & .post--image {
    background-image : url("https://i.pinimg.com/originals/ee/39/05/ee3905d06684aad915c1844633adf12f.jpg");
    width:400px;
    height:300px;
    background-size: contain;
    }
  & .post--write {
    width: 90%;
    margin-left: 5%;
  }
`

export default IndexPage