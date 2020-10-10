module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb", "plugin:@typescript-eslint/recommended"],
    // "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    // "parser": "babel-eslint",
    "plugins": [
        "react",
    ],
    "settings": {
        "import/resolver": {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            webpack: {
                config: "./config/webpack.config.js",
            },
        },
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            extensions: [".jsx", ".tsx"]
        }],
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/button-has-type": "off",
        "import/no-extraneous-dependencies": ["error", {
            "devDependencies": true
        }],
        "import/prefer-default-export": "off",
        "comma-dangle": [
            "error",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "ignore"
            }
        ],
        // "no-unused-vars": "off",
        "func-names": "off",
        "prefer-rest-params": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        // "@typescript-eslint/no-unused-vars": "off"
        "react/destructuring-assignment": "off",
        "import/extensions": "off",
        "max-len": ["warn", 120],
        "prefer-arrow-callback": "off",
        "max-classes-per-file": "off"
    }
};