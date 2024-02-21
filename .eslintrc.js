module.exports = {
    ignorePatterns: ['*.eslintsrc.js'],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // Exemples de règles couramment utilisées :
        "semi": ["error", "never"],
        // Utiliser des guillemets simples pour les chaînes de caractères
        "quotes": ["error", "double"]
    }
};
