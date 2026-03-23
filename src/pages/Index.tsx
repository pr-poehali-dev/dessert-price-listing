import { useState } from "react";
import Icon from "@/components/ui/icon";

const cakes = [
  {
    id: 1,
    name: "Шоколадный трюфель",
    weight: "1 кг",
    price: 2800,
    tag: "Хит",
    description: "Насыщенный шоколадный бисквит с трюфельным ганашем",
    composition:
      "Тёмный шоколад 72%, сливки 33%, сливочное масло, яйца, мука пшеничная высшего сорта, сахар, ванильный экстракт, соль",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 2,
    name: "Медовик классический",
    weight: "1.2 кг",
    price: 2400,
    tag: "",
    description: "Нежные медовые коржи с заварным кремом",
    composition:
      "Мука, мёд натуральный, яйца, сахар, сода, сливочное масло, молоко, желтки, крахмал картофельный, ванилин",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 3,
    name: "Красный бархат",
    weight: "1.5 кг",
    price: 3200,
    tag: "Новинка",
    description: "Бархатный бисквит с кремом из маскарпоне",
    composition:
      "Мука, какао, кефир, растительное масло, яйца, сахар, сода, краситель пищевой натуральный, маскарпоне, сливки 33%, сахарная пудра",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 4,
    name: "Фисташковый",
    weight: "1.2 кг",
    price: 3600,
    tag: "",
    description: "Нежный фисташковый крем с миндальным дакуазом",
    composition:
      "Фисташковая паста, миндальная мука, яйца, сахар, сливки 33%, белый шоколад, сливочное масло, сахарная пудра",
    allergens: "Глютен, молоко, яйца, орехи (фисташки, миндаль)",
  },
  {
    id: 5,
    name: "Лимонный тарт",
    weight: "900 г",
    price: 2600,
    tag: "",
    description: "Хрустящее песочное тесто с лимонным курдом",
    composition:
      "Мука, сливочное масло, сахарная пудра, яйца, лимонный сок, лимонная цедра, сахар, желатин, сливки 33%",
    allergens: "Глютен, молоко, яйца",
  },
];

const pastries = [
  {
    id: 1,
    name: "Эклер шоколадный",
    weight: "80 г",
    price: 280,
    tag: "Хит",
    description: "Классический французский эклер с шоколадным кремом",
    composition:
      "Мука, вода, сливочное масло, яйца, соль, сахар, молоко, тёмный шоколад 70%, сливки 33%, желтки",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 2,
    name: "Макарон малина",
    weight: "25 г",
    price: 180,
    tag: "",
    description: "Воздушные миндальные меренги с малиновым ганашем",
    composition:
      "Миндальная мука, сахарная пудра, белки яичные, сахар, малиновое пюре, белый шоколад, краситель натуральный",
    allergens: "Яйца, орехи (миндаль)",
  },
  {
    id: 3,
    name: "Тарталетка ягодная",
    weight: "90 г",
    price: 320,
    tag: "",
    description: "Песочная тарталетка с ванильным кремом и свежими ягодами",
    composition:
      "Мука, сливочное масло, сахарная пудра, яйца, молоко, ванильный стручок, желтки, крахмал, сезонные ягоды",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 4,
    name: "Шу с карамелью",
    weight: "70 г",
    price: 260,
    tag: "Новинка",
    description: "Профитроль с солёной карамелью и хрустящим крокантом",
    composition:
      "Мука, вода, масло сливочное, яйца, сливки 33%, сахар, соль морская, миндаль, глюкозный сироп",
    allergens: "Глютен, молоко, яйца, орехи (миндаль)",
  },
  {
    id: 5,
    name: "Канеле бордоский",
    weight: "60 г",
    price: 220,
    tag: "",
    description: "Французская выпечка с ванилью и ромом",
    composition:
      "Молоко, мука, яйца, желтки, сахар, масло сливочное, ваниль натуральная, ром тёмный, пчелиный воск",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 6,
    name: "Мильфёй",
    weight: "100 г",
    price: 350,
    tag: "",
    description: "Слоёное тесто с дипломатным кремом и клубникой",
    composition:
      "Мука, масло сливочное, вода, уксус, соль, молоко, желтки, сахар, крахмал, сливки 33%, ваниль, клубника",
    allergens: "Глютен, молоко, яйца",
  },
];

type Item = {
  id: number;
  name: string;
  weight: string;
  price: number;
  tag: string;
  description: string;
  composition: string;
  allergens: string;
};

function DessertCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-[var(--clr-line)] py-7 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-1.5">
            <h3 className="font-cormorant text-xl font-medium text-[var(--clr-text)] group-hover:text-[var(--clr-accent)] transition-colors duration-200">
              {item.name}
            </h3>
            {item.tag && (
              <span className="text-[10px] font-golos tracking-widest uppercase px-2 py-0.5 bg-[var(--clr-tag-bg)] text-[var(--clr-accent)] border border-[var(--clr-accent)] rounded-sm">
                {item.tag}
              </span>
            )}
          </div>
          <p className="font-golos text-sm text-[var(--clr-muted)] leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="font-cormorant text-2xl font-light text-[var(--clr-text)]">
              {item.price.toLocaleString("ru-RU")} ₽
            </div>
            <div className="font-golos text-xs text-[var(--clr-muted)]">
              {item.weight}
            </div>
          </div>
          <div
            className={`text-[var(--clr-muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <Icon name="ChevronDown" size={16} />
          </div>
        </div>
      </div>

      {open && (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fade-in">
          <div className="bg-[var(--clr-card)] rounded-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="ListChecks" size={14} className="text-[var(--clr-accent)]" />
              <span className="font-golos text-[11px] tracking-widest uppercase text-[var(--clr-muted)]">
                Состав
              </span>
            </div>
            <p className="font-golos text-sm text-[var(--clr-text)] leading-relaxed">
              {item.composition}
            </p>
          </div>
          <div className="bg-[var(--clr-card)] rounded-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="AlertCircle" size={14} className="text-[var(--clr-accent)]" />
              <span className="font-golos text-[11px] tracking-widest uppercase text-[var(--clr-muted)]">
                Аллергены
              </span>
            </div>
            <p className="font-golos text-sm text-[var(--clr-text)] leading-relaxed">
              {item.allergens}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<"cakes" | "pastries">("cakes");
  const items = activeTab === "cakes" ? cakes : pastries;

  return (
    <div className="min-h-screen bg-[var(--clr-bg)]">
      {/* Header */}
      <header className="border-b border-[var(--clr-line)]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-golos text-xs tracking-[0.35em] uppercase text-[var(--clr-muted)] mb-3">
                Кондитерская
              </p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[var(--clr-text)] leading-none">
                Десерты
              </h1>
            </div>
            <img
              src="https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/a722301c-03c8-4bfc-8548-8b1ba726793b.jpg"
              alt="Десерты"
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-sm"
            />
          </div>

          {/* Tabs */}
          <div className="flex mt-8 border border-[var(--clr-line)] rounded-sm w-fit overflow-hidden">
            <button
              onClick={() => setActiveTab("cakes")}
              className={`font-golos text-sm px-7 py-2.5 tracking-wide transition-all duration-200 ${
                activeTab === "cakes"
                  ? "bg-[var(--clr-text)] text-[var(--clr-bg)]"
                  : "text-[var(--clr-muted)] hover:text-[var(--clr-text)]"
              }`}
            >
              Торты
            </button>
            <button
              onClick={() => setActiveTab("pastries")}
              className={`font-golos text-sm px-7 py-2.5 tracking-wide transition-all duration-200 border-l border-[var(--clr-line)] ${
                activeTab === "pastries"
                  ? "bg-[var(--clr-text)] text-[var(--clr-bg)]"
                  : "text-[var(--clr-muted)] hover:text-[var(--clr-text)]"
              }`}
            >
              Пирожные
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16">
        {/* Banner image */}
        <div className="py-8 border-b border-[var(--clr-line)]">
          <img
            src={
              activeTab === "cakes"
                ? "https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/a722301c-03c8-4bfc-8548-8b1ba726793b.jpg"
                : "https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/df27d460-bb75-4446-99f0-f56c269c0eb6.jpg"
            }
            alt={activeTab === "cakes" ? "Торты" : "Пирожные"}
            className="w-full h-44 md:h-60 object-cover rounded-sm"
          />
        </div>

        {/* Items list */}
        <div>
          {items.map((item) => (
            <DessertCard key={item.id} item={item} />
          ))}
        </div>

        {/* Hint */}
        <div className="mt-10 pt-8 border-t border-[var(--clr-line)] flex items-start gap-3">
          <Icon name="Info" size={14} className="text-[var(--clr-muted)] mt-0.5 shrink-0" />
          <p className="font-golos text-xs text-[var(--clr-muted)] leading-relaxed">
            Нажмите на позицию, чтобы увидеть состав и аллергены. Все изделия
            готовятся вручную из натуральных ингредиентов. Возможна
            индивидуальная корректировка состава по запросу.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--clr-line)]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-cormorant italic text-[var(--clr-muted)] text-lg">
            С любовью к деталям
          </span>
          <span className="font-golos text-xs text-[var(--clr-muted)] tracking-widest uppercase">
            Актуально на март 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;