
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
	    "jsx-a11y",
	    "import"
    ],
    "rules": {
        // 解除import限制
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        // 取消 jsx 格式限制
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // 取消未使用變數限制
        'no-unused-vars': [1],
        // 取消對console檢查
        "no-console": "off",
        // 取消對型別的檢查
        "react/prop-types": [0],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    // 路徑需設定和webpack.config resolve.alias一樣
                    ['@', './src'],
                ],
                extensions: ['.js', '.jsx']
            }
        }
    }
};