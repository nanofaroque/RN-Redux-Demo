# Redux Demo
### This is a sample demo app for learing and becoming familiar with Redux. 

## Run
``` npm install --save```

``` react-native run-ios ```

## Explanation
Example of playgrounds: https://stephengrider.github.io/JSPlaygrounds/

``` 
// reducer take an action and initial value
const reducer = (state = [], action)=>{
 if(action.type === 'split_string'){
 		return action.payload.split('');
 } else if(action.type === 'add_character'){
    return[
    ...state,
    action.payload 
    ]// it means take the old state and add action.payload to the array
 }
  
  return state;
}

const reducer1 = (state = [], action)=>{
 
  
  return state;
}
const store = Redux.createStore(reducer);
store.getState();

// If you run code above, it will return an empty array since
// it is coming from reducer.  


// action is nothing but a js object
const action = {
  type: 'split_string',
  payload: 'asdf'
};

// store dispatch action. Reducer change based on an action and 
// update the state. 
store.dispatch(action);
store.getState();


const action2 = {
	type: 'add_character',
  payload: 'a'
}

store.dispatch(action2);
store.getState();
```

## Output

