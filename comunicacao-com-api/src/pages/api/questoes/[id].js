const usuarios = []

export default function apiQuestao(req, res){
    if (req.method !== "GET") return post(req, res)
    return get(req,res)
}

function post(req, res){
    let user = JSON.parse(req.body)
    usuarios.push(user)
    res.status(200).send()
}
function get(req, res){
    res.status(200).json(usuarios)
}