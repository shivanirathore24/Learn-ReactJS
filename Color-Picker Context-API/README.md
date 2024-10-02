## Context API

### Implementing the Context

1. Created Context 'context.js' ->
    - In React, createContext() is used to create a context object that allows you to share data (like color values) across components without passing props manually at every level.
    - Here, colorContext is a context object that can hold color-related data, which can be accessed by any component within its provider. You can wrap components with colorContext.Provider to pass down color values, and other components can consume those values using useContext(colorContext). This is useful for managing shared state, like themes or global configurations, across a component tree.

2. In 'ParentComponent.jsx' -> 
    - The colorContext.Provider is used to wrap the ChildComponent. This provides the context value ('red' in this case) to the ChildComponent and any other components within the provider.
    - colorContext.Provider allows you to pass 'red' as the current value of the context, making it accessible to any component that consumes colorContext using useContext().

This approach helps manage the color value centrally via context, instead of passing it down as props directly.