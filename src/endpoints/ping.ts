import { Request, Response } from "express"

export const ping = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      res.status(200).send({ message: "Pong!" })
    } catch (erro) {
      res.status(errorCode).send({ message: erro.message })
    }
}