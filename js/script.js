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

getPostTitle(2)
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(console.log('Settled'))