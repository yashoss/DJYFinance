import $ from 'jquery';

export const conversion = (curr, success, error) => {
  $.AJAX({`http://api.fixer.io/latest?base=${curr}`, success, error});
}
