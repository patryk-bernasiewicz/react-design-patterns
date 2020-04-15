module.exports ={
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        "browser": true
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "quotes": [2, "single"],
        "strict": [2, "never"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2
    },
    settings: {
        "react": {
            "version": "detect"
        }
    }
};
