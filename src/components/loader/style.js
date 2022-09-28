  
  import Styled from 'styled-components';
  const LoaderWrapper = Styled.div`
        background: rgba(255, 255, 255, 0.7);
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 12;
    top: 0;
    transition:0.3s all ease-in;
    .loader{
        position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 70px;
    }
  #dot1, #dot2, #dot3, #dot4, #dot5, #dot6, #dot7, #dot8, #dot9, #dot10 {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50px 50px;
    background: #2589FF;
    z-index:1;
    animation: spin 1.5s linear infinite;
    transform-origin: center center;
  }
  
  #dot2 {
    animation: spin 1.5s -0.75s linear infinite;
  }
  
  #dot3 {
    left: 30px;
    animation: spin 1.5s -1.3s linear infinite;
  }
  
  #dot4 {
    left: 30px;
    animation: spin 1.5s -0.55s linear infinite;
  }
  
  #dot5 {
    left: 60px;
    animation: spin 1.5s -1.1s linear infinite;
  }
  
  #dot6 {
    left: 60px;
    animation: spin 1.5s -0.35s linear infinite;
  }
  
  #dot7 {
    left: 90px;
    animation: spin 1.5s -0.9s linear infinite;
  }
  
  #dot8 {
    left: 90px;
    animation: spin 1.5s -0.15s linear infinite;
  }
  
  #dot9 {
    left: 120px;
    animation: spin 1.5s -0.7s linear infinite;
  }
  
  #dot10 {
    left: 120px;
    animation: spin 1.5s 0.05s linear infinite;
  }
  
  #base1, #base2, #base3, #base4, #base5 {
    position: absolute;
    top: 30px;
    left: 5px;
    width: 1px;
    height: 10px;
    background: grey;
    animation: flex 1.5s linear infinite;
    transform-origin: center center;
  }
  
  #base2 {
    left: 35px;
    animation: flex 1.5s -1.3s linear infinite;
  }
  
  #base3 {
    left: 65px;
    animation: flex 1.5s -1.1s linear infinite;
  }
  
  #base4 {
    left: 95px;
    animation: flex 1.5s -0.9s linear infinite;
  }
  
  #base5 {
    left: 125px;
    animation: flex 1.5s -0.7s linear infinite;
  }
  
  @keyframes spin {
    0%, 100% {
      transform: translateY(0px) scale(1);
    }
    25% {
      transform: translateY(30px) scale(2);
    }
    50% {
      transform: translateY(60px) scale(1);
    }
    75% {
      transform: translateY(30px) scale(0.3);
    }
  }
  
  @keyframes flex {
    0%, 100% {
      transform: scaleY(5);
    }
    25% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(5);
    }
    75% {
      transform: scaleY(1);
    }
  }
  `;
  export {LoaderWrapper}