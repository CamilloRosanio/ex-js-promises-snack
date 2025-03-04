/***********************************************************************
# SNACK 1
***********************************************************************/

function getPostTitle(id) {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(data => resolve(data.title))
            .catch(reject);
    })
    return promise;
};

// INVOCA
// getPostTitle(2)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))
//     .finally(console.log('Settled'))


// Bonus

function getPost(id, userId) {
    const promise = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                fetch(`https://dummyjson.com/users/${userId}`)
                    .then(res => res.json())
                    .then(user => {
                        const result = {
                            ...post,
                            user,
                        }
                        resolve(result);
                    })
                    .catch(reject);
            })
            .catch(reject);
    });
};

// INVOCA
// getPost(91)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))
//     .finally(console.log('Settled'))



/***********************************************************************
# SNACK 2
***********************************************************************/

function lanciaDado(numero) {
    return promise = new Promise((resolve, reject) => {
        console.log('Sto lanciando il dado...');
        setTimeout(() => {
            const incastrato = Math.random() < 0.2;

            if (incastrato) {
                reject('Il dado si è incastrato!');
            } else {
                const numeroDado = Math.floor(Math.random() * 6) + 1;
                console.log('Risultato: ' + numeroDado);
                if (numeroDado === numero) {
                    resolve('Hai vinto!');
                } else {
                    reject('Hai perso. Non è uscito il numero su cui hai scommesso.')
                }
            }
        }, 3000)
    });
}

// INVOCA
// lanciaDado(3)
//     .then(messaggio => console.log(messaggio))
//     .catch(error => console.error(error))


// Bonus

function creaLanciaDadoClosure() {
    let ultimoLancio = null;
    return function lanciaDadoClosure(numero) {
        console.log('Ultimo lancio: ' + ultimoLancio);
        return promise = new Promise((resolve, reject) => {
            console.log('Sto lanciando il dado...');
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    ultimoLancio = null;
                    reject('Il dado si è incastrato!');
                } else {
                    const numeroDado = Math.floor(Math.random() * 6) + 1;
                    console.log('Risultato: ' + numeroDado);
                    if (numeroDado === ultimoLancio) {
                        console.log('Incredibile! Stesso numero più volte di fila!');
                    }
                    if (numeroDado === numero) {
                        resolve('Hai vinto!');
                    } else {
                        reject('Hai perso. Non è uscito il numero su cui hai scommesso.');
                    }
                    ultimoLancio = numeroDado;
                }
            }, 3000)
        });
    };
}

const lanciaDadoUltimoLancio = creaLanciaDadoClosure();

// INVOCA
lanciaDadoUltimoLancio(3)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error));

setTimeout(() => lanciaDadoUltimoLancio(3)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error)), 2000);

setTimeout(() => lanciaDadoUltimoLancio(3)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error)), 4000);

setTimeout(() => lanciaDadoUltimoLancio(3)
    .then(messaggio => console.log(messaggio))
    .catch(error => console.error(error)), 6000);
