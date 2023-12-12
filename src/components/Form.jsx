export default function Form() {

  return (
    <>
      <div className="w-[50%] flex flex-wrap">
        <div className="w-[50%]">
          <span>Name:</span>
          <input type="text" name="" id="" className="m-5 p-1.5 h-12 border" />
        </div>
        <div className="w-[50%]">
          <span>Gender:</span>
          <select name="Gender" className="m-5 p-1.5 h-12 border" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="w-[50%]">
          <span>Add image:</span>
          <input type="image" className="m-5 p-1.5 h-12 border" src="" alt="" />
        </div>
      </div>
    </>
  );
}
