import Todos from './components/Todos';
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
      <TodosContextProvider>
          <div className="body__inner">
              <h1 className="title">todos</h1>
              <Todos/>
          </div>
      </TodosContextProvider>
  );
}

export default App;
