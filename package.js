Package.describe({
  name: 'usercycle:events',
  summary: 'Usercycle Events',
  version: '0.0.5',
  git: "https://github.com/usercycle/meteor-events"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
    'coffeescript',
    'underscore',
    'tracker',
    'iron:router@1.0.0',
    'percolatestudio:segment.io@1.1.0_1'
    ], ['client', 'server']);

  api.addFiles([
    'init.coffee',
  ], ['client', 'server']);

  api.imply('percolatestudio:segment.io');
});
