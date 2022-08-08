const app = require('./app');
const { sequelize } = require('./models/index')
const { port } = require('./config/systemConfig')
let server;
try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
        server = app.listen(port, () => {
            console.log(`Listening to port ${port}`);
        });
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    console.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
        server.close();
    }
});