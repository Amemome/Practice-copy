

Transition 이랑 Transform 속성

Transform 으로 요소를 회전, 이동 크기조정, 왜곡 등 가능하다.
Transition 으로 변환 또는 속성 변경이 부드럽게 애니메이션 효과를 가지도록 설정한다.

Transfrom 은 rotate, rotateX, scale, skew, translate etc. 있다.


hover 마우스 올렸을 때 적용되는 것

요소지시:hover {
    
}
으로 마우스 올렷을 때의 스타일을 지정해줄 수 있다.

이때, hover 안에 있는 스타일들의 우선적용된다. -> 이 부분을 제대로 공부하지 않았다. CSS 선택자 우선순위를 공부해보도록 하자.
```
.box1 {
    width: 400px;
    height: 400px;
    background-color: red;
    transition: all 0.5s;

    /* display: inline; */
}

.box1:hover {
    transition: all 0s;
    transform: rotateY(20deg);
    background-color: blueviolet;
}
```
이런 식으로 해볼 수 있겠다.


animation 은 다음 시간에 해보도록.