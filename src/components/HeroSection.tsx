import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Превращаем идеи в цифровые решения
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Разработка веб-приложений, мобильных решений и автоматизация
            бизнес-процессов. Помогаем компаниям расти с помощью современных
            технологий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              Начать проект
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
            >
              Посмотреть портфолио
              <Icon name="Eye" size={20} />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">150+</div>
            <div className="text-gray-400">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">5 лет</div>
            <div className="text-gray-400">На рынке</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400">24/7</div>
            <div className="text-gray-400">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
