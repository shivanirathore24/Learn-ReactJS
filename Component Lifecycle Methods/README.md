# COMPONENT LIFECYCLE METHODS

## Introduction to Component Lifecycle

### Lifecycle

Lifecycle is the series of stages through which a component passes from the
beginning of its life until its death. The life of the React component starts when it is
born ( Created/Mounted) and ends when it is destroyed (Unmounted).

### Different Phases of a Lifecycle

Different Phases of a component lifecycle are:

- **Mounting:** When a component is being created and inserted into the DOM.
- **Updating:** When a Component is being re-rendered due to any updates
  made to its state or props.
- **Unmounting:** When it is destroyed/ removed from the DOM.
- **Error Handling:** When there is an error during rendering

During the lifecycle of a component, certain methods are called at each phase where
we can execute some logic or perform a side-effect.

<img src="./images/component-lifecycle-methods.png" alt="Component Lifecycle Methods" width="650" height="auto">

### Side effects

Side effects are actions that are not predictable because they are actions that are
performed with the "outside world."

For example: Using Browser APIs like localStorage, using the native DOM methods
instead of the ReactDOM, fetching the data from an API, and setting timeouts and
intervals.

