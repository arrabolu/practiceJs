/* 
Display 
block ---> takes full width , div by defalult is a block element, it has line brakes to the above and below this block element
inline---> it takes the width equal to the text , span is the inline element , width will not change in inline elements
inline-block --> it is same as inline element but we can change width in inline elements
flex
grid

Flex-box

In Flex box we have to containers 1st is the parent container and 2nd is the child containers
We have two axises Main axis and Cross axis main-axis is horizontal and cross axis is vertical
                                |
                        --------|-------- > main axis(by default)
                                |
                            cross axis(by default)

Parent container properties
display : flex
justify-content : center -->(applies on main axis)  flex-start(default),flex-end,space-between,space-around,space-evenly
align-items : center------> (applies on cross axis) flex-start(default),flex-end,space-between,space-around,space-evenly
flex-direction : column --> row(default) ,row-reverse
flex-wrap : wrap --->Need to apply when more childs are present and childs are compressed no-wrap(default)
align-content : center --> This property is applied only when flex-wrap : wrap  is defined , changes the alignment 
                            on cross axis

child container properties : need to apply on child containers
order : 1 --> changes the alignment 
flex-grow : 1 ---> Takes full width for child container
flex-stretch : 1 --> This child will stretch 1st when we resize the browser 


*/