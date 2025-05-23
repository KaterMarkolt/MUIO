export default function Home() {
  const tiers = [
    { title: 'ЛЕГЕНДА', color: '#E5C07B' },
    { title: 'ХОРОШЕЕ КИНО', color: '#88C0A7' },
    { title: 'НА ОДИН РАЗ', color: '#A8A8FF' },
    { title: 'ПОСМОТРЕТЬ и ЗАБЫТЬ', color: '#CCCCCC' },
    { title: 'РОФЛО-КАЛ', color: '#B07080' },
    { title: 'ПОТРАЧЕННОГО ВРЕМЕНИ ЖАЛЬ', color: '#4B4B4B' },
  ];

  const placeholderMovies = [
    { title: 'Фильм 1' },
    { title: 'Фильм 2' },
    { title: 'Фильм 3' },
  ];

  return (
    <main className="p-4 overflow-x-auto">
      <div className="grid grid-cols-6 gap-4 min-w-max">
        {tiers.map((tier) => (
          <section
            key={tier.title}
            className="rounded-xl p-4 text-white flex flex-col items-center"
            style={{ backgroundColor: tier.color }}
          >
            <h2 className="text-xl font-bold text-center mb-2">{tier.title}</h2>
            <div className="flex flex-col gap-4 w-full items-center">
              {placeholderMovies.map((movie) => (
                <div
                  key={movie.title}
                  className="w-full bg-black/20 p-2 rounded-lg shadow-md hover:bg-black/30 transition"
                >
                  <div className="aspect-[2/3] bg-white/20 rounded mb-2" />
                  <div className="text-center text-sm font-semibold flex items-center justify-center gap-1">
                    🎬 {movie.title}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
