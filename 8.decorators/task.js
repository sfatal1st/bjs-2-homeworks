function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) { // если элемент найден
       console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
       return "Из кэша: " + objectInCache.value;
    } else {  
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
       cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  let timeOutId = null;

  function wraper(...args) {
    if (timeOutId === null) {
      timeOutId = setTimeout(() => {
        func(...args);
         wraper.count += 1;
       });
    } else {
      if (timeOutId) {
       clearTimeout(timeOutId);
        wraper.allCount += 1;
      } 
    
      timeOutId = setTimeout(() => {
        func(...args);
        wraper.count += 1;
      }, delay);
    }
  }
  wraper.count = 0;
  wraper.allCount = 0;
 
  return wraper;  
}  