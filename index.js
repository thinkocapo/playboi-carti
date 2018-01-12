//.............................................................................................................................................
//.................................................................OOOOO...................CCCCC...............................................
//.PPPPPPPPPPP.PLLLL..........AAAAA..AAYYY...YYYYYYYBBBBBBBB.....OOOOOOOOO..OOOII........CCCCCCCC......AAAAAA....AARRRRRRRRR.RRRTTTTTTTTTTIII..
//.PPPPPPPPPPPPPLLLL..........AAAAAA.AAYYY..YYYYYYYYBBBBBBBBB...BOOOOOOOOOO.OOOII....... CCCCCCCCC.....AAAAAA....AARRRRRRRRRRRRRTTTTTTTTTTIII..
//.PPPPPPPPPPPPPLLLL.........AAAAAAA..AYYYY.YYYYY.YYBBBBBBBBBB.BBOOOOOOOOOOOOOOII...... CCCCCCCCCC...AAAAAAA....AARRRRRRRRRRRRRTTTTTTTTTTIII..
//.PPPPP..PPPPPPLLLL.........AAAAAAA..AYYYY.YYYY..YYBB...BBBBB.BBOOO...OOOOOOOOII...... CCC..CCCCC...AAAAAAAA...AARR...RRRRR...TTTTT...TTIII..
//.PPPPP...PPPPPLLLL........AAAAAAAAA..YYYYYYYYY..YYBB.BBBBBBBBBBOO.....OOOOOOOII..... CC....CCCC...AAAAAAAA...AARR....RRRR...TTTTT...TTIII..
//.PPPPPPPPPPPPPLLLL........AAAAAAAAA..YYYYYYYY...YYBBBBBBBBB.BBBOO.....OOOOOOOII..... CC..........CAAAAAAAA...AARRRRRRRRRR...TTTTT...TTIII..
//.PPPPPPPPPPPPPLLLL........AAAA.AAAAA..YYYYYYY...YYBBBBBBBBBBBBBOO.....OOOOOOOII..... CC..........CAAAAAAAAA..AARRRRRRRRR....TTTTT...TTIII..
//.PPPPPPPPPPP.PLLLL.......AAAAAAAAAAA...YYYYY....YYBBBBBBBBBBBBBOO.....OOOOOOOII..... CC..........CAAAAAAAAA..AARRRRRRRRRR...TTTTT...TTIII..
//.PPPPPPPPPP..PLLLL.......AAAAAAAAAAA...YYYYY....YYBB....BBBBBBBOO.....OOOOOOOII..... CC....CCCC.CCAAAAAAAAA..AARRRRRRRRRR...TTTTT...TTIII..
//.PPPPP.......PLLLL.......AAAAAAAAAAAA..YYYYY....YYBB...BBBBB.BBOOO...OOOOOOOOII...... CCC..CCCCC.CCAAAAAAAAAA.AARR...RRRRR...TTTTT...TTIII..
//.PPPPP.......PLLLLLLLLLLLAAAAAAAAAAAA..YYYYY....YYBBBBBBBBBB.BBOOOOOOOOOOOOOOII...... CCCCCCCCCC.CCAAAAAAAAAA.AARR...RRRRR...TTTTT...TTIII..
//.PPPPP.......PLLLLLLLLLLLAAAA...AAAAA..YYYYY....YYBBBBBBBBBB..BOOOOOOOOOO.OOOII....... CCCCCCCCC.CCCAA....AAAAAAARR...RRRRR...TTTTT...TTIII..
//.PPPPP.......PLLLLLLLLLLLAAA.....AAAAY.YYYYY....YYBBBBBBBBB....OOOOOOOOO..OOOII........CCCCCCCC..CCCAA....AAAAAAARR...RRRRR...TTTTT...TTIII..
//.................................................................OOOOO..................CCCCCC...............................................
//.............................................................................................................................................
var fs = require('fs'),
    crypto = require('crypto'),
    algorithm = 'aes-256-ctr'

// commandLineArgs[0] is 'node' and commandLineArgs[1] is 'index.js'
const commandLineArgs = process.argv,
      method = commandLineArgs[2],
      encryption_password = commandLineArgs[3],
      text_to_encrypt_or_decrypt = commandLineArgs[4]

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,encryption_password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,encryption_password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
if (method === 'encrypt') {
    // console.log('encrypted seed phrase', encrypt("this is my twelve word long seed phrase that protects my coins"))
    console.log('\n1. Encrypted seed phrase:\n', encrypt(text_to_encrypt_or_decrypt))
    console.log('\n2. Store your ^^ encrypted seed phrase somewhere safe and remember the encryption_password you used to produce it\n')
}
if (method === 'decrypt') {
    // const warning = 'Are you sure no one is watching? Your seed phrase is about to get displayed on your screen. Press 1 to continue'
    console.log('\n1. Decrypted seed phrase:\n', decrypt(text_to_encrypt_or_decrypt));
}

// Deprecated - on second thought, not good idea to put plain text password in a file. Its an attack vector
// const file_with_text_to_encrypt = commandLineArgs[3]
// const text = fs.readFile(file_with_text_to_encrypt, 'utf8', (err, text_to_encrypt) => {
//     if (err) throw err;
//     console.log('text from file is:', text_to_encrypt);
//   });

// Other
// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
//   });