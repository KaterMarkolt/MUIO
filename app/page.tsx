'use client';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

type Tier = {
  id: string;
  title: string;
  color: string;
};

type Item = {
  id: string;
  title: string;
};

const initialTiers: Tier[] = [
  { id: 'legend', title: 'ЛЕГЕНДА', color: '#E5C07B' },
  { id: 'good', title: 'ХОРОШЕЕ КИНО', color: '#88C0A7' },
  { id: 'once', title: 'НА ОДИН РАЗ', color: '#A8A8FF' },
  { id: 'neutral', title: 'ПОСМОТРЕТЬ и ЗАБЫТЬ', color: '#CCCCCC' },
  { id: 'meme', title: 'РОФЛО-КАЛ', color: '#B07080' },
  { id: 'waste', title: 'ПОТРАЧЕННОГО ВРЕМЕНИ ЖАЛЬ', color: '#4B4B4B' },
];

const initialItems: Record<string, Item[]> = {
  legend: [{ id: '1', title: 'Интерстеллар' }],
  good: [{ id: '2', title: 'Начало' }],
  once: [],
  neutral: [],
  meme: [],
  waste: [],
};

export default function Home() {
  const [items, setItems] = useState(initialItems);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromColumn = Object.keys(items).find((key) =>
      items[key].some((item) => item.id === active.id)
    );
    const toColumn = over.data.current?.column;

    if (!fromColumn || !toColumn || fromColumn === toColumn) return;

    const movedItem = items[fromColumn].find((item) => item.id === active.id)!;

    setItems((prev) => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter((item) => item.id !== active.id),
      [toColumn]: [...prev[toColumn], movedItem],
    }));
  }

  return (
    <main className="p-4 overflow-x-auto">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex gap-4 min-w-max">
          {initialTiers.map((tier) => (
            <section
              key={tier.id}
              className="rounded-xl p-4 text-white w-[250px] flex-shrink-0"
              style={{ backgroundColor: tier.color }}
            >
              <h2 className="text-xl font-bold text-center">{tier.title}</h2>
              <SortableContext items={items[tier.id]} strategy={verticalListSortingStrategy}>
                <div className="min-h-[120px] mt-2 space-y-2">
                  {items[tier.id].map((item) => (
                    <DraggableItem key={item.id} id={item.id} title={item.title} column={tier.id} />
                  ))}
                </div>
              </SortableContext>
            </section>
          ))}
        </div>
      </DndContext>
    </main>
  );
}

function DraggableItem({ id, title, column }: { id: string; title: string; column: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id, data: { column } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-2 rounded bg-white text-black text-sm font-medium cursor-grab shadow"
    >
      🎬 {title}
    </div>
  );
}
