// T1. Uso avanzado de funciones
// U5. Closures
// Enunciado disponible en u5e2.md / Enunciat disponible a u5e2.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:
const ERROR_1 = "El array ya ha sido inicializado.";
const ERROR_2 = "La longitud del array es superior a la permitida.";
const ERROR_3 = "Todos los elementos deben ser números.";

function numberArray(maxLength) {
    let _list = [];
    const _max = maxLength;

    function init(array) {
        if (_list.length > 0) {
            return ERROR_1;
        }

        if (array.length > _max) {
            return ERROR_2;
        }

        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'number') {
                return ERROR_3;
            }
        }

        _list = [...array];
        return true;
    }

    function initialized() {
        return _list !== undefined;
    }

    function _checkItems(array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'number') {
                return false;
            }
        }
        return true;
    }

    function _addItem(num) {
        if (_list.length >= _max) {
            return false;
        }

        _list.push(num);
        return true;
    }

    function _removeItem(num) {
        for (let i = 0; i < _list.length; i++) {
            if (_list[i] === num) {
                _list.splice(i, 1);
                return true;
            }
        }

        return true;
    }

    function length() {
        if (!initialized()) {
            return 0;
        }

        return _list.length;
    }

    function getList() {
        return [..._list];
    }

    function add(items) {
        if (!_checkItems(items)) {
            return ERROR_3;
        }

        for (let i = 0; i < items.length; i++) {
            if (!_addItem(items[i])) {
                return false;
            }
        }

        return true;
    }

    function remove(items) {
        if (!_checkItems(items)) {
            return ERROR_3;
        }

        for (let i = 0; i < items.length; i++) {
            _removeItem(items[i]);
        }

        return true;
    }

    return {
        init,
        initialized,
        _checkItems,
        _addItem,
        _removeItem,
        length,
        getList,
        add,
        remove
    };
}


/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { numberArray };
