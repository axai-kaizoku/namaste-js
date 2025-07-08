## Two issues while using callbacks

0. - Importance of callbacks

- Callback functions are very important part of javascript. With the help of callback functions we are able to write async code in Javascript

1. - Callback hell

- When a function is passed to another function as parameter and that function also takes another function as another parameter, this keeps on repeating and we find difficult to maintain the code. With this instead of growing vertically the code grows horizontally. (we call this scenerio as pyramid of doom)

2. - Inversion of control

- When we are passing a function to another function as a paramter, and that function is taking care of execution of that function, but here we might not know wheather the function is calling that passed function or not, or maybe it's calling it twice. We don't know what's happening behind the scenes, this is inversion of control
