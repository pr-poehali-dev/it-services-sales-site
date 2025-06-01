import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const advantages = [
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description:
        "Каждый проект уникален. Мы изучаем ваш бизнес и создаем решение под ваши задачи.",
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description:
        "Прозрачное планирование и контроль этапов. Сдаем проекты точно в срок.",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description:
        "Senior-разработчики с опытом 5+ лет в различных отраслях и технологиях.",
    },
    {
      icon: "Headphones",
      title: "Постоянная поддержка",
      description:
        "Техническая поддержка 24/7, обновления и развитие проекта после запуска.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы не просто пишем код — мы создаем цифровые продукты, которые
              приносят реальную пользу бизнесу. За 5 лет работы мы помогли
              десяткам компаний автоматизировать процессы и увеличить прибыль.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  45 дней
                </div>
                <div className="text-gray-600">Средний срок проекта</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-red-500 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={advantage.icon as any}
                        size={20}
                        className="text-red-600"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
