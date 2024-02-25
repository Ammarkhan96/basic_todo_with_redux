import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './container/todo';

function App() {
  return (
    <Provider store={store}>
  
        <div>
          <h1 className="mt-8 font-montserrat text-center text-5xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-300">
            <u>Todo with Redux</u></h1>
            <Todo />
            
        </div>
    </Provider>
  );
}

export default App;
