import { Router } from "express"
import { MessagesController } from "./controllers/MessagesController"
import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"


/**
 * Tipos de parametros
 * 
 * Route Params -> Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params -> Filtros e buscas
 * http://localhost:3333/settings/1?search=algo
 * 
 * Body Params -> Informacao no body do request geralente usado para inserir
 */

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings", settingsController.create)
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }