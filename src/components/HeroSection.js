import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';

function HeroSection(props) {
  const [selected, setSelected] = useState('TR');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  };

  return (
    <div className="relative h-auto before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
            alt="slider-1"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="slider-2"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="slider-3"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
            alt="slider-4"
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="getir-rounded"
            width="180"
            height="180"
            viewBox="0 0"
          />
          <h1 className="text-white text-4xl leading-10 tracking-tighter w-[350px] mt-10 mb-1 font-semibold">
            Dakikalar içinde kapınızda
          </h1>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h3 className="text-center mb-4 font-semibold text-primary-brand-color">
            Giriş yap veya kayıt ol
          </h3>
          <div className="flex align-center gap-x-2 justify-between">
            <ReactFlagsSelect
              countries={['TR', 'GB', 'FR']}
              customLabels={{
                TR: { secondary: '+90' },
                GB: { secondary: '+44' },
                FR: { secondary: '+44' },
              }}
              showOptionLabel={true}
              selected={selected}
              onSelect={(TR) => setSelected(TR)}
              className="menu-flags"
              tabIndex="-1"
            />
            <label className="relative flex-1 group cursor-text">
              <input
                required
                className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer"
                type="text"
              />
              <span className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="w-full h-12 mt-4 text-sm text-primary-brand-color bg-brand-yellow font-semibold transition-all rounded-lg hover:bg-primary-brand-color hover:text-brand-yellow">
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
