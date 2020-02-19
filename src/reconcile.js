import instantiate from "./instantiate";
import updateDomProperties from "./update-dom-properties";
// eslint-disable-next-line import/no-cycle
import reconcileChildren from "./reconcile-children";

export default function reconcile(parentDom, instance, element) {
  if (instance === null) {
    // Создаём инстанс
    const newInstance = instantiate(element);
    parentDom.appendChild(newInstance.dom);
    return newInstance;
  }

  if (element === null) {
    // Убираем инстанс
    parentDom.removeChild(instance.dom);
    return null;
  }

  if (instance.element.type !== element.type) {
    // Заменяем инстанс
    const newInstance = instantiate(element);
    parentDom.replaceChild(newInstance.dom, instance.dom);
    return newInstance;
  }

  /**
   * Здесь в дальнейшем будет проверка на получение компонента
   */

  // Обновляем инстанс DOM-элемента
  updateDomProperties(instance.dom, instance.element.props, element.props);
  // eslint-disable-next-line no-param-reassign, no-use-before-define
  instance.childInstances = reconcileChildren(instance, element);
  // eslint-disable-next-line no-param-reassign
  instance.element = element;
  return instance;
}
