import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Code",
      title: "Веб-разработка",
      description:
        "Создание современных веб-сайтов и приложений на React, Vue, Angular",
      features: ["SPA приложения", "E-commerce", "CMS системы"],
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description: "Нативные и кроссплатформенные мобильные приложения",
      features: ["iOS/Android", "React Native", "Flutter"],
    },
    {
      icon: "Database",
      title: "Backend разработка",
      description: "Серверные решения, API, базы данных и облачные сервисы",
      features: ["REST/GraphQL API", "Микросервисы", "DevOps"],
    },
    {
      icon: "Zap",
      title: "Автоматизация",
      description: "Автоматизация бизнес-процессов и интеграция систем",
      features: ["CRM интеграции", "Чат-боты", "Workflow"],
    },
    {
      icon: "Shield",
      title: "Кибербезопасность",
      description: "Защита данных, аудит безопасности, соответствие стандартам",
      features: ["Пентестинг", "GDPR", "ISO 27001"],
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "BI-системы, дашборды, анализ данных для принятия решений",
      features: ["Power BI", "Tableau", "Custom dashboards"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр IT-услуг для вашего бизнеса — от идеи до запуска и
            поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
