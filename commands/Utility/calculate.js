const _0x4eeb12=_0x28e2;(function(_0xd08293,_0xe6627a){const _0x22acda=_0x28e2,_0x4c60d8=_0xd08293();while(!![]){try{const _0x3b98e7=parseInt(_0x22acda(0x147))/0x1*(parseInt(_0x22acda(0x141))/0x2)+-parseInt(_0x22acda(0x14b))/0x3+parseInt(_0x22acda(0x14f))/0x4*(parseInt(_0x22acda(0x155))/0x5)+-parseInt(_0x22acda(0x15b))/0x6*(-parseInt(_0x22acda(0x13b))/0x7)+-parseInt(_0x22acda(0x142))/0x8+parseInt(_0x22acda(0x12f))/0x9*(-parseInt(_0x22acda(0x134))/0xa)+parseInt(_0x22acda(0x144))/0xb;if(_0x3b98e7===_0xe6627a)break;else _0x4c60d8['push'](_0x4c60d8['shift']());}catch(_0x5079b6){_0x4c60d8['push'](_0x4c60d8['shift']());}}}(_0x8708,0xefc16));function _0x28e2(_0x33d2b3,_0x5f3f4c){const _0x13c2f4=_0x8708();return _0x28e2=function(_0x2bf1b6,_0x252438){_0x2bf1b6=_0x2bf1b6-0x12a;let _0x870842=_0x13c2f4[_0x2bf1b6];return _0x870842;},_0x28e2(_0x33d2b3,_0x5f3f4c);}const _0x252438=(function(){let _0x2007e7=!![];return function(_0x20ae14,_0x3eee82){const _0x8e38ab=_0x28e2;if(_0x8e38ab(0x149)===_0x8e38ab(0x149)){const _0x296b61=_0x2007e7?function(){const _0x8c081b=_0x8e38ab;if('IAdRJ'!==_0x8c081b(0x158))return _0x389682['toString']()[_0x8c081b(0x12e)]('(((.+)+)+)+$')[_0x8c081b(0x13f)]()[_0x8c081b(0x146)](_0x24d08b)[_0x8c081b(0x12e)](_0x8c081b(0x138));else{if(_0x3eee82){const _0x408a78=_0x3eee82[_0x8c081b(0x137)](_0x20ae14,arguments);return _0x3eee82=null,_0x408a78;}}}:function(){};return _0x2007e7=![],_0x296b61;}else{const _0x562f93=new _0xead2c3[(_0x8e38ab(0x143))]()[_0x8e38ab(0x14d)](_0x2a3f82[_0x8e38ab(0x13c)])['setTitle']('Calculator')[_0x8e38ab(0x152)]([{'name':_0x8e38ab(0x12d),'value':_0x8e38ab(0x154)+_0x49a476+_0x8e38ab(0x12c)},{'name':_0x8e38ab(0x157),'value':_0x8e38ab(0x154)+_0x5e2526+_0x8e38ab(0x12c)}])[_0x8e38ab(0x14c)]({'text':_0x8e38ab(0x13d)+_0x293149[_0x8e38ab(0x15a)][_0x8e38ab(0x130)],'iconURL':''+_0x2c6359[_0x8e38ab(0x15a)][_0x8e38ab(0x140)]({'dynamic':!![]})})[_0x8e38ab(0x12b)]();_0x24c8f2[_0x8e38ab(0x133)]({'embeds':[_0x562f93]});}};}()),_0x2bf1b6=_0x252438(this,function(){const _0x52f24e=_0x28e2;return _0x2bf1b6['toString']()[_0x52f24e(0x12e)](_0x52f24e(0x138))[_0x52f24e(0x13f)]()[_0x52f24e(0x146)](_0x2bf1b6)['search'](_0x52f24e(0x138));});_0x2bf1b6();const Discord=require(_0x4eeb12(0x150)),fs=require('fs'),yaml=require('js-yaml'),config=yaml['load'](fs[_0x4eeb12(0x14e)]('./config.yml',_0x4eeb12(0x148))),commands=yaml[_0x4eeb12(0x13e)](fs['readFileSync'](_0x4eeb12(0x136),'utf8')),fetch=require('node-fetch');exports[_0x4eeb12(0x131)]=async(_0x12ff8d,_0xbf46fe,_0x1e284d)=>{const _0x3eb4b7=_0x4eeb12;let _0xcb3386=_0x1e284d[_0x3eb4b7(0x12a)]('\x20');if(!_0xcb3386)return _0xbf46fe[_0x3eb4b7(0x133)](_0x3eb4b7(0x139));let _0x493272=_0xcb3386['replace'](/x/g,'*');const _0xc5f1f6=encodeURIComponent(_0x493272);await fetch(_0x3eb4b7(0x132)+_0xc5f1f6)[_0x3eb4b7(0x145)](function(_0x193797){const _0x3a720e=_0x3eb4b7;return _0x193797[_0x3a720e(0x156)]();})['then'](function(_0x24ade1){const _0x57f612=_0x3eb4b7,_0x294d77=new Discord[(_0x57f612(0x143))]()['setColor'](config[_0x57f612(0x13c)])[_0x57f612(0x135)](_0x57f612(0x13a))['addFields']([{'name':_0x57f612(0x12d),'value':'```css\x0a'+_0x493272+'```'},{'name':_0x57f612(0x157),'value':'```css\x0a'+_0x24ade1+_0x57f612(0x12c)}])['setFooter']({'text':_0x57f612(0x13d)+_0xbf46fe['author'][_0x57f612(0x130)],'iconURL':''+_0xbf46fe[_0x57f612(0x15a)][_0x57f612(0x140)]({'dynamic':!![]})})[_0x57f612(0x12b)]();_0xbf46fe[_0x57f612(0x133)]({'embeds':[_0x294d77]});});},module[_0x4eeb12(0x159)][_0x4eeb12(0x151)]={'name':'calculate','enabled':commands['Utility'][_0x4eeb12(0x14a)][_0x4eeb12(0x153)]};function _0x8708(){const _0x3f3df9=['EmbedColors','Requested\x20by:\x20','load','toString','displayAvatarURL','1045146DKwKFX','2315888cUsSpT','EmbedBuilder','805266qHGnns','then','constructor','2LZKgEY','utf8','sfbYH','Calculate','1700028RJXkkT','setFooter','setColor','readFileSync','514084wRfsqs','discord.js','help','addFields','Enabled','```css\x0a','55yIeTOE','text','Answer','IAdRJ','exports','author','5084244kAtPBN','join','setTimestamp','```','Question','search','91863MukIyz','username','run','http://api.mathjs.org/v4/?expr=','reply','1510rQJEUO','setTitle','./commands.yml','apply','(((.+)+)+)+$','Please\x20provide\x20a\x20question','Calculator','7sHdYPd'];_0x8708=function(){return _0x3f3df9;};return _0x8708();}