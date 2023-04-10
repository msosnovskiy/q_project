const vacancyData = [
  {
    vacancy: 'Team Lead .Net / Angular',
    experience: '3–6 лет',
    employment: 'Полная занятость, полный день',
    qualification: {
      data: [
        { text: 'опыт в качестве руководителя команды разработки' },
        { text: 'опыт разработки с использованием C#, NET Core от 3-х лет' },
        { text: 'опыт разработки с использованием Angular(желательно) или react, vue' },
        { text: 'опыт проектирования структур баз данных и/или доменной модели' },
        { text: 'опыт использования ORM при взаимодействии с БД' },
        { text: 'опыт оптимизации кода' },
        { text: 'аккуратное отношение к работе: умение писать чистый код и прививать это другим' },
      ],
    },
    desirable: {
      data: [
        { text: 'опыт работы с PostgreSQL' },
        { text: 'MFE (Module Federation)' },
        { text: 'опыт работ с шиной сообщений' },
      ],
    },
    responsibilities: {
      data: [
        { text: 'развитие и сопровождение нового сервиса' },
        { text: 'взаимодействие с разработчиками других модулей единой экосистемы' },
        { text: 'формализация требований совместно с аналитиками' },
        { text: 'постановка задач и контроль их исполнения' },
        { text: 'программирование (около 70% времени)' },
        { text: 'code review' },
        { text: 'релиз новых версий (ci/cd настроен)' },
        { text: 'в перспективе собеседование и подбор сотрудников в команду' },
      ]
    },
    conditions: {
      data: [
        { text: 'офис на набережной в пешей доступности от м. Китай-город, Новокузнецкая, Таганская' },
        { text: 'тихое рабочее пространство: комнаты на несколько сотрудников' },
        { text: 'мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы' },
        { text: 'сильная команда разработчиков, возможность обмена опытом' },
        { text: 'оформление в соответствии с ТК РФ, заработная плата полностью проходит по 2НДФЛ' },
        { text: 'гибкое начало рабочего дня (с 07:00 до 11:00). 40 часов в неделю' },
        { text: 'удаленная работа 2 дня в неделю, 3 дня офис' },
        { text: 'ДМС' },
      ]
    }
  },
  {
    vacancy: 'DevOps-инженер / программист',
    experience: '1–3 года',
    employment: 'Полная занятость, полный день',
    qualification: {
      data: [
        { text: 'Опыт работы на позиции DevOps инженера от 2х лет' },
        { text: 'Linux на уровне администратора' },
        { text: 'Умение писать на скриптовом языке bash или python' },
        { text: 'Понимание принципов построения процессов CI/CD, умение, выстраивать пайплайны с нуля' },
        { text: 'Практический опыт работы Docker и Kubernetes, понимание как работает система изнутри' },
        { text: 'Понимание наблюдаемости сервиса: мониторинг, журналы, трассировки' },
        { text: 'Понимание подхода IaC' },
        { text: 'Опыт работы с Ansible' },
        { text: 'Отличные знания Git' },
        { text: 'Умение диагностировать и разбираться в сетевых проблемах' },
        { text: 'Опыт работы с MQ (Rabbit, Kafka)' },
        { text: 'высшее техническое образование' },
        { text: 'знание английского языка (письменного и устного) на уровне не менее intermediate' },
      ],
    },
    desirable: {
      data: [
        { text: 'Azure Devops' },
        { text: 'Terraform' },
        { text: 'ArgoCD' },
        { text: 'Zookeeper' },
        { text: 'Minio' },
        { text: 'Postgresql' },
        { text: 'Redis' },
        { text: 'Опыт работы с группами разработки dotnet' },
        { text: 'Опыт интеграций с гипервизорами (Vsphere)' },
      ],
    },
    responsibilities: {
      data: [
        { text: 'Поддержка офисной инфраструктуры' },
        { text: 'Создание и менеджмент пайплайнов' },
        { text: 'Администрирование кластеров Docker и Kubernetes' },
        { text: 'Диагностика возникающих проблем (на уровне сети и приложения)' },
        { text: 'Написание скриптов для автоматизации различных операций' },
        { text: 'Мониторинг рабочей инфраструктуры офиса и заказчиков' },
      ]
    },
    conditions: {
      data: [
        { text: 'Офис на набережной в пешей доступности от м. Китай-город, Новокузнецкая, Таганская, Площадь Революции' },
        { text: 'Комфортный, тихий офис с помещениями по несколько сотрудников' },
        { text: 'Оформление по ТК РФ, заработная плата полностью проходит по 2НДФЛ' },
        { text: 'График 5/2, гибкое начало дня (с 8:00 до 11:00)' },
        { text: 'ДМС' },
      ]
    }
  },
  {
    vacancy: 'Python Senior Full-stack Developer',
    experience: '3–6 лет',
    employment: 'Полная занятость, полный день',
    qualification: {
      data: [
        { text: 'Сильный технический бэкграунд в Python от 3 лет, Django, DRF и основных сопутствующих библиотеках и фреймворках' },
        { text: 'Опыт работы на Angular или Vue.JS;' },
        { text: 'Опыт работы с реляционными базами данных, умение писать SQL запросы' },
        { text: 'Нацеленность на результат и командную работу' },
      ],
    },
    desirable: {
      data: [],
    },
    responsibilities: {
      data: [
        { text: 'Разработка средств для коммуникаций рабочих групп:' },
        { text: 'Персональные и групповые чаты' },
        { text: 'Аудио и видеоконференции' },
        { text: 'Организация совещаний' },
        { text: 'Автоматическое стенографирование' },
        { text: 'Разработка средств управления регламентными процессами:' },
        { text: 'Планирование работ' },
        { text: 'Коллективная работа с документами' },
        { text: 'Расчётные задачи' },

      ]
    },
    conditions: {
      data: [
        { text: 'Офис на набережной в пешей доступности от м. Китай-город, Новокузнецкая, Таганская' },
        { text: 'Тихое рабочее пространство: комнаты на несколько сотрудников' },
        { text: 'Мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы' },
        { text: 'Оформление в соответствии с ТК РФ, заработная плата полностью проходит по 2НДФЛ' },
        { text: 'Гибкое начало рабочего дня (с 07:00 до 11:00). 40 часов в неделю' },
        { text: 'Гибридный график работы (3 дня в офисе, 2 удалённо)' },
        { text: 'ДМС' },
      ]
    }
  },
  {
    vacancy: 'Программист Angular / .Net (Senior)',
    experience: 'более 6 лет',
    employment: 'Полная занятость, полный день',
    qualification: {
      data: [
        { text: 'уверенные навыки и опыт в Angular / TypeScript' },
        { text: 'опыт программирования в среде .Net на языке C#' },
        { text: 'опыт проектирования структур баз данных и/или доменной модели' },
        { text: 'опыт работы с PostgreSQL либо MS SQL' },
        { text: 'умение работать в команде, аргументировать свою точку зрения' },
        { text: 'аккуратное отношение к работе: умение писать чистый код и первично проверять его работоспособность' },
      ],
    },
    desirable: {
      data: [
        { text: 'опыт работы работы с микросервисными экосистемами' },
        { text: 'опыт проектирования структур баз данных и доменной модели' },
        { text: 'опыт использования ORM при взаимодействии с БД' },
        { text: 'MFE (Module Federation)' },
        { text: 'опыт работ с шиной сообщений' },
        { text: 'webSocket / SignalR' },
        { text: 'опыт оптимизации кода' },
      ],
    },
    responsibilities: {
      data: [
        { text: 'разработка сервисов для решения на платформе .Net / Angular' },
        { text: 'участие в проектировании реализации сформированных бизнес-требований' },
        { text: 'готовность брать задачи и доводить их до завершения' },
        { text: 'демонстрация разработанного функционала' },
      ]
    },
    conditions: {
      data: [
        { text: 'офис на набережной в пешей доступности от м. Китай-город, Новокузнецкая, Таганская' },
        { text: 'тихое рабочее пространство: комнаты на несколько сотрудников' },
        { text: 'мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы' },
        { text: 'сильная команда разработчиков, возможность обмена опытом' },
        { text: 'оформление в соответствии с ТК РФ, заработная плата полностью проходит по 2НДФЛ' },
        { text: 'гибкое начало рабочего дня (с 07:00 до 11:00). 40 часов в неделю' },
        { text: 'удаленная работа 2 дня в неделю, 3 дня офис' },
        { text: 'ДМС' },
      ]
    }
  },

]
