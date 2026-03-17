# Getting Started with Redux

## Issues with Prop Drilling

Prop drilling is a common problem in React applications where data is passed down
through multiple layers of components via props. Prop drilling can lead to several
issues:

1. **Storage Issue**: When large amounts of data is passed down through many
   layers of components via props, It can lead to issues with data storage and
   retrieval, as well as code maintainability and performance.
2. **Predictability of data**: Prop drilling can also make it difficult to predict where
   data comes from and how it will be used. It can be difficult to keep track of
   where the data is being used and where it is being modified. This can lead to
   issues with data consistency and can make it difficult to debug issues.
3. **Flow of Data**: Prop drilling can also make it difficult to pass data back up the
   component hierarchy.
4. **Data from multiple sources**: In complex applications, data may come from
   multiple sources, such as APIs or external services. Prop drilling can make it
   difficult to manage data and adds complexity to the application.

## State Management

State management is a way to facilitate communication and sharing of data across
components. State management libraries are tools used to manage and organize the
state of an application predictably and efficiently. These libraries provide a set of
rules and techniques for storing, retrieving, and updating application states.
Advantages of using state management libraries are:

1. **Centralized state**: State management libraries typically use a centralized
   store to manage the application state. This store is often implemented as a
   JavaScript object that can be accessed and modified by components
   throughout the application.
2. **Unidirectional data flow**: Data flows in a single direction in state
   management libraries, from the store to components. Components can
   update the store, but they cannot update other components directly.
3. **Predictable state updates**: State management libraries provide a set of rules
   for updating the state, which helps to ensure that state changes are
   predictable and consistent across the application.
4. **Immutable state**: Many state management libraries encourage the use of
   immutable data structures, which can help to prevent unintended side effects
   and make state updates more predictable.

   <img src="./images/state-management.png" alt="State Management" width="600" height="auto">

## Context API

Context API is a feature in React that provides a way to pass data through the
component tree without having to pass props down manually at every level. It allows
you to create a global state that can be accessed and modified by any component in
the tree without the need for prop drilling. Context API can be useful for managing
states in cases where a small amount of data needs to be shared across multiple
components, but is not ideal for larger and more complex state management needs.

### Limitations

- **Overuse of context**: Overusing context can lead to a complex and
  difficult-to-manage application. Context should be used sparingly and only for
  data that needs to be shared across multiple components.
- **Designed for static content**: Context is designed for passing static data
  through the component tree, so it may not be the best choice for managing a
  dynamic state that changes frequently.
- **Re-renders the Context Consumers**: Whenever the value of the context
  changes, all the components that consume that context will re-render. This
  can lead to performance issues if the context value changes frequently.
  - **Performance**: Context can cause performance issues if the context value is
    deeply nested and needs to be updated frequently.
- **Difficult to debug**: When an issue arises, debugging can be difficult since the
  data flow is not always clear. It can be difficult to trace where data is being
  passed and where it is being modified.
  - **Difficult to extend and scale**: As an application grows in size and
    complexity, context can become difficult to manage and maintain.
