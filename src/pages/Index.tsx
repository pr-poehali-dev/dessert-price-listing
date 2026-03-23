import { useState } from "react";
import Icon from "@/components/ui/icon";

const cakes = [
  {
    id: 1,
    name: "Киндер",
    weight: "",
    price: 0,
    tag: "",
    description: "Шоколадные коржи, муссовая прослойка, шоколадный крем чиз, хрустящая орехово-шоколадная прослойка",
    composition: "Шоколадные коржи, муссовая прослойка, крем чиз шоколадный, хрустящая орехово-шоколадная прослойка",
    allergens: "Глютен, молоко, яйца, орехи",
  },
  {
    id: 2,
    name: "Карамельно-ореховое латте",
    weight: "",
    price: 0,
    tag: "",
    description: "Светлые ванильные коржи, крем чиз со сгущёнкой, воздушная взбитая карамель, карамелизованный фундук, кофейный мусс",
    composition: "Ванильные коржи, крем чиз со сгущёнкой, карамель взбитая, карамелизованный фундук, мусс кофейный",
    allergens: "Глютен, молоко, яйца, орехи (фундук)",
  },
  {
    id: 3,
    name: "Красный бархат",
    weight: "",
    price: 0,
    tag: "",
    description: "Нежный бисквит, крем чиз, начинка: брусника, вишня, малина",
    composition: "Бисквит красный бархат, крем чиз, брусника, вишня, малина",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 4,
    name: "Тирамису",
    weight: "",
    price: 0,
    tag: "",
    description: "Белые коржи, кофейная пропитка, нежный сливочный крем",
    composition: "Белые коржи, кофейная пропитка, сливочный крем",
    allergens: "Глютен, молоко, яйца, кофеин",
  },
  {
    id: 5,
    name: "Апельсиновый",
    weight: "",
    price: 0,
    tag: "",
    description: "Светлые коржи, желейная начинка, творожный крем",
    composition: "Светлые коржи, желейная апельсиновая начинка, творожный крем",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 6,
    name: "Карамельная девочка",
    weight: "",
    price: 0,
    tag: "",
    description: "Коржи на основе варёной сгущёнки, крем с варёной сгущёнкой, банан",
    composition: "Коржи на варёной сгущёнке, крем варёная сгущёнка, банан",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 7,
    name: "Молочная девочка",
    weight: "",
    price: 0,
    tag: "",
    description: "Нежные молочные коржи, крем чиз, начинка на выбор: ананас, вишня, малина, клубника, персик, абрикос",
    composition: "Молочные коржи, крем чиз, начинка на выбор из сезонных фруктов и ягод",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 8,
    name: "Шоколадная девочка",
    weight: "",
    price: 0,
    tag: "",
    description: "Шоколадные коржи, крем чиз, начинка: вишня, малина",
    composition: "Шоколадные коржи, крем чиз, вишня, малина",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 9,
    name: "Сникерс",
    weight: "",
    price: 0,
    tag: "",
    description: "Шоколадные коржи, шоколадный крем чиз, солёная карамель, арахис",
    composition: "Шоколадные коржи, крем чиз шоколадный, солёная карамель, арахис",
    allergens: "Глютен, молоко, яйца, арахис",
  },
  {
    id: 10,
    name: "Пломбир",
    weight: "",
    price: 0,
    tag: "",
    description: "Светлые коржи, нежный заварной крем",
    composition: "Светлые коржи, заварной крем",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 11,
    name: "Сметанный",
    weight: "",
    price: 0,
    tag: "",
    description: "Светлые или тёмные коржи, сметанный крем, опционально — вишня или малина",
    composition: "Коржи (светлые или тёмные), сметанный крем, вишня или малина (по желанию)",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 12,
    name: "Милка",
    weight: "",
    price: 0,
    tag: "",
    description: "Тёмные коржи, желейная прослойка, шоколадный мусс",
    composition: "Тёмные коржи, желейная прослойка, мусс шоколадный",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 13,
    name: "Домашний",
    weight: "",
    price: 0,
    tag: "",
    description: "Нежные медовые коржи, сметанный крем",
    composition: "Медовые коржи, сметанный крем",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 14,
    name: "Бисквитный с крем чиз",
    weight: "",
    price: 0,
    tag: "",
    description: "Светлый или тёмный бисквит, крем чиз, начинка по желанию",
    composition: "Бисквит (светлый или тёмный), крем чиз, начинка на выбор",
    allergens: "Глютен, молоко, яйца",
  },
];

const rolls = [
  {
    id: 1,
    name: "Медовый с орехами",
    weight: "",
    price: 0,
    tag: "",
    description: "Бисквитные коржи, сметанный крем, грецкий орех",
    composition: "Бисквитные коржи, сметанный крем, грецкий орех",
    allergens: "Глютен, молоко, яйца, орехи (грецкий)",
  },
  {
    id: 2,
    name: "Шоколадный с вишней",
    weight: "",
    price: 0,
    tag: "",
    description: "Шоколадный бисквитный корж, сливочный крем, вишнёвый конфитюр",
    composition: "Шоколадный бисквитный корж, сливочный крем, конфитюр вишнёвый",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 3,
    name: "Красный бархат",
    weight: "",
    price: 0,
    tag: "",
    description: "Нежные коржи, крем чиз, конфитюр из брусники, малины и вишни",
    composition: "Коржи красный бархат, крем чиз, конфитюр брусника / малина / вишня",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 4,
    name: "Меренговый",
    weight: "",
    price: 0,
    tag: "",
    description: "Меренга, сливочный крем, начинка: клубника, малина, апельсин",
    composition: "Меренга, сливочный крем, клубника, малина, апельсин",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 5,
    name: "Рафаэлло",
    weight: "",
    price: 0,
    tag: "",
    description: "Бисквитные кокосовые коржи, заварной крем, кокосовая стружка",
    composition: "Бисквитные кокосовые коржи, заварной крем, кокосовая стружка",
    allergens: "Глютен, молоко, яйца",
  },
];

const cheesecakes = [
  {
    id: 1,
    name: "Клубничный",
    weight: "",
    price: 0,
    tag: "",
    description: "Песочная основа на натуральном масле, сливочно-творожная масса с ванилином, слой из спелой клубники с лимонным соком",
    composition: "Песочное тесто, сливочный сыр, сливки высокой жирности, ванилин, клубника, сахар, лимонный сок",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 2,
    name: "Твикс",
    weight: "",
    price: 0,
    tag: "",
    description: "Песочные коржи, карамельный мусс, шоколадный ганаш",
    composition: "Песочные коржи, карамельный мусс, шоколадный ганаш",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 3,
    name: "Брусничный",
    weight: "",
    price: 0,
    tag: "",
    description: "Песочный корж, творожный мусс, натуральная брусника",
    composition: "Песочный корж, творожный мусс, брусника натуральная",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 4,
    name: "Сникерс",
    weight: "",
    price: 0,
    tag: "",
    description: "Песочный корж, мусс из сырной массы, солёная карамель, арахис",
    composition: "Песочный корж, мусс сырный, солёная карамель, арахис",
    allergens: "Глютен, молоко, яйца, арахис",
  },
  {
    id: 5,
    name: "Банан-киви",
    weight: "",
    price: 0,
    tag: "",
    description: "Песочная основа, сырная масса, натуральные банан и киви",
    composition: "Песочная основа, сырная масса, банан, киви",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 6,
    name: "Апельсиново-йогуртовый",
    weight: "",
    price: 0,
    tag: "",
    description: "Основа из бисквитной крошки, сырная масса с апельсином, семена чиа с йогуртом",
    composition: "Бисквитная крошка, сырная масса, апельсин, семена чиа, йогурт",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 7,
    name: "Сметанный с малиной",
    weight: "",
    price: 0,
    tag: "",
    description: "Бисквитная крошка, сметана, малина",
    composition: "Бисквитная крошка, сметана, малина",
    allergens: "Глютен, молоко, яйца",
  },
  {
    id: 8,
    name: "Сметанный с клубникой",
    weight: "",
    price: 0,
    tag: "",
    description: "Бисквитная крошка, сметана, клубника",
    composition: "Бисквитная крошка, сметана, клубника",
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
              {item.price > 0 ? `${item.price.toLocaleString("ru-RU")} ₽` : "1 200 ₽"}
            </div>
            <div className="font-golos text-xs text-[var(--clr-muted)]">
              {item.weight || "за кг"}
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
  const [activeTab, setActiveTab] = useState<"cakes" | "rolls" | "cheesecakes">("cakes");
  const items = activeTab === "cakes" ? cakes : activeTab === "rolls" ? rolls : cheesecakes;

  return (
    <div className="min-h-screen bg-[var(--clr-bg)] relative">
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/bucket/2ac0b54c-7990-410d-94fd-3fda37d01e6a.jpg')",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      {/* Header */}
      <header className="border-b border-[var(--clr-line)] relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-golos text-xs tracking-[0.35em] uppercase text-[var(--clr-muted)] mb-3">
                Аничкины торты
              </p>
              <h1 className="font-cormorant text-5xl md:text-6xl font-light text-[var(--clr-text)] leading-none">
                Прайс-лист
              </h1>
            </div>
            <img
              src="https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/bucket/bf73dd05-3ac8-4e9a-ba24-5e538416b81e.jpg"
              alt="Аничкины торты"
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
            />
          </div>

          {/* Tabs */}
          <div className="flex mt-8 border border-[var(--clr-line)] rounded-sm w-fit overflow-hidden">
            {(["cakes", "rolls", "cheesecakes"] as const).map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-golos text-sm px-6 py-2.5 tracking-wide transition-all duration-200 ${i > 0 ? "border-l border-[var(--clr-line)]" : ""} ${
                  activeTab === tab
                    ? "bg-[var(--clr-text)] text-[var(--clr-bg)]"
                    : "text-[var(--clr-muted)] hover:text-[var(--clr-text)]"
                }`}
              >
                {tab === "cakes" ? "Торты" : tab === "rolls" ? "Рулеты" : "Чизкейки"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 relative z-10">
        {/* Min order notice */}
        {activeTab === "cakes" && (
          <div className="mt-8 flex items-center gap-3 bg-[var(--clr-card)] border border-[#74070E] rounded-sm px-5 py-3.5">
            <Icon name="Scale" size={15} className="text-[var(--clr-accent)] shrink-0" />
            <p className="font-golos text-sm text-[var(--clr-text)]">
              Минимальный заказ торта — <span className="font-medium">1,5 кг</span>
            </p>
          </div>
        )}

        {/* Banner image */}
        <div className="py-8 border-b border-[var(--clr-line)]">
          <img
            src={
              activeTab === "cakes"
                ? "https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/7da88d29-7b98-44a4-b268-71925e80a3aa.jpg"
                : activeTab === "rolls"
                ? "https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/2af965ea-c088-447e-b3f5-78ecfeec820a.jpg"
                : "https://cdn.poehali.dev/projects/ef8e6c50-a814-4c92-8e49-5ae4c2affacb/files/af79ecf5-6d31-45d4-942b-73f58ef4bf7b.jpg"
            }
            alt={activeTab === "cakes" ? "Торты" : activeTab === "rolls" ? "Рулеты" : "Чизкейки"}
            className="w-full h-44 md:h-60 object-cover rounded-sm"
          />
        </div>

        {/* Items list */}
        <div>
          {items.map((item) => (
            <DessertCard key={item.id} item={item} />
          ))}
        </div>

        {/* Order button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="https://vk.com/id399308893"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 flex-1 py-4 bg-[var(--clr-text)] text-[var(--clr-bg)] font-golos text-sm tracking-wide rounded-sm hover:opacity-80 transition-opacity duration-200"
          >
            <Icon name="Send" size={16} />
            Заказать ВКонтакте
          </a>
          <a
            href="https://vk.com/ani_cake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 flex-1 py-4 border border-[var(--clr-text)] text-[var(--clr-text)] font-golos text-sm tracking-wide rounded-sm hover:bg-[var(--clr-card)] transition-colors duration-200"
          >
            <Icon name="Images" size={16} />
            Посмотреть работы
          </a>
        </div>

        {/* Hint */}
        <div className="mt-6 pt-6 border-t border-[var(--clr-line)] flex items-start gap-3">
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