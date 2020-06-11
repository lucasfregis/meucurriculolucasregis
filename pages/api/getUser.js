import getUser from '../../utils/getUser'

const apiGetUSer = async( req, res ) => {
    const data = await getUser('tuliofaria')
    res.send(data)
}


export default apiGetUSer