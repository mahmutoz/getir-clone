import CardItem from './UI/CardItem';

function Cards(props) {
  const cards = [
    {
      id: '1',
      img: 'https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg',
      title: 'Her siparişinize bir kampanya',
      description:
        'Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
    },
    {
      id: '2',
      img: 'https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg',
      title: 'Dakikalar içinde kapınızda',
      description: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
    },
    {
      id: '3',
      img: 'https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg',
      title: 'Binlerce çeşit mutluluk',
      description:
        'Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 mt-14 gap-4">
      {cards.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Cards;
