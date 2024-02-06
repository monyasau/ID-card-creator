import TopNav from "./components/TopNav";
import Form  from './components/Form'
import Canvas from "./components/Canvas";

function App() {
  // const [count, setCount] = useState(0);


  return (
    <>
      <TopNav />
      <div className="flex max-w-screen-xl w-full items-center mx-auto mt-[10%]">
      <Form/>
        <Canvas/>
      </div>
    </>
  );
}

export default App;
