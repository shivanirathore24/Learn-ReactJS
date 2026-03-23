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
            <button
              className={styles["toggle-btn"]}
-             onClick={() => dispatch(actions.toggle(index))}
+             onClick={() => {
+               console.log("[LOG]: Todo - Toggle Action dispatched!");
+               dispatch(actions.toggle(index));
+             }}
            >
              Toggle
            </button>
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
