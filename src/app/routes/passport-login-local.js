module.exports = (app, passport) => {

	// index routes
	app.post("/login", function (req, res, next) {
		passport.authenticate('local-login', function (err, user, info) {
				if (err) {
					return next(err)
				}
				if (!user) {
					res.status(401);
					return res.json({message: info.message})
				}
				res.status(200);
				res.json(user);
	
				// res.redirect("http://localhost:3000/mapa.html");
			}
		)(req, res, next);
	});
	
	app.post("/signup", function (req, res, next) {
		passport.authenticate('local-signup',  function (err, user, info) {
				if (err) {
					return next(err)
				}
				if (!user) {
					res.status(401);
					return res.json({message: info.message})
				}
				res.status(200);
				res.json(user);
	
				// res.redirect("http://localhost:3000/mapa.html");
			}
		)(req, res, next);
	});
	
/*
	app.post('/signup', 
		passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	}));
*/

	//profile view
	app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});

	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
