import React from 'react'

function Preloader() {
  return (
     <div className="preloader">
      <style>{`
        .loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid rgba(0, 102, 255, 0.1);
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: #03F6FF;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #03F6FF;
  box-shadow: 0 0 20px rgba(0, 0, 0, .15);
}

.loader::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #03F6FF;
  border-right: 3px solid #03F6FF;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

.loader span {
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
}

.loader span::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #03F6FF;
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px 5px #03F6FF;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}
      `}</style>
      <div class="loader">Loading
  <span></span>
</div>
    </div>
  )
}

export default Preloader