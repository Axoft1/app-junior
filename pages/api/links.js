const links = [
  {
    _id: "link_1",
    icon: {
      path: "/icons/MOVIES.png",
    },
    gradient: {
      from: "#13E780",
      to: "#00bbd5",
    },
    link: "https://axoft1.github.io/Movie_project/",
    title: "Проект Movies",
    description: "Один из первый проектов на React, API предоставил кинопоиск",
  },
  {
    _id: "link_2",
    icon: {
      path: "/icons/game.jpg",
    },
    gradient: {
      from: "#fc5dff",
      to: "#5dfdff",
    },
    link: "https://axoft1.github.io/ProjectGame/",
    title: "Проект Game",
    isImportant: true,
    description: "В этом React приложении я использовал технологию SPA + имитация карзины для покупок во вкладке Магазин ",
  },
  {
    _id: "link_3",
    icon: {
      path: "/icons/layout.jpg",
    },
    gradient: {
      from: "#FEAC5E",
      to: "#4BC0C8",
    },
    link: " https://axoft1.github.io/layoutJon/index.html",
    title: "Верстка",
    description: "Адаптивная верстка",
  },
  {
    _id: "link_4",
    icon: {
      path: "/icons/calendar.png",
    },
    gradient: {
      from: "#76acfd",
      to: "#6ed0ff",
    },
    link: "https://axoft1.github.io/CalendarOfWorkingShifts/",
    title: "Рабочий календарь",
    description: "Календарь который подсчитывает график скользящих смен, полезен для моей работы",
  },
  {
    _id: "link_5",
    icon: {
      path: "/icons/matrix.png",
    },
    gradient: {
      from: "#c659ff",
      to: "#ff3f4d",
    },
    link: "https://axoft1.github.io/matrix/",
    title: "Матрица",
    description: "Просто для души)))",
  },
];

export default function handler(req, res) {
  res.status(200).json(links);
}
