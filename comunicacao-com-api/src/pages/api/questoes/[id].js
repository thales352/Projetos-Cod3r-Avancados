export default function apiQuestao(req, res){
    if (req.method !== "GET") return post(req, res)
    const usuarios = []
    return get(req,res)
}

function post(req, res){
    usuarios.push(JSON.parse(req.body))
    res.status(200).send()
}
function get(req, res){
    res.status(200).json(usuarios)
}