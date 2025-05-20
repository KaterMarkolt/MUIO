export default function Home() {
  const tiers = [
    { title: 'ЛЕГЕНДА', color: '#E5C07B' },
    { title: 'ХОРОШЕЕ КИНО', color: '#88C0A7' },
    { title: 'НА ОДИН РАЗ', color: '#A8A8FF' },
    { title: 'ПОСМОТРЕТЬ и ЗАБЫТЬ', color: '#CCCCCC' },
    { title: 'РОФЛО-КАЛ', color: '#B07080' },
    { title: 'ПОТРАЧЕННОГО ВРЕМЕНИ ЖАЛЬ', color: '#4B4B4B' },
  ];

  return (
    <main className="p-4 space-y-4">
      {tiers.map((tier) => (
        <section
          key={tier.title}
          className="rounded-xl p-4 text-white"
          style={{ backgroundColor: tier.color }}
        >
          <h2 className="text-xl font-bold">{tier.title}</h2>
          <div className="min-h-[100px] mt-2 border border-white border-dashed rounded-md flex items-center justify-center opacity-60">
            {/* В будущем сюда будут добавляться фильмы */}
            <span>Пока пусто</span>
          </div>
        </section>
      ))}
    </main>
  );
}
