//Задача № 1

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

    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper (...args) {
      wrapper.allCount++;

      if (!timeoutId) {
        func(...args);
        wrapper.count++;
      } 

      timeoutId = setTimeout ( () => { 
        clearTimeout(timeoutId);
        wrapper.count++;
        func(...args); 
      }, delay);
    }  

    return wrapper;
}

const sum = (a, b) => a + b;
const debouncedSum = debounceDecoratorNew(sum, 3000);
debouncedSum(35, 23);