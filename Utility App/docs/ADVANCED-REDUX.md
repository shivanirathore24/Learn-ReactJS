# ADVANCED REDUX

## Manual Logger

Added simple console-based logging to track when Todo actions are dispatched during user interactions. This helps in understanding the flow of actions and debugging state changes during development.

### components/ToDoForm/ToDoForm.js

```diff
...
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
+   console.log("[LOG]: Todo - Add Action dispatched!");
    dispatch(actions.add(todoText));
    setTodoText("");
  };
...
```

Added logging for Todo creation action.

- Adding manual log
  - Logs message when add action is triggered
  - Helps track user interaction during debugging
- No change in functionality
  - Logic remains same
  - Only debugging support added

### components/ToDoList/ToDoList.js

```diff
...
function ToDoList() {
  const todos = useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <div className={styles["list-container"]}>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className={styles.content}>{todo.text}</span>

            <span
              className={todo.completed ? styles.completed : styles.pending}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>

            <button
              className={styles["toggle-btn"]}
-             onClick={() => dispatch(actions.toggle(index))}
+             onClick={() => {
+               console.log("[LOG]: Todo - Toggle Action dispatched!");
+               console.log("[LOG]: Current Todos:", todos);
+               dispatch(actions.toggle(index));
+             }}
            >
              Toggle
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}
...
```

Added logging for Todo toggle action.

- Adding manual log
  - Logs message when toggle action is triggered
  - Helps identify state change triggers
- Wrapping dispatch in function
  - Allows executing multiple statements (log + dispatch)
- No impact on UI
  - Only improves debugging visibility

### Issue with Manual Logger

Using `console.log` for logging has several limitations in real applications.

- Hard to manage
  - Logs are scattered across components
  - Difficult to track or maintain as app grows
- Not scalable
  - Repetitive logging code in multiple places
  - No central control over logging behavior
- No structure
  - Logs are plain text (no action/state context)
  - Hard to debug complex flows
- Cannot be disabled easily
  - Logs remain in production unless manually removed

### Solution

Use a **centralized logging approach using Redux Middleware**.

- Centralized logging
  - All actions pass through middleware
  - Single place to log everything
- Automatic tracking
  - Logs every dispatched action
  - No need to write logs in components
- Structured logging
  - Can log action type, payload, previous & next state
- Easy to control
  - Enable/disable logging based on environment

#### 🖥️ What You See in Browser:

<img src="../images/manual-logger.png" alt="Manual Logger" width="700" height="auto">

## Redux Logger Middleware

### Problem

In large projects, it is important to keep track of what is happening inside the
application at all times. This is where loggers come into play. A logger is a utility that
captures information about various events that occur during the application's runtime,
such as user actions, server responses, errors, and warnings.

In Redux, actions are dispatched from components to the store to update the state.
Logging every action dispatched from the components to the store using
console.log() can help debug and track the application flow. However, modifying
every reducer to add console.log statements is not an ideal approach, as it can
become difficult to manage when there are many components and reducers. One
solution to this problem is to use middleware in Redux.

### Solution: Middleware

Middleware in Redux intercepts actions as they are dispatched to the store and can
perform some additional logic on them before they reach the reducer.

One such middleware that can be used to log all actions is the loggerMiddleware.
In the case of Redux, middleware is added to the store as a pipeline, and each
middleware in the pipeline can access the store, the next middleware in the pipeline,
and the action being dispatched. When an action is dispatched from the component,
it first passes through the middleware pipeline before reaching the reducer. Each
middleware in the pipeline has the option to modify the action, dispatch additional
actions, or perform other logic before passing it on to the next middleware using the
next pointer. The concept of closure allows the middleware to access the Redux
store and the next function even after the middleware function has completed
execution.

It is important to note that every middleware in the pipeline should call the next
function with the action as its argument to pass it along to the next middleware. This
ensures that all middleware in the pipeline can process the action before it reaches
the reducer.

<img src="../images/redux-middleware.png" alt="Redux Middleware" width="600" height="auto">

To solve the problem of logging every action, we can create a custom middleware
that logs the action before passing it on to the next middleware. To use the
middleware, we can add it to the middleware array in the Redux store.

### redux/middlewares/loggerMiddleware.js

Integrated a custom Redux middleware to centrally log every dispatched action and the updated state, improving debugging and visibility of state changes.

```jsx
export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      //log actions
      console.log("[LOG]: " + action.type + " " + new Date().toString());

      // call next middleware in pipeline
      const result = next(action);

      // log the modified state of app
      console.log(store.getState());
      return result;
    };
  };
};
```

Added a custom logger middleware.

- Logging dispatched actions
  - Prints action type with timestamp
  - Helps track user interactions
- Logging updated state
  - Shows latest store state after reducer execution
- Maintaining middleware chain
  - Uses `next(action)` and returns result
  - Ensures proper flow of dispatch

### redux/store.js

```diff
...
 import { configureStore } from "@reduxjs/toolkit";
 import { notificationReducer } from "./reducers/notificationReducer";
+import { loggerMiddleware } from "./middlewares/loggerMiddleware";

...

 export const store = configureStore({
   reducer: {
     todoReducer,
     noteReducer,
     notificationReducer,
   },
+  middleware: (getDefaultMiddleware) =>
+    getDefaultMiddleware().concat(loggerMiddleware),
 });
```

Configured store to use logger middleware.

- Adding custom middleware
  - Imported `loggerMiddleware` into store
- Using `getDefaultMiddleware`
  - Preserves default RTK middleware
  - Extends with custom logger
- Centralized logging
  - Removes need for manual `console.log` in components

NOTE: Commented out all manual `console.log` statements from Todo components after integrating Redux logger middleware. Logging is now handled centrally through middleware, which automatically captures actions and state changes across Todo, Notes, and Notification (including reset), ensuring consistent and cleaner debugging throughout the application.

#### 🖥️ What You See in Browser:

<img src="../images/logger-middleware1.png" alt="Logger Middleware" width="700" height="auto">

<img src="../images/logger-middleware2.png" alt="Logger Middleware" width="700" height="auto">
