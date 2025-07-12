import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">
              Алексей Иванов
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                О себе
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <Badge variant="secondary" className="mb-4">
                Корпоративный проектный менеджер
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Управляю сложными проектами,
                <span className="text-muted-foreground"> создаю результат</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                15+ лет опыта в управлении крупными корпоративными проектами.
                Специализируюсь на цифровой трансформации и оптимизации
                бизнес-процессов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Mail" size={18} className="mr-2" />
                  Связаться со мной
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать резюме
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-8 flex items-center justify-center">
                <img
                  src="/img/8254792e-0089-4839-ad1f-2251d5f49cc2.jpg"
                  alt="Алексей Иванов"
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперт в области управления проектами с фокусом на результат и
              инновации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Стратегия</h3>
                </div>
                <p className="text-muted-foreground">
                  Разработка долгосрочных стратегий развития и реализация
                  масштабных инициатив в крупных корпорациях.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Команды</h3>
                </div>
                <p className="text-muted-foreground">
                  Управление командами до 50+ человек, координация работы
                  различных департаментов и внешних подрядчиков.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">Результаты</h3>
                </div>
                <p className="text-muted-foreground">
                  Реализовано проектов на сумму 500+ млн рублей с экономией
                  бюджета в среднем на 15-20%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ключевые проекты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно реализованных инициатив
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary">2023</Badge>
                  <Icon
                    name="Building2"
                    size={24}
                    className="text-muted-foreground"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Цифровая трансформация банка
                </h3>
                <p className="text-muted-foreground mb-6">
                  Руководство проектом модернизации IT-инфраструктуры крупного
                  банка. Интеграция новых систем, автоматизация процессов,
                  обучение персонала.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Бюджет: 350 млн рублей</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Команда: 35 специалистов</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Результат: +25% эффективности операций</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary">2022</Badge>
                  <Icon
                    name="Factory"
                    size={24}
                    className="text-muted-foreground"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Автоматизация производства
                </h3>
                <p className="text-muted-foreground mb-6">
                  Внедрение системы управления производством на заводе
                  металлургической компании. Оптимизация логистики и контроль
                  качества.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Бюджет: 180 млн рублей</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Команда: 22 специалиста</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span>Результат: -30% времени производства</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Готов к новым вызовам
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Обсудим ваш проект и найдём оптимальные решения для достижения
              целей
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  alexey.ivanov@company.com
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Локация</h3>
                <p className="text-muted-foreground">Москва, Россия</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Написать сообщение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Алексей Иванов. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
