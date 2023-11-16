import React, { useContext, useEffect } from "react";
import { EndpointContext } from "./../context/EndpointContext";


export const ContactScreen = () =>  {
    // Usar el hook useContext para acceder al contexto
    const { endpoint } = useContext(EndpointContext);
    const { store, actions } = endpoint;


    
    //actions.exampleFunction();

    useEffect(()=>{
      console.log(store.demo);
      actions.starwars();
    },[])



    return (
      <>
       

       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
      alt="Description for image 1"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
      alt="Description for image 2"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
      alt="Description for image 3"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
      alt="Description for image 4"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
      alt="Description for image 5"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
      alt="Description for image 6"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
      alt="Description for image 7"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
      alt="Description for image 8"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
      alt="Description for image 9"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
      alt="Description for image 10"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
      alt="Description for image 11"
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
      alt="Description for image 12"
    />
  </div>
</div>

        
      </>
    )
  }
  