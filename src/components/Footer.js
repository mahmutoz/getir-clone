function Footer(props) {
  return (
    <div className="bg-white mt-14">
      <div className="container mx-auto py-10">
        <div className="grid grid-flow-col auto-cols-auto gap-6">
          <div>
            <h3 className="text-primary-brand-color text-lg pb-2">
              Getir'i indirin!
            </h3>
            <ul>
              <li className="py-2">
                <a href="https://itunes.apple.com/app/id995280265">
                  <img
                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                    alt="app-1"
                  />
                </a>
              </li>
              <li className="py-2">
                <a href="https://play.google.com/store/apps/details?id=com.getir">
                  <img
                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                    alt="app-2"
                  />
                </a>
              </li>
              <li className="py-2">
                <a href="https://appgallery7.huawei.com/#/app/C100954039">
                  <img
                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                    alt="app-3"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary-brand-color text-lg pb-2">
              Getir'i keşfedin
            </h3>
            <ul>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/hakkimizda/">Hakkımızda</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://apply.workable.com/getir/">Kariyer</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://technology.getir.com/">
                  Teknoloji Kariyerleri
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/iletisim/">İletişim</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/duyuru/">COVID-19 Duyuru</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/sosyal-sorumluluk-projeleri/">
                  Sosyal Sorumluluk Projeleri
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary-brand-color text-lg pb-2">
              Yardıma mı ihtiyacınız var?
            </h3>
            <ul>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/yardim/sss/">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/yardim/kvkk/">
                  Kişisel Verilerin Korunması
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/yardim/gizlilik-politikasi/">
                  Gizlilik Politikası
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/yardim/kullanim-kosullari/">
                  Kullanım Koşulları
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://getir.com/yardim/cerez-politikasi/">
                  Çerez Politikası
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary-brand-color text-lg pb-2">
              İş Ortağımız Olun
            </h3>
            <ul>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://bayi-basvuru.getir.com/">Bayimiz Olun</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://depodukkan.getir.com/">Deponuzu Kiralayın</a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://basvuru.getir.com/restoran/">
                  GetirYemek Restoranı Olun
                </a>
              </li>
              <li className="py-2 text-sm text-gray-600">
                <a href="https://panel.getircarsi.com/form/on-basvuru/">
                  GetirÇarşı İşletmesi Olun
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-self-end">
            <a
              className="inline-block rounded-lg p-4 border border-gray-200 shadow-lg"
              href="https://etbis.eticaret.gov.tr/sitedogrulama/A8C52359B2F14075B6829557FC4306B1"
            >
              <figure>
                <img
                  src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
                  alt="etbis"
                  width="72"
                  height="84"
                />
              </figure>
            </a>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-100 pt-5 mt-5">
          <div className="flex text-[13px] gap-x-5">
            <p>© 2021 Getir</p>
            <a
              href="http://localhost:3000/"
              className="block text-primary-brand-color"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
