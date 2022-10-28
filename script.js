
function removeFromMinHeap(heap){
    let primerValor = heap[1]; // guarda primer valor
    let ultimoValor = heap[heap.length -1]; // guarda ultimo valor
    heap[1] = heap[heap.length -1]; // copia ultimo valor en el primer puesto del arreglo
    heap.pop(heap.length-1);
    let i = 1;
    let nodoPadre = i ; // el nodo inicial es el padre
    let hijoMenor = i * 2; // el nodo del hijo menor
    let hijoMayor = i * 2 + 1; // el nodo del hijo mayor
    
    while(heap[nodoPadre] > heap[hijoMenor] || heap[nodoPadre] > heap[hijoMayor] || hijoMayor < heap.length ) {
        let guardaVal = heap[nodoPadre];
        if (heap[nodoPadre] > heap[hijoMenor]) {
            heap[nodoPadre] = heap[hijoMenor];
            heap[hijoMenor] = guardaVal;
            i = hijoMenor;
            
        } else {
                heap[nodoPadre] = heap[hijoMayor];
                heap[hijoMayor] = guardaVal;
                i = hijoMayor;
        }
        nodoPadre = i ; 
        hijoMenor = i * 2;
        hijoMayor = i * 2 + 1;
    }
    console.log(heap);
    return(primerValor);
}
    // salidas de muestras:
    let x = removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
    console.log(x);

    // ccambia el montículo a [undefined, 8, 12, 10, 17, 13, 15] and returns 3
    removeFromMinHeap([undefined, 8]);
    // cambia el montículo a [undefined] and returns 8
    