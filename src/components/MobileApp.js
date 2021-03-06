function MobileApp(props) {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-mobile-background bg-primary-brand-color md:rounded-lg pt-6">
      <div className="flex flex-col md:justify-center items-center md:items-baseline mb-4 md:mb-0 md:ml-12 text-center md:text-left">
        <h2 className="text-white text-[26px] font-bold">Getir'i indirin!</h2>
        <p className="text-white mt-3 max-w-sm font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
        </p>
        <div className="flex md:flex-row flex-wrap md:flex-nowrap gap-2 pt-8 justify-center">
          <a
            className="hover:scale-[0.97] transition-all"
            href="https://itunes.apple.com/app/id995280265"
          >
            <img
              width="160"
              height="100%"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt="app store"
            />
          </a>
          <a
            className="hover:scale-[0.97] transition-all"
            href="https://itunes.apple.com/app/id995280265"
          >
            <img
              width="160"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt="app store"
            />
          </a>
          <a
            className="hover:scale-[0.97] transition-all"
            href="https://itunes.apple.com/app/id995280265"
          >
            <img
              width="160"
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt="app store"
            />
          </a>
        </div>
      </div>
      <figure className="hidden md:flex mt-4 md:mt-0 justify-end">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt="mobile images"
          width="605"
          height="288"
        />
      </figure>
    </div>
  );
}

export default MobileApp;
