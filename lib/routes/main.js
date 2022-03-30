"use strict";


module.exports = function(app, middleware, controllers) {
	require('./api')(app, middleware, controllers);

	app.get('/rpg/character', middleware.buildHeader, middleware.openfantasy.buildHeader, controllers.character.render);
	app.get('/api/rpg/character', controllers.character.render);

	app.get('/rpg/temple', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.temple.render);
	app.get('/api/rpg/temple', middleware.ensureLoggedIn, controllers.temple.render);

	app.get('/rpg/shops/:mode?/:mid?', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.shops.render);
	app.get('/api/rpg/shops/:mode?/:mid?', middleware.ensureLoggedIn, controllers.shops.render);

	app.get('/rpg/battle', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.battle.render);
	app.get('/api/rpg/battle', middleware.ensureLoggedIn, controllers.battle.render);

	app.get('/rpg/equipment', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.equipment.render);
	app.get('/api/rpg/equipment', middleware.ensureLoggedIn, controllers.equipment.render);

	app.get('/rpg/inventory', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.inventory.render);
	app.get('/api/rpg/inventory', middleware.ensureLoggedIn, controllers.inventory.render);

	app.get('/rpg/skills', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.skills.render);
	app.get('/api/rpg/skills', middleware.ensureLoggedIn, controllers.skills.render);

	app.get('/rpg/vault', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.vault.render);
	app.get('/api/rpg/vault', middleware.ensureLoggedIn, controllers.vault.render);

	app.get('/rpg/stock', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.stockmarket.render);
	app.get('/api/rpg/stock', middleware.ensureLoggedIn, controllers.stockmarket.render);

	app.get('/rpg/forge', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.forge.render);
	app.get('/api/rpg/forge', middleware.ensureLoggedIn, controllers.forge.render);

	app.get('/rpg/mining', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.mining.render);
	app.get('/api/rpg/mining', middleware.ensureLoggedIn, controllers.mining.render);

	app.get('/rpg/enchant', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.enchant.render);
	app.get('/api/rpg/enchant', middleware.ensureLoggedIn, controllers.enchant.render);

	app.get('/rpg/warehouse', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.warehouse.render);
	app.get('/api/rpg/warehouse', middleware.ensureLoggedIn, controllers.warehouse.render);

	app.get('/rpg/training', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.training.render);
	app.get('/api/rpg/training', middleware.ensureLoggedIn, controllers.training.render);

	app.get('/rpg/courthouse', middleware.buildHeader, middleware.openfantasy.buildHeader, middleware.ensureLoggedIn, controllers.courthouse.render);
	app.get('/api/rpg/courthouse', middleware.ensureLoggedIn, controllers.courthouse.render);
};
