import FooterInfoMenu from './UI/FooterInfoMenu';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
import { FiGlobe } from 'react-icons/fi';

function Footer(props) {
  const FooterMenu = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          name: 'Hakkımızda',
          url: 'https://getir.com/hakkimizda/',
        },
        {
          name: 'Kariyer',
          url: 'https://apply.workable.com/getir/',
        },
        {
          name: 'Teknoloji Kariyerleri',
          url: 'https://technology.getir.com/',
        },
        {
          name: 'İletişim',
          url: 'https://getir.com/iletisim/',
        },
        {
          name: 'COVID-19 Duyuru',
          url: 'https://getir.com/duyuru/',
        },
        {
          name: 'Sosyal Sorumluluk Projeleri',
          url: 'https://getir.com/sosyal-sorumluluk-projeleri/',
        },
      ],
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          name: 'Sıkça Sorulan Sorular',
          url: 'https://getir.com/yardim/sss/',
        },
        {
          name: 'Kişisel Verilerin Korunması',
          url: 'https://getir.com/yardim/kvkk/',
        },
        {
          name: 'Gizlilik Politikası',
          url: 'https://getir.com/yardim/gizlilik-politikasi/',
        },
        {
          name: 'Kullanım Koşulları',
          url: 'https://getir.com/yardim/kullanim-kosullari/',
        },
        {
          name: 'Çerez Politikası',
          url: 'https://getir.com/yardim/cerez-politikasi/',
        },
      ],
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          name: 'Bayimiz Olun',
          url: 'https://bayi-basvuru.getir.com/',
        },
        {
          name: 'Deponuzu Kiralayın',
          url: 'https://depodukkan.getir.com/',
        },
        {
          name: 'GetirYemek Restoranı Olun',
          url: 'https://basvuru.getir.com/restoran/',
        },
        {
          name: 'GetirÇarşı İşletmesi Olun',
          url: 'https://panel.getircarsi.com/form/on-basvuru/',
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-14 order-last">
      <div className="container mx-auto pt-10 pb-4">
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
          {FooterMenu.map((menu, index) => (
            <FooterInfoMenu {...menu} key={index} />
          ))}
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
          <div className="flex text-[13px] gap-x-6">
            <p className="text-gray-500 relative before:absolute before:w-[3px] before:h-[3px] before:bg-gray-500 before:rounded-full before:top-1/4 before:-right-3">
              © 2021 Getir
            </p>
            <a
              href="http://localhost:3000/"
              className="block text-primary-brand-color"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-x-2">
              <li>
                <a
                  className="footer-social"
                  href="https://www.facebook.com/KuzeydenSu"
                >
                  <SiFacebook size={20} />
                </a>
              </li>
              <li>
                <a
                  className="footer-social"
                  href="https://twitter.com/kuzeydensu"
                >
                  <SiTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  className="footer-social"
                  href="https://www.instagram.com/kuzeydensu"
                >
                  <SiInstagram size={20} />
                </a>
              </li>
              <li>
                <button className="footer-social border !w-full px-2 border-gray-100">
                  <FiGlobe size={18} />
                  <div className="text-xs ml-2">Türkçe (TR)</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
