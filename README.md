# playboi-carti
Utility for encrypting a seed phrase using a password you store in your head

### HOW IT WORKS FROM COMMAND-LINE
**~/stuff/playboi-carti** node index.js encrypt passwordInMyHead 24-word-seed-phrase-separated-by-dashes-that-protects-your-crypto-currencies

1. Encrypted seed phrase:
 1b47ab3cc2e08d6e07c0760cdd72e1d618613c73f79cbb9197518fd6b7b3e4477b823396849948fc5c28b40b2a2dffa4931ef3f08ad044821021b69393666f4c0569ebc61f912db5b486bbba

2. Store your ^^ encrypted seed phrase somewhere safe and remember the encryption_password you used to produce it

**~/stuff/playboi-carti** node index.js decrypt passwordInMyHead 1b47ab3cc2e08d6e07c0760cdd72e1d618613c73f79cbb9197518fd6b7b3e4477b823396849948fc5c28b40b2a2dffa4931ef3f08ad044821021b69393666f4c0569ebc61f912db5b486bbba

1. Decrypted seed phrase:
 24-word-seed-phrase-separated-by-dashes-that-protects-your-crypto-currencies
