const webpackConfig = require('../webpack.config.js')
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        exclude: [
            'node_modules'
        ],
        frameworks: [
            'chai', 'mocha'
        ],
        files: ['./specs/**/*.spec.js'],
        preprocessors: {
            './specs/**/*.spec.js': ['webpack', 'sourcemap']
        },
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-spec-reporter',
            'karma-coverage'
        ],
        reporters: ['spec', 'coverage'],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        }
    })
}
