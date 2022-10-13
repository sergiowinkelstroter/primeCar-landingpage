export const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#161616] w-full h-full p-4 flex flex-col items-center justify-center text-white text-center relative"
    >
      <h1 className="hidden md:block text-9xl opacity-10 absolute -left-4 top-8">
        contact us
      </h1>
      <div className="flex gap-24 my-24 mx-6 flex-col md:flex-row">
        <div className="flex md:w-[70%] flex-col justify-center items-center md:text-start md:items-start gap-2">
          <h2 className="uppercase text-3xl md:text-6xl font-black">
            contact us
          </h2>
          <p className="text-sm hidden md:block">
            To find out more information about cars and quotes, fill out the
            form on the side or contact us by phone.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-8">
            <input
              className="bg-transparent border-b-2 focus:outline-none pl-2"
              type="name"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b-2 focus:outline-none pl-2"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="bg-transparent border-b-2 focus:outline-none pl-2"
              type="text"
              placeholder="Phone Number"
            />
            <select
              className=" bg-[#161616] border-b-2 focus:outline-none pl-2"
              name=""
              id=""
            >
              <option className="" value="">
                Brasil
              </option>
              <option className="" value="">
                EUA
              </option>
              <option className="" value="">
                Alemanha
              </option>
              <option className="" value="">
                Portugal
              </option>
            </select>
          </div>
          <input
            className="bg-transparent border-b-2 focus:outline-none pl-2 w-full"
            type="text"
            placeholder="Message"
          />
          <button className="text-lg bg-transparent border-2 rounded-md border-white mt-3 w-28 hover:bg-white hover:text-black transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
