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
    <main className="p-4 overflow-x-auto scrollbar-thin">
      <div className="flex flex-row gap-4 min-w-max">
        {tiers.map((tier) => (
          <section
            key={tier.title}
            className="rounded-xl p-4 text-white w-[250px] min-h-[400px] flex-shrink-0 flex flex-col"
            style={{ backgroundColor: tier.color }}
          >
            <h2 className="text-xl font-bold text-center mb-2">{tier.title}</h2>
            <div className="flex-1 border border-white border-dashed rounded-md flex items-center justify-center opacity-60">
              <span>Пока пусто</span>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
