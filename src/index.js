
  
module.exports = function check(str, bracketsConfig) {
  // your solution 

    let tmp_str = '';
    let released = str;

    //create reg for numbers and other brackets
    let regxp = ''
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (parseInt(bracketsConfig[i][0]) > 0 || parseInt(bracketsConfig[i][1]) > 0) {
            regxp = regxp + bracketsConfig[i][0]  + bracketsConfig[i][1];
        }
        else {
            regxp = regxp + '\\' + bracketsConfig[i][0] + '\\' + bracketsConfig[i][1];
        }
        if (i !== bracketsConfig.length - 1) {
            regxp = regxp + '|';
        }
    }

    let reg = new RegExp(regxp, 'gm')
    // console.log(regxp);
    //console.log(reg);
    //const reg = /\(\)|\[\]|\{\}/gm;
    //console.log(replaced.replace(reg, ''));

    //replace open-close pairs while it will be possible
    while (released !== tmp_str) {
        tmp_str = released,
        released = released.replace(reg, '');
    }
    return tmp_str == '';
}

