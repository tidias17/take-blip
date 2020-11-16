/**
 * Base class for commons itens in system.
 * @author Thiago Almeida
 */
export default class common {
  /**
   * Ordenation array of objects ABC.
   * @param {Array} itens Array of objects to ordenate.
   * @param {String} key Chave od object to considerate base ordenation.
   * @param {Boolean} date Boolean to considere string of date in key.
   */
  static async orderAbc(itens, key, date) {
    const order = itens.sort((a, b) => {
      if (date) {
        let aa = a[key].split(' ');
        [aa] = aa;
        aa = aa.split('/');
        aa = `${aa[2]}-${aa[1]}-${aa[0]}`;
        let bb = b[key].split(' ');
        [bb] = bb;
        bb = bb.split('/');
        bb = `${bb[2]}-${bb[1]}-${bb[0]}`;
        return (
          aa < bb
        ) ? -1 : 1;
      }
      return (a[key].toLowerCase() < b[key].toLowerCase()) ? -1 : 1;
    });
    return order;
  }

  static async filterString(array, value) {
    if (value !== '') {
      return array.filter((item) => (item.name.toLowerCase()).includes(value));
    }
    return array;
  }
}
