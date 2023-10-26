# Utilisation

1. Renseigner les URLs dans navigates/index.js, vos filtres dans requests-listener.py et USERNAME et PASSWORD dans le navigate/.env :
2. Démarrer le MITM :
`mitmdump -s requests-listener.py`
3. Démarrer le script de navigation :
`node index.js`