"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
async function startServer() {
    const app = await (0, app_1.buildApp)();
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
        console.log(`Server listening on ${app.server.address()}`);
    }
    catch (err) {
        app.log.error(err);
    }
}
startServer();
//# sourceMappingURL=server.js.map