const { Router } = require('express')
const { getAllTransfers, createTransfers, updateTransfers } = require('../service/transferService.js')
const { authorizationMiddlewareAll, authorizationMiddlewareApprover } = require("../middleware/authorization-middleware")


const transferRouter = Router()

transferRouter.get('/', authorizationMiddlewareAll, getAllTransfers)
transferRouter.post('/transfer', authorizationMiddlewareAll, createTransfers)
transferRouter.patch('/transfer/:id', authorizationMiddlewareApprover, updateTransfers)
transfersRouter.delete("/:id", deleteTransfer);

module.exports = transferRouter