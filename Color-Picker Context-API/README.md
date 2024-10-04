## Context API

### Implementing the Context

1. Created Context 'context.js' ->
    - In React, createContext() is used to create a context object that allows you to share data (like color values) across components without passing props manually at every level.
    - Here, colorContext is a context object that can hold color-related data, which can be accessed by any component within its provider. You can wrap components with colorContext.Provider to pass down color values, and other components can consume those values using useContext(colorContext). This is useful for managing shared state, like themes or global configurations, across a component tree.

2. In 'ParentComponent.jsx' -> 
    - The colorContext.Provider is used to wrap the ChildComponent. This provides the context value ('red' in this case) to the ChildComponent and any other components within the provider.
    - colorContext.Provider allows you to pass 'red' as the current value of the context, making it accessible to any component that consumes colorContext using useContext().

This approach helps manage the color value centrally via context, instead of passing it down as props directly.

### Getting the value -> useContext()
In 'GrandChildComponent.jsx' ->
1. useContext Hook:
    - The useContext hook is used to consume the value from the colorContext that is provided by a higher-level component (typically using Context.Provider).
    - This means that value now holds whatever data is being passed down through colorContext. In this case, it is likely the color value.
2. Fix - Moving useContext inside the curly braces:
    - In the previous version of the code, the context was not correctly accessed, as the useContext hook was outside of the curly braces.
    - By moving useContext(colorContext) inside the component, the value is properly retrieved and logged using console.log(value).

Now, the component can dynamically access the context-provided color and use it appropriately in the JSX (though color itself seems to be missing in the return statement—this could be a typo that should also be corrected).

In 'ParentComponent.jsx' ->
1. In the updated code, the colorContext.Provider now uses the dynamic color state as its value:
`<colorContext.Provider value={color}>`
2. This allows the selected color from the input to be passed down dynamically to the ChildComponent, instead of the hardcoded 'red'. Now, the color changes based on user input.

### Getting the value - Consumer
1.  In 'ParentComponent.jsx':
    - Initially, colorContext.Provider was passing only the color value. Now, it passes an object containing both color and setColor. This allows the child components to access and modify the color.
    `<colorContext.Provider value= {{color, setColor}}>`

2. In 'GrandChildComponent.jsx':
    - In the updated code, useContext(colorContext) now accesses the color and setColor properties.
    - In the colorContext.Consumer, value.color is used instead of just value because now the context provides an object, not a simple value.
`{(value) => <p style={{ color: value.color }}>Color: {value.color}</p>}`