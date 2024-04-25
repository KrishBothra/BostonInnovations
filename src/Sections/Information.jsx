import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import irving from "./Assets/bostonInnovationIrving.jpg"
import doug from "./Assets/DougRett.jpeg"
import Slider from "react-slick";

const InfoCard = ({ title, description, imageUrl }) => {
  return (
    <div className="w-96 h-90  rounded-lg overflow-hidden shadow-lg mx-6  flex flex-col">
      <div className="p-4 flex-1 flex flex-col ">

        <div className="">
          <img
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt="Card image"
          />
        </div>
        <div>
          <div className="flex items-center justify-center font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};



function Information() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: false,
    centerMode: true,
    className: "",
    centerPadding: "40%", // Adjust this value to change the spacing
    prevArrow: null,
    nextArrow: null
  };

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Texas_A%26M_University_logo.svg/2492px-Texas_A%26M_University_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Boston_University_seal.svg/1200px-Boston_University_seal.svg.png',
    'https://seeklogo.com/images/T/tufts-university-logo-C22B1DB618-seeklogo.com.png',
    'https://cdn.freebiesupply.com/images/large/2x/mit-logo-transparent.png',

    // Add more image URLs as needed
  ];

  return (
    <div className="pt-10">
      <div className="mt-5 pt-10 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-black text-4xl md:text-5xl lg:text-6xl ">
          Information
        </h1>
      </div>

      <div className="relative overflow-hidden mt-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold mb-5 text-center">
          Our Company Leadership:
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-20">


          <div className="flex flex-wrap justify-center">
            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-90">
                  <img
                    className="w-full h-full object-cover rounded"
                    src="https://media.licdn.com/dms/image/C4E03AQGSHfdlSPVP5Q/profile-displayphoto-shrink_800_800/0/1585400318784?e=2147483647&v=beta&t=f2gyP0_iXgmhoUM7uQsPYiBySbbU5vwGZTOrWUuy1Ew"
                    alt="Card image"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="font-bold text-xl mb-2">Dr. James Hillis</div>
                  <p className="text-gray-700 text-base">Director of Neurological Clinical Operations</p>
                  <p className="text-gray-700 text-base">Digital Clinical Research and Artificial Intelligence</p>
                  <p className="text-gray-700 text-base mb-4">Organization at Mass General Brigham</p>
                </div>
              </div>
            </div>

            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-90">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={irving}
                    alt="Card image"
                  />
                </div>
                <div className="h-20">
                  <p className="text-gray-500 text-base">Founder & CEO</p>
                  <div className="font-bold text-xl mb-2">Nicholas Irving</div>
                  <p className="text-gray-700 text-base">McKinsey & Company Intern</p>
                  <p className="text-gray-700 text-base mb-4">Harvard & MIT program alum</p>
                </div>
              </div>
            </div>

            <div className="w-96 rounded-lg overflow-hidden shadow-lg mx-6 flex flex-col">
              <div className="p-4 flex-1 flex flex-col">
                <div className="h-50">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={doug}
                    alt="Card image"
                  />
                </div>
                <div className="h-40">
                  <p className="text-gray-500 text-base">Board of Advisors</p>
                  <div className="font-bold text-xl mb-2">Dr. Doug Rett</div>
                  <p className="text-gray-700 text-base">Chief of Optometry</p>
                  <p className="text-gray-700 text-base mb-4">Veteran Affairs New England Region</p>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>




      {/* className="bg-cyan-600" */}
      <div class="relative overflow-hidden" >
        <h2 class="flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl text-black font-semibold">
          Colleges with partnered student researchers:
        </h2>
        <div class=" px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <Slider {...settings} >
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center w-full h-full">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="max-w-full max-h-64 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>



      <div id="new" className="h-auto">
        <div class="overflow-hidden bg-white h-auto">
          <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">


            <div class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 h-auto">
              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Projects
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  4+
                </p>
              </div>

              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Volunteers
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  17+
                </p>
              </div>

              <div>
                <h4 class="text-lg sm:text-xl font-semibold text-black">
                  Partnered Organizations
                </h4>
                <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-800">
                  6+
                </p>
              </div>
            </div>

            <div
              class="absolute bottom-0 right-0 transform lg:translate-x-32"
              aria-hidden="true"
            >
              <svg
                class="w-40 h-auto sm:w-72"
                width="1115"
                height="636"
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                  fill="currentColor"
                  class="fill-blue-300"
                />
                <path
                  d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                  fill="currentColor"
                  class="fill-blue-500"
                />
                <path
                  d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                  fill="currentColor"
                  class="fill-blue-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Information;
