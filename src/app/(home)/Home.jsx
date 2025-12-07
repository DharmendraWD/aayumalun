
import React from 'react';
import Head from 'next/head';
import RoundedBgBtn from '@/components/Buttons/RoundedBgBtn';
import RoundedNotBGBtn from '@/components/Buttons/RoundedNotBGBtn';
import img1 from "../../../public/img/proj/11.png";
import img2 from "../../../public/img/proj/11.png";
import img3 from "../../../public/img/proj/1.jpeg";
import img4 from "../../../public/img/proj/2.jpeg";
import img5 from "../../../public/img/proj/3.jpeg";
import img6 from "../../../public/img/proj/4.jpeg";


const ImageGridContent = async () => {
  
  
  const imagePaths = {
    img1: img1, 
    img2:img2,
    img3:img3,
    img4:img4,
    img5:img5,
    img6: img6
  };
  
return (
  <div data-aos="zoom-in-up" className="grid  grid-cols-2 grid-rows-3 gap-3 p-4 md:p-6 lg:p-8">
           {/* ... (Image elements are unchanged) ... */}
        {/* Image 1: Top Left - Span two rows */}
        <div className="row-span-1 aspect-[4/5] overflow-hidden rounded-xl shadow-2xl max-h-[300px]  w-[100%]">
            <img src={imagePaths.img5.src} alt="Hero scrolling images" className="w-full  h-full object-cover  transition-transform duration-500 hover:scale-105"/>
        </div>

        <div className="col-span-1 aspect-square overflow-hidden rounded-xl shadow-2xl  max-h-[300px]  w-[100%]">
            <img src={imagePaths.img2.src} alt="Hero scrolling images" className="w-full  h-full object-cover transition-transform duration-500 hover:scale-105"/>
        </div>

        {/* Image 3: Middle Right - Span one row */}
        <div className="aspect-[4/4] overflow-hidden rounded-xl shadow-2xl max-h-[300px]  w-[100%] ">
            <img src={imagePaths.img3.src} alt="Hero scrolling images" className="w-full  h-full object-cover  transition-transform duration-500 hover:scale-105"/>
        </div>
        
        {/* Image 4 & 5: Bottom Row - Full color */}
        <div className="col-span-1 aspect-square overflow-hidden rounded-xl shadow-2xl  max-h-[300px] w-[100%] ">
            <img src={imagePaths.img4.src} alt="Hero scrolling images" className="w-full  h-full object-cover transition-transform duration-500 hover:scale-105"/>
        </div>
        <div className="col-span-1 aspect-square overflow-hidden rounded-xl shadow-2xl max-h-[300px]  ">
            <img src={imagePaths.img5.src} alt="Hero scrolling images" className="w-full  h-full object-cover transition-transform duration-500 hover:scale-105"/>
        </div>
        <div className=" max-h-[300px]  w-[100%]">
            <img src={imagePaths.img6.src} alt="Hero scrolling images" className="w-full  h-full object-cover transition-transform duration-500 hover:scale-105"/>
        </div>
   
    </div>
)
}


const ScrollingImageGrid = () => {
  const copies = 3; 

  return (
    // Outer container: clips the content
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-full overflow-hidden">
      
      {/* Inner container: scrolls up. Now using the animation style from globals.css. */}
      <div 
        className="absolute inset-0 w-full"
        // Applying the animation property here, referencing the keyframes in globals.css
        style={{ 
          height: `${copies * 100}%`,
          animation: 'scroll-up 10s linear infinite', // 'scroll-up' is now global
        }}
      >
        
        {/* Duplicate the single grid content N times */}
        {[...Array(copies)].map((_, idx) => (
          <ImageGridContent key={idx}/>
        ))}

      </div>
      
      {/* White shadow overlays */}
      <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-white to-transparent opacity-90 z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent opacity-90 z-10 pointer-events-none"></div>

    </div>
  );
};

// Main Hero Section Component
const Home1 = async() => {

 
      

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <section className="bg-white  pt-[120px] md:pt-20 lg:pt-24 max-w-[1400px] mx-auto px-[20px] lg:px-0">
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8">
          
          <div className="flex flex-col justify-center py-8 lg:py-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-black leading-tight">
           Clean energy, unstoppable flow.
            </h1>

            <p data-aos="fade-up" className="mt-8 text-lg sm:text-xl text-gray-600 w-full max-w-full">
          We don’t just construct hydropower structures; we create projects that inspire confidence, stand resilient against the test of time, and deliver reliable, clean energy to the communities that depend on it. Our commitment goes beyond mere construction — we aim to contribute to sustainable development, foster local employment, and ensure that every project benefits both the environment and the people in the surrounding regions. Puwa Khola 1 Hydropower Limited is proud to announce its plan to develop the 21 MW Aayu Malun Khola Hydropower Project in the picturesque Okhaldhunga district, a project that will not only generate electricity but also support regional growth and infrastructure development.
          <br />

For this ambitious endeavor, the company has already secured the necessary construction license from the Department of Electricity Development, reflecting both regulatory approval and trust in our technical expertise. The department officially granted the construction permit to the company on Mangsir 6, 2079 BS, marking a significant milestone in the project’s journey from vision to reality. 
            </p>

            <div className="mt-10 md:flex-row md:gap-1 gap-[10px] flex-col flex space-x-4">
          
<RoundedBgBtn 
  label={"About Us"} 
  link={"#about-us"} 
/>
          <RoundedNotBGBtn 
  label={"Gallary"} 
  link={"#gallery"} 
/>
            </div>
          </div>
          
          <div  className="lg:h-full lg:min-h-[700px]">
            <ScrollingImageGrid/>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home1;