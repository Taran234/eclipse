import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center px-10 py-16 bg-white max-md:px-5">

      {/* Header */}
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-light text-black">
          Request an <span className="text-orange-400">Appointment</span>
        </h1>
      </div>



      {/* Form Section */}
      <div className="text-center mt-16 w-full max-w-4xl">
        <form className="flex flex-col gap-5 mt-6">
          <div className="flex flex-col md:flex-row gap-5">
            <input type="text" placeholder="First Name" className="flex-1 p-3 border" />
            <input type="text" placeholder="Last Name" className="flex-1 p-3 border" />
          </div>
          <input type="email" placeholder="Email" className="p-3 border" />
          <div className="flex flex-col md:flex-row gap-5">
            <input type="text" placeholder="Phone" className="flex-1 p-3 border" />
            <input type="text" placeholder="Zip Code" className="flex-1 p-3 border" />
          </div>
          <textarea placeholder="Message" className="p-3 border h-24"></textarea>
          <button className="mt-8 px-6 py-3 text-black bg-gray-200 uppercase">Send Us a Message!</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
