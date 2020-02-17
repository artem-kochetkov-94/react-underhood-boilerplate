import instantiate from "./instantiate";
import updateDomProperties from "./update-dom-properties";

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
  // eslint-disable-next-line
  instance.childInstances = reconcileChildren(instance, element);
  // eslint-disable-next-line
  instance.element = element;
  return instance;
}

function reconcileChildren(instance, element) {
  const { dom } = instance;
  const { childInstances } = instance;
  const nextChildElements = element.props.children || [];
  const newChildInstances = [];
  const count = Math.max(childInstances.length, nextChildElements.length);

  for (let i = 0; i < count; i += 1) {
    const childInstance = childInstances[i];
    const childElement = nextChildElements[i];
    const newChildInstance = reconcile(dom, childInstance, childElement);
    newChildInstances.push(newChildInstance);
  }

  return newChildInstances.filter(childInstance => childInstance !== null);
}
