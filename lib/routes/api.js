"use strict";

module.exports = function (app, middleware, controllers) {

    app.post('/api/openfantasy/character/create', middleware.ensureLoggedIn, controllers.character.create);
    app.post('/api/openfantasy/character/delete', middleware.ensureLoggedIn, controllers.character.delete);
    app.post('/api/openfantasy/shops/buy', middleware.ensureLoggedIn, controllers.shops.buy);
    app.post('/api/openfantasy/inventory/delete', middleware.ensureLoggedIn, controllers.inventory.delete);
    app.post('/api/openfantasy/equipment/equip', middleware.ensureLoggedIn, controllers.equipment.equip);
    app.post('/api/openfantasy/battle/initialize', middleware.ensureLoggedIn, controllers.battle.initialize);
    app.post('/api/openfantasy/battle/move', middleware.ensureLoggedIn, controllers.battle.move);


    // temp debug routes
    app.get('/api/openfantasy/debug/cash/add', middleware.ensureLoggedIn, function (req, res, next) {
        require('../nodebb').user.incrementUserFieldBy(req.user.uid, 'currency', '1000', function (err) {
            res.json(err || {});
        });
    });
};
