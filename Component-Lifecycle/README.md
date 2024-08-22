## Components Lifecycle Methods

### Lifecycle

Lifecycle is the series of stages through which a component passes from the
beginning of its life until its death. - life of the React component starts when it is
born ( Created/Mounted) and ends when it is destroyed (Unmounted).

#### Different Phases of a Lifecycle

1. Different Phases of a component lifecycle are: - Mounting: When a component is being created and inserted into the DOM. - Updating: When a Component is being re-rendered due to any updates
   made to its state or props. - Unmounting: When it is destroyed/ removed from the DOM. - Error Handling: When there is an error during rendering.
2. During the lifecycle of a component, certain methods are called at each phase where
   we can execute some logic or perform a side-effect. - Side effects are actions that are not predictable because they are actions that are
   performed with the "outside world." - For example: Using Browser APIs like localStorage, using the native DOM methods
   instead of the ReactDOM, fetching the data from an API, and setting timeouts and
   intervals

### Mounting Phase

These methods are called in the following sequence when an instance of a
component is being created:

1. constructor()
2. static getDerivedStateFromProps()
3. render()
4. componentDidMount()

#### Constructor

1. A special function that will get called whenever a new component is created.
2. It can be used to initialize the state and bind the event handlers.
3. This is the only place where the state can be modified directly. Everywhere
   else state should be updated using the setState function (used to update the
   state of a component).
4. Avoid introducing any side effects/subscriptions in the constructor.

#### static getDerivedStateFromProps

1. It is invoked right before the render function. This method is invoked in both
   the mounting and updating phases.
2. This method exists for rare use cases where the state depends on changes in
   the props over time.If there is no change in state, then this method returns the
   null value.
3. It is a static method that does not have any access to this keyword.
4. Example: It will return an object to update the state. if the props.value is equal to state.counter
   then it will return a null value

#### render()

1. This is the only required method in the class component. render() executes
   during both the mounting and updating phase of the component's lifecycle.
2. It is used to render elements to the DOM by returning some JSX.
3. - render() method must be a pure function, meaning it should not modify
     the component's state, as when the state gets updated, the render method
     gets automatically called, which could lead to infinite looping.
4. render() will not be invoked if shouldComponentUpdate() returns false.
5. Example: It returns JSX to render your UI and returns null value if there is nothing to render
   inside the component.

#### componentDidMount

1. It is invoked after a component is mounted. (initially renders on the screen).
2. This method is a good place to handle side effects like setting up
   subscriptions and loading data from a remote endpoint.
3. You can also use the setState function in this method to update the state.
4. Example: When the state gets updated inside this method, it causes another rendering just
   before the browser updates the UI.

### Mouting Phase: setState()

1. We shouldn't call setState in the constructor because the component isn't fully initialized yet. Instead, directly assign the initial state to this.state. Using setState here is redundant and can cause issues since the component hasn't mounted, so there's no need for re-rendering.
2. Calling setState inside the render method creates an infinite loop. This happens because setState triggers a re-render, and since it's being called within render, the component keeps re-rendering endlessly.
3. We should not use setState inside getDerivedStateFromProps because it's a static method and doesn't have access to this. Instead, return an object representing the updated state if needed, or return null if no state update is required.
4. You should use setState in the following places:
   - Event Handlers: To update the state in response to user actions (e.g., button clicks).
   - Lifecycle Methods: Such as componentDidMount, componentDidUpdate, or in asynchronous callbacks, to update the state after the component has mounted or updated.
   - Avoid using setState in the constructor or render method to prevent issues like unnecessary re-renders or infinite loops.

In React, the lifecycle methods of parent and child components are called in a specific order when the components are mounted (i.e., added to the DOM). Here's a short explanation of how the functions are called in a parent (ComponentA) and a child (ComponentB) component:
Order of Execution:

1. Parent Constructor (ComponentA):
   -The constructor of the parent component (ComponentA) is called first.
   - It initializes the state and logs a message.
2. Parent getDerivedStateFromProps (ComponentA):
   - This static method is called to update the state based on props.
   - Since ComponentA doesn't receive props here, it logs a message and returns null.
3. Parent render (ComponentA):
   - render method of the parent is called, which determines the UI.
   - It renders its own content and the child component (ComponentB).
4. Child Constructor (ComponentB):
   - After the parent render method calls the child component, the constructor of the child (ComponentB) is executed.
   - It initializes the state for ComponentB and logs a message.
5. Child getDerivedStateFromProps (ComponentB):
   - child's getDerivedStateFromProps method is called, just like in the parent.
   - It logs a message and returns null.
6. Child render (ComponentB):
   - render method of the child is called, rendering its content (e.g., a list of usernames).
7. Child componentDidMount (ComponentB):
   - Once the child component is fully mounted, the componentDidMount method is called.
   - This method is used for side effects like fetching data, which is done here.
8. Parent componentDidMount (ComponentA):
   - Finally, the parent’s componentDidMount method is called after the child is fully mounted.
   - This is where any post-mount operations in the parent can be performed.

### Causing Side-Effects

A side effect is any operation that interacts with the outside world (like network requests, timers, or directly manipulating the DOM) and can change the component’s state or behavior.

#### How fetch Causes a Side Effect:

In componentDidMount -> The fetch API is called to get user data after the component has mounted.

1. Asynchronous Operation:
   - fetch makes an HTTP request to an external server. This operation doesn’t happen instantaneously; it involves waiting for a response from the server, which is asynchronous.
2. State Update:
   - Once the fetch request completes, it converts the response to JSON and then updates the component’s state with this.setState({data}). This state update causes the component to re-render with the new data.
3. Lifecycle Method:
   - componentDidMount is a lifecycle method specifically for initiating side effects like data fetching. React guarantees that the component is fully mounted before componentDidMount runs, making it a safe place to perform operations that require access to the DOM or external data.

In render: The fetched data (this.state.data) is mapped over to generate a list of usernames, which are displayed in the UI.

### Updating Phase
Changes to props or state can cause an update. These methods are called in the
following order when a component is being re-rendered:
   - static getDerivedStateFromProps()
   - shouldComponentUpdate()
   - render()
   - getSnapshotBeforeUpdate()
   - componentDidUpdate()
1. shouldComponentUpdate()
   - shouldComponentUpdate() is called as soon as static
getDerivedStateFromProps() the method is invoked.
   - In the shouldComponentUpdate() method, you can return a Boolean value that
controls whether the component gets rerendered upon a change in
state/props. It defaults to true.
   - This method only exists as a performance optimization. Do not rely on it to
“prevent” a rendering, as this can lead to bugs.
   - Example:
It returns the boolean value true or false if you want to re-render or not
2. getSnapshotBeforeUpdate()
   - getSnapshotBeforeUpdate() is invoked just after the render() method.
   - It stores the previous values of the state after the DOM is updated, meaning
that even after the update, you can check what the values were before the
update. Any value returned by this lifecycle method will be passed as a
parameter to componentDidUpdate().
   - Most likely, you’ll rarely reach for this lifecycle method. But it comes in handy
when you need to grab information from the DOM (and potentially change it)
just after an update is made, like a chat thread that needs to handle the scroll
position.
   - A snapshot value (or null) should be returned.
3. componentDidUpdate()
   - componentDidUpdate() is invoked immediately after updating occurs.
   - It can operate on the DOM when the component has been updated.
   - This is also a good place to do network requests as long as you compare the
current props to previous props (e.g., a network request may not be
necessary if the props have not changed).
   - It is similar to componentDidMount() as you can use setState() or fetch API
call but you have to mention a condition to check if the previous state or props
has changed or not.

The updated code includes a state object and a handleIncrease method that modifies the state by increasing the count value. This addition triggers the component's update lifecycle methods whenever the state changes.
   - handleIncrease -> is triggered by clicking the "Increase" button, which calls setState. Calling setState triggers a re-render, which invokes the component's update lifecycle methods.
   - getDerivedStateFromProps -> is called before every render, even after state changes.
   - render method -> re-renders the component to reflect the updated count.
   - getSnapshotBeforeUpdate -> is called right before the DOM updates. Used to capture information from the DOM (though you’re returning null).
   - componentDidUpdate -> Called after the DOM has been updated to reflect the new state.
   
This sequence repeats every time you click the "Increase" button.