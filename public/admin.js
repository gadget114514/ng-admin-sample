var myApp = angular.module('myApp', ['ng-admin']);
    myApp.config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
        var nga = NgAdminConfigurationProvider;
        // create an admin application
        var admin = nga.application('My First Admin');
//	admin.baseApiUrl('http://localhost:3000/');
	var post = nga.entity('posts').label('Discussions');
	post.listView()
	    .fields([
		nga.field('title'),
		nga.field('teaser')
	    ]);
	admin.addEntity(post);

        nga.configure(admin);
    }]);
