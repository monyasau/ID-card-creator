export default function Form() {

  return (
    <>
      <div className="w-[50%] flex flex-wrap">
        <div className="w-[50%]">
          <span>Name:</span>
          <input type="text" name="" id="" className="w-[70%] m-5 p-1.5 h-12 border" />
        </div>
        <div className="w-[50%]">
          <span>Title:</span>
          <input type="text" name="title" id="" className="w-[70%] m-5 p-1.5 h-12 border" />
        </div>
        <div className="w-[50%]">
          <span>Footer:</span>
          <input type="text" name="" id="" className="w-[70%] m-5 p-1.5 h-12 border" />
        </div>
        <div className="w-[50%]">
          <span>Gender:</span>
          <select name="Gender" className="m-5 w-[70%] p-1.5 h-12 border" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className=" flex items-center">
          <span>image:</span>
          <input type="file"  className="m-5 p-14 border" src="" alt="" />
        </div>
      </div>
    </>
  );
}
