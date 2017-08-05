import AV from 'leancloud-storage'

var APP_ID = 'sLXuddPNQXQva9WI4rUTadNI-gzGzoHsz';
var APP_KEY = 'd1abvnyhczW83URwerCRa8vk';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

export default AV

export function signUp(username,password,successFn,errorFn){
  var user = new AV.User()
  user.setUsername(username)
  user.setPassword(password)
  user.signUp().then(function(loginedUser){
    let user = getUserFromAVUser(loginedUser)
    successFn.call(null,user)
  },function (error){
    errorFn.call(null,error)
  })
  return undefined
}

function getUserFromAVUser(AVUser){
  return {
    id: AVUser.id,
    ...AVUser.attributes
  }
}