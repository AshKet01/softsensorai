const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file');

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
)

const transport = new DailyRotateFile({
    filename: './logs/softsensorai-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    prepend: true,
})

transport.on('rotate', function (oldFilename, newFilename) {

})

const logger = winston.createLogger({
    format: logFormat,
    transports: [transport]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({ format: winston.format.simple() }))
}

module.exports = logger;