//Задача № 1
const sum = (a, b) => a + b;

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = md5(args);
    let hashIndex = cache.findIndex((item) => item['hash'] === hash);

    if (hashIndex >= 0) {
        return `Из кэша: ${cache[hashIndex]['value']}`;
    }

    const result = func(...args);

    cache.push({'hash': hash, 'value': result});
        if (cache.length > 5) { 
          cache.shift();
       }
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
