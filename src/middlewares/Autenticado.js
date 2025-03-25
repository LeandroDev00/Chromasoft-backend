import jwt  from "jsonwebtoken";

export function Autenticado(req, res, next){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({message: "Token não encontrado"});
    }

    const [, token] = authToken.split(' ');
    try {
        const sub = jwt.verify(token, process.env.JWT_SECRET);
        req.email = sub;
        return next();
    } catch (err) {
        return res.status(401).end()
    }
}