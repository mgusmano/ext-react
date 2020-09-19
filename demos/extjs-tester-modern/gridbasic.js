Ext.onReady(function() {
  var data = [
    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
  ]
  var o = {
    xtype: 'grid',
    title: 'the grid title',
    plugins: [{
          type: 'cellediting',
          triggerEvent: 'tap',
      }],
    data: data,
    columns: [
      {
        text: "name",
        dataIndex: "name"
      },
      {
        text: "dateField",
        dataIndex: "dateField",
        flex: 1,
        editable: true,
        editor: {
            xtype: 'datefield',
            allowBlank: true,
            format: 'm/d/Y'
        }
      }
    ],
    renderTo: document.getElementById('route')
  }
  var grid = Ext.create(o)
})