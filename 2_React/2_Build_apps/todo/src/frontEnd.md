## Application : 
## UI is rendered -> real life apps
* We have do an inital render -> loader / placeholder
* Parallely make the request 
* Replace the inital placeholder with actual data 

* The main use case of use effect is we have to call the function after the first render and paralelly make the request 
* for this we use use Effect

## React must provide feature to just call function at different stages of an application  
flag =false
data =[];


1. render the UI -> loading
2. make a request 
3. get the data -> data state -> rerender
