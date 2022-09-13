module.exports = {
  primaryKey: 'username',
  record:{
    fields:[{
      name: 'username',
      type: 'string',
      sqltype: 'nvarchar(100)',
      postgresqltype: 'text',
      nullable: false
    },{
      name: 'password',
      type: 'string',
      sqltype: 'nvarchar(100)',
      postgresqltype: 'text',
      nullable: false
    },{
      name: 'salt',
      type: 'string',
      sqltype: 'nvarchar(500)',
      postgresqltype: 'text',
      nullable: false
    },{
      name: 'role',
      type: 'string',
      sqltype: 'varchar(100)',
      postgresqltype: 'text',
      nullable: false
    }]
  }
};
