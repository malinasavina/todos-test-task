import Todos from './components/Todos';
import TodosContextProvider from "./store/todos-context";
import classes from './App.module.css';

function App() {
  return (
      <TodosContextProvider>
          <div className={classes.wrapper}>
              <h1 className={classes.title}>todos</h1>
              <Todos/>
          </div>
      </TodosContextProvider>
  );
}

export default App;
