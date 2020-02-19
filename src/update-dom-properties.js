import isEvent from "./utils/is-event";
import isAttribute from "./utils/is-attribute";

export default function updateDomProperties(dom, prevProps, nextProps) {
  // Удаляем прослушку событий
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Удаляем пропсы
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach(name => {
      // eslint-disable-next-line no-param-reassign
      dom[name] = null;
    });

  // Задаём пропсы
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(name => {
      // eslint-disable-next-line no-param-reassign
      dom[name] = nextProps[name];
    });

  // Добавляем прослушку событий
  Object.keys(nextProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
