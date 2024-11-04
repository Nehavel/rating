if (!Promise.all) {
    Promise.all = function(promises) {
      return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise)
            .then((result) => {
              results[index] = result;
              completedPromises += 1;
  
              if (completedPromises === promises.length) {
                resolve(results);
              }
            })
            .catch((error) => reject(error));
        });
  
        if (promises.length === 0) {
          resolve(results);
        }
      });
    };
  }

  const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = Promise.resolve(13);


Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log('finalllll',values);
});