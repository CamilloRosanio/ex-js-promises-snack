/***********************************************************************
# SNACK 1
***********************************************************************/

function getPostTitle(id) {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(reject);
    })
    return promise;
};

// INVOCA
getPostTitle(2)
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(console.log('Settled'))

// Bonus

function getPost(userId) {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(reject);
    })
    return promise;
};

// INVOCA
getPost(91)
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(console.log('Settled'))



/***********************************************************************
# SNACK 2
***********************************************************************/

function lanciaDado(numero) {
    return promise = new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...');
        setTimeout(() => {
            const numeroDado = Math.floor(Math.random() * 6) + 1;
            console.log('Risultato: ' + numeroDado);
            if (numeroDado === numero) {
                resolve('Hai vinto!');
            } else {
                reject('Hai perso. Non è uscito il numero su cui hai scommesso.')
            }
        }, 2000)
    });
}

// INVOCA
lanciaDado(3)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error))