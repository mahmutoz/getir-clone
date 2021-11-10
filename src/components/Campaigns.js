import { useEffect, useState } from 'react';
import BannersData from '../api/banners.json';
import Title from './UI/SectionTitle';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function PrevBtn({ className, onClick }) {
  return (
    <button
      className={`absolute top-1/2 -left-6 -translate-y-1/2 text-primary-brand-color hover:text-primary-brand-color focus:text-primary-brand-color`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}
function NextBtn({ className, onClick }) {
  return (
    <button
      className={`absolute top-1/2 -right-6 -translate-y-1/2 text-primary-brand-color `}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function Campaigns(props) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(BannersData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3500,
    cssEase: 'linear',
    className: 'banners-slide',
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="md:py-6 order-2 md:order-4">
      <div className="md:container mx-auto">
        <div className="hidden md:block">
          <Title>Kampanyalar</Title>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Slider {...settings}>
            {banners.length &&
              banners.map((data) => (
                <div key={data.id}>
                  <figure className="block md:px-2">
                    <img
                      src={data.image}
                      className="md:rounded-lg"
                      alt={`campaign-${data.id}`}
                    />
                  </figure>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
