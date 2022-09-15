let idToken = '22ziso@3332' ;
export const token = async (req, res, next) => {
  let tokenId = req.query.id ;
  if(tokenId == idToken){
    next();
  }else{
    res.status(404).json({
      mesage : 'Token not found'
    })
  }
 };