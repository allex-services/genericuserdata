module.exports = {
  primaryKey: 'username',
  record:{
    fields:[{
      name: 'username',
      type: 'string'
    },{
      name: 'password',
      type: 'string'
    },{
      name: 'salt',
      type: 'string'
    },{
      name: 'role',
      type: 'string'
    }]
  }
};
