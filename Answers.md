1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
- `.map`, `.filter`, and `.concat`. `.assign`
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- `actions` are an object with up to two properties, type and payload. `reducers` are functions that `actions`are 
dispatched through, they also take in two arguments, the action and current state. `store` is where all of the data is
located, or state.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is used all over the app, where as Component state is used for that specific component.
1.  What is middleware?
- Middleware is is a function that can intercept a process point, and takes data flow.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- Redux-thunk allows itself to intercept a process and look at what is being returned. It will then either decided if it
is an action or function.
1.  Which `react-redux` method links up our `components` with our `redux store`?
- `.connect`