import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CHART_BARS = [40, 65, 50, 80, 70, 90, 60, 75, 85, 55, 95, 72];
const MONTHS = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState("аналитика");

  const channels = ["аналитика", "отчёты", "запросы-1с", "графики", "настройки-mcp"];
  const voiceChannels = ["Рабочий сеанс", "Демонстрация"];

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Icon name="BrainCircuit" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">NeuroDesk</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">ИИ-ассистент с подключением к 1С</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="BookOpen" className="w-4 h-4 mr-2" />
              Документация
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Скачать
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                Документация
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Скачать
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Icon name="BrainCircuit" className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["BarChart2", "Database", "Cpu", "Settings"].map((ico, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]"
            >
              <Icon name={ico} className="w-5 h-5 text-[#dcddde]" />
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">NeuroDesk</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <Icon name="X" className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" className="w-3 h-3" />
                  <span>Рабочие каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {channels.map((channel) => (
                    <div
                      key={channel}
                      onClick={() => setActiveChannel(channel)}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors ${
                        activeChannel === channel
                          ? "bg-[#393c43] text-[#dcddde]"
                          : "text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43]"
                      }`}
                    >
                      <Icon name="Hash" className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" className="w-3 h-3" />
                  <span>Сеансы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {voiceChannels.map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name="Radio" className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">Вы</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Пользователь</div>
                <div className="text-[#3ba55c] text-xs truncate">● В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Mic" className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Settings" className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Icon name="Menu" className="w-5 h-5" />
              </Button>
              <Icon name="Hash" className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">{activeChannel}</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Чат с локальной нейросетью · 1С через MCP</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Icon name="Bell" className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Users" className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Search" className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветствие нейросети */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="BrainCircuit" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">NeuroDesk</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:00</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1.5 py-0.5 rounded font-medium">БОТ</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-3">
                    Привет! Я подключён к вашей 1С через MCP и готов к работе. Могу анализировать данные, строить графики и отвечать на вопросы по базе.
                  </div>
                  <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                    <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что я умею:</h3>
                    <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                      <li>📊 Строить графики по данным из 1С в реальном времени</li>
                      <li>💬 Отвечать на вопросы по продажам, остаткам, финансам</li>
                      <li>🔗 Подключать сторонние источники данных через MCP</li>
                      <li>🧠 Работать локально — ваши данные не покидают ПК</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Вопрос пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">Вы</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван Петров</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:02</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Покажи динамику продаж за последние 12 месяцев
                  </div>
                </div>
              </div>

              {/* Ответ нейросети с графиком */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="BrainCircuit" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">NeuroDesk</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:02</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1.5 py-0.5 rounded font-medium">БОТ</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-3">
                    Данные получены из 1С. Вижу рост на <span className="text-[#3ba55c] font-semibold">+23%</span> в сентябре — пиковый месяц:
                  </div>

                  {/* Демо-график */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-5 w-full max-w-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
                        <Icon name="BarChart2" className="w-4 h-4 text-[#5865f2]" />
                        Продажи по месяцам (тыс. ₽)
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                        <span className="text-[#3ba55c] text-xs font-medium">Данные из 1С</span>
                      </div>
                    </div>

                    {/* Бар-чарт */}
                    <div className="flex items-end gap-1 sm:gap-2 h-32 sm:h-40 mb-3">
                      {CHART_BARS.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-t-sm transition-all duration-300 hover:opacity-80 cursor-pointer"
                            style={{
                              height: `${h}%`,
                              background: h === 95
                                ? "linear-gradient(to top, #3ba55c, #57d67a)"
                                : "linear-gradient(to top, #5865f2, #7c8cf8)",
                            }}
                            title={`${MONTHS[i]}: ${Math.round(h * 12.5)} тыс. ₽`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      {MONTHS.map((m, i) => (
                        <div key={i} className="flex-1 text-center text-[#72767d] text-[9px] sm:text-xs">{m}</div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3 pt-3 border-t border-[#40444b]">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-lg">8.4М ₽</div>
                        <div className="text-[#8e9297] text-xs">Итого за год</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#3ba55c] font-bold text-sm sm:text-lg">+23%</div>
                        <div className="text-[#8e9297] text-xs">Лучший месяц</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-lg">700К ₽</div>
                        <div className="text-[#8e9297] text-xs">Среднее/мес</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ещё один вопрос */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">АМ</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Анна Морозова</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:05</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Какие товары закончились на складе?
                  </div>
                </div>
              </div>

              {/* Ответ нейросети — таблица */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="BrainCircuit" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">NeuroDesk</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:05</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1.5 py-0.5 rounded font-medium">БОТ</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-3">
                    Запрос к складскому учёту 1С выполнен. Нашёл <span className="text-[#ed4245] font-semibold">3 позиции</span> с нулевым остатком:
                  </div>
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden max-w-lg">
                    {[
                      { name: "Кабель UTP Cat6, 305м", art: "00-001234", status: "Нет в наличии" },
                      { name: "Коммутатор 24-port", art: "00-005678", status: "Нет в наличии" },
                      { name: "Роутер Wi-Fi 6 AX1800", art: "00-009012", status: "Нет в наличии" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between px-4 py-3 ${i < 2 ? "border-b border-[#40444b]" : ""}`}>
                        <div>
                          <div className="text-white text-sm font-medium">{item.name}</div>
                          <div className="text-[#72767d] text-xs">Арт. {item.art}</div>
                        </div>
                        <span className="bg-[#ed4245]/20 text-[#ed4245] text-xs px-2 py-1 rounded font-medium whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
                  Начало работы с NeuroDesk
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {[
                    { n: "1", title: "Скачай и установи", desc: "Установщик для Windows — один клик, без лишних настроек" },
                    { n: "2", title: "Подключи к 1С", desc: "Укажи адрес сервера 1С — MCP-мост настроится автоматически" },
                    { n: "3", title: "Задавай вопросы", desc: "Спроси про продажи, склад, финансы — нейросеть ответит мгновенно" },
                  ].map((step) => (
                    <div key={step.n} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm sm:text-base">{step.n}</span>
                      </div>
                      <h3 className="text-white font-medium mb-2 text-sm sm:text-base">{step.title}</h3>
                      <p className="text-[#b9bbbe] text-xs sm:text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Icon name="Download" className="w-4 h-4 mr-2" />
                    Скачать NeuroDesk
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="FileText" className="w-4 h-4 mr-2" />
                    Инструкция по подключению
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему NeuroDesk?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: "Lock", title: "Полная приватность", desc: "Нейросеть работает локально — данные не уходят в облако" },
                    { icon: "Plug", title: "MCP-подключение к 1С", desc: "Нативная интеграция с 1С: Бухгалтерия, УТ, ERP" },
                    { icon: "BarChart2", title: "Интерактивные графики", desc: "Визуализация данных прямо в чате — без Excel" },
                    { icon: "Zap", title: "Мгновенные ответы", desc: "Ответ на любой запрос по базе за секунды" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">
                        <Icon name={feature.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-3">
                <Icon name="Plus" className="w-5 h-5 text-[#b9bbbe] flex-shrink-0" />
                <div className="text-[#72767d] text-xs sm:text-sm flex-1">Спросите нейросеть что-нибудь... (например: «Топ-10 клиентов за квартал»)</div>
                <Icon name="Smile" className="w-5 h-5 text-[#b9bbbe] flex-shrink-0 hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Правая панель — статус MCP */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-5">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Подключения MCP</h3>
              <div className="space-y-2">
                {[
                  { name: "1С: УТ 11.5", status: "Подключено", color: "bg-[#3ba55c]" },
                  { name: "Локальная LLM", status: "Активна", color: "bg-[#3ba55c]" },
                  { name: "Внешний источник", status: "Ожидание", color: "bg-[#faa61a]" },
                ].map((conn, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 bg-[#36393f] rounded-full flex items-center justify-center">
                        <Icon name="Database" className="w-4 h-4 text-[#b9bbbe]" />
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${conn.color} border-2 border-[#2f3136] rounded-full`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{conn.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{conn.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Активность</h3>
              <div className="space-y-2">
                {[
                  { name: "Иван Петров", action: "Анализирует продажи", avatar: "ИП", color: "from-green-500 to-teal-500" },
                  { name: "Анна Морозова", action: "Запрос к складу", avatar: "АМ", color: "from-orange-500 to-red-500" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative flex-shrink-0`}>
                      <span className="text-white text-xs font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.action}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
