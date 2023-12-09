import TopNav from "./components/TopNav";
import Form from './components/Form'
import Canvas from "./components/Canvas";

function App() {
  // const [count, setCount] = useState(0);


  return (
    <>
      <TopNav />
      <div className="flex max-w-screen-xl w-full mx-auto mt-[10%]">
      <Canvas />
      <Form/>
      </div>
    </>
  );
}

export default App;
