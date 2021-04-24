
const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    // ghostClass: 'fantasma',
    dragClass: 'drag',

    onEnd: () =>{
        // console.log('Insertado');
    },
    group: 'lista-personas',
    store: {
        //Guardamos el orden de la lista
        set: (sortable) =>{
            const orden = sortable.toArray();
            console.log(orden);
            localStorage.setItem(sortable.options.group.name,orden.join('|'));
        },

        //Obtenemos el orden de la lista

get: (sortable)  =>{
    const orden = localStorage.getItem(sortable.options.group.name);
    return orden ? orden.split('|') : [];
}   }
});

