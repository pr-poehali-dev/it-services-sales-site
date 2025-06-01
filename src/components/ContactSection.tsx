import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Начните свой проект сегодня
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Расскажите о вашей задаче, и мы предложим оптимальное решение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Оставить заявку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Интересующая услуга
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="web">Веб-разработка</option>
                    <option value="mobile">Мобильная разработка</option>
                    <option value="backend">Backend разработка</option>
                    <option value="automation">Автоматизация</option>
                    <option value="security">Кибербезопасность</option>
                    <option value="analytics">Аналитика</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Описание проекта *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Расскажите подробнее о вашем проекте..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-purple-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-purple-400" />
                  <span>info@itservices.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-purple-400" />
                  <span>Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Процесс работы</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span className="text-gray-300">Анализ требований</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span className="text-gray-300">
                    Создание технического задания
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span className="text-gray-300">
                    Разработка и тестирование
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <span className="text-gray-300">Запуск и поддержка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
