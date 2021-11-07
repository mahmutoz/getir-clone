function Cards(props) {
  return (
    <div className="grid grid-cols-3 mt-8 gap-x-4">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg pt-14 px-4 pb-10 text-center">
        <img
          src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
          alt="image_1"
        />
        <h4 className="text-lg text-primary-brand-color font-semibold mt-6">
          Her siparişinize bir kampanya
        </h4>
        <p className="mt-2 text-gray-500 text-sm">
          Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col bg-white rounded-lg pt-14 px-4 pb-10 text-center">
        <img
          src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
          alt="image_2"
        />
        <h4 className="text-lg text-primary-brand-color font-semibold mt-6">
          Dakikalar içinde kapınızda
        </h4>
        <p className="mt-2 text-gray-500 text-sm">
          Getir’le siparişiniz dakikalar içinde kapınıza gelir.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col bg-white rounded-lg pt-14 px-4 pb-10 text-center">
        <img
          src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
          alt="image_3"
        />
        <h4 className="text-lg text-primary-brand-color font-semibold mt-6">
          Binlerce çeşit mutluluk
        </h4>
        <p className="mt-2 text-gray-500 text-sm">
          Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default Cards;
